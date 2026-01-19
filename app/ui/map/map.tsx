import MapSVG from "./map-svg";
import { useState } from "react";
import PersonCard from "./person-card";
import { useInView } from "../use-in-view-div";
import clsx from "clsx";
import Image from "next/image";

export default function Map() {
  const [activeState, setActiveState] = useState<string | null>(null);
  const [markerClicked, setMarkerClicked] = useState<Boolean>(false);
  const [showContent, setShowContent] = useState<Boolean>(false);
  const [fadeOutContent, setFadeOutContent] = useState<Boolean>(false);
  const [isClosing, setIsClosing] = useState<Boolean>(false);
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div className="w-screen flex flex-col items-center m-1">
      <h1
        className={clsx(
          "text-4xl w-full text-primary text-center transition-all duration-2000",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible }
        )}
        ref={ref}
      >
        Connect with Trusted Local Professionals
      </h1>
      <div
        ref={ref}
        className={clsx(
          "my-1 transition-all duration-2000",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible }
        )}
      >
        <Image src={"/united-states-map.jpg"} alt="US Map" width={664} height={443} className="object-contain rounded-xl"/>
      </div>
    </div>
  );
}
