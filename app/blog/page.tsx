import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
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
        <ul className="mx-auto max-w-3xl divide-y divide-border border-y">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-7 sm:px-4 hover:bg-muted/60">
                <p className="text-sm font-semibold text-secondary">
                  {post.tag} · {post.date}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">{post.title}</h2>
                <p className="mt-2 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-semibold text-secondary">
                  Read more
                  <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <DonateBand />
    </>
  );
}
