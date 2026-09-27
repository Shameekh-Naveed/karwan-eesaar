import { facts } from "@/lib/content/facts";

export const programsOverview = {
  title: "Our programs",
  subtitle: "Five ways we reach families in need.",
};

export const programCategories = [
  {
    icon: "HandHeart" as const,
    title: "Emergency relief",
    description: `Monthly rations for ${facts.rationFamiliesMonthly}+ families, plus flood and disaster response.`,
    href: "/programs/emergency-relief",
  },
  {
    icon: "GraduationCap" as const,
    title: "Education & skills",
    description: `IT classes for ${facts.huffazInIT}+ Huffaz, Taekwondo training and school uniform drives.`,
    href: "/programs/education",
  },
  {
    icon: "Heart" as const,
    title: "Healthcare",
    description: `Free eye camps for ${facts.eyeCampPatients}+ patients and blood donation drives.`,
    href: "/programs/healthcare",
  },
  {
    icon: "Home" as const,
    title: "Livelihood & women",
    description: "Sewing machines and skills so women can earn from home.",
    href: "/programs/livelihood",
  },
  {
    icon: "Shield" as const,
    title: "Winter relief",
    description: "Blankets and warm clothes for SOS children and old age homes.",
    href: "/programs/winter-relief",
  },
] as const;

export const communityDrivesNote =
  "We also run cleanliness drives and traffic awareness campaigns in Mansehra.";

// Emergency Relief page content
export const emergencyRelief = {
  title: "Emergency relief & disaster response",
  description:
    "When disaster strikes, Karwan-e-Eesaar Welfare Organization responds. We provide immediate relief to affected families with food, shelter, clothing, and essential supplies.",
  sections: [
    {
      title: "Flood relief initiatives",
      items: [
        {
          title: "2022 flood response",
          description:
            "During the devastating 2022 floods, Karwan-e-Eesaar Welfare Organization mobilized volunteers to support over 500 families with clothes, food, and essential supplies. Our teams worked tirelessly to reach affected communities in Punjab and Sindh.",
          stats: `${facts.floodFamilies2022}+ families supported`,
        },
        {
          title: "2025 cloud burst response in Battal",
          description:
            "Following the 2025 cloud burst in Battal, our teams provided immediate relief to 10+ families with crockery, blankets, and household items essential for rebuilding their daily lives.",
          stats: `${facts.battalFamilies2025}+ families supported`,
        },
      ],
    },
    {
      title: "Monthly ration drive",
      items: [
        {
          title: "Supporting widows, orphans & needy families",
          description:
            "Our monthly ration drive provides essential food supplies to widows, orphans, and families in need. Each ration pack includes flour, rice, oil, lentils, sugar, and tea. Distributions happen on a regular schedule and donors can sponsor individual families or contribute to the general fund.",
          stats: `${facts.rationFamiliesMonthly}+ families monthly`,
        },
      ],
    },
    {
      title: "Qurbani meat distribution",
      items: [
        {
          title: "Annual Qurbani program",
          description:
            "Every year during Eid-ul-Adha, we organize Qurbani meat distribution to ensure underprivileged families can participate in the blessings of this occasion. Donors can contribute through us to fulfill their Qurbani obligation while supporting those in need.",
          stats: "Annual program",
        },
      ],
    },
    {
      title: "Emergency patient support",
      items: [
        {
          title: "Meal distribution for patients & families",
          description:
            "In 2025, Karwan-e-Eesaar Welfare Organization distributed meals to 50 families of patients at local hospitals. This initiative supports families during medical emergencies when financial strain is at its highest.",
          stats: `${facts.patientFamiliesFed2025} families supported (2025)`,
        },
      ],
    },
  ],
  ctaLabel: "Support Emergency Relief",
};

// Education page content
export const education = {
  title: "Education & skill development",
  description:
    "We believe in the transformative power of education. Our programs equip young people with knowledge, skills, and confidence for a brighter future.",
  sections: [
    {
      title: "IT classes for Huffaz",
      items: [
        {
          title: "Digital literacy program",
          description:
            "Our twice-weekly IT classes help Huffaz (those who have memorized the Quran) develop essential computer skills. From basic computer operation to internet usage and office software, we ensure these students can participate fully in the digital economy.",
          stats: "Twice-weekly sessions",
        },
        {
          title: "Volunteer instructor program",
          description:
            "Our classes are led by dedicated volunteer instructors who bring professional experience in IT. If you have computer skills to share, we welcome you to join our teaching team.",
          stats: "Volunteer-powered",
        },
      ],
    },
    {
      title: "Taekwondo training program",
      items: [
        {
          title: "Daily martial arts training",
          description:
            "Daily Taekwondo sessions for Huffaz build discipline, confidence, and physical fitness. The program focuses on character development alongside martial arts skills, preparing students for challenges in life.",
          stats: "Daily sessions",
        },
      ],
    },
    {
      title: "Uniform distribution drive",
      items: [
        {
          title: "Government primary school support",
          description:
            "Our uniform distribution drives support students at government primary schools with sweaters, socks, caps, shoes, and other essentials. Multiple phases have been completed, ensuring students can attend school with dignity and comfort regardless of their family's financial situation.",
          stats: "Multiple phases completed",
        },
      ],
    },
  ],
  ctaLabel: "Support Education",
};

