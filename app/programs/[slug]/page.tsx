import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DonateBand } from "@/components/shared/donate-band";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { IconBox } from "@/components/shared/icon-box";
import { findPhoto } from "@/lib/photos/find-photo";
import { getProgram, programs } from "@/lib/content/programs";
import { cn } from "@/lib/utils";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = getProgram((await params).slug);
  if (!program) return {};
  return { title: program.title, description: program.seoDescription };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const program = getProgram((await params).slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <PageHero title={program.title} description={program.tagline} />

      {/* Lead photo and headline numbers */}
      <SectionWrapper className="pb-8 pt-10 md:pb-10 md:pt-14">
        <div className="mx-auto max-w-5xl">
          <PhotoFrame
            slot={`program-${program.slug}`}
            alt={program.photoAlt}
            position={program.photoPosition}
            className="aspect-[16/9] md:aspect-[21/9]"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
          />
          <dl
            className={cn(
              "mt-10 grid gap-8 text-center",
              program.highlights.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            )}
          >
            {program.highlights.map((highlight) => (
              <div key={highlight.label} className="flex flex-col-reverse justify-end">
                <dt className="mx-auto mt-1 max-w-[22ch] text-foreground/75">{highlight.label}</dt>
                <dd className="font-heading text-4xl font-extrabold text-primary md:text-5xl">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      {/* Initiatives: photo and text alternate sides so the page reads as a story, not a wall of text */}
      <SectionWrapper variant="alt" className="py-14 md:py-20">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          What we do
        </h2>
        <ol className="mx-auto max-w-5xl space-y-14 md:space-y-20">
          {program.initiatives.map((initiative, index) => {
            const slot = `program-${program.slug}-${index + 1}`;
            // Initiatives without a photo yet read as a plain text block instead of an empty frame
            const hasPhoto = Boolean(findPhoto(slot));
            return (
            <li
              key={initiative.title}
              className={cn("grid items-center gap-6 md:gap-12", hasPhoto && "md:grid-cols-2")}
            >
              {hasPhoto && (
                <PhotoFrame
                  slot={slot}
                  alt={initiative.photoAlt ?? `${initiative.title}: photo from the drive`}
                  position={initiative.photoPosition}
                  className={cn("aspect-[4/3]", index % 2 === 1 && "md:order-2")}
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              )}
              <div className={cn(!hasPhoto && "mx-auto max-w-2xl border-l-4 border-secondary/40 pl-6")}>
                {initiative.stat && (
                  <p className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                    {initiative.stat}
                  </p>
                )}
                <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                  {initiative.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                  {initiative.summary}
                </p>
                {initiative.points && (
                  <ul className="mt-5 space-y-2.5">
                    {initiative.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-foreground/85">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            );
          })}
        </ol>
      </SectionWrapper>

      {/* Other programs */}
      <SectionWrapper className="py-12 md:py-16">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">Our other programs</h2>
        <ul className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/programs/${other.slug}`}
                className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-secondary/60"
              >
                <IconBox icon={other.icon} size="sm" />
                <span className="flex-1 font-semibold text-foreground">{other.title}</span>
                <ArrowRight className="size-4 shrink-0 text-secondary transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <DonateBand label={program.ctaLabel} />
    </>
  );
}
