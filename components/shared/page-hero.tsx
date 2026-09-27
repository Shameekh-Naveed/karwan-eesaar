import { SandSwoosh } from "@/components/shared/sand-swoosh";

interface PageHeroProps {
  title: string;
  description?: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-navy-glow relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              {description}
            </p>
          )}
        </div>
      </div>
      <SandSwoosh className="h-8 md:h-12" />
    </section>
  );
}
