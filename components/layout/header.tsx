"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="flex min-w-0 max-w-[calc(100vw-6rem)] items-center gap-2 sm:max-w-none"
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

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="donate"
            className="hidden h-10 rounded-xl px-5 font-bold shadow-sm lg:inline-flex"
          >
            <Link href="/get-involved#donate">
              <Heart className="size-4" />
              Donate
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
