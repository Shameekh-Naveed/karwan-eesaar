import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  impactOverview,
  fundAllocation,
  impactHighlights,
  successStories,
} from "@/lib/content/impact";

export const metadata: Metadata = {
  title: "Impact & Transparency",
  description:
    "See how Eesaar Foundation uses your donations. Impact reports, success stories, and transparent fund allocation for our Pakistan-based charity programs.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title={impactOverview.title}
        description={impactOverview.description}
      />
      <Breadcrumbs items={[{ label: "Impact & Transparency" }]} />

      {/* Fund Allocation */}
      <SectionWrapper>
        <SectionHeading
          title="How Your Donations Are Used"
          subtitle="We maintain full transparency in how every rupee is allocated."
        />
        <div className="mx-auto max-w-2xl">
          {/* Visual bar */}
          <div className="mb-8 flex h-8 overflow-hidden rounded-full">
            {fundAllocation.map((item) => (
              <div
                key={item.label}
                className={`${item.color} flex items-center justify-center text-xs font-semibold text-white`}
                style={{ width: `${item.percentage}%` }}
              >
                {item.percentage}%
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {fundAllocation.map((item) => (
              <div key={item.label} className="text-center">
                <div
                  className={`mx-auto mb-2 h-3 w-3 rounded-full ${item.color}`}
                />
                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {item.percentage}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Impact Timeline */}
      <SectionWrapper variant="alt">
        <SectionHeading
          title="Impact Timeline"
          subtitle="Key achievements across our years of service."
        />
        <div className="mx-auto max-w-3xl space-y-8">
          {impactHighlights.map((year) => (
            <div key={year.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {year.year.slice(-2)}
                </div>
                <div className="mt-2 h-full w-px bg-border" />
              </div>
              <div className="flex-1 pb-8">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {year.year}
                </h3>
                <ul className="space-y-2">
                  {year.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Success Stories */}
      <SectionWrapper>
        <SectionHeading
          title="Success Stories"
          subtitle="Real stories of lives transformed through your generosity."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {successStories.map((story) => (
            <Card
              key={story.title}
              className="border-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-7">
                <Badge
                  variant="secondary"
                  className="mb-4 bg-secondary/10 text-secondary"
                >
                  {story.program}
                </Badge>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {story.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {story.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
