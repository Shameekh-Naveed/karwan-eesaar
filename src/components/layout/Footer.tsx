import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-serif text-2xl font-bold">Stay Connected</h3>
            <p className="mt-2 text-background/70">
              Subscribe to our newsletter for updates on our programs and impact stories.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-background/20 bg-background/10 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold">Eesaar</span>
                <span className="text-xs text-background/70">Foundation</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/70">
              Empowering communities through compassion, serving humanity with dignity and respect
              in line with Islamic principles.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>
                <Link to="/about" className="transition-colors hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="transition-colors hover:text-background">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="transition-colors hover:text-background">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-background">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold">Our Programs</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>
                <Link to="/programs#relief" className="transition-colors hover:text-background">
                  Emergency Relief
                </Link>
              </li>
              <li>
                <Link to="/programs#education" className="transition-colors hover:text-background">
                  Education & Skills
                </Link>
              </li>
              <li>
                <Link to="/programs#healthcare" className="transition-colors hover:text-background">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/programs#livelihood" className="transition-colors hover:text-background">
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+923001234567" className="transition-colors hover:text-background">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@eesaarfoundation.org"
                  className="transition-colors hover:text-background"
                >
                  info@eesaarfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-background/70 md:flex-row">
          <p>© {new Date().getFullYear()} Eesaar Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-background">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-background">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
