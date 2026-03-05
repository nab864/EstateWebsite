"use client";
import { MarketOverviewProps } from "@/app/lib/definition";
import clsx from "clsx";
import { useInView } from "../use-in-view-div";

export default function MarketOverviewSection({
  heading,
  subheading,
  bodyText,
  columnOne,
  columnTwo,
  columnThree,
  footerText,
}: MarketOverviewProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className={clsx("mx-auto px-6 py-10 transition-all duration-1500", {
          "translate-y-52 opacity-0": !isVisible,
          "translate-y-0 opacity-100": isVisible,
        })}>
      <div
        className="mb-10"
      >
        {heading ? (
          <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-4">
            {heading}
          </h2>
        ) : null}

        {subheading ? (
          <h3 className="text-2xl md:text-3xl text-center text-primary/80">
            {subheading}
          </h3>
        ) : null}
      </div>

      <div className="text-lg md:text-xl text-primary/80 space-y-6 leading-relaxed mx-auto flex flex-col items-center">
        {bodyText ? <p className="max-w-4xl">{bodyText}</p> : null}

        <div
          className={clsx("grid gap-10 max-w-4xl", {
            "md:grid-cols-2 ":
              !columnThree?.heading &&
              !columnThree?.body &&
              columnTwo?.heading &&
              columnTwo?.body,
            "md:grid-cols-3 max-w-none":
              columnThree?.heading && columnThree?.body,
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
