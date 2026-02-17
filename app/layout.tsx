import type { Metadata } from "next";
import { Poppins, DM_Sans, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { StickyDonateButton } from "@/components/layout/sticky-donate-button";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "NGO Pakistan",
    "charity organization Pakistan",
    "community welfare Pakistan",
    "Eesaar Foundation",
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
    url: siteConfig.url,
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
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
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
                email: siteConfig.contact.email,
                contactType: "customer service",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
                addressCountry: "PK",
              },
              sameAs: [
                siteConfig.social.facebook,
                siteConfig.social.instagram,
                siteConfig.social.twitter,
                siteConfig.social.linkedin,
                siteConfig.social.youtube,
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyDonateButton />
      </body>
    </html>
  );
}
