import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
      {/* Decorative Stars - matching logo */}
      <div className="pointer-events-none absolute right-10 top-20 z-20 hidden opacity-30 lg:block">
        <Star className="h-6 w-6 animate-float fill-secondary text-secondary" style={{ animationDelay: '0s' }} />
      </div>
      <div className="pointer-events-none absolute right-24 top-32 z-20 hidden opacity-20 lg:block">
        <Star className="h-4 w-4 animate-float fill-secondary text-secondary" style={{ animationDelay: '1s' }} />
      </div>
      <div className="pointer-events-none absolute right-16 top-44 z-20 hidden opacity-25 lg:block">
        <Star className="h-5 w-5 animate-float fill-primary-foreground text-primary-foreground" style={{ animationDelay: '2s' }} />
      </div>

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
          {/* Overlay - Blue gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="container relative flex h-full items-center">
            <div className="max-w-2xl">
              {/* Decorative line */}
              <div 
                className={`mb-6 flex items-center gap-3 ${index === currentSlide ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className="h-1 w-12 rounded-full bg-secondary" />
                <span className="text-sm font-medium uppercase tracking-wider text-secondary">
                  A Project for Needy People
                </span>
              </div>
              
              <h1
                className={`font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl ${
                  index === currentSlide ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.headline}
              </h1>
              <p
                className={`mt-5 text-lg leading-relaxed text-primary-foreground/85 md:text-xl ${
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
                  <Button variant="secondary" size="xl" className="rounded-full shadow-lg">
                    {slide.primaryCta.label}
                  </Button>
                </Link>
                <Link to={slide.secondaryCta.href}>
                  <Button variant="heroOutline" size="xl" className="rounded-full">
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
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:text-secondary-foreground md:left-8 md:h-14 md:w-14"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:text-secondary-foreground md:right-8 md:h-14 md:w-14"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots - styled like stars */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide 
                ? "scale-125" 
                : "opacity-50 hover:opacity-80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <Star 
              className={`h-4 w-4 ${
                index === currentSlide 
                  ? "fill-secondary text-secondary" 
                  : "fill-primary-foreground/50 text-primary-foreground/50"
              }`} 
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;