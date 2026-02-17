"use client";

import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { impactStats } from "@/lib/content/home";

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref}>
      <div className="text-4xl font-extrabold text-secondary md:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
}

export function ImpactCounter() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-white" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-white" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-white/70">
            Every number represents a life touched, a family supported.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-white/70 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
