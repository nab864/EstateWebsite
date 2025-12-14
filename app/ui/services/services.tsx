import ServiceBox from "./services-box";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";

export default function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center mt-20">
      <h1
        ref={ref}
        className={clsx(
          "text-4xl h-[10vh] w-full text-secondary-accent text-center transition-all duration-2000",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible }
        )}
      >
        Our Signature Services
      </h1>
      <ServiceBox />
    </div>
  );
}
