"use client";
import { FeaturedMarketProps } from "@/app/lib/definition";
import { urlFor } from "@/sanity/lib/image";
import clsx from "clsx";
import Image from "next/image";
import { useInView } from "../use-in-view-div";

export function FeaturedMarket({ title, market }: FeaturedMarketProps) {
  const header = useInView<HTMLDivElement>();

  return (
    <section className="mx-auto px-6 py-10 space-y-24 max-w-7xl">
      <h2
        ref={header.ref}
        className={clsx(
          "text-4xl md:text-5xl font-serif text-center text-primary mb-16 transition-all duration-1500",
          {
            "blur-2xl opacity-0": !header.isVisible,
            "blur-none opacity-100": header.isVisible,
          },
        )}
      >
        {title}
      </h2>

      {market.map((market, index) => {
        const { ref, isVisible } = useInView<HTMLDivElement>();

        return (
          <div className="space-y-12" key={index}>
            <h3
              ref={ref}
              className={clsx("text-3xl font-semibold text-gray-800 mb-6 transition-all duration-1500", {
                "blur-2xl opacity-0": !isVisible,
                "blur-none opacity-100": isVisible,
              })}
            >
              {market.heading}
            </h3>

            {market.section.map((section, index) => {
              const { ref, isVisible } = useInView<HTMLDivElement>();
              return (
                <div
                  className="grid md:grid-cols-2 gap-8 items-center"
                  key={index}
                >
                  <div
                    ref={ref}
                    className={clsx("space-y-4 transition-all duration-1500", {
                      "order-2": index % 2,
                      "-translate-x-52 opacity-0": !isVisible && !(index % 2),
                      "translate-x-52 opacity-0": !isVisible && index % 2,
                      "translate-x-0 opacity-100": isVisible,
                    })}
                  >
                    <h4 className="text-xl font-semibold text-primary">
                      {section.heading}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {section.subheading}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {section.list.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div
                    className={clsx(
                      "h-64 md:h-80 w-full relative rounded-xl overflow-hidden transition-all duration-1500",
                      {
                        "translate-x-52 opacity-0": !isVisible && !(index % 2),
                        "-translate-x-52 opacity-0": !isVisible && index % 2,
                        "translate-x-0 opacity-100": isVisible,
                      },
                    )}
                  >
                    <Image
                      src={urlFor(section.backgroundImage)
                        .width(1920)
                        .height(1080)
                        .url()}
                      alt="Cherry Hills Village"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
