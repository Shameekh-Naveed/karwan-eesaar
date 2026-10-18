import { nameMeaning } from "@/lib/content/home";

/** Where the name comes from: the ayah, its meaning, and one line on "eesaar". */
export function NameMeaning() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <figure className="mx-auto max-w-2xl text-center">
          <blockquote>
            <p
              lang="ar"
              dir="rtl"
              className="font-arabic text-3xl leading-[1.9] text-primary md:text-4xl"
            >
              {nameMeaning.arabic}
            </p>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-foreground/85">
              “{nameMeaning.translation}”
            </p>
          </blockquote>
          <figcaption className="mt-2 font-semibold text-secondary">{nameMeaning.reference}</figcaption>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-foreground md:text-xl">
            {nameMeaning.body}
          </p>
        </figure>
      </div>
    </section>
  );
}