// Healthcare page content
export const healthcare = {
  title: "Healthcare initiatives",
  description:
    "Access to healthcare is a fundamental right. Our medical camps and health programs serve communities that lack access to quality healthcare services.",
  sections: [
    {
      title: "Free eye camps",
      items: [
        {
          title: "Eye camp 2024 & 2025",
          description:
            "Our two-day free eye camps bring specialist teams from Sheikhupura to provide comprehensive eye examinations, treatments, and referrals. Over 200 patients have been treated across our camps, receiving care that would otherwise be inaccessible.",
          stats: `${facts.eyeCampPatients}+ patients treated`,
        },
        {
          title: "Future camp schedule",
          description:
            "We are planning to expand our eye camp program to reach more communities. Follow us on social media for announcements about upcoming camps in your area.",
          stats: "Expanding to new areas",
        },
      ],
    },
    {
      title: "Blood donation camps",
      items: [
        {
          title: "Ramadan 2024 blood drive",
          description:
            "Our Ramadan 2024 blood donation camp at the local mosque mobilized 50 donors in a single day. In partnership with blood banks, we ensure that donated blood reaches patients who need it most during the holy month and beyond.",
          stats: `${facts.bloodDonorsOneDay} donors in one camp`,
        },
      ],
    },
    {
      title: "Emergency ward support",
      items: [
        {
          title: "Hospital assistance programs",
          description:
            "We support patients in emergency wards with meals, medicine subsidies, and basic necessities. Our volunteers provide emotional support to families during medical crises, ensuring no one faces a health emergency alone.",
          stats: "Ongoing support",
        },
      ],
    },
  ],
  ctaLabel: "Support Healthcare",
};

// Livelihood page content
export const livelihood = {
  title: "Livelihood & women empowerment",
  description:
    "Empowering women with skills and tools for financial independence is central to sustainable community development.",
  sections: [
    {
      title: "Sewing machine support program",
      items: [
        {
          title: "Tools for independence",
          description:
            "Our sewing machine donation program provides women with the tools they need to generate income. In 2025, we donated 2 sewing machines to women who now run small tailoring businesses from their homes, supporting their families with dignity.",
          stats: `${facts.sewingMachines2025} machines donated (2025)`,
        },
        {
          title: "How to sponsor a machine",
          description:
            "Each sewing machine costs approximately PKR 15,000-25,000 and can transform a woman's life by providing a sustainable income source. Donors can sponsor individual machines or contribute to our general livelihood fund.",
          stats: "PKR 15,000-25,000 per machine",
        },
      ],
    },
    {
      title: "Skills training initiatives",
      items: [
        {
          title: "Expanding vocational support",
          description:
            "We are planning to expand our vocational training programs to include tailoring courses, handicraft skills, and other income-generating activities. Our goal is to create a sustainable pathway out of poverty for women in underserved communities.",
          stats: "Planning phase",
        },
      ],
    },
  ],
  ctaLabel: "Empower a Woman",
};

// Winter Relief page content
export const winterRelief = {
  title: "Winter relief programs",
  description:
    "When temperatures drop, the most vulnerable suffer the most. Our winter programs provide warmth and comfort to those who need it most.",
  sections: [
    {
      title: "SOS Children winter care",
      items: [
        {
          title: "Warmth for Children",
          description:
            "Our partnership with SOS Children's Village ensures that children receive blankets, warm clothes, caps, gloves, and other winter essentials. Every child deserves to be warm during the harsh winter months.",
          stats: "Blankets & warm clothes distributed",
        },
      ],
    },
    {
      title: "Old age home winter support",
      items: [
        {
          title: "Caring for our elders",
          description:
            "In partnership with local university societies, we provide winter essentials to old age homes. Items distributed include blankets, shawls, warm socks, and care packages designed to bring comfort to our elderly community members.",
          stats: "University partnership",
        },
      ],
    },
  ],
  ctaLabel: "Donate Winter Essentials",
};
