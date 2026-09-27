import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

export function GoogleMap() {
  return (
    <SectionWrapper variant="alt">
      <SectionHeading title="Find Us" subtitle={siteConfig.contact.address} />
      <iframe
        title={`Map showing ${siteConfig.contact.address}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
        className="h-64 w-full rounded-2xl border-0 md:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </SectionWrapper>
  );
}
