import { cn } from "@/lib/utils";
import {
  GraduationCap,
  Heart,
  Home,
  HandHeart,
  Users,
  Share2,
  Eye,
  Target,
  Shield,
  Lightbulb,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

const iconMap = {
  GraduationCap,
  Heart,
  Home,
  HandHeart,
  Users,
  Share2,
  Eye,
  Target,
  Shield,
  Lightbulb,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} as const;

export type IconName = keyof typeof iconMap;

interface IconBoxProps {
  icon: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent";
}

const sizeStyles = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const iconSizes = {
  sm: 18,
  md: 22,
  lg: 28,
};

const variantStyles = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/30 text-accent-foreground",
};

export function IconBox({
  icon,
  className,
  size = "md",
  variant = "primary",
}: IconBoxProps) {
  const Icon = iconMap[icon];
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      <Icon size={iconSizes[size]} />
    </div>
  );
}
