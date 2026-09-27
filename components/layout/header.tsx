"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Handshake, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

const childIcons = { Heart, Users, GraduationCap, Handshake } as const;

const linkClass =
  "inline-flex h-10 items-center rounded-lg px-3 text-[0.95rem] font-medium transition-colors hover:bg-muted hover:text-foreground";

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="container mx-auto flex h-[4.5rem] items-center justify-between gap-4 px-4 md:px-6">
        {/* The full name is too long for the bar; the logo carries it, and screen readers still hear it */}
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.name}, home`}>
          <Image
            src="/eesaar-logo.jpg"
            alt=""
            width={56}
            height={56}
            className="size-14 rounded-xl object-contain"
            priority
          />
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              if ("children" in item) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger
                      className={cn(
                        linkClass,
                        "bg-transparent",
                        active ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-72 p-2">
                      <ul>
                        {item.children.map((child) => {
                          const Icon = childIcons[child.icon];
                          return (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link href={child.href} className="flex items-start gap-3 rounded-lg p-3">
                                  <Icon className="mt-0.5 size-5 shrink-0 text-secondary" />
                                  <span>
                                    <span className="block font-semibold text-foreground">{child.label}</span>
                                    <span className="block text-sm text-muted-foreground">
                                      {child.description}
                                    </span>
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={active}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        linkClass,
                        "data-active:bg-transparent",
                        active ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="donate"
            className="hidden h-11 rounded-xl px-6 text-[0.95rem] lg:inline-flex"
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
