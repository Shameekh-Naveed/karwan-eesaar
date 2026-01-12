import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, GraduationCap, Stethoscope, Briefcase, ArrowRight, Star } from "lucide-react";

const programs = [
  {
    icon: AlertTriangle,
    title: "Emergency Relief",
    description:
      "Rapid response to natural disasters, monthly ration drives for widows and orphans, and essential support during crises.",
    href: "/programs#relief",
    gradient: "from-destructive/10 to-destructive/5",
    iconBg: "bg-destructive/15",
    iconColor: "text-destructive",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    description:
      "IT classes for Huffaz, Taekwondo training, and uniform distribution for government school students.",
    href: "/programs#education",
    gradient: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Free eye camps with specialist teams, blood donation drives, and emergency ward support for patients.",
    href: "/programs#healthcare",
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: Briefcase,
    title: "Livelihood Support",
    description:
      "Sewing machine programs for women empowerment and skills training for sustainable income generation.",
    href: "/programs#livelihood",
    gradient: "from-trust/10 to-trust/5",
    iconBg: "bg-trust/15",
    iconColor: "text-trust",
  },
];

const ProgramsGrid = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-islamic opacity-50" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              What We Do
            </span>
            <Star className="h-5 w-5 fill-secondary text-secondary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Core Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive support across education, healthcare, emergency relief, and sustainable
            livelihood development
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${program.gradient} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 opacity-10">
                <Star className="h-24 w-24 text-primary" />
              </div>
              
              <div className="relative">
                <div
                  className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${program.iconBg} transition-transform group-hover:scale-110`}
                >
                  <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground md:text-2xl">{program.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{program.description}</p>
                <Link to={program.href} className="mt-6 inline-block">
                  <Button
                    variant="ghost"
                    className="group/btn -ml-4 gap-2 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;