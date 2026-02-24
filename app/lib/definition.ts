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
  personImage: string;
  handleRegionSearch?: (region: string) => void;
  handleCategorySearch?: (category: string) => void;
};

export interface RegionNavItem {
  title: string;
  slug: string;
}

export interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  backgroundImage?: any;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}
export interface HeroVideoSectionProps {
  company?: string;
  heading?: string;
  subheading?: string;
  backgroundVideo?: string;
  backgroundVideoAltText?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
  isFirstVisit?: boolean;
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
export interface MarketsWeServeProps {
  heading?: string;
  bodyList: ImageFlipProps[];
  ctaText?: string;
  ctaLink?: string;
}

export interface ImageFlipProps {
  list: string[];
  frontText: string;
  image?: any;
}

export interface HeadingBodyProps {
  heading?: string;
  body?: string;
  list?: string[];
}

export interface SingleColumnProps {
  useLogo: boolean;
  inverseColor: boolean;
  mainHeading: string;
  sections: any[]
}

export interface TwoColumnProps {
  title: string;
  inverseColor: boolean;
  compactColumns: boolean;
  leftColumnTitle: string;
  leftColumn: HeadingBodyProps[];
  rightColumnTitle: string;
  rightColumn: HeadingBodyProps[];
}

export interface FeaturedMarketProps {
  title: string;
  market: FeaturedMarketArea[];
}

export interface FeaturedMarketArea {
  heading: string;
  section: FeaturedMarketSubsection[];
}
export interface FeaturedMarketSubsection {
  heading: string;
  subheading: string;
  list: string[];
  backgroundImage: any;
}

export interface ThreePerRowProps {
  heading: string;
  subSections: ThreePerRowSubsectionProps[];
}
export interface ThreePerRowSubsectionProps {
  heading: string;
  bodyList: HeadingBodyProps[];
}

export interface CTAProps {
  mainSection: HeadingBodyProps;
  ctaText: string;
  ctaLink: string;
}
export interface CTAImageProps {
  mainSection: string;
  inverseColor: boolean;
  ctaText: string;
  ctaLink: string;
  ctaImage: any;
  ctaImageAlt: string;
}

export interface ImageStickyProps {
  mainHeading: string;
  subHeading: string;
  stickyImage: any;
  stickyImageAlt: string;
  list: HeadingBodyProps[];
}