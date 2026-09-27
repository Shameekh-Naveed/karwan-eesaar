import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { facts, formatPkr, pendingFacts } from "@/lib/content/facts";

/** Short closing call to action for the end of every inner page. */
export function DonateBand({ label = "Donate now" }: { label?: string }) {
  const cost = pendingFacts.rationPackCostPkr;
  const line = cost
    ? `${formatPkr(cost)} feeds a family for a month.`
    : `${facts.rationFamiliesMonthly}+ families count on our rations every month.`;

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center gap-5 px-4 py-12 text-center md:flex-row md:justify-between md:px-6 md:text-left">
        <p className="text-xl font-bold md:text-2xl">{line}</p>
        <Button
          asChild
          variant="donate"
          size="lg"
          className="h-12 shrink-0 rounded-xl px-8 text-base font-bold"
        >
          <Link href="/get-involved#donate">
            <Heart className="size-4" />
            {label}
          </Link>
        </Button>
      </div>
    </section>
  );
}
