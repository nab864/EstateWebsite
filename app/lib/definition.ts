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
export interface MarketOverviewProps {
  heading?: string;
  subheading?: string;
  bodyText?: any;
  columnOne?: HeadingBodyProps;
  columnTwo?: HeadingBodyProps;
  columnThree?: HeadingBodyProps;
  footerText?: string;
}

export interface HeadingBodyProps {
  heading?: string,
  body?: string
}