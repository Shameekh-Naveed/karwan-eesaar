"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/site-config";

export function StickyDonateButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <Button
        asChild
        size="lg"
        className="h-12 gap-2 rounded-full bg-secondary px-6 text-secondary-foreground shadow-lg shadow-secondary/30 transition-all hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/40"
      >
        <a
          href={getWhatsAppLink("donate")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Heart className="size-4" />
          Donate Now
        </a>
      </Button>
    </div>
  );
}
