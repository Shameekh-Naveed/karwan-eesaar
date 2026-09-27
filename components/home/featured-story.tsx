import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { featuredStory } from "@/lib/content/home";
import { photos } from "@/lib/content/photos";
import { cn } from "@/lib/utils";

export function FeaturedStory() {
  const photo = photos.story;

  return (
    <SectionWrapper>
      <div
        className={cn(
          "mx-auto grid items-center gap-8 md:gap-14",
          photo ? "max-w-5xl md:grid-cols-2" : "max-w-3xl text-center"
        )}
      >
        {photo && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {featuredStory.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {featuredStory.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">
            {featuredStory.body}
          </p>
          <Link
            href={featuredStory.href}
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Read the story
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
