import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-12", align === "center" && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          dark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-lg",
            dark ? "text-primary-foreground/75" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
