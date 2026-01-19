import Image from "next/image";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";
import CompanyLogo from "../company-logo";

export default function About() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center mt-5">
      <div className="max-w-2xl flex flex-col items-center text-center gap-6">
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
            "text-4xl font-serif tracking-wide transition-all duration-2000 text-primary",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible },
          )}
        >
          Private Estate Network
        </h1>

        <span
          ref={ref}
          className={clsx(
            "text-sm uppercase tracking-[0.3em] transition-all duration-2000 text-primary",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible },
          )}
        >
          Fractional Estate & Lifestyle Management for Ultra-High-Net-Worth
          Families
        </span>

        <p
          ref={ref}
          className={clsx(
            "text-base leading-relaxed text-muted-foreground transition-all duration-2000 text-primary",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible },
          )}
        >
          We are a national network of trusted estate management professionals
          providing fractional, full-service oversight of luxury residences and
          complex estates across the United States. Our collective expertise
          supports ultra-high-net-worth individuals, multigenerational families,
          family offices, and luxury builders who require consistent standards,
          local expertise, and absolute discretion—without the inefficiency of
          fully staffed, siloed operations.
        </p>
      </div>
      <h2 className="text-3xl text-primary text-center mt-15">
        Our work is simple in purpose and sophisticated in execution:
      </h2>
      <h2 className="text-3xl text-primary text-center">
        we protect your assets, manage complexity, and give you back time.
      </h2>
    </div>
  );
}
