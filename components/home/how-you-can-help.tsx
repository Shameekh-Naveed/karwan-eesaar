import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import { howYouCanHelp } from "@/lib/content/home";
import { getWhatsAppLink } from "@/lib/site-config";

export function HowYouCanHelp() {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        title="How You Can Help"
        subtitle="Every act of kindness creates a ripple of change. Here's how you can be part of the movement."
        dark
      />
      <div className="grid gap-8 md:grid-cols-3">
        {howYouCanHelp.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-5 flex justify-center">
              <IconBox
                icon={item.icon as IconName}
                size="lg"
                className="bg-white/10 text-white transition-colors group-hover:bg-secondary/30 group-hover:text-secondary"
              />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mb-6 leading-relaxed text-white/70">
              {item.description}
            </p>
            <Button
              asChild
              className="rounded-xl bg-white/15 text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              <a
                href={getWhatsAppLink(item.ctaType)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.ctaLabel}
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
