import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const StickyDonateButton = () => {
  return (
    <Link
      to="/get-involved"
      className="fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full bg-secondary px-5 py-3 font-semibold text-secondary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl md:bottom-8 md:left-8 md:flex"
    >
      <Heart className="h-5 w-5" />
      <span>Donate</span>
    </Link>
  );
};

export default StickyDonateButton;
