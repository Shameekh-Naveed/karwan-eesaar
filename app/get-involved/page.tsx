import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppIcon } from "@/components/layout/whatsapp-float";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { DonationDetails } from "@/components/get-involved/donation-details";
import { LeadForm } from "@/components/forms/lead-form";
import { getWhatsAppLink } from "@/lib/site-config";
import {
  donateSection,
  volunteerSection,
  internshipSection,
  partnerSection,
} from "@/lib/content/get-involved";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate via Easypaisa or Meezan Bank, volunteer, or apply for an internship with Karwan-e-Eesaar Welfare Organization.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        description="Donate, volunteer, or intern. Every bit of help reaches a family."
      />
      <Breadcrumbs items={[{ label: "Get Involved" }]} />

      {/* Donate */}
      <SectionWrapper id="donate" className="scroll-mt-20">
        <SectionHeading
          title={donateSection.title}
          subtitle={donateSection.description}
        />
        <div className="mx-auto max-w-4xl">
          <DonationDetails />
        </div>
      </SectionWrapper>

      {/* Volunteer */}
      <SectionWrapper variant="alt" id="volunteer" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              title={volunteerSection.title}
              subtitle={volunteerSection.description}
              className="mb-8"
            />
            <ul className="divide-y divide-border border-y">
              {volunteerSection.opportunities.map((opp) => (
                <li key={opp.title} className="py-4">
                  <p className="font-semibold text-foreground">{opp.title}</p>
                  <p className="text-sm text-muted-foreground">{opp.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm formId="volunteer" />
        </div>
      </SectionWrapper>

      {/* Internship */}
      <SectionWrapper id="internship" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              title={internshipSection.title}
              subtitle={internshipSection.description}
              className="mb-8"
            />
            <ul className="space-y-3">
              {internshipSection.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm formId="internship" />
        </div>
      </SectionWrapper>

      {/* Partner */}
      <SectionWrapper variant="alt" id="partner" className="scroll-mt-20">
        <SectionHeading
          title={partnerSection.title}
          subtitle={partnerSection.description}
        />
        <dl className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          {partnerSection.types.map((type) => (
            <div key={type.title}>
              <dt className="text-lg font-bold text-foreground">{type.title}</dt>
              <dd className="mt-1 text-muted-foreground">{type.description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="h-12 rounded-xl px-8 text-base font-semibold">
            <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Talk to us on WhatsApp
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
