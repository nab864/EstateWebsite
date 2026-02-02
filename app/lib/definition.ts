export type PersonCardDef = {
  name: string;
  url: string;
  region: string;
  categories: string[];
  image: string;
  handleRegionSearch?: (region: string) => void
  handleCategorySearch?: (category: string) => void
}