import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, GraduationCap, Stethoscope, Briefcase, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: AlertTriangle,
    title: "Emergency Relief",
    description:
      "Rapid response to natural disasters, monthly ration drives for widows and orphans, and essential support during crises.",
    href: "/programs#relief",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    description:
      "IT classes for Huffaz, Taekwondo training, and uniform distribution for government school students.",
    href: "/programs#education",
    color: "text-trust",
    bgColor: "bg-trust/10",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Free eye camps with specialist teams, blood donation drives, and emergency ward support for patients.",
    href: "/programs#healthcare",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Briefcase,
    title: "Livelihood Support",
    description:
      "Sewing machine programs for women empowerment and skills training for sustainable income generation.",
    href: "/programs#livelihood",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const ProgramsGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Core Programs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive support across education, healthcare, emergency relief, and sustainable
            livelihood development
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col p-6">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${program.bgColor}`}
                >
                  <program.icon className={`h-7 w-7 ${program.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{program.description}</p>
                <Link to={program.href} className="mt-4">
                  <Button
                    variant="ghost"
                    className="group/btn -ml-4 gap-2 text-primary hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
