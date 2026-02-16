import { heroSection } from "./heroSection";
import { singleColumnSection } from "./singleColumn";
import { twoColumnSection } from "./twoColumn";
import { regions } from "./regions";
import { SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { marketOverviewSection } from "./marketOverview";
import { headingBodySection } from "./headingBodySection";
import { featuredMarketAreaSection } from "./featuredMarketAreaSection";
import { featuredMarketSubsection } from "./featuredMartketSubsection";
import { featuredMarket } from "./featuredMarkets";
import { threePerRowSection } from "./threePerRow";
import { ctaSection } from "./ctaSection";
import { heroSectionVideo } from "./heroSectionVideo";
import { imageStickySection } from "./imageStickySection";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    regions,
    heroSection,
    heroSectionVideo,
    singleColumnSection,
    twoColumnSection,
    headingBodySection,
    marketOverviewSection,
    featuredMarket,
    featuredMarketAreaSection,
    featuredMarketSubsection,
    threePerRowSection,
    ctaSection,
    imageStickySection,
  ],
};
