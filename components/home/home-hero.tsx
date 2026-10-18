import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { SandSwoosh } from "@/components/shared/sand-swoosh";
import { hero } from "@/lib/content/home";

/**
 * The name as a poster: Urdu above, English in big uppercase, over a mosaic
 * of three real drives. Mirrors the organization's Instagram posts.
 */
export function HomeHero() {
  return (
    <section className="bg-navy-glow relative overflow-hidden">
      <div className="container mx-auto grid items-center gap-10 px-5 pb-32 pt-10 md:px-8 md:pb-40 md:pt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p
            lang="ur"
            dir="rtl"
            className="font-urdu text-3xl leading-[1.9] text-gold sm:text-4xl lg:text-[2.75rem]"
          >
            {hero.urduName}
          </p>
          <h1 className="mt-1 font-heading text-[2.75rem] font-extrabold uppercase leading-[0.98] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-xl font-semibold text-primary-foreground md:text-2xl">
            {hero.tagline}
          </p>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-primary-foreground/80 md:text-lg lg:mx-0">
            {hero.body}
          </p>
          <div className="mt-8 flex gap-3 sm:justify-center lg:justify-start">
            <Button
              asChild
              variant="donate"
              size="lg"
              className="h-13 flex-1 rounded-xl text-base shadow-lg shadow-black/25 sm:flex-none sm:px-9"
            >
              <Link href="/get-involved#donate">
                <Heart className="size-5" />
                Donate
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 flex-1 rounded-xl border-primary-foreground/40 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:flex-none sm:px-9"
            >
              <Link href={hero.volunteerHref}>{hero.volunteerLabel}</Link>
            </Button>
          </div>
        </div>

        {/* One tall photo beside two stacked ones, like a three-tile Instagram row */}
        <div className="grid h-[300px] grid-cols-[1.3fr_1fr] grid-rows-2 gap-2.5 sm:h-[380px] lg:h-[520px] lg:gap-3">
          <PhotoFrame
            slot="home-hero"
            alt={hero.mosaic.main}
            className="row-span-2 h-full rounded-2xl lg:rounded-3xl"
            sizes="(min-width: 1024px) 32vw, 58vw"
            priority
            onDark
          />
          <PhotoFrame
            slot="home-mosaic-2"
            alt={hero.mosaic.second}
            position="top"
            className="h-full rounded-2xl lg:rounded-3xl"
            sizes="(min-width: 1024px) 24vw, 42vw"
            priority
            onDark
          />
          <PhotoFrame
            slot="home-mosaic-3"
            alt={hero.mosaic.third}
            position="bottom"
            className="h-full rounded-2xl lg:rounded-3xl"
            sizes="(min-width: 1024px) 24vw, 42vw"
            onDark
          />
        </div>
      </div>
      <SandSwoosh />
    </section>
  );
}
