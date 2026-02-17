import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import { programsOverview, programCategories, communityDrives } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Explore Eesaar Foundation's programs: emergency relief, education, healthcare, livelihood support, and winter relief campaigns across Pakistan.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title={programsOverview.title}
        description={programsOverview.subtitle}
      />
      <Breadcrumbs items={[{ label: "Programs" }]} />

      <SectionWrapper>
        <SectionHeading
          title="Our Program Areas"
          subtitle="Click on any program to learn more about our initiatives and how you can contribute."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programCategories.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group"
            >
              <Card className="h-full border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10">
                <CardContent className="p-7">
                  <div className="mb-5">
                    <IconBox
                      icon={program.icon as IconName}
                      size="lg"
                      className="transition-colors group-hover:bg-secondary/15 group-hover:text-secondary"
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-secondary/10 text-secondary"
                  >
                    {program.stats}
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary transition-all group-hover:gap-2">
                    Learn More <ArrowRight className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Community Drives Section */}
      <SectionWrapper variant="alt">
        <SectionHeading
          title="Community Support Drives"
          subtitle="Beyond our core programs, we organize community-level initiatives that bring people together."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {communityDrives.map((drive) => (
            <Card key={drive.title} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {drive.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {drive.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
