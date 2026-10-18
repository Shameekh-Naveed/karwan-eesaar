import type { FormDef } from "@/lib/forms/definitions";
import { appendSubmissionToSheet, parseServiceAccount } from "@/lib/forms/google-sheets";

export class NotifierNotConfiguredError extends Error {
  constructor() {
    super("No form notification channel is configured");
  }
}

/** Plain-text rendering of a submission, reusable by any channel (email body, chat message). */
export function formatSubmission(form: FormDef, values: Record<string, string>) {
  const lines = form.fields
    .filter((field) => values[field.name])
    .map((field) => `${cleanLabel(field.label)}: ${values[field.name]}`);
  return `New ${form.title}\n\n${lines.join("\n")}`;
}

function cleanLabel(label: string) {
  return label.replace(/ \(optional\)$/, "");
}

/** Pakistan time, readable in a spreadsheet cell: "18 Oct 2026, 14:05" */
function submittedAt(date = new Date()) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

/**
 * Delivers a validated submission to the team.
 *
 * Channels, first configured one wins:
 * 1. Google Sheet (GOOGLE_SHEETS_ID + GOOGLE_SERVICE_ACCOUNT_JSON): one tab
 *    per form, headers written automatically, a blank "Follow-up" column
 *    for the team to tick off.
 * 2. Generic JSON webhook (FORM_WEBHOOK_URL): Slack, Discord, Make, Zapier.
 */
export async function notify(form: FormDef, values: Record<string, string>) {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const webhookUrl = process.env.FORM_WEBHOOK_URL;

  if (sheetId && serviceAccountJson) {
    await appendSubmissionToSheet({
      spreadsheetId: sheetId,
      account: parseServiceAccount(serviceAccountJson),
      tab: form.title,
      headers: ["Submitted at", ...form.fields.map((field) => cleanLabel(field.label)), "Follow-up"],
      row: [submittedAt(), ...form.fields.map((field) => values[field.name] ?? ""), ""],
    });
    return;
  }

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form: form.id,
        title: form.title,
        submittedAt: new Date().toISOString(),
        values,
        text: formatSubmission(form, values),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      throw new Error(`Form webhook responded ${res.status}`);
    }
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.info(`[forms] ${formatSubmission(form, values)}`);
    return;
  }
  throw new NotifierNotConfiguredError();
}
