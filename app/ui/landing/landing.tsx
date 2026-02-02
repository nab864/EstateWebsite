import { useEffect, useState } from "react";
import Video from "../video/video";
import clsx from "clsx";
import Link from "next/link";

export default function cLanding({ isFirstVisit }: { isFirstVisit: boolean }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = window.innerHeight * 0.12;
      const startFade = headerHeight * 0.0;
      const fadeDistance = headerHeight * 6.0;

      const raw = 1 - (scrollY - startFade) / fadeDistance;

      const nextOpacity = Math.min(1, Math.max(0, raw));
      setOpacity(nextOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="h-screen flex flex-col pt-[12vh]">
      <div
        className="flex-1 overflow-hidden relative"
        style={{ filter: `blur(${(1 - opacity) * 5}px)` }}
      >
        <Video />
      </div>

      <div
        className={clsx(
          "absolute bottom-30 left-30 m-8 flex flex-col items-center animate-slide-right opacity-0",
          {
            "animate-slide-right opacity-0": isFirstVisit,
            "opacity-100": !isFirstVisit
          }
        )}
        style={{ animationDelay: isFirstVisit ? "5s" : "0s" }}
      >
        <h1
          className="text-7xl text-[#f6f3ee] mb-4 font-bold font-serif transition-all duration-100"
          style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
        >
          Private Estate Network
        </h1>
        <h2
          className="text-3xl text-[#f6f3ee] text-center transition-all duration-100"
          style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
        >
          Commitment You Feel <br />
          in Every Detail
        </h2>
        <div
          className="transition-all duration-100"
          style={{ opacity, filter: `blur(${(1 - opacity) * 4}px)` }}
        >
          <Link href="/directory" className="border text-[#f6f3ee] hover:bg-[#f6f3ee] hover:text-primary transition-color duration-300 p-1 mt-3 rounded cursor-pointer focus-visible:bg-[#f6f3ee] focus-visible:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
            Find an Estate Manager
          </Link>
        </div>
      </div>
    </div>
  );
}
