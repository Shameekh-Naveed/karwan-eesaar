import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramCard } from "@/components/programs/program-card";
import { programs } from "@/lib/content/programs";
import { findPhoto } from "@/lib/photos/find-photo";

export function CorePrograms() {
  // Programs with a real photo come first, so the home row never shows an empty frame
  const featured = [...programs]
    .sort((a, b) => Number(Boolean(findPhoto(`program-${b.slug}`))) - Number(Boolean(findPhoto(`program-${a.slug}`))))
    .slice(0, 4);

  return (
    <SectionWrapper variant="alt">
      <SectionHeading title="What we do" />
      {/* Grid rows stretch and each card is h-full, so every card matches its neighbours */}
      <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((program) => (
          <li key={program.slug}>
            <ProgramCard program={program} />
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center">
        <Link
          href="/programs"
          className="font-semibold text-secondary underline-offset-4 hover:underline"
        >
          See all five programs
        </Link>
      </p>
    </SectionWrapper>
  );
}
