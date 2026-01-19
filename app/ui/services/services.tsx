import ServiceBox from "./services-box";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";

export default function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center mt-15 bg-background-secondary">
      <div className={clsx(
                  "transition-all duration-2000 mt-5",
                  { "opacity-100 translate-y-0": isVisible },
                  { "opacity-0 translate-y-12": !isVisible },
                )}>
        <h1 className="text-3xl text-secondary text-center font-serif font-bold">Our Services at a Glance</h1>
        <h2 className="text-2xl text-[#acadab] text-center italic">How We Support Your Estate</h2>
      </div>
      <ServiceBox />
    </div>
  );
}
