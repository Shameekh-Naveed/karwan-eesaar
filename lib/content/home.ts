import { facts, formatPkr, pendingFacts } from "@/lib/content/facts";

const rationCost = pendingFacts.rationPackCostPkr;

export const hero = {
  // Leads with the ask in rupees as soon as the real ration cost is confirmed
  title: rationCost
    ? `${formatPkr(rationCost)} feeds a family for a month`
    : "No family should go to bed hungry",
  subtitle: `${facts.rationFamiliesMonthly}+ families in Mansehra get a food ration from us every month.`,
  secondaryCtaLabel: "Or volunteer with us",
  secondaryCtaLink: "/get-involved#volunteer",
};

// Four strongest figures: one row on desktop, 2 × 2 on phones
export const impactStats = [
  { value: facts.rationFamiliesMonthly, suffix: "+", label: "Families fed every month" },
  { value: facts.floodFamilies2022, suffix: "+", label: "Families helped in the 2022 floods" },
  { value: facts.eyeCampPatients, suffix: "+", label: "Patients treated at free eye camps" },
  { value: facts.huffazInIT, suffix: "+", label: "Huffaz learning IT skills" },
] as const;

export const corePrograms = [
  {
    icon: "HandHeart" as const,
    title: "Emergency relief",
    description: "Monthly rations, flood and disaster response.",
    href: "/programs/emergency-relief",
  },
  {
    icon: "GraduationCap" as const,
    title: "Education",
    description: "IT classes for Huffaz and school uniforms.",
    href: "/programs/education",
  },
  {
    icon: "Heart" as const,
    title: "Healthcare",
    description: "Free eye camps and blood drives.",
    href: "/programs/healthcare",
  },
  {
    icon: "Home" as const,
    title: "Livelihood",
    description: "Sewing machines so women can earn from home.",
    href: "/programs/livelihood",
  },
] as const;

export const featuredStory = {
  eyebrow: "From the field · 2025",
  title: "After the Battal cloud burst",
  body: `When a cloud burst swept through Battal, our volunteers brought blankets, crockery and household essentials to ${facts.battalFamilies2025}+ families who had lost almost everything.`,
  href: "/blog/cloud-burst-response-battal-2025",
};

export const waysToHelp = {
  donate: {
    title: "Donate",
    description: "Easypaisa or Meezan Bank. Takes two minutes.",
    ctaLabel: "Donate now",
    href: "/get-involved#donate",
  },
  others: [
    {
      title: "Volunteer",
      description: "Join a ration drive or teach a class.",
      href: "/get-involved#volunteer",
    },
    {
      title: "Intern",
      description: "Students: gain real experience with us.",
      href: "/get-involved#internship",
    },
  ],
};
