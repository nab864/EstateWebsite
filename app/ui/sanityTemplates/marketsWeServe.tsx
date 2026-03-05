import { MarketsWeServeProps } from "@/app/lib/definition";
import { urlFor } from "@/sanity/lib/image";
import clsx from "clsx";
import Image from "next/image";
import { useInView } from "../use-in-view-div";

export function MarketsWeServe({
  heading,
  bodyList,
  ctaText,
  ctaLink,
}: MarketsWeServeProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-12">
          {heading}
        </h2>
        <div ref={ref} className="grid md:grid-cols-2 gap-x-20 gap-y-10">
          {bodyList.map((section, index) => {
            const delay = (index + 1) * 500;
            return (
              <div
                className="space-y-4 group h-64 w-full perspective-normal"
                key={index}
              >
                <div
                  className={clsx(
                    "relative h-full w-full transition-transform duration-700 transform-3d",
                    {
                      "transform-[rotateX(180deg)]": !isVisible,
                    },
                  )}
                  style={{ transitionDelay: `${delay}ms`}}
                >
                  <div
                    className={clsx(
                      "relative h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateX(180deg)]",
                    )}
                  >
                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                      {section.image ? (
                        <Image
                          src={urlFor(section.image)
                            .width(1920)
                            .height(1080)
                            .url()}
                          alt="Alt Text"
                          fill
                          className="object-cover"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                        <p className="text-secondary text-xl font-semibold text-center px-4">
                          {section.frontText}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 text-secondary backface-hidden transform-[rotateX(180deg)] bg-primary rounded-xl flex items-center justify-center p-6">
                      {section.list ? (
                        <ul className="list-disc">
                          {section.list.map((item, i) => {
                            return <li key={i}>{item}</li>;
                          })}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
