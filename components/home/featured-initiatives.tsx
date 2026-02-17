import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { featuredInitiatives } from "@/lib/content/home";

export function FeaturedInitiatives() {
  return (
    <SectionWrapper variant="alt">
      <SectionHeading
        title="Featured Initiatives"
        subtitle="Current campaigns and projects making a difference right now."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {featuredInitiatives.map((initiative, index) => (
          <Link
            key={initiative.title}
            href={initiative.href}
            className="group"
          >
            <Card className="h-full overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <PlaceholderImage
                className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                variant={
                  (["primary", "secondary", "accent"] as const)[index % 3]
                }
                label={initiative.title}
              />
              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className="mb-3 bg-secondary/10 text-secondary"
                >
                  {initiative.tag}
                </Badge>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {initiative.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {initiative.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-all group-hover:gap-2">
                  Learn More <ArrowRight className="size-3.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
