export type PersonCardDef = {
  name: string;
  company: string;
  url: string;
  state: string;
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

export interface RegionNavItem {
  title: string
  slug: string
}

export interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  backgroundImage?: any;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}
export interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  bodyText?: any;
  columnOneHeading?: string;
  columnOneBody?: string;
  columnTwoHeading?: string;
  columnTwoBody?: string;
  columnThreeHeading?: string;
  columnThreeBody?: string;
  footerText?: string;
}