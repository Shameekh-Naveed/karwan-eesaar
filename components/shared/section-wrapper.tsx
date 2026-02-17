import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: "default" | "alt" | "dark";
  className?: string;
  id?: string;
}

const variantStyles = {
  default: "bg-background text-foreground",
  alt: "bg-muted text-foreground",
  dark: "bg-primary text-primary-foreground",
};

export function SectionWrapper({
  children,
  variant = "default",
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", variantStyles[variant], className)}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
