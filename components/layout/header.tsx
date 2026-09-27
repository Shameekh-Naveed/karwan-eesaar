"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex min-w-0 max-w-[calc(100vw-10rem)] items-center gap-2 sm:max-w-none"
        >
          <Image
            src="/eesaar-logo.jpg"
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-lg object-contain"
            priority
          />
          <span className="font-heading text-left text-xs font-bold leading-snug text-foreground sm:text-sm md:text-base lg:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const hasChildren = "children" in item && item.children;

            if (hasChildren) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="size-3.5" />
                  </Link>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[240px] rounded-xl border bg-card p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-xl bg-gold font-bold text-gold-foreground shadow-sm hover:bg-gold/90 lg:inline-flex"
          >
            <Link href="/get-involved#donate">
              <Heart className="mr-1 size-4" />
              Donate now
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
