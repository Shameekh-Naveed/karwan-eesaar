export const programsOverview = {
  title: "Our Programs & Services",
  subtitle:
    "From emergency relief to education, healthcare to livelihood support — we serve communities across Pakistan with dignity and compassion.",
};

export const programCategories = [
  {
    icon: "HandHeart" as const,
    title: "Emergency Relief & Disaster Response",
    description:
      "Rapid response during natural disasters with food, shelter, and essential supplies for affected families.",
    href: "/programs/emergency-relief",
    stats: "500+ families supported",
  },
  {
    icon: "GraduationCap" as const,
    title: "Education & Skill Development",
    description:
      "IT classes for Huffaz, Taekwondo training, and school uniform drives empowering the next generation.",
    href: "/programs/education",
    stats: "30+ students enrolled",
  },
  {
    icon: "Heart" as const,
    title: "Healthcare Initiatives",
    description:
      "Free eye camps, blood donation drives, and emergency hospital support serving underserved communities.",
    href: "/programs/healthcare",
    stats: "250+ patients treated",
  },
  {
    icon: "Home" as const,
    title: "Livelihood & Women Empowerment",
    description:
      "Sewing machine support and skills training enabling women to achieve financial independence.",
    href: "/programs/livelihood",
    stats: "Women empowered",
  },
  {
    icon: "Shield" as const,
    title: "Winter Relief Programs",
    description:
      "Blankets, warm clothes, and essentials for SOS children, old age homes, and vulnerable families.",
    href: "/programs/winter-relief",
    stats: "Seasonal campaigns",
  },
] as const;

export const communityDrives = [
  {
    title: "Cleanliness Drive",
    description:
      "Community-wide clean-up campaigns promoting hygiene and environmental awareness.",
  },
  {
    title: "Traffic Awareness Campaign",
    description:
      "Educational campaigns promoting road safety and responsible driving in local communities.",
  },
  {
    title: "Emergency Support Initiatives",
    description:
      "Quick-response support for families facing sudden emergencies including meal distribution programs.",
  },
] as const;

// Emergency Relief page content
export const emergencyRelief = {
  title: "Emergency Relief & Disaster Response",
  description:
    "When disaster strikes, Eesaar Foundation responds. We provide immediate relief to affected families with food, shelter, clothing, and essential supplies.",
  sections: [
    {
      title: "Flood Relief Initiatives",
      items: [
        {
          title: "2022 Flood Response",
          description:
            "During the devastating 2022 floods, Eesaar Foundation mobilized volunteers to support over 500 families with clothes, food, and essential supplies. Our teams worked tirelessly to reach affected communities in Punjab and Sindh.",
          stats: "500+ families supported",
        },
        {
          title: "2025 Cloud Burst Response — Battal",
          description:
            "Following the 2025 cloud burst in Battal, our teams provided immediate relief to 10+ families with crockery, blankets, and household items essential for rebuilding their daily lives.",
          stats: "10+ families supported",
        },
      ],
    },
    {
      title: "Monthly Ration Drive",
      items: [
        {
          title: "Supporting Widows, Orphans & Needy Families",
          description:
            "Our monthly ration drive provides essential food supplies to widows, orphans, and families in need. Each ration pack includes flour, rice, oil, lentils, sugar, and tea. Distributions happen on a regular schedule and donors can sponsor individual families or contribute to the general fund.",
          stats: "100+ families monthly",
        },
      ],
    },
    {
      title: "Qurbani Meat Distribution",
      items: [
        {
          title: "Annual Qurbani Program",
          description:
            "Every year during Eid-ul-Adha, we organize Qurbani meat distribution to ensure underprivileged families can participate in the blessings of this occasion. Donors can contribute through us to fulfill their Qurbani obligation while supporting those in need.",
          stats: "Annual program",
        },
      ],
    },
    {
      title: "Emergency Patient Support",
      items: [
        {
          title: "Meal Distribution for Patients & Families",
          description:
            "In 2025, Eesaar Foundation distributed meals to 50 families of patients at local hospitals. This initiative supports families during medical emergencies when financial strain is at its highest.",
          stats: "50 families supported (2025)",
        },
      ],
    },
  ],
  ctaLabel: "Support Emergency Relief",
};

