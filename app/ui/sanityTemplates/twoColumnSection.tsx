import { TwoColumnProps } from "@/app/lib/definition";
import clsx from "clsx";

export function TwoColumnSection({
  title,
  inverseColor,
  compactColumns,
  leftColumnTitle,
  leftColumn,
  rightColumnTitle,
  rightColumn,
}: TwoColumnProps) {
  return (
    <section
      className={clsx("py-10", {
        "bg-background-secondary text-secondary": inverseColor,
        "text-primary": !inverseColor,
      })}
    >
      {title ? (
        <h2
          className={clsx("text-4xl md:text-5xl font-serif text-center mb-10", {
            "text-secondary": inverseColor,
          })}
        >
          {title}
        </h2>
      ) : null}
      <div
        className={clsx("grid md:grid-cols-2 gap-12", {
          "max-w-5xl mx-auto": compactColumns,
        })}
      >
        <div
          className={clsx("p-8 rounded-xl shadow-lg", {
            "bg-none p-none shadow-none": compactColumns,
            "bg-background/10": inverseColor && !compactColumns,
            "bg-background-secondary/10": !inverseColor && !compactColumns,
          })}
        >
          {leftColumnTitle ? (
            <h3 className="text-3xl font-semibold mb-4">{leftColumnTitle}</h3>
          ) : null}

          <div className="space-y-6">
            {leftColumn.map((section, index) => {
              return (
                <div key={index}>
                  <h4 className="font-semibold mb-2 text-xl">
                    {section.heading}
                  </h4>
                  <p
                    className={clsx("leading-relaxed", {
                      "text-primary/80": !inverseColor,
                      "text-secondary/80": inverseColor,
                    })}
                  >
                    {section.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={clsx("p-8 rounded-xl shadow-lg", {
            "bg-none p-none shadow-none": compactColumns,
            "bg-background/15": inverseColor && !compactColumns,
            "bg-background-secondary/15": !inverseColor && !compactColumns,
          })}
        >
          {rightColumnTitle ? (
            <h3 className="text-3xl font-semibold mb-4">{rightColumnTitle}</h3>
          ) : null}

          <div className="space-y-6">
            {rightColumn.map((section, index) => {
              return (
                <div key={index}>
                  <h4 className="font-semibold text-xl mb-2">
                    {section.heading}
                  </h4>
                  <p
                    className={clsx("leading-relaxed", {
                      "text-primary/80": !inverseColor,
                      "text-secondary/80": inverseColor,
                    })}
                  >
                    {section.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
