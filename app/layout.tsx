import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import TopBar from "./ui/landing/top-bar";
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
        <Footer />
      </body>
    </html>
  );
}
