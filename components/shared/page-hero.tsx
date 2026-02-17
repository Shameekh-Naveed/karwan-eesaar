interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute -right-16 -top-16 h-[400px] w-[400px] rounded-full border-[50px] border-white" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full border-[40px] border-white" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/60" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
