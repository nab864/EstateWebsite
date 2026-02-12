import { FeaturedMarketProps } from "@/app/lib/definition";
import clsx from "clsx";
import Image from "next/image";

export function FeaturedMarket({ title, market }: FeaturedMarketProps) {
  return (
    <section className="mx-auto px-6 py-10 space-y-24 max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-16">
        {title}
      </h2>

      {market.map((market) => {
        return (
          <div className="space-y-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              {market.heading}
            </h3>

            {market.section.map((section, index) => {
              return (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={clsx("space-y-4", {
                    "order-2": index % 2
                  })}>
                    <h4 className="text-xl font-semibold text-primary">
                      {section.heading}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {section.subheading}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {section.list.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="h-64 md:h-80 w-full relative rounded-xl overflow-hidden ">
                    <Image
                      src="/landscaping.jpg"
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
