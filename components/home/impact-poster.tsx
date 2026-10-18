import { AnimatedNumber } from "@/components/shared/animated-number";
import { impact } from "@/lib/content/home";

/** The numbers as a gold poster: one headline figure, three beneath it. */
export function ImpactPoster() {
  return (
    <section aria-labelledby="impact" className="bg-gold text-gold-foreground">
      <div className="container mx-auto px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h2 id="impact" className="font-heading text-2xl font-bold md:text-3xl">
              {impact.title}
            </h2>
            <p className="font-medium text-gold-foreground/70">{impact.period}</p>
          </div>

          <p className="mt-6 md:mt-8">
            <AnimatedNumber
              target={impact.lead.value}
              suffix={impact.lead.suffix}
              className="block font-heading text-7xl font-extrabold leading-none tracking-tight sm:text-8xl md:text-[9rem]"
            />
            <span className="mt-2 block text-xl font-semibold md:text-2xl">{impact.lead.label}</span>
          </p>

          <dl className="mt-10 grid gap-6 border-t-2 border-gold-foreground/20 pt-8 sm:grid-cols-3 md:mt-12">
            {impact.others.map((stat) => (
              <div key={stat.label}>
                <dd className="font-heading text-4xl font-extrabold leading-none md:text-5xl">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 max-w-[20ch] font-medium text-gold-foreground/80">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
