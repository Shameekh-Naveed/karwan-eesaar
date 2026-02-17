import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[80px] border-primary" />
      </div>

      <div className="container mx-auto px-4 text-center md:px-6">
        <p className="mb-4 text-8xl font-extrabold text-secondary/20 md:text-9xl">
          404
        </p>
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="h-11 rounded-xl px-6">
            <Link href="/">
              <Home className="mr-1 size-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 rounded-xl px-6"
          >
            <Link href="/contact">
              <ArrowLeft className="mr-1 size-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