// Education page content
export const education = {
  title: "Education & Skill Development",
  description:
    "We believe in the transformative power of education. Our programs equip young people with knowledge, skills, and confidence for a brighter future.",
  sections: [
    {
      title: "IT Classes for Huffaz",
      items: [
        {
          title: "Digital Literacy Program",
          description:
            "Our twice-weekly IT classes help Huffaz (those who have memorized the Quran) develop essential computer skills. From basic computer operation to internet usage and office software, we ensure these students can participate fully in the digital economy.",
          stats: "Twice-weekly sessions",
        },
        {
          title: "Volunteer Instructor Program",
          description:
            "Our classes are led by dedicated volunteer instructors who bring professional experience in IT. If you have computer skills to share, we welcome you to join our teaching team.",
          stats: "Volunteer-powered",
        },
      ],
    },
    {
      title: "Taekwondo Training Program",
      items: [
        {
          title: "Daily Martial Arts Training",
          description:
            "Daily Taekwondo sessions for Huffaz build discipline, confidence, and physical fitness. The program focuses on character development alongside martial arts skills, preparing students for challenges in life.",
          stats: "Daily sessions",
        },
      ],
    },
    {
      title: "Uniform Distribution Drive",
      items: [
        {
          title: "Government Primary School Support",
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
  title: "Healthcare Initiatives",
  description:
    "Access to healthcare is a fundamental right. Our medical camps and health programs serve communities that lack access to quality healthcare services.",
  sections: [
    {
      title: "Free Eye Camps",
      items: [
        {
          title: "Eye Camp 2024 & 2025",
          description:
            "Our two-day free eye camps bring specialist teams from Sheikhupura to provide comprehensive eye examinations, treatments, and referrals. Over 200 patients have been treated across our camps, receiving care that would otherwise be inaccessible.",
          stats: "200+ patients treated",
        },
        {
          title: "Future Camp Schedule",
          description:
            "We are planning to expand our eye camp program to reach more communities. Follow us on social media for announcements about upcoming camps in your area.",
          stats: "Expanding to new areas",
        },
      ],
    },
    {
      title: "Blood Donation Camps",
      items: [
        {
          title: "Ramadan 2024 Blood Drive",
          description:
            "Our Ramadan 2024 blood donation camp at the local mosque mobilized 50 donors in a single day. In partnership with blood banks, we ensure that donated blood reaches patients who need it most during the holy month and beyond.",
          stats: "50 donors in one camp",
        },
      ],
    },
    {
      title: "Emergency Ward Support",
      items: [
        {
          title: "Hospital Assistance Programs",
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
  title: "Livelihood & Women Empowerment",
  description:
    "Empowering women with skills and tools for financial independence is central to sustainable community development.",
  sections: [
    {
      title: "Sewing Machine Support Program",
      items: [
        {
          title: "Tools for Independence",
          description:
            "Our sewing machine donation program provides women with the tools they need to generate income. In 2025, we donated 2 sewing machines to women who now run small tailoring businesses from their homes, supporting their families with dignity.",
          stats: "2 machines donated (2025)",
        },
        {
          title: "How to Sponsor a Machine",
          description:
            "Each sewing machine costs approximately PKR 15,000-25,000 and can transform a woman's life by providing a sustainable income source. Donors can sponsor individual machines or contribute to our general livelihood fund.",
          stats: "PKR 15,000-25,000 per machine",
        },
      ],
    },
    {
      title: "Skills Training Initiatives",
      items: [
        {
          title: "Expanding Vocational Support",
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
  title: "Winter Relief Programs",
  description:
    "When temperatures drop, the most vulnerable suffer the most. Our winter programs provide warmth and comfort to those who need it most.",
  sections: [
    {
      title: "SOS Children Winter Care",
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
      title: "Old Age Home Winter Support",
      items: [
        {
          title: "Caring for Our Elders",
          description:
            "In partnership with local university societies, we provide winter essentials to old age homes. Items distributed include blankets, shawls, warm socks, and care packages designed to bring comfort to our elderly community members.",
          stats: "University partnership",
        },
      ],
    },
  ],
  ctaLabel: "Donate Winter Essentials",
};
