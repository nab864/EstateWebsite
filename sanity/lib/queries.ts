import { groq } from "next-sanity";

export const regionNavQuery = groq`
  *[_type == "regions" && defined(slug.current)] | order(title asc) {
    title,
    "slug": slug.current
  }
`;

export const regionBySlugQuery = groq`
  *[_type == "regions" && slug.current == $slug][0] {
    title,
    sections[] {
      _type,
      _key,
      _type == "heroSection" => {
        heading,
        subheading,
        description,
        backgroundImage,
        backgroundImageAltText,
        ctaText,
        ctaLink
      },
      _type == "heroSectionVideo" => {
        heading,
        subheading,
        description,
        backgroundVideo,
        backgroundVideoAltText,
        ctaText,
        ctaLink
      },
      
      _type == "singleColumnSection" => {
        title,
        useLogo,
        mainHeading,
        subHeading,
        body,
        missionStatementBeginning,
        missionStatementOne,
        missionStatementTwo,
        missionStatementThree,
      },
      _type == "twoColumnSection" => {
        title,
        inverseColor,
        compactColumns,
        leftColumnTitle,
        leftColumn,
        rightColumnTitle,
        rightColumn,
      },
      _type == "marketOverviewSection" => {
        heading,
        subheading,
        bodyText,
        columnOne {
          heading,
          body
        },
        columnTwo {
          heading,
          body
        },
        columnThree {
          heading,
          body
        },
        footerText,
      },
      _type == "featuredMarket" => {
        title,
        market
      },
      _type == "threePerRowSection" => {
        title,
        bodyList
      },
      _type == "ctaSection" => {
        mainSection,
        ctaText,
        ctaLink
      },
    }
  }
`;
