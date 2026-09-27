export const siteConfig = {
  name: "Karwan-e-Eesaar Welfare Organization",
  tagline: "Serving Humanity, Creating Impact",
  description:
    "Karwan-e-Eesaar Welfare Organization is a Mansehra-based charity providing monthly rations, education, healthcare, and emergency relief to families in need across Pakistan.",
  url: "https://eesaar.org",
  whatsapp: {
    number: "923440992830",
    donateMessage:
      "Hello! I would like to make a donation to Karwan-e-Eesaar Welfare Organization.",
    volunteerMessage:
      "Hello! I would like to volunteer with Karwan-e-Eesaar Welfare Organization.",
    generalMessage:
      "Hello! I would like to learn more about Karwan-e-Eesaar Welfare Organization.",
  },
  contact: {
    // TODO: confirm a public email address with Qazi Hamza; hidden everywhere while null
    email: null as string | null,
    phone: "+92 344 0992830",
    address: "Old College Road, Mansehra 21300, Pakistan",
    mapsUrl: "https://maps.google.com/?q=Old+College+Road+Mansehra+21300",
  },
  donation: {
    easypaisa: {
      number: "0344-0992830",
      accountName: "Qazi Hamza Hassan",
    },
    bank: {
      bankName: "Meezan Bank",
      accountTitle: "Qazi Hamza Hassan",
      accountNumber: "30010109329538",
    },
  },
  social: {
    instagram: "https://www.instagram.com/karwan_eesaar/",
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
