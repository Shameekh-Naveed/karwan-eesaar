import { cn } from "@/lib/utils";

/**
 * The layered camel-and-cream curve from the Instagram posts, used to
 * hand a navy section off to the cream page below it.
 */
export function SandSwoosh({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-12 w-full md:h-20",
        className
      )}
    >
      <path
        d="M0 120 L0 92 C 360 40, 900 128, 1440 18 L1440 120 Z"
        className="fill-secondary/70"
      />
      <path
        d="M0 120 L0 104 C 420 62, 940 132, 1440 44 L1440 120 Z"
        className="fill-sand"
      />
      <path
        d="M0 120 L0 114 C 460 84, 980 134, 1440 70 L1440 120 Z"
        className="fill-background"
      />
    </svg>
  );
}
