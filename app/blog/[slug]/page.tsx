import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
import { PhotoFrame } from "@/components/shared/photo-frame";
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

          <PhotoFrame
            slot={post.photo}
            alt={post.photoAlt}
            className="mb-8 aspect-[16/10]"
            sizes="(min-width: 768px) 768px, 100vw"
            priority
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/85">
              {post.content}
            </p>
          </div>

          <div className="mt-12 border-t pt-8">
            <Button asChild variant="outline" className="h-11 rounded-xl">
              <Link href="/blog">
                <ArrowLeft className="mr-1 size-4" />
                All updates
              </Link>
            </Button>
          </div>
        </article>
      </SectionWrapper>
      <DonateBand />
    </>
  );
}
