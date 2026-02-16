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
  heading?: string;
  body?: string;
}

export interface SingleColumnProps {
  useLogo: boolean;
  inverseColor: boolean;
  mainHeading: string;
  subHeading: string;
  body: string;
  missionStatementBeginning: string;
  missionStatementOne: string;
  missionStatementTwo: string;
  missionStatementThree: string;
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

export interface ThreePerRownProps {
  title: string;
  bodyList: HeadingBodyProps[];
}

export interface CTAProps {
  mainSection: HeadingBodyProps;
  ctaText: string;
  ctaLink: string;
}
