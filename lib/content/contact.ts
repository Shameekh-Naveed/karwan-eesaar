export const faqItems = [
  {
    question: "How can I donate to Eesaar Foundation?",
    answer:
      "You can donate via WhatsApp by clicking the Donate button on our website. We accept bank transfers and mobile payments. Our team will guide you through the process.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Eesaar Foundation is a registered non-profit organization. We provide donation receipts that can be used for tax purposes where applicable.",
  },
  {
    question: "How do I become a volunteer?",
    answer:
      "Simply reach out to us via WhatsApp or fill out the contact form on this page. Our volunteer coordinator will get in touch with you to discuss opportunities that match your skills and availability.",
  },
  {
    question: "Where does Eesaar Foundation operate?",
    answer:
      "We currently operate in over 50 communities across Punjab, Sindh, and Khyber Pakhtunkhwa provinces of Pakistan.",
  },
  {
    question: "How is my donation used?",
    answer:
      "We maintain full transparency in fund allocation. On average, 85% of donations go directly to program delivery, 10% to operations, and 5% to administration. Detailed reports are shared with donors regularly.",
  },
  {
    question: "Can I visit Eesaar Foundation's projects?",
    answer:
      "Absolutely! We welcome donors and supporters to visit our projects. Please contact us to arrange a field visit at a convenient time.",
  },
] as const;

export const contactDetails = {
  email: {
    icon: "Mail" as const,
    label: "Email Us",
    value: "info@eesaar.org",
    href: "mailto:info@eesaar.org",
  },
  phone: {
    icon: "Phone" as const,
    label: "Call Us",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
  },
  whatsapp: {
    icon: "MessageCircle" as const,
    label: "WhatsApp",
    value: "+92 300 1234567",
  },
  address: {
    icon: "MapPin" as const,
    label: "Visit Us",
    value: "123 Main Boulevard, Gulberg III, Lahore, Pakistan",
    href: "https://maps.google.com/?q=Gulberg+III+Lahore+Pakistan",
  },
} as const;

export const socialLinks = [
  {
    icon: "Facebook" as const,
    label: "Facebook",
    href: "https://facebook.com/eesaarfoundation",
  },
  {
    icon: "Instagram" as const,
    label: "Instagram",
    href: "https://instagram.com/eesaarfoundation",
  },
  {
    icon: "Twitter" as const,
    label: "Twitter",
    href: "https://twitter.com/eesaarfoundation",
  },
  {
    icon: "Linkedin" as const,
    label: "LinkedIn",
    href: "https://linkedin.com/company/eesaarfoundation",
  },
  {
    icon: "Youtube" as const,
    label: "YouTube",
    href: "https://youtube.com/@eesaarfoundation",
  },
] as const;
