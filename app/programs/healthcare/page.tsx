import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { photos } from "@/lib/content/photos";
import { healthcare } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Healthcare Initiatives",
  description:
    "Karwan-e-Eesaar Welfare Organization's healthcare programs: free eye camps, blood donation drives, and emergency ward support for communities in Pakistan.",
};

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        title={healthcare.title}
        description={healthcare.description}
      />
      <ProgramDetail
        sections={healthcare.sections}
        ctaLabel={healthcare.ctaLabel}
        photo={photos.healthcare}
      />
    </>
  );
}
