import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import { ourValues } from "@/lib/content/about";

export function OurValues() {
  return (
    <SectionWrapper id="values">
      <SectionHeading
        title="Our Values"
        subtitle="The principles that guide everything we do."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ourValues.map((value) => (
          <Card
            key={value.title}
            className="border-0 shadow-sm transition-shadow hover:shadow-md"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <IconBox icon={value.icon as IconName} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
