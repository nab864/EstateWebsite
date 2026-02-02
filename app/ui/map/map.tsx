import { useState } from "react";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Map() {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div className="w-screen flex flex-col items-center mt-5">
      <h2
        className={clsx(
          "text-4xl w-full text-primary text-center font-serif transition-all duration-2000 mb-5",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible },
        )}
        ref={ref}
      >
        A Trusted Network, Nationwide
      </h2>
      <div
        ref={ref}
        className={clsx(
          "my-1 transition-all duration-2000",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible },
        )}
      >
        <Link href="/directory" className="">
          <div className="relative group hover:rounded-4xl overflow-hidden transition-all duration-200 bg-background-secondary">
            <Image
              src={"/united-states-map.jpg"}
              alt="United States coverage map showing Private Estate Network service areas across the country"
              width={664}
              height={443}
              className="hover:opacity-50 transition-opacity duration-200"
            />
            <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <h3 className="text-2xl text-secondary text-center">
                Find an Estate Manager Near You
              </h3>
            </div>
            <ArrowRightIcon className="child absolute h-20 text-secondary bottom-0 right-0 translate-14 group-hover:translate-0 transition-transform duration-200" />
          </div>
        </Link>
      </div>
    </div>
  );
}
