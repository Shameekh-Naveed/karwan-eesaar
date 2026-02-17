"use client";

import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/content/home";

export function TestimonialsCarousel() {
  return (
    <SectionWrapper variant="alt">
      <SectionHeading
        title="Stories of Impact"
        subtitle="Hear from the people whose lives have been touched by Eesaar Foundation."
      />
      <div className="mx-auto max-w-5xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="h-full border-0 shadow-sm">
                  <CardContent className="flex h-full flex-col p-8">
                    <Quote className="mb-4 size-10 text-secondary/30" />
                    <blockquote className="mb-6 flex-1 text-lg leading-relaxed text-foreground/90 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4 border-t pt-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-14" />
          <CarouselNext className="-right-4 md:-right-14" />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
