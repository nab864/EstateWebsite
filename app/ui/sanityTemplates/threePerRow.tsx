"use client";
import { ThreePerRowProps } from "@/app/lib/definition";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";

export function ThreePerRow({ heading, subSections }: ThreePerRowProps) {
  const header = useInView<HTMLDivElement>();

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <h2
          ref={header.ref}
          className={clsx(
            "text-4xl md:text-5xl font-serif text-center text-primary mb-12 transition-all duration-1500",
            {
              "blur-2xl opacity-0": !header.isVisible,
              "blur-none opacity-100": header.isVisible,
            },
          )}
        >
          {heading}
        </h2>
        {subSections ? (
          <div className="divide-y">
            {subSections.map((section, index) => {
              const { ref, isVisible } = useInView<HTMLDivElement>();

              return (
                <div key={index} className="py-5">
                  {section.heading ? (
                    <h3
                      ref={ref}
                      className={clsx("text-3xl font-bold mb-5 transition-all duration-1500", {
                        "blur-2xl opacity-0": !isVisible,
                        "blur-none opacity-100": isVisible,
                      })}
                    >
                      {section.heading}
                    </h3>
                  ) : null}
                  <div className="grid md:grid-cols-3 gap-12">
                    {section.bodyList.map((subsection, index) => {
                      const { ref, isVisible } = useInView<HTMLDivElement>();

                      return (
                        <div
                          ref={ref}
                          className={clsx("space-y-4 transition-all duration-1500", {
                            "blur-2xl opacity-0": !isVisible,
                            "blur-none opacity-100": isVisible,
                          })}
                          key={index}
                        >
                          <h4 className="text-xl font-semibold text-primary">
                            {subsection.heading}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {subsection.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
