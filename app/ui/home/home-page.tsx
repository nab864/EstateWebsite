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
import { MarketsWeServe } from "../sanityTemplates/marketsWeServe";

export default function HomePage({ home }: { home: any }) {

  return (
    <div>

      {home.data.sections?.map((section: any) => {
        switch (section._type) {
          case "heroSection":
            return <HeroSection key={section._key} {...section} />;
          case "heroVideoSection":
            return (
              <HeroVideoSection
                key={section._key}
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
          case "marketsWeServe":
            return <MarketsWeServe key={section._key} {...section} />;
          default:
            return null;
        }
      })}
      <Footer />
    </div>
  );
}
