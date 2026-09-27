import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhotoFrame } from "@/components/shared/photo-frame";
import type { Program } from "@/lib/content/programs";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: Program;
  /** Larger type for the featured row */
  size?: "default" | "large";
  className?: string;
}

/** Whole card is one link; h-full + flex keeps every card in a row the same height. */
export function ProgramCard({ program, size = "default", className }: ProgramCardProps) {
  const large = size === "large";

  return (
    <Link
      href={`/programs/${program.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-secondary/60",
        className
      )}
    >
      <PhotoFrame
        slot={`program-${program.slug}`}
        alt={program.photoAlt}
        className={cn("rounded-none", large ? "aspect-[16/9]" : "aspect-[4/3]")}
        sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"}
      />
      <div className={cn("flex flex-1 flex-col", large ? "p-6 md:p-7" : "p-5")}>
        <h3 className={cn("font-bold text-foreground", large ? "text-2xl" : "text-xl")}>
          {program.title}
        </h3>
        <p className={cn("mt-2 flex-1 text-foreground/75", large && "text-lg")}>
          {program.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-secondary">
          Learn more
          <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
