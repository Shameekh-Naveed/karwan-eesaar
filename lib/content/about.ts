import { facts } from "@/lib/content/facts";

export const visionMission = {
  vision:
    "A Pakistan where every family, whatever its circumstances, can live with dignity: fed, schooled and cared for.",
  mission:
    "To reach families in need with food, education, healthcare and emergency relief, guided by the Islamic spirit of eesaar: putting others before ourselves.",
} as const;

export const ourStory = {
  title: "Our story",
  paragraphs: [
    "Karwan-e-Eesaar is a welfare organization based on Old College Road, Mansehra. It began with small relief efforts by people who wanted to help their neighbours.",
    `Today we run a monthly ration drive for ${facts.rationFamiliesMonthly}+ families, free eye camps, IT classes for Huffaz, and relief whenever disaster strikes.`,
  ],
  values: ["Compassion", "Transparency", "Dignity"],
} as const;

export interface TimelineEntry {
  /** Short headline figure; omitted when there's no number to show */
  figure?: string;
  label: string;
}

export const timeline: readonly {
  year: string;
  photoAlt: string;
  photoPosition?: "top" | "center" | "bottom";
  entries: readonly TimelineEntry[];
}[] = [
  {
    year: "2025",
    photoAlt: "A girl having her eyes tested at the June 2025 free eye camp",
    photoPosition: "top",
    entries: [
      { figure: `${facts.battalFamilies2025}+`, label: "families helped after the Battal cloud burst" },
      { figure: `${facts.patientFamiliesFed2025}`, label: "patient families given meals" },
      { figure: `${facts.sewingMachines2025}`, label: "sewing machines for women" },
      { label: "Free eye camp" },
    ],
  },
  {
    year: "2024",
    photoAlt: "The free medicine counter at the August 2024 eye camp",
    entries: [
      { figure: `${facts.bloodDonorsOneDay}`, label: "blood donors in one day, Ramadan" },
      { figure: `${facts.rationFamiliesMonthly}+`, label: "families on monthly rations" },
      { label: "Free eye camp with Sheikhupura specialists" },
      { label: "Winter drive for SOS children and old age homes" },
    ],
  },
  {
    year: "2022",
    photoAlt: "Volunteers sorting donated clothes and bundles for the 2022 flood relief",
    entries: [
      { figure: `${facts.floodFamilies2022}+`, label: "families helped in the floods" },
      { label: "IT classes for Huffaz launched" },
      { label: "Taekwondo training started" },
      { label: "School uniform drives" },
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  /** Photo slot: public/photos/<photo>.jpg */
  photo: string;
}

/**
 * Real team members only, in order of office. The section stays hidden while
 * this is empty. Qazi Hamza is listed first because the donation accounts are
 * in his name, so donors can see who holds them.
 */
export const teamMembers: readonly TeamMember[] = [
  { name: "Qazi Hamza Hassan", role: "President", photo: "team-qazi-hamza-hassan" },
  { name: "Asfandyar", role: "Vice President", photo: "team-asfandyar" },
  { name: "Imran Shakoor", role: "General Secretary", photo: "team-imran-shakoor" },
  { name: "Abdullah Asif", role: "Joint Secretary", photo: "team-abdullah-asif" },
  { name: "Muhammad Ammar Tahir", role: "Finance Secretary", photo: "team-muhammad-ammar-tahir" },
  { name: "Muhammad Umar Danish", role: "Media Secretary", photo: "team-muhammad-umar-danish" },
  { name: "Zohaib Ali", role: "Office Secretary", photo: "team-zohaib-ali" },
];
