import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/lib/content/about";

export function TimelineSection() {
  return (
    <SectionWrapper id="our-work">
      <SectionHeading title="Our work so far" />
      <ol className="mx-auto max-w-3xl space-y-10">
        {timeline.map((year) => (
          <li key={year.year} className="grid gap-3 sm:grid-cols-[6rem_1fr] sm:gap-8">
            <p className="font-heading text-3xl font-extrabold text-primary">{year.year}</p>
            <ul className="space-y-2 border-l-0 sm:border-t sm:border-border sm:pt-3">
              {year.items.map((item) => (
                <li key={item} className="text-lg text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
