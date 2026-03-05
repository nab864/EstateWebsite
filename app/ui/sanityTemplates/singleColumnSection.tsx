"use client";
import { SingleColumnProps } from "@/app/lib/definition";
import clsx from "clsx";
import { useInView } from "../use-in-view-div";
import CompanyLogo from "../company-logo";

export function SingleColumnSection({
  useLogo,
  inverseColor,
  mainHeading,
  sections,
}: SingleColumnProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <section className="my-10">
      <div
        className={clsx(
          "mx-auto max-w-3xl text-center transition-all duration-1500",
          {
            "translate-y-52 opacity-0": !isVisible,
            "translate-y-0 opacity-100": isVisible,
          },
        )}
        ref={ref}
      >
        {useLogo && (
          <div>
            <div className="h-[40vh] flex items-center justify-center">
              <CompanyLogo />
            </div>
          </div>
        )}

        {mainHeading && (
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary mb-10">
            {mainHeading}
          </h2>
        )}

        <div className="space-y-10">
          {sections.map((section, index) => {
            switch (section._type) {
              case "richTextBlock":
                return (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-neutral-700"
                  >
                    {section.body}
                  </p>
                );

              case "headingBodySection":
                return (
                  <div key={index} className="space-y-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-neutral-900">
                      {section.heading}
                    </h3>
                    <p className="text-lg leading-relaxed text-neutral-700">
                      {section.body}
                    </p>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
