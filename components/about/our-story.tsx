import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { ourStory } from "@/lib/content/about";

export function OurStory() {
  return (
    <SectionWrapper variant="alt">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading title={ourStory.title} align="left" />
          <div className="space-y-4">
            {ourStory.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <PlaceholderImage
          className="h-80 w-full md:h-96"
          variant="primary"
          label="Our Story"
        />
      </div>
    </SectionWrapper>
  );
}
