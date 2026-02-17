import type { Metadata } from "next";
import {
  Heart,
  ArrowRight,
  CreditCard,
  Smartphone,
  Building2,
  Clock,
  Users,
  Handshake,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { getWhatsAppLink } from "@/lib/site-config";
import {
  donateSection,
  volunteerSection,
  partnerSection,
} from "@/lib/content/get-involved";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Eesaar Foundation — donate, volunteer, or partner with us to make a difference in communities across Pakistan.",
};

const paymentIcons = {
  "Bank Transfer": Building2,
  JazzCash: Smartphone,
  EasyPaisa: CreditCard,
} as const;

const partnerIcons = {
  "Corporate Partnerships": Building2,
  "University Collaborations": GraduationCap,
  "In-Kind Donations": Handshake,
} as const;

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        description="Every act of kindness creates a ripple of change. Whether you donate, volunteer, or partner with us — you make a real difference."
      />
      <Breadcrumbs items={[{ label: "Get Involved" }]} />

      {/* Donate Section */}
      <SectionWrapper id="donate">
        <SectionHeading
          title={donateSection.title}
          subtitle={donateSection.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {donateSection.options.map((option) => (
            <Card
              key={option.title}
              className="border-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Heart className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {option.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-10 rounded-2xl border border-border/50 bg-muted/50 p-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Payment Methods
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {donateSection.paymentMethods.map((method) => {
              const Icon =
                paymentIcons[method.name as keyof typeof paymentIcons] ||
                CreditCard;
              return (
                <div
                  key={method.name}
                  className="flex items-center gap-3 rounded-xl bg-background p-4"
                >
                  <Icon className="size-5 text-secondary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {method.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {donateSection.transparencyNote}
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-secondary px-8 text-base font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            <a
              href={getWhatsAppLink("donate")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now via WhatsApp
              <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>
        </div>
      </SectionWrapper>

      {/* Volunteer Section */}
      <SectionWrapper variant="alt" id="volunteer">
        <SectionHeading
          title={volunteerSection.title}
          subtitle={volunteerSection.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {volunteerSection.opportunities.map((opp) => (
            <Card
              key={opp.title}
              className="border-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {opp.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-secondary/30 text-secondary"
                  >
                    <Clock className="mr-1 size-3" />
                    {opp.commitment}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {opp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl px-8 text-base font-semibold"
          >
            <a
              href={getWhatsAppLink("volunteer")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Users className="mr-1 size-4" />
              Join as Volunteer
            </a>
          </Button>
        </div>
      </SectionWrapper>

      {/* Partner Section */}
      <SectionWrapper id="partner">
        <SectionHeading
          title={partnerSection.title}
          subtitle={partnerSection.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {partnerSection.types.map((type) => {
            const Icon =
              partnerIcons[type.title as keyof typeof partnerIcons] ||
              Handshake;
            return (
              <Card
                key={type.title}
                className="border-0 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-xl px-8 text-base"
          >
            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Handshake className="mr-1 size-4" />
              Discuss Partnership
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
