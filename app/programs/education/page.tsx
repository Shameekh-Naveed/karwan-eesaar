import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { ProgramDetail } from "@/components/programs/program-detail";
import { education } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Education & Skill Development",
  description:
    "Eesaar Foundation's education programs: IT classes for Huffaz, Taekwondo training, and school uniform distribution drives in Pakistan.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        title={education.title}
        description={education.description}
      />
      <Breadcrumbs
        items={[
          { label: "Programs", href: "/programs" },
          { label: "Education & Skills" },
        ]}
      />
      <ProgramDetail
        sections={education.sections}
        ctaLabel={education.ctaLabel}
      />
    </>
  );
}
