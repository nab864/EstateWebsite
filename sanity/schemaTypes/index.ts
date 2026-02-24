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
import { heroVideoSection } from "./heroVideoSection";
import { imageStickySection } from "./imageStickySection";
import { ctaSectionImage } from "./ctaSectionImage";
import { personCard } from "./directoryPersonCard";
import { directory } from "./directoryPage";
import { richTextBlock } from "./textBox";
import { marketsWeServe } from "./marketsWeServe";
import { imageFlip } from "./imageFlip";
import { threePerRowSubSection } from "./threePerRowSubsection";



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    regions,
    heroSection,
    heroVideoSection,
    singleColumnSection,
    twoColumnSection,
    headingBodySection,
    marketOverviewSection,
    featuredMarket,
    featuredMarketAreaSection,
    featuredMarketSubsection,
    threePerRowSection,
    threePerRowSubSection,
    ctaSection,
    ctaSectionImage,
    imageStickySection,
    directory,
    personCard,
    richTextBlock,
    marketsWeServe,
    imageFlip,
  ],
};
