"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WhatsAppIcon } from "@/components/layout/whatsapp-float";
import {
  forms,
  HONEYPOT_FIELD,
  validateSubmission,
  type FieldDef,
  type FormId,
} from "@/lib/forms/definitions";
import { getWhatsAppLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass = "h-11 rounded-xl bg-card px-3.5 text-base md:text-base placeholder:text-muted-foreground/60";

function Field({ field, error }: { field: FieldDef; error?: string }) {
  const id = `field-${field.name}`;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [field.hint && hintId, error && errorId].filter(Boolean).join(" ");
  const common = {
    id,
    name: field.name,
    required: field.required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy || undefined,
  };

  let control: React.ReactNode;
  if (field.type === "textarea") {
    control = (
      <Textarea
        {...common}
        rows={4}
        placeholder={field.placeholder}
        className="min-h-28 rounded-xl bg-card px-3.5 py-2.5 text-base md:text-base"
      />
    );
  } else if (field.type === "select") {
    control = (
      <select
        {...common}
        defaultValue=""
        className={cn(
          fieldClass,
          "w-full border border-input outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
        )}
      >
        <option value="" disabled>
          Choose one
        </option>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    control = (
      <Input
        {...common}
        type={field.type}
        inputMode={field.type === "tel" ? "tel" : field.type === "number" ? "numeric" : undefined}
        min={field.min}
        max={field.max}
        placeholder={field.placeholder}
        autoComplete={field.autoComplete}
        className={fieldClass}
      />
    );
  }

  return (
    <div className={cn("space-y-1.5", field.wide && "sm:col-span-2")}>
      <Label htmlFor={id} className="text-sm font-semibold">
        {field.label}
      </Label>
      {control}
      {field.hint && (
        <p id={hintId} className="text-sm text-muted-foreground">
          {field.hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function LeadForm({ formId, className }: { formId: FormId; className?: string }) {
  const form = forms[formId];
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function focusFirstError(fieldErrors: Record<string, string>) {
    const first = form.fields.find((f) => fieldErrors[f.name]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const result = validateSubmission(form, data);
    if (!result.ok) {
      setErrors(result.errors);
      focusFirstError(result.errors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch(`/api/forms/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.values, [HONEYPOT_FIELD]: data[HONEYPOT_FIELD] ?? "" }),
      });
      if (res.status === 422) {
        const body = await res.json();
        setErrors(body.errors ?? {});
        focusFirstError(body.errors ?? {});
        setStatus("idle");
        return;
      }
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={cn("rounded-2xl border bg-card p-8 text-center", className)}
      >
        <CheckCircle2 className="mx-auto mb-4 size-12 text-secondary" />
        <h3 className="text-xl font-bold">{form.successTitle}</h3>
        <p className="mt-2 text-muted-foreground">{form.successMessage}</p>
        <Button
          variant="outline"
          className="mt-6 h-11 rounded-xl"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className={cn("rounded-2xl border bg-card p-5 sm:p-8", className)}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {form.fields.map((field) => (
          <Field key={field.name} field={field} error={errors[field.name]} />
        ))}
      </div>

      {/* Honeypot: hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-5 rounded-xl bg-destructive/10 p-4 text-sm">
          <p className="font-semibold text-destructive">
            Sorry, that didn&apos;t go through.
          </p>
          <p className="mt-1 text-foreground/80">
            Please try again, or message us directly on{" "}
            <a
              href={getWhatsAppLink(formId === "contact" ? "general" : "volunteer")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-secondary underline underline-offset-2"
            >
              <WhatsAppIcon className="size-3.5" />
              WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 h-12 w-full rounded-xl text-base font-bold"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        {status === "submitting" ? "Sending…" : form.submitLabel}
      </Button>
    </form>
  );
}
