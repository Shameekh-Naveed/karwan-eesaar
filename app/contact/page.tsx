import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { GoogleMap } from "@/components/contact/google-map";
import { SocialLinks } from "@/components/contact/social-links";
import { FaqSection } from "@/components/contact/faq-section";
import { DonateBand } from "@/components/shared/donate-band";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Karwan-e-Eesaar Welfare Organization. Send us a message, call us, or reach out on WhatsApp for donations, volunteering, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Questions, partnerships, or just want to say salaam."
      />
      <SectionWrapper>
        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </SectionWrapper>
      <GoogleMap />
      <SocialLinks />
      <FaqSection />
      <DonateBand />
    </>
  );
}
