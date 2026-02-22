import { CTAImageProps } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export function CTAImageSection({
  mainSection,
  inverseColor,
  ctaText,
  ctaLink,
  ctaImage,
  ctaImageAlt,
}: CTAImageProps) {
  return (
    <section className={clsx("w-screen flex flex-col items-center py-10", {
      "bg-background-secondary": inverseColor
    })}>
      {mainSection ? 
      <h2
        className={clsx(
          "text-4xl w-full text-center font-serif transition-all duration-2000 mb-5",
          {
            "text-primary": !inverseColor,
            "text-secondary": inverseColor
          }
        )}
      >
        {mainSection}
      </h2> : null
      }
      <div className={clsx("my-5 mx-2 transition-all duration-2000")}>
        <Link href={ctaLink} className="">
          <div className="relative group rounded-4xl sm:rounded-none sm:hover:rounded-4xl overflow-hidden transition-all duration-200 bg-background-secondary">
            <Image
              src={urlFor(ctaImage).width(1920).height(1080).url()}
              alt={ctaImageAlt}
              width={664}
              height={443}
              loading="lazy"
              className="hover:opacity-50 transition-opacity duration-200"
            />
            <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {ctaText ? 
              <h3 className="text-2xl text-secondary text-center">
                {ctaText}
              </h3> : null
              }
            </div>
            <ArrowRightIcon className="child absolute h-20 text-secondary bottom-0 right-0 sm:translate-14 group-hover:translate-0 transition-transform duration-200" />
          </div>
        </Link>
      </div>
    </section>
  );
}
