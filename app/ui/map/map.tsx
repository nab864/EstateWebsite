import MapSVG from "./map-svg";
import { useState } from "react";
import PersonCard from "./person-card";
import { useInView } from "../use-in-view";
import clsx from "clsx";

export default function Map() {
  const [activeState, setActiveState] = useState<string | null>(null);
  const [markerClicked, setMarkerClicked] = useState<Boolean>(false);
  const [showContent, setShowContent] = useState<Boolean>(false);
  const [fadeOutContent, setFadeOutContent] = useState<Boolean>(false);
  const [isClosing, setIsClosing] = useState<Boolean>(false);
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1
        className={clsx(
          "text-4xl h-[10vh] w-full text-secondary-accent text-center transition-all duration-2000",
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
          "flex-1 min-h-0 w-[90%] my-1 transition-all duration-2000",
          { "opacity-100 translate-y-0": isVisible },
          { "opacity-0 translate-y-12": !isVisible }
        )}
      >
        <div className="h-full w-full flex">
          <MapSVG
            activeState={activeState}
            setActiveState={setActiveState}
            markerClicked={markerClicked}
            setMarkerClicked={setMarkerClicked}
            setFadeOutContent={setFadeOutContent}
            setShowContent={setShowContent}
            setIsClosing={setIsClosing}
          />

          <div
            onTransitionEnd={(e) => {
              if (e.currentTarget !== e.target) return;
              if (markerClicked && !isClosing) {
                setFadeOutContent(false);
                setShowContent(true);
              } else if (!markerClicked && isClosing) {
                setShowContent(false);
                setFadeOutContent(false);
                setIsClosing(false);
              }
            }}
            className={`bg-gray-300 transition-all duration-1000 ease-in rounded-r-lg
                    ${markerClicked ? "w-1/2" : "w-0"}`}
          >
            {showContent && <PersonCard fadeOutContent={fadeOutContent} />}
          </div>
        </div>
      </div>
    </div>
  );
}
