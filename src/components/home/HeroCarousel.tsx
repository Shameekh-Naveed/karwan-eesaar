import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";
import heroFloodRelief from "@/assets/hero-flood-relief.jpg";
import heroEducation from "@/assets/hero-education.jpg";
import heroWinterCare from "@/assets/hero-winter-care.jpg";

const slides = [
  {
    image: heroCommunity,
    headline: "Empowering Communities Through Compassion",
    description: "Serving humanity with dignity and respect in line with Islamic principles",
    primaryCta: { label: "Donate Now", href: "/get-involved" },
    secondaryCta: { label: "Become a Volunteer", href: "/get-involved#volunteer" },
  },
  {
    image: heroFloodRelief,
    headline: "Flood Relief 2022: 500+ Families Supported",
    description: "Standing with communities in their time of need through emergency relief",
    primaryCta: { label: "See Our Impact", href: "/programs#relief" },
    secondaryCta: { label: "Support Relief Efforts", href: "/get-involved" },
  },
  {
    image: heroEducation,
    headline: "Educating the Future Generation",
    description: "IT classes and skill development programs for Huffaz and underprivileged youth",
    primaryCta: { label: "Support Education", href: "/get-involved" },
    secondaryCta: { label: "Learn More", href: "/programs#education" },
  },
  {
    image: heroWinterCare,
    headline: "Winter Care Initiative",
    description: "Providing warmth and comfort to those in need during harsh winters",
    primaryCta: { label: "Help Families This Winter", href: "/get-involved" },
    secondaryCta: { label: "View Programs", href: "/programs#winter" },
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[600px] overflow-hidden md:h-[700px] lg:h-[800px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

          {/* Content */}
          <div className="container relative flex h-full items-center">
            <div className="max-w-2xl">
              <h1
                className={`font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl ${
                  index === currentSlide ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.headline}
              </h1>
              <p
                className={`mt-4 text-lg text-background/90 md:text-xl ${
                  index === currentSlide ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                {slide.description}
              </p>
              <div
                className={`mt-8 flex flex-col gap-4 sm:flex-row ${
                  index === currentSlide ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: "0.6s" }}
              >
                <Link to={slide.primaryCta.href}>
                  <Button variant="warm" size="xl">
                    {slide.primaryCta.label}
                  </Button>
                </Link>
                <Link to={slide.secondaryCta.href}>
                  <Button variant="heroOutline" size="xl">
                    {slide.secondaryCta.label}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-all hover:bg-background/30 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-all hover:bg-background/30 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-secondary" : "w-3 bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
