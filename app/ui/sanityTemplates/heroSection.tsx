"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { HeroSectionProps } from "@/app/lib/definition";

export function HeroSection({
  heading,
  subheading,
  backgroundImage,
  description,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = window.innerHeight * 0.12;
      const startFade = headerHeight * 0.0;
      const fadeDistance = headerHeight * 6.0;

      const raw = 1 - (scrollY - startFade) / fadeDistance;

      const nextOpacity = Math.min(1, Math.max(0, raw));
      setOpacity(nextOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageUrl = backgroundImage
    ? urlFor(backgroundImage).width(1920).height(1080).url()
    : null;

  return (
    <div className="min-h-[calc(100vh-12vh)] mt-[12vh] flex flex-col mb-10">
      <div
        className="flex-1 relative overflow-hidden"
        style={{ filter: `blur(${(1 - opacity) * 5}px)` }}
      >
        <Image
          src={imageUrl as string}
          alt={heading || "Luxury estate management in Colorado"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="flex flex-col items-center text-center max-w-5xl animate-slide-right opacity-0">
            {heading && (
              <h1
                className="text-6xl md:text-7xl text-[#f6f3ee] mb-8 font-bold font-serif transition-all duration-100"
                style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
              >
                {heading}
              </h1>
            )}
            {subheading && (
              <h2
                className="text-2xl md:text-3xl text-[#f6f3ee] mb-8 transition-all duration-100"
                style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
              >
                {subheading}
              </h2>
            )}
            {description && (
              <p className="text-[#f6f3ee] mb-10 bg-background-secondary/80 p-6 rounded-xl max-w-3xl text-sm md:text-base leading-relaxed">
                {description}
              </p>
            )}
            {ctaText && ctaLink && (
              <div
                className="transition-all duration-100"
                style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
              >
                <Link
                  href={ctaLink}
                  className="border border-[#f6f3ee] text-[#f6f3ee] px-6 py-2 rounded hover:bg-[#f6f3ee] hover:text-primary transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6f3ee]"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
