import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const StickyDonateButton = () => {
  return (
    <Link
      to="/get-involved"
      className="fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-semibold text-secondary-foreground shadow-xl transition-all hover:scale-105 hover:shadow-2xl md:bottom-8 md:left-8 md:flex animate-pulse-glow"
    >
      <Heart className="h-5 w-5" />
      <span>Donate Now</span>
    </Link>
  );
};

export default StickyDonateButton;