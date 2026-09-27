import { siteConfig } from "@/lib/site-config";

const { easypaisa, bank } = siteConfig.donation;

export const faqItems = [
  {
    question: "How can I donate to Karwan-e-Eesaar Welfare Organization?",
    answer: `Send to Easypaisa ${easypaisa.number} or ${bank.bankName} account ${bank.accountNumber} (title: ${bank.accountTitle}), then message us on WhatsApp so we can confirm we received it.`,
  },
  {
    question: "How do I become a volunteer?",
    answer:
      "Fill in the volunteer form on our Get Involved page. Our team will call you to discuss opportunities that match your skills and availability. Students can apply for an internship on the same page.",
  },
  {
    question: "Where does Karwan-e-Eesaar Welfare Organization operate?",
    answer:
      "We are based on Old College Road, Mansehra, and run drives in surrounding communities, with relief work further afield when disasters strike.",
  },
  {
    question: "How do I know my donation arrived?",
    answer:
      "Message us on WhatsApp after you send it and we'll confirm we received it.",
  },
  {
    question: "Can I visit Karwan-e-Eesaar Welfare Organization's projects?",
    answer:
      "Absolutely! We welcome donors and supporters to visit our projects. Please contact us to arrange a field visit at a convenient time.",
  },
] as const;

export const contactDetails = {
  phone: {
    icon: "Phone" as const,
    label: "Call Us",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  whatsapp: {
    icon: "MessageCircle" as const,
    label: "WhatsApp",
    value: siteConfig.contact.phone,
  },
  address: {
    icon: "MapPin" as const,
    label: "Visit Us",
    value: siteConfig.contact.address,
    href: siteConfig.contact.mapsUrl,
  },
} as const;

// Add Facebook / YouTube etc. here once real accounts are confirmed
export const socialLinks = [
  {
    icon: "Instagram" as const,
    label: "@karwan_eesaar",
    href: siteConfig.social.instagram,
  },
] as const;
