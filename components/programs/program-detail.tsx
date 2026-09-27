import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
import type { Photo } from "@/lib/content/photos";

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
  photo?: Photo | null;
}

export function ProgramDetail({ sections, ctaLabel, photo }: ProgramDetailProps) {
  return (
    <>
      {photo && (
        <div className="container mx-auto px-4 pt-10 md:px-6">
          <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {sections.map((section, sIndex) => (
        <SectionWrapper
          key={section.title}
          variant={sIndex % 2 === 0 ? "default" : "alt"}
          className="py-12 md:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {section.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {section.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-secondary">{item.stats}</p>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      <DonateBand label={ctaLabel} />
    </>
  );
}
