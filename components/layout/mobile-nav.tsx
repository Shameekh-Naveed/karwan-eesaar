"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left font-heading">
            <span className="flex items-start gap-2 pr-2">
              <Image
                src="/eesaar-logo.jpg"
                alt={`${siteConfig.name} logo`}
                width={32}
                height={32}
                className="mt-0.5 h-8 w-8 shrink-0 rounded-md object-contain"
              />
              <span className="text-sm font-semibold leading-snug">
                {siteConfig.name}
              </span>
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <Button
              asChild
              variant="donate"
              className="h-11 w-full rounded-xl font-bold"
            >
              <Link href="/get-involved#donate" onClick={() => setOpen(false)}>
                <Heart className="mr-1 size-4" />
                Donate now
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
