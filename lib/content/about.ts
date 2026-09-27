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

export const timeline = [
  {
    year: "2025",
    items: [
      `Cloud burst relief in Battal: ${facts.battalFamilies2025}+ families`,
      `Meals for ${facts.patientFamiliesFed2025} patient families`,
      `${facts.sewingMachines2025} sewing machines donated to women`,
      "Free eye camp",
    ],
  },
  {
    year: "2024",
    items: [
      `Ramadan blood drive: ${facts.bloodDonorsOneDay} donors in one day`,
      "Free eye camp with Sheikhupura specialists",
      "Winter drive for SOS Children's Village and old age homes",
      `Monthly rations for ${facts.rationFamiliesMonthly}+ families`,
    ],
  },
  {
    year: "2022",
    items: [
      `Flood relief for ${facts.floodFamilies2022}+ families`,
      "IT classes for Huffaz launched",
      "Taekwondo training started",
      "School uniform drives",
    ],
  },
] as const;

/**
 * Real team members only. The section stays hidden while this is empty.
 * TODO: names, roles (and ideally photos) from Qazi Hamza, including his own role.
 */
export const teamMembers: readonly { name: string; role: string }[] = [];
