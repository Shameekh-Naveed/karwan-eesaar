import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog & Updates",
  description:
    "News and stories from Karwan-e-Eesaar Welfare Organization's ration drives, eye camps, relief work and classes.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog & updates" />

      <SectionWrapper className="py-12 md:py-16">
        <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-200 hover:shadow-md"
              >
                <PhotoFrame
                  slot={post.photo}
                  alt={post.photoAlt}
                  className="aspect-[16/10] rounded-none"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-sm font-semibold text-secondary">
                    {post.tag} · {post.date}
                  </p>
                  <h2 className="mt-2 text-xl font-bold leading-snug text-foreground md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-foreground/80">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-semibold text-secondary">
                    Read more
                    <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <DonateBand />
    </>
  );
}
