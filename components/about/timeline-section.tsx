import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { timeline } from "@/lib/content/about";

export function TimelineSection() {
  return (
    <SectionWrapper id="our-work" variant="alt">
      <SectionHeading title="Our work so far" />

      <ol className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {/* The line joining the year markers (desktop) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[16.66%] top-[19px] hidden h-0.5 bg-secondary/30 md:block"
        />
        {timeline.map((year) => (
          <li key={year.year} className="flex flex-col">
            <div className="relative mb-5 flex justify-center">
              <span className="rounded-full bg-primary px-5 py-2 font-heading text-lg font-extrabold text-primary-foreground">
                {year.year}
              </span>
            </div>

            <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-card">
              <PhotoFrame
                slot={`year-${year.year}`}
                alt={year.photoAlt}
                position={year.photoPosition}
                className="aspect-[16/10] rounded-none"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <ul className="flex-1 divide-y divide-border px-5">
                {year.entries.map((entry) => (
                  <li key={entry.label} className="flex items-center gap-3 py-3.5">
                    <span className="flex w-16 shrink-0 font-heading text-xl font-extrabold text-primary">
                      {entry.figure ?? <Check className="size-5" strokeWidth={3} aria-hidden="true" />}
                    </span>
                    <span className="text-foreground/85">{entry.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
