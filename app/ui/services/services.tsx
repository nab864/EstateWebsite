import ServiceBox from "./services-box";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";
import Image from "next/image";
import propertyImage from "../../../public/property-management.jpg";

export default function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center bg-background-secondary relative">
      <div className="z-30 sticky top-[12vh] bg-background-secondary w-full p-2">
        <div
          ref={ref}
          className={clsx(
            "transition-all duration-2000 ",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible },
          )}
        >
          <h2 className="text-3xl text-secondary text-center font-serif font-bold">
            Our Services at a Glance
          </h2>
          <h3 className="text-2xl text-[#acadab] text-center italic">
            How We Support Your Estate
          </h3>
        </div>
      </div>

      <div className="flex w-screen">
        <div
          ref={ref}
          className={clsx(
            "w-1/2 sticky top-[calc(12vh+5rem)] h-[calc(88vh-5rem)] transition-all duration-2000",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 -translate-x-12": !isVisible },
          )}
        >
          <Image
            src={propertyImage}
            alt="Luxury estate property management and maintenance"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            loading="lazy"
            className="object-cover animate-blur-in rounded-2xl"
          />
        </div>
        <div className="w-1/2">
          <ServiceBox />
        </div>
      </div>
    </div>
  );
}
