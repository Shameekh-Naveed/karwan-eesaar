import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/shared/section-wrapper";

interface ProgramItem {
  title: string;
  description: string;
  stats: string;
}

interface ProgramSection {
  title: string;
  items: readonly ProgramItem[];
}

interface ProgramDetailProps {
  sections: readonly ProgramSection[];
  ctaLabel: string;
}

export function ProgramDetail({ sections, ctaLabel }: ProgramDetailProps) {
  return (
    <>
      {sections.map((section, sIndex) => (
        <SectionWrapper
          key={section.title}
          variant={sIndex % 2 === 0 ? "default" : "alt"}
        >
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {section.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {section.items.map((item) => (
              <Card
                key={item.title}
                className="border-0 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6 md:p-8">
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-secondary/10 text-secondary"
                  >
                    {item.stats}
                  </Badge>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      ))}

      {/* CTA Section */}
      <SectionWrapper variant="dark" className="bg-navy-glow">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Make a difference today
          </h2>
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-gold px-8 text-base font-bold text-gold-foreground hover:bg-gold/90"
          >
            <Link href="/get-involved#donate">
              {ctaLabel}
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
