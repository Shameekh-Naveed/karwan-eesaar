import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { photos } from "@/lib/content/photos";
import { emergencyRelief } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Emergency Relief & Disaster Response",
  description:
    "Karwan-e-Eesaar Welfare Organization's emergency relief programs: flood relief, monthly ration drives, Qurbani distribution, and emergency patient support in Pakistan.",
};

export default function EmergencyReliefPage() {
  return (
    <>
      <PageHero
        title={emergencyRelief.title}
        description={emergencyRelief.description}
      />
      <ProgramDetail
        sections={emergencyRelief.sections}
        ctaLabel={emergencyRelief.ctaLabel}
        photo={photos.emergencyRelief}
      />
    </>
  );
}
