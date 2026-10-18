import { facts } from "@/lib/content/facts";
import { teamMembers } from "@/lib/content/about";

export const hero = {
  urduName: "کاروانِ ایثار",
  title: "Karwan-e-Eesaar",
  tagline: "A caravan of giving from Mansehra.",
  body: `Monthly rations for ${facts.rationFamiliesMonthly}+ families, free eye camps, and relief when disaster strikes. Run by volunteers from Old College Road.`,
  volunteerLabel: "Volunteer",
  volunteerHref: "/get-involved#volunteer",
  mosaic: {
    main: "A volunteer handing a new sweater to a schoolboy at our December 2023 uniform drive",
    second: "A girl having her eyes tested at the June 2025 free eye camp",
    third: "Ration packs lined up under our banner, ready for distribution",
  },
};

export const giveNow = {
  title: "Give in 30 seconds",
  body: "Send to either account, then message us the screenshot so we can confirm it arrived.",
  zakatNote:
    "Zakat, Sadaqah, Qurbani or sponsoring a family's monthly pack: all of it comes through these two accounts, to rations first and then the rest of our work.",
  whatsappLabel: "Sent it? WhatsApp us the screenshot",
};

export const nameMeaning = {
  arabic: "وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
  translation: "They give preference to others over themselves, even when they are in need.",
  reference: "Al-Hashr 59:9",
  body: "Eesaar is that word. A karwan is a caravan. We are a caravan of people from Mansehra who put others first.",
};

export const impact = {
  title: "What your money did",
  period: "2022 to 2025",
  lead: { value: facts.rationFamiliesMonthly, suffix: "+", label: "families fed, every single month" },
  others: [
    { value: facts.floodFamilies2022, suffix: "+", label: "families helped in the 2022 floods" },
    { value: facts.eyeCampPatients, suffix: "+", label: "patients treated at free eye camps" },
    { value: facts.bloodDonorsOneDay, suffix: "", label: "blood donors in a single day" },
  ],
} as const;

export const programsIntro = {
  title: "What we do",
};

export const teamStrip = {
  title: `${numberWord(teamMembers.length)} volunteers. Old College Road, Mansehra.`,
  body: "Qazi Hamza Hassan, President, holds the donation accounts.",
  linkLabel: "Meet the team",
  href: "/about#team",
};

export const closing = {
  arabic: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ",
  translation: "Charity extinguishes sin as water extinguishes fire.",
  reference: "Tirmidhi",
  donateLabel: "Donate now",
  volunteerLabel: "Or volunteer with us",
};

function numberWord(n: number) {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  return words[n] ?? String(n);
}
