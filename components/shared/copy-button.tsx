"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/** Copies a value (an account number) and says so for two seconds. */
export function CopyButton({
  value,
  label,
  className,
}: {
  value: string;
  /** What is being copied, for screen readers: "Easypaisa number" */
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (old browsers, insecure context); the number stays selectable
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-lg border border-primary-foreground/25 px-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10",
        className
      )}
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
