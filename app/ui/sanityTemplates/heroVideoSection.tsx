"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeroVideoSectionProps } from "@/app/lib/definition";
import clsx from "clsx";

export function HeroVideoSection({
  company,
  heading,
  subheading,
  backgroundVideo,
  backgroundVideoAltText,
  description,
  ctaText,
  ctaLink,
  ctaText2,
  ctaLink2,
  isFirstVisit,
}: HeroVideoSectionProps) {
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

  return (
    <div className="min-h-dvh flex flex-col pt-[12vh]">
      <div
        className="flex-1 overflow-hidden relative"
        style={{ filter: `blur(${(1 - opacity) * 5}px)` }}
      >
        <video
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          src={backgroundVideo}
          aria-label={backgroundVideoAltText}
        ></video>
      </div>

      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start sm:mb-20 sm:ml-20 animate-slide-right opacity-0",
          {
            "animate-slide-right opacity-0": isFirstVisit,
            "opacity-100": !isFirstVisit,
          },
        )}
        style={{ animationDelay: isFirstVisit ? "5s" : "0s" }}
      >
        <div className="flex flex-col justify-center items-center max-w-5xl">
          {company ? (
            <p
              className="text-6xl md:text-7xl text-[#f6f3ee] mb-8 font-bold font-serif transition-all duration-100"
              style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
            >
              {company}
            </p>
          ) : null}
          {heading ? (
            <h1
              className="text-2xl md:text-3xl text-center text-[#f6f3ee] mb-8 transition-all duration-100"
              style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
            >
              {heading}
            </h1>
          ) : null}
          {subheading ? (
            <h2
              className="text-2xl md:text-2xl text-center italic text-[#f6f3ee] mb-8 transition-all duration-100"
              style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
            >
              {subheading}
            </h2>
          ) : null}
          {description ? (
            <h2
              className="text-[#f6f3ee] mb-10 bg-background-secondary/80 p-6 rounded-xl max-w-3xl text-sm md:text-base leading-relaxed"
              style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
            >
              {description}
            </h2>
          ) : null}
          <div
            className="transition-all duration-100 flex"
            style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
          >
            {ctaLink && ctaText ? 
            <Link
              href={ctaLink}
              className="border text-[#f6f3ee] hover:bg-[#f6f3ee] mx-1 hover:text-primary transition-color duration-300 p-1 mt-3 rounded cursor-pointer focus-visible:bg-[#f6f3ee] focus-visible:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {ctaText}
            </Link> : null
            }
            {ctaLink2 && ctaText2 ? 
            <Link
              href={ctaLink2}
              className="border text-[#f6f3ee] hover:bg-[#f6f3ee] mx-1 hover:text-primary transition-color duration-300 p-1 mt-3 rounded cursor-pointer focus-visible:bg-[#f6f3ee] focus-visible:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {ctaText2}
            </Link> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}
