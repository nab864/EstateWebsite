import ServiceBox from "./services-box";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";

export default function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center mt-15">
      <div
        ref={ref}
        className={clsx(
          "transition-all duration-2000",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible }
        )}
      >
        <h2 className="text-3xl text-primary text-center">
          Our work is simple in purpose and sophisticated in execution:
        </h2>
        <h2 className="text-3xl text-primary text-center">
          we protect your assets, manage complexity, and give you back time.
        </h2>
      </div>
      <ServiceBox />
    </div>
  );
}
