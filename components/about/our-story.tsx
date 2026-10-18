import { SectionWrapper } from "@/components/shared/section-wrapper";
import { PhotoFrame } from "@/components/shared/photo-frame";
import { ourStory } from "@/lib/content/about";
import { pendingFacts } from "@/lib/content/facts";
import { siteConfig } from "@/lib/site-config";

export function OurStory() {
  // Hard trust signals; each appears only once it has been confirmed
  const trustFacts = [
    pendingFacts.foundedYear && { label: "Founded", value: String(pendingFacts.foundedYear) },
    pendingFacts.registration && { label: "Registration", value: pendingFacts.registration },
    pendingFacts.donationTracking && { label: "Your donation", value: pendingFacts.donationTracking },
    { label: "Donation accounts", value: siteConfig.donation.holderNote },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <SectionWrapper variant="alt">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
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

        <PhotoFrame
          slot="about-story"
          alt="Karwan-e-Eesaar volunteers lined up in their vests before the 2024 eye camp"
          className="aspect-[4/3] md:order-first"
          sizes="(min-width: 768px) 45vw, 100vw"
        />
      </div>
    </SectionWrapper>
  );
}
