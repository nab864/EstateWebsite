import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import TopBar from "./ui/top-bar";
import Footer from "./ui/footer/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Private Estate Network",
  description:
    "Discover our nationwide network of elite estate managers, providing bespoke, full-service management for luxury homes, second residences, and diverse portfolios. Trusted, professional, and discreet estate care across the United States.",
    metadataBase: new URL('https://estate-website-black.vercel.app'),
  alternates: {
    canonical: '/',
  },
    openGraph: {
    title: "Private Estate Network",
    description: "Discover our nationwide network of elite estate managers...",
    url: "https://estate-website-black.vercel.app",
    siteName: "Private Estate Network",
    images: [
      {
        url: "/seasonal-home.png",
        width: 1200,
        height: 630,
        alt: "Private Estate Network - Luxury Estate Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Estate Network",
    description: "Discover our nationwide network of elite estate managers...",
    images: ["/seasonal-home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Private Estate Network",
    "description": "Fractional Estate & Lifestyle Management for Ultra-High-Net-Worth Families",
    "url": "https://estate-website-black.vercel.app",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": ["Estate Management", "Property Management", "Lifestyle Concierge", "Household Operations"]
  };
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dewpq5xih/video/upload/f_auto,q_auto,vc_auto,w_1920/v1768776498/champagne_fqjzmq.mp4"
          type="video/mp4"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <TopBar />
        {children}
      </body>
    </html>
  );
}
