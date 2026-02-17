import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { winterRelief } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Winter Relief Programs",
  description:
    "Eesaar Foundation's winter relief: blankets, warm clothing, and essentials for SOS children, old age homes, and vulnerable families in Pakistan.",
};

export default function WinterReliefPage() {
  return (
    <>
      <PageHero
        title={winterRelief.title}
        description={winterRelief.description}
      />
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: "Winter Relief" },
        ]}
      />
      <ProgramDetail
        sections={winterRelief.sections}
        ctaLabel={winterRelief.ctaLabel}
      />
    </>
  );
}
