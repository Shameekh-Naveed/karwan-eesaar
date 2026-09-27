import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SandSwoosh } from "@/components/shared/sand-swoosh";
import { hero } from "@/lib/content/home";
import { photos } from "@/lib/content/photos";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const photo = photos.hero;

  return (
    <section className="bg-navy-glow relative overflow-hidden">
      <div
        className={cn(
          "container mx-auto grid items-center gap-10 px-6 pb-28 pt-14 md:px-8 md:pb-36 md:pt-20",
          photo && "lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        )}
      >
        <div className={cn(!photo && "mx-auto max-w-4xl text-center")}>
          <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl",
              !photo && "mx-auto"
            )}
          >
            {hero.subtitle}
          </p>
          <div
            className={cn(
              "mt-10 flex flex-col items-center gap-5 sm:flex-row",
              !photo && "sm:justify-center"
            )}
          >
            <Button
              asChild
              variant="donate"
              size="lg"
              className="h-14 w-full max-w-xs rounded-xl px-10 text-lg font-bold shadow-lg shadow-black/25 sm:w-auto"
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

        {photo && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[4/5]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
      <SandSwoosh />
    </section>
  );
}
