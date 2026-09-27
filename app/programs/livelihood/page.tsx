import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { photos } from "@/lib/content/photos";
import { livelihood } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Livelihood & Women Empowerment",
  description:
    "Karwan-e-Eesaar Welfare Organization's livelihood programs: sewing machine support, skills training, and women empowerment initiatives in Pakistan.",
};

export default function LivelihoodPage() {
  return (
    <>
      <PageHero
        title={livelihood.title}
        description={livelihood.description}
      />
      <ProgramDetail
        sections={livelihood.sections}
        ctaLabel={livelihood.ctaLabel}
        photo={photos.livelihood}
      />
    </>
  );
}
