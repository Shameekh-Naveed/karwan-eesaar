import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { photos } from "@/lib/content/photos";
import { education } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Education & Skill Development",
  description:
    "Karwan-e-Eesaar Welfare Organization's education programs: IT classes for Huffaz, Taekwondo training, and school uniform distribution drives in Pakistan.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        title={education.title}
        description={education.description}
      />
      <ProgramDetail
        sections={education.sections}
        ctaLabel={education.ctaLabel}
        photo={photos.education}
      />
    </>
  );
}
