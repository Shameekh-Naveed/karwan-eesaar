import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { latestUpdates } from "@/lib/content/home";

export function LatestUpdates() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="Latest Updates"
        subtitle="Stay informed about our recent activities and impact stories."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {latestUpdates.map((update, index) => (
          <Card
            key={update.title}
            className="group overflow-hidden border-0 shadow-sm transition-all hover:shadow-md"
          >
            <PlaceholderImage
              className="h-44 w-full"
              variant={
                (["primary", "secondary", "accent"] as const)[index % 3]
              }
            />
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="outline" className="border-secondary/30 text-secondary">
                  {update.tag}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {update.date}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-secondary">
                {update.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {update.excerpt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" className="rounded-xl">
          <Link href="/blog">
            View All Updates
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
