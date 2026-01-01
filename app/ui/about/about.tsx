import Image from "next/image";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";

export default function About() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex justify-center py-16">
      <div className="max-w-2xl flex flex-col items-center text-center gap-6">
        <div
          ref={ref}
          className={clsx(
            "relative w-48 h-48 transition-all duration-2000",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible }
          )}
        >
          <Image
            src="/company-logo.svg"
            alt="Estate Services Collective logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1
          ref={ref}
          className={clsx(
            "text-4xl font-serif tracking-wide transition-all duration-2000",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible }
          )}
        >
          Estate Services Collective
        </h1>

        <span
          ref={ref}
          className={clsx(
            "text-sm uppercase tracking-[0.3em] transition-all duration-2000",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible }
          )}
        >
          Nationwide Estate Management
        </span>

        <p
          ref={ref}
          className={clsx(
            "text-base leading-relaxed text-muted-foreground transition-all duration-2000",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 translate-x-12": !isVisible }
          )}
        >
          Estate Services Collective is a nationwide network of trusted estate
          managers delivering discreet, full-spectrum property oversight across
          the United States. We steward private residences with precision,
          consistency, care, and ensure each home is maintained, protected, and
          operating seamlessly, whether occupied or away.
        </p>
      </div>
    </div>
  );
}
