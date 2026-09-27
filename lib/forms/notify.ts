import type { FormDef } from "@/lib/forms/definitions";

export class NotifierNotConfiguredError extends Error {
  constructor() {
    super("No form notification channel is configured");
  }
}

/** Plain-text rendering of a submission, reusable by any channel (email body, chat message). */
export function formatSubmission(form: FormDef, values: Record<string, string>) {
  const lines = form.fields
    .filter((field) => values[field.name])
    .map((field) => `${field.label.replace(/ \(optional\)$/, "")}: ${values[field.name]}`);
  return `New ${form.title}\n\n${lines.join("\n")}`;
}

/**
 * Delivers a validated submission to the team.
 *
 * The delivery service is still to be chosen, so this is the single place to
 * wire it in. Today it supports a generic JSON webhook (FORM_WEBHOOK_URL),
 * which covers Google Apps Script → Sheet, Slack, Discord, Make or Zapier.
 */
export async function notify(form: FormDef, values: Record<string, string>) {
  const webhookUrl = process.env.FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[forms] ${formatSubmission(form, values)}`);
      return;
    }
    throw new NotifierNotConfiguredError();
  }

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
}
