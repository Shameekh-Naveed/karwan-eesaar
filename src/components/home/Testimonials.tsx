import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              Testimonials
            </span>
            <Star className="h-5 w-5 fill-secondary text-secondary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Stories of Hope
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from the communities whose lives have been touched by your generosity
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-12">
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 opacity-5">
              <Star className="h-32 w-32 fill-primary text-primary" />
            </div>
            <div className="absolute -left-2 -bottom-2 opacity-5">
              <Star className="h-24 w-24 fill-secondary text-secondary" />
            </div>
            
            <Quote className="h-12 w-12 text-secondary" />
            <blockquote className="relative mt-6 font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
                <span className="text-xl font-bold text-primary-foreground">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goToPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all ${
                    index === current 
                      ? "scale-125" 
                      : "opacity-40 hover:opacity-70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <Star 
                    className={`h-4 w-4 ${
                      index === current 
                        ? "fill-secondary text-secondary" 
                        : "fill-muted-foreground text-muted-foreground"
                    }`} 
                  />
                </button>
              ))}
            </div>
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;