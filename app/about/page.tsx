import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { VisionMission } from "@/components/about/vision-mission";
import { OurStory } from "@/components/about/our-story";
import { OurValues } from "@/components/about/our-values";
import { TeamSection } from "@/components/about/team-section";
import { ApproachSection } from "@/components/about/approach-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eesaar Foundation's mission, vision, values, and the dedicated team working to empower communities across Pakistan through compassion and service.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Eesaar Foundation"
        description="Rooted in Islamic principles of compassion and service, we work to empower underprivileged communities across Pakistan."
      />
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <VisionMission />
      <OurStory />
      <OurValues />
      <TeamSection />
      <ApproachSection />
    </>
  );
}
