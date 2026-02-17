import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "accent";
}

const gradients = {
  primary: "from-primary/20 to-secondary/20",
  secondary: "from-secondary/20 to-accent/20",
  accent: "from-accent/20 to-primary/20",
};

export function PlaceholderImage({
  className,
  label,
  variant = "primary",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-gradient-to-br",
        gradients[variant],
        className
      )}
    >
      {label && (
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}
