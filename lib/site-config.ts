export const siteConfig = {
  name: "Karwan-e-Eesaar Welfare Organization",
  tagline: "Serving Humanity, Creating Impact",
  description:
    "Karwan-e-Eesaar Welfare Organization is a Mansehra-based charity providing monthly rations, education, healthcare, and emergency relief to families in need across Pakistan.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel if the live domain differs from this default
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.karwaneesaar.com",
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
      // TODO: get the exact IBAN from Qazi Hamza (shown only once set; never guess it)
      iban: null as string | null,
    },
    // TODO: confirm wording; explains why the accounts are in a personal name
    holderNote: "Both accounts are held by Qazi Hamza Hassan on behalf of Karwan-e-Eesaar.",
  },
  social: {
    instagram: "https://www.instagram.com/karwan_eesaar/",
  },
} as const;

/** Origin with no trailing slash, for canonical, Open Graph and sitemap URLs. */
export const siteUrl = siteConfig.url.replace(/\/$/, "");

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
