import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import TopBar from "./ui/landing/top-bar";


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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
