import ServiceBox from "./services-box";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";
import Image from "next/image";
import propertyImage from "../../../public/property-management.jpg";

export default function Services() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="w-screen flex flex-col items-center bg-background-secondary relative">
      <div className="z-50 top-[12vh] sticky bg-background-secondary w-full">
        <div
          ref={ref}
          className={clsx(
            "transition-all duration-2000 my-5 ",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible },
          )}
        >
          <h1 className="text-3xl text-secondary text-center font-serif font-bold">
            Our Services at a Glance
          </h1>
          <h2 className="text-2xl text-[#acadab] text-center italic">
            How We Support Your Estate
          </h2>
        </div>
      </div>
      <div className="flex w-screen relative">
        <div
          ref={ref}
          className={clsx(
            "w-1/2 sticky top-[24vh] h-[76vh] transition-all duration-2000",
            { "opacity-100 translate-x-0": isVisible },
            { "opacity-0 -translate-x-12": !isVisible },
          )}
        >
          <Image
            src={propertyImage}
            alt="Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            className="object-cover animate-blur-in"
          />
        </div>
        <div className="w-1/2">
          <ServiceBox />
        </div>
      </div>
    </div>
  );
}
