import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"] as const;
const PHOTO_DIR = path.join(process.cwd(), "public", "photos");

/**
 * Photos are found by convention: a slot named "home-hero" shows
 * public/photos/home-hero.jpg (or .jpeg/.png/.webp/.avif) if it exists.
 * Runs at build time, so adding a photo only needs a redeploy.
 */
export function findPhoto(slot: string): string | null {
  for (const ext of EXTENSIONS) {
    if (existsSync(path.join(PHOTO_DIR, `${slot}.${ext}`))) {
      return `/photos/${slot}.${ext}`;
    }
  }
  return null;
}
