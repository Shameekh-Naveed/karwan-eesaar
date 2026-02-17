import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { emergencyRelief } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Emergency Relief & Disaster Response",
  description:
    "Eesaar Foundation's emergency relief programs: flood relief, monthly ration drives, Qurbani distribution, and emergency patient support in Pakistan.",
};

export default function EmergencyReliefPage() {
  return (
    <>
      <PageHero
        title={emergencyRelief.title}
        description={emergencyRelief.description}
      />
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: "Emergency Relief" },
        ]}
      />
      <ProgramDetail
        sections={emergencyRelief.sections}
        ctaLabel={emergencyRelief.ctaLabel}
      />
    </>
  );
}
