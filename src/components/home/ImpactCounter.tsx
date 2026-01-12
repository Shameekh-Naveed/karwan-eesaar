import { useEffect, useState, useRef } from "react";
import { Users, Droplets, GraduationCap, Eye, Heart } from "lucide-react";

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
    <section className="bg-accent py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Together, we're making a difference in the lives of those who need it most
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
