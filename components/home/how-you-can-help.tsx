import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { howYouCanHelp } from "@/lib/content/home";

export function HowYouCanHelp() {
  return (
    <SectionWrapper variant="dark" className="bg-navy-glow">
      <h2 className="mb-10 text-center text-3xl font-extrabold uppercase tracking-tight md:mb-14 md:text-4xl">
        How you can help
      </h2>
      <ol className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-0 md:divide-x md:divide-primary-foreground/15">
        {howYouCanHelp.map((item, index) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-2xl border border-primary-foreground/15 p-6 transition-colors hover:bg-primary-foreground/5 md:rounded-none md:border-0 md:px-10 md:py-4"
            >
              <span className="font-heading text-5xl font-extrabold text-gold/90">
                {index + 1}
              </span>
              <span className="mt-3 text-2xl font-bold">{item.title}</span>
              <span className="mt-2 flex-1 text-primary-foreground/75">
                {item.description}
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-gold">
                {item.ctaLabel}
                <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
