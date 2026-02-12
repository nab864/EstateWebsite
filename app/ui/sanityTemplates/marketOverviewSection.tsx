import { MarketOverviewProps } from "@/app/lib/definition";
import clsx from "clsx";

export default function MarketOverviewSection({
  heading,
  subheading,
  bodyText,
  columnOne,
  columnTwo,
  columnThree,
  footerText,
}: MarketOverviewProps) {
  console.log(columnOne?.body)
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
              !columnThree?.heading &&
              !columnThree?.body &&
              columnTwo?.heading &&
              columnTwo?.body,
            "md:grid-cols-3 max-w-none": columnThree?.heading && columnThree?.body,
          })}
        >
          {columnOne?.heading && columnOne?.body ? (
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                {columnOne?.heading}
              </h4>
              <p>{columnOne?.body}</p>
            </div>
          ) : null}

          {columnTwo?.heading && columnTwo?.body ? (
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                {columnTwo?.heading}
              </h4>
              <p>{columnTwo?.body}</p>
            </div>
          ) : null}

          {columnThree?.heading && columnThree?.body ? (
            <div className="bg-background-secondary/10 p-6 rounded-xl space-y-4 leading-relaxed tracking-wide">
              <h4 className="text-xl font-semibold mb-3 flex items-center text-primary">
                {columnThree?.heading}
              </h4>
              <p>{columnThree?.body}</p>
            </div>
          ) : null}
        </div>
        <p className="max-w-4xl">{footerText}</p>
      </div>
    </section>
  );
}
