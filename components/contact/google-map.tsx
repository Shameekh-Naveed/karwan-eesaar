import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

export function GoogleMap() {
  return (
    <SectionWrapper variant="alt">
      <SectionHeading
        title="Find Us"
        subtitle={siteConfig.contact.address}
      />
      <PlaceholderImage
        className="h-64 w-full md:h-80"
        variant="secondary"
        label="Map Placeholder — Google Maps embed will be added here"
      />
    </SectionWrapper>
  );
}
