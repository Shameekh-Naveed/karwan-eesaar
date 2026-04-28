export const siteConfig = {
  name: "Karwan-e-Eesaar Welfare Organization",
  tagline: "Empowering Communities, Transforming Lives",
  description:
    "Karwan-e-Eesaar Welfare Organization is a Pakistani charitable organization dedicated to education, healthcare, and community development. Join us in making a difference.",
  url: "https://eesaar.org",
  whatsapp: {
    number: "923001234567",
    donateMessage:
      "Hello! I would like to make a donation to Karwan-e-Eesaar Welfare Organization.",
    volunteerMessage:
      "Hello! I would like to volunteer with Karwan-e-Eesaar Welfare Organization.",
    generalMessage:
      "Hello! I would like to learn more about Karwan-e-Eesaar Welfare Organization.",
  },
  contact: {
    email: "info@eesaar.org",
    phone: "+92 300 1234567",
    address: "123 Main Boulevard, Gulberg III, Lahore, Pakistan",
  },
  social: {
    facebook: "https://facebook.com/eesaarfoundation",
    instagram: "https://instagram.com/eesaarfoundation",
    twitter: "https://twitter.com/eesaarfoundation",
    linkedin: "https://linkedin.com/company/eesaarfoundation",
    youtube: "https://youtube.com/@eesaarfoundation",
  },
} as const;

export function getWhatsAppLink(
  type: "donate" | "volunteer" | "general" = "general"
) {
  const messages = {
    donate: siteConfig.whatsapp.donateMessage,
    volunteer: siteConfig.whatsapp.volunteerMessage,
    general: siteConfig.whatsapp.generalMessage,
  };
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(messages[type])}`;
}
