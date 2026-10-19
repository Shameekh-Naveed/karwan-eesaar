import type { Metadata } from "next";
import { Poppins, DM_Sans, Geist_Mono, Noto_Nastaliq_Urdu, Amiri } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { MobileDonateBar } from "@/components/layout/mobile-donate-bar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The organization's name in Urdu, and the ayah and hadith on the home page
const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-urdu",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // "./" resolves to each page's own URL, so every page gets its own canonical
  alternates: { canonical: "./" },
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "NGO Pakistan",
    "charity organization Pakistan",
    "community welfare Pakistan",
    "Karwan-e-Eesaar Welfare Organization",
    "donate Pakistan",
    "volunteer Pakistan",
    "flood relief Pakistan",
    "education charity",
    "healthcare charity Pakistan",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable} ${nastaliq.variable} ${amiri.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                ...(siteConfig.contact.email && {
                  email: siteConfig.contact.email,
                }),
                contactType: "customer service",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Old College Road",
                addressLocality: "Mansehra",
                postalCode: "21300",
                addressCountry: "PK",
              },
              sameAs: [siteConfig.social.instagram],
            }),
          }}
        />
      </head>
      <body className={`${geistMono.variable} pb-[72px] antialiased md:pb-0`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileDonateBar />
      </body>
    </html>
  );
}
