import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { SandSwoosh } from "@/components/shared/sand-swoosh";
import { hero } from "@/lib/content/home";

export function HomeHero() {
  return (
    <section className="bg-navy-glow relative overflow-hidden">
      <div className="container mx-auto grid items-center gap-10 px-6 pb-28 pt-12 md:px-8 md:pb-36 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl lg:mx-0">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              variant="donate"
              size="lg"
              className="h-14 w-full max-w-xs rounded-xl px-10 text-lg shadow-lg shadow-black/25 sm:w-auto"
            >
              <Link href="/get-involved#donate">
                <Heart className="size-5" />
                Donate now
              </Link>
            </Button>
            <Link
              href={hero.secondaryCtaLink}
              className="inline-flex items-center gap-1.5 font-medium text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
            >
              {hero.secondaryCtaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <PhotoFrame
          slot="home-hero"
          alt="A volunteer handing a ration pack to a family"
          className="aspect-[4/3] w-full lg:aspect-[4/5]"
          sizes="(min-width: 1024px) 45vw, 100vw"
          priority
          onDark
        />
      </div>
      <SandSwoosh />
    </section>
  );
}
