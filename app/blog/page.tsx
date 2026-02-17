import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog & Updates",
  description:
    "Latest news, stories, and updates from Eesaar Foundation. Read about our programs, impact, and community initiatives in Pakistan.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & Updates"
        description="Stories of impact, program updates, and insights from our work in communities across Pakistan."
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <SectionWrapper>
        {/* Featured Post */}
        <Link href={`/blog/${blogPosts[0].slug}`} className="group mb-12 block">
          <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-lg md:flex">
            <PlaceholderImage
              className="h-64 w-full md:h-auto md:w-1/2"
              variant="primary"
              label={blogPosts[0].title}
            />
            <CardContent className="flex flex-col justify-center p-8 md:w-1/2">
              <div className="mb-3 flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-secondary/10 text-secondary"
                >
                  {blogPosts[0].tag}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="size-3.5" />
                  {blogPosts[0].date}
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground transition-colors group-hover:text-secondary md:text-3xl">
                {blogPosts[0].title}
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {blogPosts[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-1 font-medium text-secondary transition-all group-hover:gap-2">
                Read More <ArrowRight className="size-4" />
              </span>
            </CardContent>
          </Card>
        </Link>

        {/* Remaining Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <PlaceholderImage
                  className="h-44 w-full"
                  variant={
                    (["secondary", "accent", "primary"] as const)[index % 3]
                  }
                />
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="border-secondary/30 text-secondary"
                    >
                      {post.tag}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-secondary">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
