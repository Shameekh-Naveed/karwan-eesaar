import { HomeHero } from "@/components/home/home-hero";
import { ImpactCounter } from "@/components/home/impact-counter";
import { CorePrograms } from "@/components/home/core-programs";
import { FeaturedStory } from "@/components/home/featured-story";
import { HowYouCanHelp } from "@/components/home/how-you-can-help";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ImpactCounter />
      <CorePrograms />
      <FeaturedStory />
      <HowYouCanHelp />
    </>
  );
}
