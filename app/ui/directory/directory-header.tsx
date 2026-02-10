"use client";
import CompanyLogo from "../company-logo";
import { useInView } from "../../ui/use-in-view-div";
import clsx from "clsx";
import InterMap from "../map/interactive-map";

export default function DirectoryHeader() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="pt-[12vh] w-screen flex flex-col items-center mb-5">
      {/*<InterMap /> */}
      <div
        ref={ref}
        className={clsx(
          "transition-all duration-2000",
          { "opacity-100 translate-x-0": isVisible },
          { "opacity-0 translate-x-12": !isVisible },
        )}
      >
        <div className="h-[40vh]">
          <CompanyLogo />
        </div>
      </div>

      <h1
        ref={ref}
        className={clsx(
          "text-xl font-serif tracking-wide transition-all duration-2000 text-primary mb-5",
          { "opacity-100 translate-x-0": isVisible },
          { "opacity-0 translate-x-12": !isVisible },
        )}
      >
        Browse Our Directory — Find Elite Estate Management Services in Your Market
      </h1>
    </div>
  );
}