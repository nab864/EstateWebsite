import { heroSection } from "./heroSection";
import { singleColumnSection } from "./singleColumn";
import { twoColumnSection } from "./twoColumn";
import { regions } from "./regions";
import { SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePage";
import { marketOverviewSection } from "./marketOverview";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    regions,
    heroSection,
    singleColumnSection,
    twoColumnSection,
    marketOverviewSection
  ],
};
