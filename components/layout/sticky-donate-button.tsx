import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sits to the left of the WhatsApp button, centred on the same line
export function StickyDonateButton() {
  return (
    <div className="fixed bottom-7 right-24 z-40 hidden md:block">
      <Button
        asChild
        size="lg"
        className="h-12 gap-2 rounded-full bg-gold px-6 font-bold text-gold-foreground shadow-lg shadow-black/20 hover:bg-gold/90"
      >
        <Link href="/get-involved#donate">
          <Heart className="size-4" />
          Donate now
        </Link>
      </Button>
    </div>
  );
}
