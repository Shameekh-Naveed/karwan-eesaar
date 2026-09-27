/**
 * The one place every public figure lives. Pages quote these instead of
 * hard-coding numbers, so the home stats and program pages can't disagree.
 * Only put verified figures here.
 */
export const facts = {
  rationFamiliesMonthly: 100,
  floodFamilies2022: 500,
  eyeCampPatients: 200,
  huffazInIT: 30,
  bloodDonorsOneDay: 50,
  battalFamilies2025: 10,
  patientFamiliesFed2025: 50,
  sewingMachines2025: 2,
} as const;

/**
 * Figures still to be confirmed with Qazi Hamza. Anything left null is
 * hidden on the site rather than shown as a guess.
 */
export const pendingFacts = {
  /** Cost of one family's monthly ration pack, e.g. 5000 → "Rs 5,000 feeds a family for a month" */
  rationPackCostPkr: null as number | null,
  foundedYear: null as number | null,
  /** e.g. "Registered with the Social Welfare Department, KP (Reg. No. …)" */
  registration: null as string | null,
  /** One line on how donations are tracked, e.g. "Every donation is logged and shared in a monthly WhatsApp report" */
  donationTracking: null as string | null,
};

export function formatPkr(amount: number) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}
