import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import eesaarLogo from "@/assets/eesaar-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-serif text-2xl font-bold md:text-3xl">Stay Connected</h3>
            <p className="mt-3 text-primary-foreground/70">
              Subscribe to our newsletter for updates on our programs and impact stories.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary"
              />
              <Button variant="secondary" className="shrink-0 rounded-full px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src={eesaarLogo} 
                alt="Eesaar Foundation Logo" 
                className="h-16 w-auto rounded-lg bg-primary-foreground/90 p-1"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Empowering communities through compassion, serving humanity with dignity and respect
              in line with Islamic principles.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all hover:bg-secondary hover:text-secondary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all hover:bg-secondary hover:text-secondary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all hover:bg-secondary hover:text-secondary-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg">Our Programs</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/programs#relief" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Emergency Relief
                </Link>
              </li>
              <li>
                <Link to="/programs#education" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Education & Skills
                </Link>
              </li>
              <li>
                <Link to="/programs#healthcare" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/programs#livelihood" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-primary-foreground/70">Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <a href="tel:+923001234567" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <a
                  href="mailto:info@eesaarfoundation.org"
                  className="text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  info@eesaarfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Eesaar Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-secondary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-secondary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;