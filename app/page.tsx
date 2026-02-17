import { HeroCarousel } from "@/components/home/hero-carousel";
import { ImpactCounter } from "@/components/home/impact-counter";
import { CorePrograms } from "@/components/home/core-programs";
import { FeaturedInitiatives } from "@/components/home/featured-initiatives";
import { HowYouCanHelp } from "@/components/home/how-you-can-help";
import { LatestUpdates } from "@/components/home/latest-updates";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ImpactCounter />
      <CorePrograms />
      <FeaturedInitiatives />
      <HowYouCanHelp />
      <TestimonialsCarousel />
      <LatestUpdates />
    </>
  );
}
