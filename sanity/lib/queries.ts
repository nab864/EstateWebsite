import { groq } from "next-sanity";

export const regionSlugsQuery = groq`
  *[_type == "regions" && defined(slug.current)][].slug.current
`;

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
        ctaText,
        ctaLink
      },
      
      _type == "singleColumnSection" => {
        title,
        content
      },
      _type == "twoColumnSection" => {
        title,
        leftColumn,
        rightColumn
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
      }
    }
  }
`;
