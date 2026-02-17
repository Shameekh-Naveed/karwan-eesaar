import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { livelihood } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Livelihood & Women Empowerment",
  description:
    "Eesaar Foundation's livelihood programs: sewing machine support, skills training, and women empowerment initiatives in Pakistan.",
};

export default function LivelihoodPage() {
  return (
    <>
      <PageHero
        title={livelihood.title}
        description={livelihood.description}
      />
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: "Livelihood & Women Empowerment" },
        ]}
      />
      <ProgramDetail
        sections={livelihood.sections}
        ctaLabel={livelihood.ctaLabel}
      />
    </>
  );
}
