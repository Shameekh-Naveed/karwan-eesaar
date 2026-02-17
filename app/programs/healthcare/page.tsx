import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { healthcare } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Healthcare Initiatives",
  description:
    "Eesaar Foundation's healthcare programs: free eye camps, blood donation drives, and emergency ward support for communities in Pakistan.",
};

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        title={healthcare.title}
        description={healthcare.description}
      />
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: "Healthcare" },
        ]}
      />
      <ProgramDetail
        sections={healthcare.sections}
        ctaLabel={healthcare.ctaLabel}
      />
    </>
  );
}
