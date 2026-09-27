import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import { corePrograms } from "@/lib/content/home";

export function CorePrograms() {
  return (
    <SectionWrapper variant="alt">
      <SectionHeading title="What we do" />
      <ul className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
        {corePrograms.map((program) => (
          <li key={program.title}>
            <Link
              href={program.href}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-secondary/50"
            >
              <IconBox icon={program.icon as IconName} />
              <span className="flex-1">
                <span className="block text-lg font-bold text-foreground">
                  {program.title}
                </span>
                <span className="block text-muted-foreground">{program.description}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-secondary transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center">
        <Link
          href="/programs"
          className="font-semibold text-secondary underline-offset-4 hover:underline"
        >
          See all programs
        </Link>
      </p>
    </SectionWrapper>
  );
}
