import { NextResponse } from "next/server";
import {
  forms,
  HONEYPOT_FIELD,
  isFormId,
  validateSubmission,
} from "@/lib/forms/definitions";
import { notify, NotifierNotConfiguredError } from "@/lib/forms/notify";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ form: string }> }
) {
  const { form: formId } = await params;
  if (!isFormId(formId)) {
    return NextResponse.json({ error: "Unknown form" }, { status: 404 });
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Pretend success so bots don't learn to skip the trap
  if (typeof body[HONEYPOT_FIELD] === "string" && body[HONEYPOT_FIELD]) {
    return NextResponse.json({ ok: true });
  }

  const form = forms[formId];
  const result = validateSubmission(form, body);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  try {
    await notify(form, result.values);
  } catch (error) {
    console.error(`[forms] failed to deliver ${formId} submission`, error);
    const status = error instanceof NotifierNotConfiguredError ? 503 : 502;
    return NextResponse.json({ error: "Could not deliver" }, { status });
  }

  return NextResponse.json({ ok: true });
}
