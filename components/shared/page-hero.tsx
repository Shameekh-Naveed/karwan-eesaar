import { SandSwoosh } from "@/components/shared/sand-swoosh";

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-navy-glow relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            {description}
          </p>
        </div>
      </div>
      <SandSwoosh />
    </section>
  );
}
