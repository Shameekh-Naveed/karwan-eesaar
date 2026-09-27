"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SandSwoosh } from "@/components/shared/sand-swoosh";
import { heroSlides } from "@/lib/content/home";

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="bg-navy-glow relative overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.title}>
              <div className="flex min-h-[78vh] items-center justify-center md:min-h-[82vh]">
                <div className="container mx-auto px-6 pb-36 pt-16 md:px-16 md:pb-40">
                  <div className="mx-auto max-w-4xl text-center">
                    <p className="hero-rise text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                      {slide.eyebrow}
                    </p>
                    <h1 className="hero-rise mt-4 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-primary-foreground [animation-delay:80ms] sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="hero-rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 [animation-delay:160ms] md:text-xl">
                      {slide.subtitle}
                    </p>
                    <div className="hero-rise mt-10 flex flex-col items-center gap-3 [animation-delay:240ms] sm:flex-row sm:justify-center sm:gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="h-13 w-full max-w-xs rounded-xl bg-gold px-8 text-base font-bold text-gold-foreground shadow-lg shadow-black/25 hover:bg-gold/90 sm:w-auto"
                      >
                        <Link href="/get-involved#donate">
                          <Heart className="size-4" />
                          Donate now
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-13 w-full max-w-xs rounded-xl border-primary-foreground/30 bg-transparent px-8 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                      >
                        <Link href={slide.secondaryCtaLink}>
                          {slide.secondaryCtaLabel}
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation arrows (desktop only; phones swipe) */}
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10 md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10 md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 gap-1 md:bottom-28">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => api?.scrollTo(index)}
            className="flex h-6 items-center px-1"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-gold"
                  : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
            />
          </button>
        ))}
      </div>

      <SandSwoosh />

      <style jsx>{`
        .hero-rise {
          /* longhands so the Tailwind animation-delay utilities still apply */
          animation-name: heroRise;
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both;
        }
        @keyframes heroRise {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
