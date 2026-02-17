"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { heroSlides } from "@/lib/content/home";
import { getWhatsAppLink } from "@/lib/site-config";

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
    <section className="relative overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-primary">
                {/* Geometric background pattern */}
                <div className="absolute inset-0 opacity-[0.07]">
                  <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full border-[60px] border-white" />
                  <div className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full border-[80px] border-white" />
                  <div className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rotate-45 border-[40px] border-white" />
                </div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/80" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 py-24 md:px-8">
                  <div className="mx-auto max-w-4xl text-center">
                    {/* Slide number indicator */}
                    <div
                      className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
                      style={{
                        animationDelay: "0.1s",
                        animation: "fadeInUp 0.6s ease-out both",
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {index === 0
                        ? "Eesaar Foundation"
                        : index === 1
                          ? "Disaster Response"
                          : index === 2
                            ? "Education Programs"
                            : "Seasonal Campaigns"}
                    </div>

                    <h1
                      className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                      style={{
                        animationDelay: "0.2s",
                        animation: "fadeInUp 0.6s ease-out both",
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
                      style={{
                        animationDelay: "0.35s",
                        animation: "fadeInUp 0.6s ease-out both",
                      }}
                    >
                      {slide.subtitle}
                    </p>
                    <div
                      className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                      style={{
                        animationDelay: "0.5s",
                        animation: "fadeInUp 0.6s ease-out both",
                      }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="h-12 rounded-xl bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/20 transition-all hover:bg-white/90 hover:shadow-xl"
                      >
                        <a
                          href={getWhatsAppLink(slide.ctaLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {slide.ctaLabel}
                          <ArrowRight className="ml-1 size-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 rounded-xl border-white/30 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/15"
                      >
                        <Link href={slide.secondaryCtaLink}>
                          {slide.secondaryCtaLabel}
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

      {/* Navigation arrows */}
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:left-6 md:h-12 md:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-6 md:h-12 md:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-white shadow-lg"
                : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
