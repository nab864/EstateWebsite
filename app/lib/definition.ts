export type PersonCardDef = {
  name: string;
  company: string;
  url: string;
  region: string;
  markets: string[];
  services: string[];
  specialties: string[];
  about: string;
  established: number;
  image: string;
  handleRegionSearch?: (region: string) => void
  handleCategorySearch?: (category: string) => void
}