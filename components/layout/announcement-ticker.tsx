import Link from "next/link";
import { tickerMessages } from "@/lib/content/home";

// Each run repeats the messages so one run is always wider than a wide monitor
const run = [...tickerMessages, ...tickerMessages];

function TickerRun({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {run.map((message, i) => (
        <li
          key={i}
          className="flex items-center gap-6 whitespace-nowrap px-3 text-sm font-semibold uppercase tracking-wide"
        >
          {message}
          <span className="size-1.5 rounded-full bg-gold-foreground/50" />
        </li>
      ))}
    </ul>
  );
}

export function AnnouncementTicker() {
  return (
    <Link
      href="/get-involved#donate"
      className="group block overflow-hidden bg-gold py-2 text-gold-foreground"
    >
      <span className="sr-only">{tickerMessages.join(". ")}</span>
      {/* Two identical runs; the track slides by half its width, so the loop is seamless */}
      <div className="animate-marquee flex w-max" aria-hidden="true">
        <TickerRun />
        <TickerRun hidden />
      </div>
    </Link>
  );
}
