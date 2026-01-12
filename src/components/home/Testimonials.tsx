import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "When the floods destroyed our home, Eesaar Foundation was among the first to reach us with food, clothes, and hope. They treated us with such dignity.",
    name: "Fatima Bibi",
    location: "Flood Relief Beneficiary, 2022",
  },
  {
    quote:
      "The IT classes changed my life. As a Hafiz, I never thought I could learn computers, but now I can help support my family with my new skills.",
    name: "Muhammad Ahmed",
    location: "IT Program Graduate",
  },
  {
    quote:
      "The eye camp was a blessing. My mother got her cataract surgery and can see clearly again. We are forever grateful to the Eesaar team.",
    name: "Ali Hassan",
    location: "Eye Camp Beneficiary Family",
  },
  {
    quote:
      "The sewing machine program gave me independence. Now I can earn for my children's education while staying at home.",
    name: "Rukhsana Begum",
    location: "Women Empowerment Program",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Stories of Hope
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear from the communities whose lives have been touched by your generosity
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          {/* Testimonial Card */}
          <div className="rounded-2xl bg-accent p-8 md:p-12">
            <Quote className="h-12 w-12 text-primary/30" />
            <blockquote className="mt-4 font-serif text-xl text-foreground md:text-2xl">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goToPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
