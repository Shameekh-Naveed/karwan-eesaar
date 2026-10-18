import { facts } from "@/lib/content/facts";

export interface Highlight {
  value: string;
  label: string;
}

export interface Initiative {
  title: string;
  /** One or two sentences, no more */
  summary: string;
  /** Short scannable facts */
  points?: readonly string[];
  /** Headline figure shown as a pill, e.g. "500+ families" */
  stat?: string;
  /** Describes the photo in public/photos/program-<slug>-<n>.jpg; say what and when, never guess */
  photoAlt?: string;
  photoPosition?: "top" | "center" | "bottom";
}

export interface Program {
  slug: string;
  icon: "HandHeart" | "GraduationCap" | "Heart" | "Home" | "Shield";
  title: string;
  /** Shown on cards and under the page title */
  tagline: string;
  photoAlt: string;
  photoPosition?: "top" | "center" | "bottom";
  highlights: readonly Highlight[];
  initiatives: readonly Initiative[];
  ctaLabel: string;
  seoDescription: string;
}

export const programsOverview = {
  title: "Our programs",
  subtitle: "Five ways we reach families in need.",
};

export const communityDrivesNote =
  "We also run cleanliness drives and traffic awareness campaigns in Mansehra.";

export const programs: readonly Program[] = [
  {
    slug: "emergency-relief",
    icon: "HandHeart",
    title: "Emergency relief",
    tagline: "Monthly rations, plus fast help when floods and disasters strike.",
    photoAlt: "Ration packs lined up under the Karwan-e-Eesaar banner, ready for distribution",
    photoPosition: "bottom",
    highlights: [
      { value: `${facts.rationFamiliesMonthly}+`, label: "families get rations every month" },
      { value: `${facts.floodFamilies2022}+`, label: "families helped in the 2022 floods" },
      { value: `${facts.patientFamiliesFed2025}`, label: "patient families given meals in 2025" },
    ],
    initiatives: [
      {
        title: "Monthly ration drive",
        stat: `${facts.rationFamiliesMonthly}+ families a month`,
        photoAlt: "Rows of monthly ration packs: flour, pulses, oil and spices, packed for each family",
        summary: "Widows, orphans and families in need receive a ration pack every month.",
        points: ["Flour, rice, oil, lentils, sugar and tea", "Sponsor one family or give to the fund"],
      },
      {
        title: "Flood & disaster response",
        stat: `${facts.floodFamilies2022}+ families in 2022`,
        photoAlt: "A pickup loaded with blankets and bedding leaving for the 2022 flood victims",
        photoPosition: "bottom",
        summary: "When floods hit Punjab and Sindh in 2022, our volunteers brought food, clothes and supplies.",
        points: [
          `2025 Battal cloud burst: ${facts.battalFamilies2025}+ families`,
          "Blankets, crockery and household items",
        ],
      },
      {
        title: "Qurbani meat distribution",
        stat: "Every Eid-ul-Adha",
        photoAlt: "Qurbani meat portioned into bags for families, Eid-ul-Adha 2025",
        summary: "Donors can give their Qurbani through us so families in need share in Eid.",
      },
      {
        title: "Meals for patients' families",
        stat: `${facts.patientFamiliesFed2025} families in 2025`,
        summary: "Meals for families waiting at local hospitals, when money is tightest.",
      },
    ],
    ctaLabel: "Support emergency relief",
    seoDescription:
      "Monthly ration drives, flood and disaster relief, Qurbani distribution and meals for patients' families.",
  },
  {
    slug: "education",
    icon: "GraduationCap",
    title: "Education & skills",
    tagline: "IT classes for Huffaz, Taekwondo training and school uniforms.",
    photoAlt: "Schoolboys lined up in the new sweaters and caps from our December 2023 uniform drive",
    highlights: [
      { value: `${facts.huffazInIT}+`, label: "Huffaz learning IT skills" },
      { value: "2×", label: "IT classes every week" },
      { value: "Daily", label: "Taekwondo sessions" },
    ],
    initiatives: [
      {
        title: "IT classes for Huffaz",
        stat: "Twice a week",
        summary: "Huffaz learn the computer skills they need for work, taught by volunteer instructors.",
        points: ["Computer basics and the internet", "Office software", "Taught by volunteers with IT experience"],
      },
      {
        title: "Taekwondo training",
        stat: "Daily sessions",
        summary: "Daily training that builds discipline, confidence and fitness.",
      },
      {
        title: "School uniform drive",
        stat: "Multiple phases done",
        photoAlt: "Boys holding their new uniform bags in the school yard, December 2024",
        summary: "Students at government primary schools get what they need to attend with dignity.",
        points: ["Sweaters, socks, caps and shoes"],
      },
    ],
    ctaLabel: "Support education",
    seoDescription:
      "IT classes for Huffaz, Taekwondo training and school uniform drives for government primary schools.",
  },
  {
    slug: "healthcare",
    icon: "Heart",
    title: "Healthcare",
    tagline: "Free eye camps and blood donation drives.",
    photoAlt: "Doctors examining patients in a packed hall at the June 2025 free eye camp",
    highlights: [
      { value: `${facts.eyeCampPatients}+`, label: "patients treated at eye camps" },
      { value: `${facts.bloodDonorsOneDay}`, label: "blood donors in one day" },
      { value: "Free", label: "for every patient" },
    ],
    initiatives: [
      {
        title: "Free eye camps",
        stat: `${facts.eyeCampPatients}+ patients`,
        photoAlt: "Women choosing their free spectacles at the June 2025 eye camp",
        photoPosition: "top",
        summary: "Two-day camps with specialists from Sheikhupura: check-ups, treatment and referrals.",
        points: ["Held in 2024 and 2025", "More areas planned; follow us for dates"],
      },
      {
        title: "Blood donation camps",
        stat: `${facts.bloodDonorsOneDay} donors in one day`,
        summary: "Our Ramadan 2024 camp at the local mosque, run with blood banks.",
      },
      {
        title: "Emergency ward support",
        stat: "Ongoing",
        summary: "Meals, medicine help and basic needs for patients in emergency wards and their families.",
      },
    ],
    ctaLabel: "Support healthcare",
    seoDescription: "Free eye camps, blood donation drives and emergency ward support.",
  },
  {
    slug: "livelihood",
    icon: "Home",
    title: "Livelihood & women",
    tagline: "Sewing machines and skills so women can earn from home.",
    photoAlt: "A woman working at a donated sewing machine",
    highlights: [
      { value: `${facts.sewingMachines2025}`, label: "sewing machines donated in 2025" },
      { value: "Rs 15–25k", label: "sponsors one machine" },
    ],
    initiatives: [
      {
        title: "Sewing machine program",
        stat: `${facts.sewingMachines2025} machines in 2025`,
        summary: "Women receive a sewing machine and run small tailoring work from home.",
        points: ["One machine costs about Rs 15,000 to 25,000", "Sponsor a machine or give to the fund"],
      },
      {
        title: "Skills training",
        stat: "Planned",
        summary: "We plan to add tailoring and handicraft courses so more women can earn.",
      },
    ],
    ctaLabel: "Sponsor a machine",
    seoDescription: "Sewing machine donations and skills training so women can earn from home.",
  },
  {
    slug: "winter-relief",
    icon: "Shield",
    title: "Winter relief",
    tagline: "Blankets and warm clothes for children and the elderly.",
    photoAlt: "Schoolchildren holding the warm sweaters we handed out in December 2023",
    highlights: [
      { value: "SOS", label: "Children's Village partner" },
      { value: "2", label: "groups reached: children and elders" },
    ],
    initiatives: [
      {
        title: "SOS Children's Village",
        stat: "Winter 2024",
        summary: "Children received winter essentials so no child is cold.",
        points: ["Blankets and warm clothes", "Caps and gloves"],
      },
      {
        title: "Old age homes",
        stat: "With university societies",
        summary: "Care packages that bring warmth and comfort to elderly residents.",
        points: ["Blankets and shawls", "Warm socks"],
      },
    ],
    ctaLabel: "Donate winter essentials",
    seoDescription: "Winter essentials for SOS Children's Village and old age homes.",
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
