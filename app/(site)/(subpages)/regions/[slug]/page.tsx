import { regionBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

import { HeroSection } from "@/app/ui/sanityTemplates/heroSection";
import { SingleColumnSection } from "@/app/ui/sanityTemplates/singleColumnSection";
import { TwoColumnSection } from "@/app/ui/sanityTemplates/twoColumnSection";
import MarketOverviewSection from "@/app/ui/sanityTemplates/marketOverviewSection";
import { FeaturedMarket } from "@/app/ui/sanityTemplates/featuredMarket";
import { ThreePerRow } from "@/app/ui/sanityTemplates/threePerRow";
import { CTASection } from "@/app/ui/sanityTemplates/ctaSection";
import ImageStickySection from "@/app/ui/sanityTemplates/imageStickySection";
import { CTAImageSection } from "@/app/ui/sanityTemplates/ctaImageSection";
import { sanityFetch } from "@/sanity/lib/live";
import { stegaClean } from "next-sanity";

// Optional: Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const region = await sanityFetch({
    query: regionBySlugQuery,
    params: params,
  });

  if (!region) return {};

  return {
    title: region.data.title,
  };
}
export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const region = await sanityFetch({
    query: regionBySlugQuery,
    params: params,
  });

  if (!region) {
    notFound();
  }

  return (
    <div>
      {region.data.sections?.map((section: any) => {
        switch (section._type) {
          case "heroSection":
            return <HeroSection key={section._key} {...section} />;
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
    </div>
  );
}
