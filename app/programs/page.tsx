import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
import { ProgramCard } from "@/components/programs/program-card";
import { programsOverview, programs, communityDrivesNote } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Karwan-e-Eesaar Welfare Organization's programs: emergency relief and monthly rations, education, healthcare, livelihood support and winter relief.",
};

export default function ProgramsPage() {
  const [first, second, ...rest] = programs;

  return (
    <>
      <PageHero title={programsOverview.title} description={programsOverview.subtitle} />

      <SectionWrapper className="py-12 md:py-16">
        {/* Five cards balanced as two wide over three narrow, so no row has a gap */}
        <ul className="mx-auto grid max-w-6xl gap-5 md:grid-cols-6">
          {[first, second].map((program) => (
            <li key={program.slug} className="md:col-span-3">
              <ProgramCard program={program} size="large" />
            </li>
          ))}
          {rest.map((program) => (
            <li key={program.slug} className="md:col-span-2">
              <ProgramCard program={program} />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center text-foreground/75">
          {communityDrivesNote}
        </p>
      </SectionWrapper>

      <DonateBand />
    </>
  );
}
