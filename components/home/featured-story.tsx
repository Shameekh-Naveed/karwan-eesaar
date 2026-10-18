import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { featuredStory } from "@/lib/content/home";

export function FeaturedStory() {
  return (
    <SectionWrapper>
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        {/* One large photo over two small ones */}
        <div className="grid grid-cols-2 gap-3">
          <PhotoFrame
            slot="home-story"
            alt={featuredStory.photos.main}
            className="col-span-2 aspect-[16/10]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
          <PhotoFrame
            slot="home-story-2"
            alt={featuredStory.photos.second}
            position="top"
            className="aspect-square rounded-2xl"
            sizes="(min-width: 1024px) 27vw, 50vw"
          />
          <PhotoFrame
            slot="home-story-3"
            alt={featuredStory.photos.third}
            position="top"
            className="aspect-square rounded-2xl"
            sizes="(min-width: 1024px) 27vw, 50vw"
          />
        </div>
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
