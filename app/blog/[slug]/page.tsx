import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { blogPosts } from "@/lib/content/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <SectionWrapper>
        <article className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <Badge
              variant="secondary"
              className="bg-secondary/10 text-secondary"
            >
              {post.tag}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="size-3.5" />
              {post.date}
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed text-foreground/80">
              {post.content}
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between border-t pt-8">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/blog">
                <ArrowLeft className="mr-1 size-4" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="ghost" className="gap-2 text-muted-foreground">
              <Share2 className="size-4" />
              Share
            </Button>
          </div>
        </article>
      </SectionWrapper>
    </>
  );
}
