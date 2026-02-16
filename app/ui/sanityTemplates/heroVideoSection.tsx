"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeroVideoSectionProps } from "@/app/lib/definition";
import clsx from "clsx";

export function HeroVideoSection({
  heading,
  subheading,
  backgroundVideo,
  backgroundVideoAltText,
  description,
  ctaText,
  ctaLink,
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
          "absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start sm:mb-30 sm:ml-30 animate-slide-right opacity-0",
          {
            "animate-slide-right opacity-0": isFirstVisit,
            "opacity-100": !isFirstVisit,
          },
        )}
        style={{ animationDelay: isFirstVisit ? "5s" : "0s" }}
      >
        <div className="flex flex-col justify-center items-center">
          {heading ? (
            <h1
              className="text-4xl sm:text-7xl text-[#f6f3ee] mb-4 font-bold font-serif transition-all duration-100 text-center"
              style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
            >
              {heading}
            </h1>
          ) : null}
          {subheading ? (
            <h2
              className="text-3xl text-[#f6f3ee] text-center transition-all duration-100 mb-10"
              style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
            >
              {subheading}
            </h2>
          ) : null}
          <div
            className="transition-all duration-100"
            style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
          >
            <Link
              href={ctaLink as string}
              className="border text-[#f6f3ee] hover:bg-[#f6f3ee] hover:text-primary transition-color duration-300 p-1 mt-3 rounded cursor-pointer focus-visible:bg-[#f6f3ee] focus-visible:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
