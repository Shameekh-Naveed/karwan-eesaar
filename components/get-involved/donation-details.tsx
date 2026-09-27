"use client";

import { useState } from "react";
import { Building2, Check, Copy, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/whatsapp-float";
import { siteConfig, getWhatsAppLink } from "@/lib/site-config";

function CopyButton({ value, label }: { value: string; label: string }) {
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
      className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-xl border border-primary-foreground/25 px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="size-4 text-gold" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export function DonationDetails() {
  const { easypaisa, bank } = siteConfig.donation;

  const methods = [
    {
      icon: Smartphone,
      name: "Easypaisa",
      value: easypaisa.number,
      copyValue: easypaisa.number.replace(/-/g, ""),
      meta: `Account name: ${easypaisa.accountName}`,
    },
    {
      icon: Building2,
      name: bank.bankName,
      value: bank.accountNumber,
      copyValue: bank.accountNumber,
      meta: `Account title: ${bank.accountTitle}`,
    },
  ];

  return (
    <div className="bg-navy-glow rounded-3xl p-5 text-primary-foreground sm:p-10">
      <div className="grid gap-4 md:grid-cols-2">
        {methods.map((method) => (
          <div
            key={method.name}
            className="rounded-2xl border border-primary-foreground/15 p-5"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
              <method.icon className="size-4" />
              {method.name}
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="select-all font-heading text-2xl font-bold tabular-nums tracking-wide sm:text-3xl">
                {method.value}
              </p>
              <CopyButton value={method.copyValue} label={`${method.name} number`} />
            </div>
            <p className="mt-2 text-sm text-primary-foreground/70">{method.meta}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <p className="text-primary-foreground/80">
          Sent a donation? Tell us on WhatsApp and we&apos;ll confirm we received it.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 rounded-xl bg-gold px-8 text-base font-bold text-gold-foreground hover:bg-gold/90"
        >
          <a href={getWhatsAppLink("donate")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" />
            I&apos;ve donated
          </a>
        </Button>
      </div>
    </div>
  );
}
