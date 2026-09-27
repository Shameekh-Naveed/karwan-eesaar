import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { waysToHelp } from "@/lib/content/home";

export function HowYouCanHelp() {
  const { donate, others } = waysToHelp;

  return (
    <SectionWrapper variant="dark" className="bg-navy-glow">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
        How you can help
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.4fr_1fr] md:gap-10">
        <div className="flex flex-col items-start justify-center rounded-3xl bg-primary-foreground/[0.06] p-8 md:p-10">
          <h3 className="text-3xl font-extrabold">{donate.title}</h3>
          <p className="mt-2 text-lg text-primary-foreground/80">{donate.description}</p>
          <Button
            asChild
            variant="donate"
            size="lg"
            className="mt-6 h-13 rounded-xl px-8 text-base font-bold"
          >
            <Link href={donate.href}>
              <Heart className="size-4" />
              {donate.ctaLabel}
            </Link>
          </Button>
        </div>

        <ul className="flex flex-col justify-center divide-y divide-primary-foreground/15">
          {others.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="group flex items-center gap-4 py-5">
                <span className="flex-1">
                  <span className="block text-xl font-bold">{item.title}</span>
                  <span className="block text-primary-foreground/75">{item.description}</span>
                </span>
                <ArrowRight className="size-5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
