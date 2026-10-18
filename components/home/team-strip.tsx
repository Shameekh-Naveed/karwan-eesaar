import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { teamMembers } from "@/lib/content/about";
import { teamStrip } from "@/lib/content/home";

/** The faces behind the accounts, in one line, before the closing ask. */
export function TeamStrip() {
  if (teamMembers.length === 0) return null;

  return (
    <section aria-labelledby="team-strip" className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href={teamStrip.href}
          className="group mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left"
        >
          <ul className="flex shrink-0 pl-3">
            {teamMembers.map((member) => (
              <li key={member.name} className="-ml-3">
                <PhotoFrame
                  slot={member.photo}
                  alt={member.name}
                  className="size-14 rounded-full ring-[3px] ring-muted md:size-16"
                  sizes="64px"
                />
              </li>
            ))}
          </ul>
          <div className="flex-1">
            <h2 id="team-strip" className="font-heading text-xl font-bold text-foreground md:text-2xl">
              {teamStrip.title}
            </h2>
            <p className="mt-1 text-foreground/75">{teamStrip.body}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-secondary">
            {teamStrip.linkLabel}
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
