import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import { corePrograms } from "@/lib/content/home";

export function CorePrograms() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="Our Core Programs"
        subtitle="We focus on key areas that create lasting impact in communities across Pakistan."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {corePrograms.map((program) => (
          <Link key={program.title} href={program.href} className="group">
            <Card className="h-full border-0 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <IconBox
                    icon={program.icon as IconName}
                    size="lg"
                    className="transition-colors group-hover:bg-secondary/15 group-hover:text-secondary"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
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
