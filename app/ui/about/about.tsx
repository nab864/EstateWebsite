import { useInView } from "../use-in-view-div";
import clsx from "clsx";
import CompanyLogo from "../company-logo";

export default function About() {
  const logo = useInView<HTMLDivElement>();
  const title = useInView<HTMLDivElement>();
  const header1 = useInView<HTMLDivElement>();
  const text1 = useInView<HTMLDivElement>();
  const text2 = useInView<HTMLDivElement>();
  const text3 = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center mt-5 mb-20">
      <div className="max-w-2xl flex flex-col items-center text-center gap-6">
        <div
          ref={logo.ref}
          className={clsx(
            "transition-all duration-2000",
            { "opacity-100 translate-x-0 blur-none": logo.isVisible },
            { "opacity-0 translate-x-12 blur-lg": !logo.isVisible },
          )}
        >
          <div className="h-[40vh]">
            <CompanyLogo />
          </div>
        </div>

        <h2
          ref={title.ref}
          className={clsx(
            "text-4xl font-serif tracking-wide transition-all duration-2000 text-primary",
            { "opacity-100 translate-x-0 blur-none": title.isVisible },
            { "opacity-0 translate-x-12 blur-lg": !title.isVisible },
          )}
        >
          Private Estate Network
        </h2>

        <span
          ref={title.ref}
          className={clsx(
            "text-sm uppercase tracking-[0.3em] transition-all duration-2000 text-primary",
            { "opacity-100 translate-x-0 blur-none": title.isVisible },
            { "opacity-0 translate-x-12 blur-lg": !title.isVisible },
          )}
        >
          Fractional Estate & Lifestyle Management for Ultra-High-Net-Worth
          Families
        </span>

        <p
          ref={title.ref}
          className={clsx(
            "text-base leading-relaxed text-muted-foreground transition-all duration-2000 text-primary",
            { "opacity-100 translate-x-0 blue-none": title.isVisible },
            { "opacity-0 translate-x-12 blur-lg": !title.isVisible },
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
      <h3
        ref={text1.ref}
        className={clsx(
          "text-3xl text-primary text-center mt-15 transition-all duration-2000",
          { "opacity-100 blur-none": text1.isVisible },
          { "opacity-0 blur-lg": !text1.isVisible },
        )}
      >
        Our work is simple in purpose and sophisticated in execution:
      </h3>
      <div
        ref={text2.ref}
        className={clsx(
          "flex flex-col sm:flex-row justify-between items-between text-3xl space-y-5 text-primary mt-10 text-center w-3/4 italic font-bold",
        )}
      >
        <h4
          className={clsx(
            {
              "opacity-100 blur-none transition-all duration-2000":
                text2.isVisible,
            },
            { "opacity-0 blur-lg": !text2.isVisible },
          )}
        >
          Protect your Assets
        </h4>
        <h4
          className={clsx(
            {
              "opacity-100 blur-none transition-all duration-2000":
                text2.isVisible,
            },
            { "opacity-0 blur-lg": !text2.isVisible },
          )}
          style={{ animationDelay: `${1.5}s` }}
        >
          Manage Complexity
        </h4>
        <h4
          className={clsx(
            {
              "opacity-100 blur-none transition-all duration-2000":
                text2.isVisible,
            },
            { "opacity-0 blur-lg": !text2.isVisible },
          )}
          style={{ animationDelay: `${3}s` }}
        >
          Give You Back Time
        </h4>
      </div>
    </div>
  );
}
