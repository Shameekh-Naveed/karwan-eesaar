import Image from "next/image";
import { Camera } from "lucide-react";
import { findPhoto } from "@/lib/photos/find-photo";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  /** File name (without extension) looked up in public/photos */
  slot: string;
  /** Describes the photo: used as alt text, and as the brief on the placeholder */
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Placeholder styling for navy sections */
  onDark?: boolean;
}

/**
 * A photo slot. Shows the real photo once public/photos/<slot>.jpg exists;
 * until then, a placeholder telling the team which photo belongs here.
 * Server component (reads the filesystem at build time).
 */
export function PhotoFrame({
  slot,
  alt,
  className,
  sizes = "100vw",
  priority,
  onDark,
}: PhotoFrameProps) {
  const src = findPhoto(slot);

  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={cn(
            "flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center",
            onDark
              ? "bg-primary-foreground/[0.07] text-primary-foreground/60"
              : "bg-sand/45 text-foreground/50"
          )}
        >
          <Camera className="size-7" strokeWidth={1.5} />
          <p className="max-w-[28ch] text-sm font-medium leading-snug">{alt}</p>
          <p className="text-xs opacity-80">photos/{slot}.jpg</p>
        </div>
      )}
    </div>
  );
}
