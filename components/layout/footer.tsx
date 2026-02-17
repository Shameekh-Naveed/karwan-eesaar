import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { footerLinks } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const linkGroups = [
    footerLinks.about,
    footerLinks.programs,
    footerLinks.getInvolved,
    footerLinks.legal,
  ];

  return (
    <footer className="relative overflow-hidden border-t bg-primary text-white">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[40px] border-white" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border-[30px] border-white" />
      </div>

      <div className="container relative mx-auto px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/eesaar-logo.jpg"
                alt={`${siteConfig.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg bg-white/10 object-contain"
              />
              <span className="font-heading text-lg font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white/80"
              >
                <Mail className="size-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white/80"
              >
                <Phone className="size-4" />
                {siteConfig.contact.phone}
              </a>
              <p className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="size-4 shrink-0" />
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold text-white/90">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-white/40">
            Made with <Heart className="size-3.5 text-red-400" /> for the
            communities of Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
