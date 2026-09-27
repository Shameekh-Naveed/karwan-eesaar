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
  entries: readonly TimelineEntry[];
}[] = [
  {
    year: "2025",
    photoAlt: "Relief work after the Battal cloud burst, 2025",
    entries: [
      { figure: `${facts.battalFamilies2025}+`, label: "families helped after the Battal cloud burst" },
      { figure: `${facts.patientFamiliesFed2025}`, label: "patient families given meals" },
      { figure: `${facts.sewingMachines2025}`, label: "sewing machines for women" },
      { label: "Free eye camp" },
    ],
  },
  {
    year: "2024",
    photoAlt: "Ramadan blood donation camp, 2024",
    entries: [
      { figure: `${facts.bloodDonorsOneDay}`, label: "blood donors in one day, Ramadan" },
      { figure: `${facts.rationFamiliesMonthly}+`, label: "families on monthly rations" },
      { label: "Free eye camp with Sheikhupura specialists" },
      { label: "Winter drive for SOS children and old age homes" },
    ],
  },
  {
    year: "2022",
    photoAlt: "Flood relief supplies being distributed, 2022",
    entries: [
      { figure: `${facts.floodFamilies2022}+`, label: "families helped in the floods" },
      { label: "IT classes for Huffaz launched" },
      { label: "Taekwondo training started" },
      { label: "School uniform drives" },
    ],
  },
];

/**
 * Real team members only. The section stays hidden while this is empty.
 * TODO: names, roles (and ideally photos) from Qazi Hamza, including his own role.
 */
export const teamMembers: readonly { name: string; role: string }[] = [];
