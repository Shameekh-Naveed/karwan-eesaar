import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { DonateBand } from "@/components/shared/donate-band";
import { VisionMission } from "@/components/about/vision-mission";
import { OurStory } from "@/components/about/our-story";
import { TimelineSection } from "@/components/about/timeline-section";
import { TeamSection } from "@/components/about/team-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Karwan-e-Eesaar Welfare Organization is based in Mansehra and runs monthly rations, eye camps, IT classes for Huffaz and disaster relief.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" />
      <OurStory />
      <VisionMission />
      <TimelineSection />
      <TeamSection />
      <DonateBand />
    </>
  );
}
