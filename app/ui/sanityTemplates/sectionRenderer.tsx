import { HeroSection } from "./heroSection";
import MarketOverviewSection from "./marketOverviewSection";
import { SingleColumnSection } from "./singleColumnSection";
import { TwoColumnSection } from "./twoColumnSection";

interface Section {
  _type: string;
  _key: string;
  [key: string]: any;
}

interface SectionRendererProps {
  sections: Section[];
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        switch (section._type) {
          case "heroSection":
            return (
              <HeroSection
                key={section._key}
                heading={section.heading}
                subheading={section.subheading}
                description={section.description}
                backgroundImage={section.backgroundImage}
                ctaText={section.ctaText}
                ctaLink={section.ctaLink}
              />
            );
          case "marketOverviewSection":
            return (
              <MarketOverviewSection
                key={section._key}
                subheading={section.subheading}
                bodyText={section.bodyText}
                columnOneHeading={section.columnOneHeading}
                columnOneBody={section.columnOneBody}
                columnTwoHeading={section.columnTwoHeading}
                columnTwoBody={section.columnTwoBody}
                columnThreeHeading={section.columnThreeHeading}
                columnThreeBody={section.columnThreeBody}
                footerText={section.footerText}
              />
            );
          case "singleColumnSection":
            return (
              <SingleColumnSection
                key={section._key}
                title={section.title}
                content={section.content}
              />
            );
          case "twoColumnSection":
            return (
              <TwoColumnSection
                key={section._key}
                title={section.title}
                leftColumn={section.leftColumn}
                rightColumn={section.rightColumn}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
