import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { photos } from "@/lib/content/photos";
import { winterRelief } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Winter Relief Programs",
  description:
    "Karwan-e-Eesaar Welfare Organization's winter relief: blankets, warm clothing, and essentials for SOS children, old age homes, and vulnerable families in Pakistan.",
};

export default function WinterReliefPage() {
  return (
    <>
      <PageHero
        title={winterRelief.title}
        description={winterRelief.description}
      />
      <ProgramDetail
        sections={winterRelief.sections}
        ctaLabel={winterRelief.ctaLabel}
        photo={photos.winterRelief}
      />
    </>
  );
}
