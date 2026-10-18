import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { closing } from "@/lib/content/home";

/** The page ends on the hadith and one last Donate, darker than the footer so it reads as a close. */
export function ClosingBand() {
  return (
    <section className="bg-navy-deep text-primary-foreground">
      <div className="container mx-auto px-5 py-16 text-center md:px-6 md:py-24">
        <figure className="mx-auto max-w-2xl">
          <blockquote>
            <p lang="ar" dir="rtl" className="font-arabic text-2xl leading-[1.9] text-gold md:text-4xl">
              {closing.arabic}
            </p>
            <p className="mx-auto mt-3 max-w-md text-lg text-primary-foreground/85">
              “{closing.translation}”
            </p>
          </blockquote>
          <figcaption className="mt-1 text-sm text-primary-foreground/60">{closing.reference}</figcaption>
        </figure>
        <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-4">
          <Button asChild variant="donate" size="lg" className="h-14 w-full rounded-xl text-lg">
            <Link href="/get-involved#donate">
              <Heart className="size-5" />
              {closing.donateLabel}
            </Link>
          </Button>
          <Link
            href="/get-involved#volunteer"
            className="inline-flex items-center gap-1.5 font-medium text-primary-foreground/75 underline-offset-4 hover:text-primary-foreground hover:underline"
          >
            {closing.volunteerLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
