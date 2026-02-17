import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { socialLinks } from "@/lib/content/contact";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const iconMap = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} as const;

export function SocialLinks() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="Follow Us"
        subtitle="Stay connected through our social media channels."
      />
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon as keyof typeof iconMap];
          return (
            <Button
              key={link.label}
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon className="size-5" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
