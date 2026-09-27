import { siteConfig } from "@/lib/site-config";

const { easypaisa, bank } = siteConfig.donation;

export const faqItems = [
  {
    question: "How can I donate to Karwan-e-Eesaar Welfare Organization?",
    answer: `Send to Easypaisa ${easypaisa.number} or ${bank.bankName} account ${bank.accountNumber} (title: ${bank.accountTitle}), then message us on WhatsApp so we can confirm and send a receipt.`,
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Karwan-e-Eesaar Welfare Organization is a registered non-profit organization. We provide donation receipts that can be used for tax purposes where applicable.",
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
    question: "How is my donation used?",
    answer:
      "We maintain full transparency in fund allocation. On average, 85% of donations go directly to program delivery, 10% to operations, and 5% to administration. Detailed reports are shared with donors regularly.",
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
