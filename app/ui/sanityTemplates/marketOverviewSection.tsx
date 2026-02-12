import { HeroSectionProps } from "@/app/lib/definition";
import clsx from "clsx";

export default function MarketOverviewSection({
  heading,
  subheading,
  bodyText,
  columnOneHeading,
  columnOneBody,
  columnTwoHeading,
  columnTwoBody,
  columnThreeHeading,
  columnThreeBody,
  footerText,
}: HeroSectionProps) {
  return (
    <section className=" mx-auto px-6 py-20">
      {heading ? (
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-4">
          {heading}
        </h2>
      ) : null}

      {subheading ? (
        <h3 className="text-2xl md:text-3xl text-center text-gray-700 mb-10">
          {subheading}
        </h3>
      ) : null}

      <div className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed mx-auto flex flex-col items-center">
        {bodyText ? <p className="max-w-4xl">{bodyText}</p> : null}

        <div
          className={clsx("grid gap-10 max-w-4xl", {
            "md:grid-cols-2 ":
              !columnThreeHeading &&
              !columnThreeBody &&
              columnTwoHeading &&
              columnTwoBody,
            "md:grid-cols-3 max-w-none": columnThreeHeading && columnThreeBody,
          })}
        >
          {columnOneHeading && columnOneBody ? (
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                {columnOneHeading}
              </h4>
              <p>{columnOneBody}</p>
            </div>
          ) : null}

          {columnTwoHeading && columnTwoBody ? (
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                {columnTwoHeading}
              </h4>
              <p>{columnTwoBody}</p>
            </div>
          ) : null}

          {columnThreeHeading && columnThreeBody ? (
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                {columnThreeHeading}
              </h4>
              <p>{columnThreeBody}</p>
            </div>
          ) : null}
        </div>
        <p className="max-w-4xl">{footerText}</p>
      </div>
    </section>
  );
}
