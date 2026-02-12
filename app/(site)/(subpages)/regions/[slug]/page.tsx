import { client } from "@/sanity/lib/client";
import { regionBySlugQuery, regionSlugsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

import { HeroSection } from "@/app/ui/sanityTemplates/heroSection";
import { SingleColumnSection } from "@/app/ui/sanityTemplates/singleColumnSection";
import { TwoColumnSection } from "@/app/ui/sanityTemplates/twoColumnSection";
import MarketOverviewSection from "@/app/ui/sanityTemplates/marketOverviewSection";
import { FeaturedMarket } from "@/app/ui/sanityTemplates/featuredMarket";

// Generate static params for all regions
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(regionSlugsQuery);

  return slugs.map((slug) => ({
    slug,
  }));
}

// Optional: Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = await client.fetch(regionBySlugQuery, { slug });

  if (!region) return {};

  return {
    title: region.title,
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = await client.fetch(regionBySlugQuery, { slug });

  if (!region) {
    notFound();
  }

  return (
    <div>
      {region.sections?.map((section: any) => {
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
          default:
            return null;
        }
      })}
    </div>
  );
}
