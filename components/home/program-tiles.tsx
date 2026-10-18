import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { programs } from "@/lib/content/programs";
import { programsIntro } from "@/lib/content/home";

/** Each program as a photo with its name set into the bottom of the picture. */
export function ProgramTiles() {
  return (
    <section aria-labelledby="programs" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4">
          <h2 id="programs" className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            {programsIntro.title}
          </h2>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 font-semibold text-secondary underline-offset-4 hover:underline"
          >
            All programs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ul className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {programs.map((program) => (
            <li key={program.slug}>
              <Link
                href={`/programs/${program.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-primary lg:rounded-3xl"
              >
                <PhotoFrame
                  slot={`program-${program.slug}`}
                  alt={program.photoAlt}
                  position={program.photoPosition}
                  className="absolute inset-0 rounded-none transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  onDark
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <span className="block font-heading text-lg font-bold leading-tight text-primary-foreground md:text-xl">
                    {program.title}
                  </span>
                  <span className="mt-1 hidden text-sm text-primary-foreground/80 md:block">
                    {program.tagline}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
