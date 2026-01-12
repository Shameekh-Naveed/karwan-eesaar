import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import eesaarLogo from "@/assets/eesaar-logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/98 shadow-sm backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={eesaarLogo} 
            alt="Eesaar Foundation Logo" 
            className="h-14 w-auto md:h-16"
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-xl font-bold text-primary md:text-2xl">
              Eesaar Foundation
            </span>
            <span className="text-xs text-muted-foreground">
              A Project for Needy People
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-secondary" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Phone className="h-4 w-4" />
              Contact
            </Button>
          </Link>
          <Link to="/get-involved">
            <Button variant="cta" size="lg" className="rounded-full px-6">
              Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-foreground hover:bg-accent lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-border pt-4">
              <Link to="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="cta" className="w-full rounded-full">
                  Donate Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;