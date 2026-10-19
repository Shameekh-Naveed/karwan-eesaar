import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content/blog";
import { programs } from "@/lib/content/programs";
import { siteUrl } from "@/lib/site-config";

/** Generated from the same content files the pages use, so new posts and programs appear automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/programs", "/get-involved", "/blog", "/contact"];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      priority: path === "" ? 1 : 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...programs.map((program) => ({
      url: `${siteUrl}/programs/${program.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.6,
    })),
  ];
}
