import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import {
  programsOverview,
  programCategories,
  communityDrivesNote,
} from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Karwan-e-Eesaar Welfare Organization's programs: emergency relief and monthly rations, education, healthcare, livelihood support and winter relief.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero title={programsOverview.title} description={programsOverview.subtitle} />

      <SectionWrapper className="py-12 md:py-16">
        <ul className="mx-auto max-w-3xl divide-y divide-border border-y">
          {programCategories.map((program) => (
            <li key={program.title}>
              <Link
                href={program.href}
                className="group flex items-center gap-5 py-6 transition-colors hover:bg-muted/60 sm:px-4"
              >
                <IconBox icon={program.icon as IconName} size="lg" />
                <span className="flex-1">
                  <span className="block text-xl font-bold text-foreground">
                    {program.title}
                  </span>
                  <span className="mt-1 block text-lg text-foreground/75">
                    {program.description}
                  </span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-secondary transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-foreground/75">
          {communityDrivesNote}
        </p>
      </SectionWrapper>

      <DonateBand />
    </>
  );
}
