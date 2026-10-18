import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/shared/copy-button";
import { WhatsAppIcon } from "@/components/layout/whatsapp-float";
import { giveNow } from "@/lib/content/home";
import { getWhatsAppLink, siteConfig } from "@/lib/site-config";

/**
 * The account numbers, right under the hero, so a visitor can give without
 * leaving the home page. Overlaps the sand swoosh like a card laid on the page.
 */
export function GiveNow() {
  const { easypaisa, bank, holderNote } = siteConfig.donation;
  const accounts = [
    { name: "Easypaisa", number: easypaisa.number, copy: easypaisa.number.replace(/-/g, "") },
    { name: bank.bankName, number: bank.accountNumber, copy: bank.accountNumber },
  ];

  return (
    <section aria-labelledby="give-now" className="relative z-10 -mt-20 pb-4 md:-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary p-5 text-primary-foreground shadow-xl shadow-primary/20 sm:p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
            <div className="min-w-0">
              <h2 id="give-now" className="font-heading text-2xl font-bold md:text-3xl">
                {giveNow.title}
              </h2>
              <p className="mt-2 text-primary-foreground/80">{giveNow.body}</p>

              <dl className="mt-6 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
                {accounts.map((account) => (
                  <div key={account.name} className="flex items-center justify-between gap-3 py-4">
                    {/* min-w-0 lets the long account number shrink instead of pushing the button off-screen */}
                    <div className="min-w-0">
                      <dt className="text-sm text-primary-foreground/70">{account.name}</dt>
                      <dd className="mt-0.5 select-all break-all font-heading text-xl font-bold tabular-nums tracking-wide sm:text-[1.75rem]">
                        {account.number}
                      </dd>
                    </div>
                    <CopyButton value={account.copy} label={`${account.name} number`} className="shrink-0" />
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-primary-foreground/70">{holderNote}</p>
            </div>

            <div className="flex flex-col justify-center gap-5 md:border-l md:border-primary-foreground/15 md:pl-12">
              <p className="text-lg leading-relaxed text-primary-foreground/90">{giveNow.zakatNote}</p>
              <Button
                asChild
                size="lg"
                variant="donate"
                className="h-13 w-full rounded-xl text-base"
              >
                <a href={getWhatsAppLink("donate")} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  {giveNow.whatsappLabel}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
