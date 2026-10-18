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

export const featuredStory = {
  eyebrow: "From the field · Eye camps",
  title: "Free eye camps, 2024 and 2025",
  body: `Specialists from Sheikhupura join our volunteers in Mansehra for two-day camps: eye tests, spectacles and medicines, all free. ${facts.eyeCampPatients}+ patients were treated at the 2024 camp alone.`,
  href: "/blog/eye-camp-200-patients-2024",
  photos: {
    main: "Doctors examining patients at the August 2024 eye camp",
    second: "A girl having her eyes tested at the June 2025 camp",
    third: "Women choosing their free spectacles, June 2025",
  },
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
