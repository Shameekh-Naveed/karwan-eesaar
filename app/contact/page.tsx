import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { GoogleMap } from "@/components/contact/google-map";
import { SocialLinks } from "@/components/contact/social-links";
import { FaqSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eesaar Foundation. Send us a message, call us, or reach out on WhatsApp for donations, volunteering, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out for donations, volunteering, partnerships, or any questions."
      />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <SectionWrapper>
        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </SectionWrapper>
      <GoogleMap />
      <SocialLinks />
      <FaqSection />
    </>
  );
}
