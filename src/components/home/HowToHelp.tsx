import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, Star } from "lucide-react";

const helpOptions = [
  {
    icon: Heart,
    title: "Donate Now",
    description:
      "Your contribution, no matter how small, can make a significant difference in someone's life.",
    cta: "Make a Donation",
    href: "/get-involved#donate",
    featured: true,
  },
  {
    icon: Users,
    title: "Volunteer With Us",
    description:
      "Join our team of dedicated volunteers and be part of the change you wish to see.",
    cta: "Become a Volunteer",
    href: "/get-involved#volunteer",
    featured: false,
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Collaborate with us as a corporate partner or institution to amplify our impact.",
    cta: "Explore Partnership",
    href: "/get-involved#partner",
    featured: false,
  },
];

const HowToHelp = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95 py-20 md:py-28">
      {/* Decorative stars */}
      <div className="absolute left-10 top-20 opacity-20">
        <Star className="h-12 w-12 fill-secondary text-secondary animate-float" />
      </div>
      <div className="absolute right-20 top-32 opacity-15">
        <Star className="h-8 w-8 fill-primary-foreground text-primary-foreground animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute left-1/4 bottom-20 opacity-15">
        <Star className="h-10 w-10 fill-secondary text-secondary animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute right-10 bottom-32 opacity-20">
        <Star className="h-6 w-6 fill-primary-foreground text-primary-foreground animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              Get Involved
            </span>
            <Star className="h-5 w-5 fill-secondary text-secondary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            How You Can Help
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75">
            Every act of kindness counts. Choose how you'd like to make a difference today.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                option.featured
                  ? "bg-secondary text-secondary-foreground shadow-2xl"
                  : "border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10"
              }`}
            >
              <div
                className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                  option.featured 
                    ? "bg-secondary-foreground/10" 
                    : "bg-primary-foreground/10"
                }`}
              >
                <option.icon className={`h-10 w-10 ${option.featured ? 'text-secondary-foreground' : 'text-secondary'}`} />
              </div>
              <h3 className="text-xl font-bold">{option.title}</h3>
              <p
                className={`mt-3 flex-1 text-sm leading-relaxed ${
                  option.featured ? "text-secondary-foreground/80" : "text-primary-foreground/70"
                }`}
              >
                {option.description}
              </p>
              <Link to={option.href} className="mt-6">
                <Button
                  variant={option.featured ? "default" : "secondary"}
                  className={`rounded-full px-6 ${option.featured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                >
                  {option.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;