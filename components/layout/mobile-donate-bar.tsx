"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

/** Slim Donate bar pinned to the bottom of phone screens (desktop uses the header button). */
export function MobileDonateBar() {
  // The Get Involved page already shows the account details in full
  if (usePathname() === "/get-involved") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <Link
        href="/get-involved#donate"
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gold text-base font-bold text-gold-foreground"
      >
        <Heart className="size-4" />
        Donate now
      </Link>
    </div>
  );
}
