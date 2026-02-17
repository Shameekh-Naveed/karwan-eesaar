import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { approachSteps } from "@/lib/content/about";

export function ApproachSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="Our Approach"
        subtitle="A systematic approach to creating sustainable impact."
      />
      <div className="mx-auto max-w-3xl space-y-8">
        {approachSteps.map((item) => (
          <div key={item.step} className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              {item.step}
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
