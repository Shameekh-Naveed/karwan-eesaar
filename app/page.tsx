import { HomeHero } from "@/components/home/home-hero";
import { GiveNow } from "@/components/home/give-now";
import { NameMeaning } from "@/components/home/name-meaning";
import { ImpactPoster } from "@/components/home/impact-poster";
import { ProgramTiles } from "@/components/home/program-tiles";
import { TeamStrip } from "@/components/home/team-strip";
import { ClosingBand } from "@/components/home/closing-band";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <GiveNow />
      <NameMeaning />
      <ImpactPoster />
      <ProgramTiles />
      <TeamStrip />
      <ClosingBand />
    </>
  );
}
