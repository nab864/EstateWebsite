"use client"
import { ImageStickyProps } from "@/app/lib/definition";
import { urlFor } from "@/sanity/lib/image";
import clsx from "clsx";
import Image from "next/image";
import { useInView } from "../use-in-view-div";
import ServiceDescription from "../services/service-description";

export default function ImageStickySection({
  mainHeading,
  subHeading,
  stickyImage,
  stickyImageAlt,
  list,
}: ImageStickyProps) {
  return (
    <div className="w-screen flex flex-col items-center bg-background-secondary relative">
      <div className="z-30 sticky top-[12vh] bg-background-secondary w-full p-2">
        <div
          className={clsx(
            "transition-all duration-2000 ",
          )}
        >
          {mainHeading ? (
            <h2 className="text-3xl text-secondary text-center font-serif font-bold">
              {mainHeading}
            </h2>
          ) : null}
          {subHeading ? (
            <h3 className="text-2xl text-[#acadab] text-center italic">
              {subHeading}
            </h3>
          ) : null}
        </div>
      </div>

      <div className="flex w-screen">
        <div
          className={clsx(
            "w-1/2 sticky top-[calc(12vh+5rem)] h-[calc(88vh-5rem)] transition-all duration-2000",
          )}
        >
          {stickyImage ? (
            <Image
              src={urlFor(stickyImage).width(1920).height(1080).url()}
              alt={stickyImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              
              className="object-cover animate-blur-in rounded-2xl"
            />
          ) : null}
        </div>
        <div className="w-1/2">
          <div className="text-primary mx-6 flex flex-col items-center">
            {list.map((block, index) => {
              return (
                <div key={index} className="mb-30 last:mb-10 max-w-3xl">
                  <ServiceDescription
                    title={block.heading as string}
                    body={block.body as string}
                    estateServices={block.list as string[]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
