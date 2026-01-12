import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake } from "lucide-react";

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
    <section className="bg-primary py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            How You Can Help
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Every act of kindness counts. Choose how you'd like to make a difference today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-2xl p-8 text-center transition-all ${
                option.featured
                  ? "bg-secondary text-secondary-foreground shadow-xl"
                  : "bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm"
              }`}
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                  option.featured ? "bg-secondary-foreground/10" : "bg-primary-foreground/20"
                }`}
              >
                <option.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{option.title}</h3>
              <p
                className={`mt-2 flex-1 text-sm ${
                  option.featured ? "text-secondary-foreground/80" : "text-primary-foreground/70"
                }`}
              >
                {option.description}
              </p>
              <Link to={option.href} className="mt-6">
                <Button
                  variant={option.featured ? "default" : "heroOutline"}
                  className={option.featured ? "" : "border-primary-foreground/30"}
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
