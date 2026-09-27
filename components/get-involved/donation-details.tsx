"use client";

import { useState } from "react";
import { Building2, Check, Copy, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/whatsapp-float";
import { facts, formatPkr, pendingFacts } from "@/lib/content/facts";
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
      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-primary-foreground/25 px-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

interface Line {
  label: string;
  value: string;
  copyValue: string;
}

export function DonationDetails() {
  const { easypaisa, bank, holderNote } = siteConfig.donation;
  const cost = pendingFacts.rationPackCostPkr;

  const methods: { icon: typeof Smartphone; name: string; lines: Line[] }[] = [
    {
      icon: Smartphone,
      name: "Easypaisa",
      lines: [
        {
          label: `Account name: ${easypaisa.accountName}`,
          value: easypaisa.number,
          copyValue: easypaisa.number.replace(/-/g, ""),
        },
      ],
    },
    {
      icon: Building2,
      name: bank.bankName,
      lines: [
        {
          label: `Account title: ${bank.accountTitle}`,
          value: bank.accountNumber,
          copyValue: bank.accountNumber,
        },
        ...(bank.iban
          ? [{ label: "IBAN (for transfers from other banks)", value: bank.iban, copyValue: bank.iban.replace(/\s/g, "") }]
          : []),
      ],
    },
  ];

  return (
    <div className="bg-navy-glow rounded-3xl p-5 text-primary-foreground sm:p-10">
      <p className="mb-6 text-center text-xl font-bold sm:text-2xl">
        {cost
          ? `${formatPkr(cost)} = one family's rations for a month`
          : `Your donation feeds ${facts.rationFamiliesMonthly}+ families every month`}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {methods.map((method) => (
          <div key={method.name} className="rounded-2xl border border-primary-foreground/15 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sand">
              <method.icon className="size-4" />
              {method.name}
            </p>
            {method.lines.map((line) => (
              <div key={line.value} className="mt-4">
                <p className="select-all break-all font-heading text-2xl font-bold tabular-nums tracking-wide sm:text-[1.75rem]">
                  {line.value}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">{line.label}</p>
                <div className="mt-3">
                  <CopyButton value={line.copyValue} label={`${method.name} ${line.label.split(":")[0].toLowerCase()}`} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-sm text-primary-foreground/70">{holderNote}</p>

      <div className="mt-8 flex flex-col items-center gap-4 border-t border-primary-foreground/15 pt-8 text-center">
        <p className="text-primary-foreground/85">
          Sent a donation? Tell us on WhatsApp and we&apos;ll confirm we received it.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-xl border-primary-foreground/40 bg-transparent px-6 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <a href={getWhatsAppLink("donate")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" />
            Confirm on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
