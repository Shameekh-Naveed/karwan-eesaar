import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ourStory } from "@/lib/content/about";
import { pendingFacts } from "@/lib/content/facts";
import { photos } from "@/lib/content/photos";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function OurStory() {
  const photo = photos.about;

  // Hard trust signals; each appears only once it has been confirmed
  const trustFacts = [
    pendingFacts.foundedYear && { label: "Founded", value: String(pendingFacts.foundedYear) },
    pendingFacts.registration && { label: "Registration", value: pendingFacts.registration },
    pendingFacts.donationTracking && { label: "Your donation", value: pendingFacts.donationTracking },
    { label: "Donation accounts", value: siteConfig.donation.holderNote },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <SectionWrapper variant="alt">
      <div
        className={cn(
          "mx-auto grid items-center gap-10 md:gap-14",
          photo ? "max-w-6xl md:grid-cols-2" : "max-w-3xl"
        )}
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{ourStory.title}</h2>
          <div className="mt-5 space-y-4">
            {ourStory.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-5 font-semibold text-secondary">
            {ourStory.values.join(" · ")}
          </p>

          <dl className="mt-8 divide-y divide-border border-y">
            {trustFacts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="font-semibold text-foreground">{fact.label}</dt>
                <dd className="text-foreground/80">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {photo && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
