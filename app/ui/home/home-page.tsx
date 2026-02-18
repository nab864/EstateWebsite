"use client";

import { useEffect, useState, useRef } from "react";
import { HeroSection } from "../sanityTemplates/heroSection";
import { SingleColumnSection } from "../sanityTemplates/singleColumnSection";
import { TwoColumnSection } from "../sanityTemplates/twoColumnSection";
import MarketOverviewSection from "../sanityTemplates/marketOverviewSection";
import { FeaturedMarket } from "../sanityTemplates/featuredMarket";
import { ThreePerRow } from "../sanityTemplates/threePerRow";
import { CTASection } from "../sanityTemplates/ctaSection";
import ImageStickySection from "../sanityTemplates/imageStickySection";
import { CTAImageSection } from "../sanityTemplates/ctaImageSection";
import CompanyLogo from "../company-logo";
import Footer from "../footer/footer";
import { HeroVideoSection } from "../sanityTemplates/heroVideoSection";

export default function HomePage({ home }: { home: any }) {
  const [show, setShow] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    //localStorage.setItem("hasVisited", "false");
    scrollRef.current?.scrollTo(0, 0);
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited === "false") {
      setShow(true);
      setIsFirstVisit(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
      const timer2 = setTimeout(() => {
        localStorage.setItem("hasVisited", "true");
      }, 10000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, []);

  return (
    <div>
      {show ? (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-background animate-slide-up-out z-50"
          style={{ animationDelay: `${3.5}s` }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <div className="opacity-0 animate-blur-in h-[50vh] mb-10">
              <CompanyLogo />
            </div>
            <h1
              className="font-serif text-5xl animate-blur-in opacity-0"
              style={{ animationDelay: `${1}s` }}
            >
              <span className="text-primary">
                PRIVATE ESTATE
                <span className="text-[#396a83]">{" NETWORK"}</span>
              </span>
            </h1>
          </div>
        </div>
      ) : null}

      {home.data.sections?.map((section: any) => {
        switch (section._type) {
          case "heroSection":
            return <HeroSection key={section._key} {...section} />;
          case "heroVideoSection":
            return (
              <HeroVideoSection
                key={section._key}
                isFirstVisit={isFirstVisit}
                {...section}
              />
            );
          case "singleColumnSection":
            return <SingleColumnSection key={section._key} {...section} />;
          case "twoColumnSection":
            return <TwoColumnSection key={section._key} {...section} />;
          case "marketOverviewSection":
            return <MarketOverviewSection key={section._key} {...section} />;
          case "featuredMarket":
            return <FeaturedMarket key={section._key} {...section} />;
          case "threePerRowSection":
            return <ThreePerRow key={section._key} {...section} />;
          case "ctaSection":
            return <CTASection key={section._key} {...section} />;
          case "imageStickySection":
            return <ImageStickySection key={section._key} {...section} />;
          case "ctaSectionImage":
            return <CTAImageSection key={section._key} {...section} />;
          default:
            return null;
        }
      })}
      <Footer />
    </div>
  );
}
