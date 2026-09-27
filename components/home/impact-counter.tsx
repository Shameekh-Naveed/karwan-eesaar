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
  const ref = useRef<HTMLParagraphElement>(null);

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
          // rAF timestamps can precede startTime by a frame, so clamp at 0 too
          const progress = Math.min(Math.max((currentTime - startTime) / duration, 0), 1);
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
    <p
      ref={ref}
      className="font-heading text-4xl font-extrabold tabular-nums text-primary md:text-5xl"
    >
      {count.toLocaleString()}
      {suffix}
    </p>
  );
}

export function ImpactCounter() {
  return (
    <section aria-label="Our impact in numbers" className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* items-start keeps every number on the same line, however long its label */}
        <ul className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-x-6 gap-y-10 md:grid-cols-4">
          {impactStats.map((stat) => (
            <li key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mx-auto mt-2 max-w-[18ch] text-sm font-medium text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
