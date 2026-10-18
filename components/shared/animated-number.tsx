"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Counts up from zero once scrolled into view; shows the final value at once under reduced motion. */
export function AnimatedNumber({
  target,
  suffix = "",
  className,
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

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

        const duration = 1600;
        const startTime = performance.now();
        function animate(now: number) {
          // rAF timestamps can precede startTime by a frame, so clamp at 0 too
          const progress = Math.min(Math.max((now - startTime) / duration, 0), 1);
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
    <span ref={ref} className={cn("tabular-nums", className)}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
