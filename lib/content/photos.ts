/**
 * Real project photos. Drop files into /public/photos and fill in `src`.
 * A photo left as null is simply not rendered: layouts adapt instead of
 * showing a grey placeholder box.
 */
export interface Photo {
  src: string;
  alt: string;
}

export const photos: Record<
  | "hero"
  | "story"
  | "emergencyRelief"
  | "education"
  | "healthcare"
  | "livelihood"
  | "winterRelief"
  | "about",
  Photo | null
> = {
  hero: null, // ration distribution works best: a volunteer handing over a ration pack
  story: null, // Battal cloud burst relief, 2025
  emergencyRelief: null,
  education: null,
  healthcare: null,
  livelihood: null,
  winterRelief: null,
  about: null, // the team at a drive
};
