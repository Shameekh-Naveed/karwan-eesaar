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
import { siteConfig, getWhatsAppLink } from "@/lib/site-config";
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
          <SheetTitle className="flex items-center gap-2 font-heading">
            <Image
              src="/eesaar-logo.jpg"
              alt={`${siteConfig.name} logo`}
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-contain"
            />
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
              {"children" in item &&
                item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {child.label}
                  </Link>
                ))}
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <Button
              asChild
              className="w-full rounded-xl bg-secondary text-secondary-foreground"
            >
              <a
                href={getWhatsAppLink("donate")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="mr-1 size-4" />
                Donate Now
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
