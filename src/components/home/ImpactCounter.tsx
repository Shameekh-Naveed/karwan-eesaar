import { useEffect, useState, useRef } from "react";
import { Users, Droplets, GraduationCap, Eye, Heart, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Families Supported Monthly",
  },
  {
    icon: Heart,
    value: 500,
    suffix: "+",
    label: "Flood Relief Beneficiaries",
  },
  {
    icon: Droplets,
    value: 50,
    suffix: "+",
    label: "Blood Donors Mobilized",
  },
  {
    icon: GraduationCap,
    value: 30,
    suffix: "+",
    label: "Students in IT Classes",
  },
  {
    icon: Eye,
    value: 200,
    suffix: "+",
    label: "Eye Camp Patients Treated",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-4xl font-bold text-primary md:text-5xl">
      {count}
      {suffix}
    </div>
  );
};

const ImpactCounter = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-20 md:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-10 top-10 opacity-10">
        <Star className="h-20 w-20 fill-primary text-primary" />
      </div>
      <div className="absolute right-20 bottom-10 opacity-10">
        <Star className="h-16 w-16 fill-secondary text-secondary" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-secondary text-secondary" />
            <span className="text-sm font-medium uppercase tracking-wider text-secondary">
              Our Impact
            </span>
            <Star className="h-5 w-5 fill-secondary text-secondary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Making a Difference Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Together, we're transforming lives and building stronger communities
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-md transition-transform group-hover:scale-110">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;