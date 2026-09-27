"use client";

import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/lib/content/home";

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(target);
          return;
        }

        const duration = 1800;
        const startTime = performance.now();

        function animate(currentTime: number) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCount(Math.round(eased * target));
          if (progress < 1) frame = requestAnimationFrame(animate);
        }

        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      className="font-heading text-4xl font-extrabold tabular-nums text-gold md:text-6xl"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function ImpactCounter() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold uppercase tracking-tight md:mb-16 md:text-4xl">
          Our impact in numbers
        </h2>

        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-y-14">
          {impactStats.map((stat) => (
            // dt must precede dd in markup; flex-col-reverse puts the number on top visually
            <div key={stat.label} className="flex flex-col-reverse text-center">
              <dt className="mx-auto mt-2 max-w-[16ch] text-sm font-medium text-primary-foreground/75 md:text-base">
                {stat.label}
              </dt>
              <dd>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
