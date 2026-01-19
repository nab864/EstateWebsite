"use client";

import { useEffect, useState, useRef } from "react";
import Landing from "./ui/landing/landing";
import Map from "./ui/map/map";
import Services from "./ui/services/services";
import About from "./ui/about/about";
import CompanyLogo from "./ui/company-logo";

export default function Page() {
  const [show, setShow] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    localStorage.setItem("hasVisited", "false");
    scrollRef.current?.scrollTo(0, 0);
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited === "false") {
      setShow(true);
      localStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      {show ? (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-background animate-slide-up-out z-50"
          style={{ animationDelay: `${3.5}s` }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <div className="opacity-0 animate-blur-in h-[50vh] mb-10">
              <CompanyLogo />
            </div>
            <span
              className="animate-blur-in text-primary opacity-0 text-center text-4xl"
              style={{ animationDelay: `${1}s` }}
            >
              Private Estate Network
            </span>
          </div>
        </div>
      ) : null}

      <div className="" ref={scrollRef}>
        <Landing />
        {!show ? (
          <div>
            <About />
            <Services />
            <Map />
          </div>
        ) : null}
      </div>
    </div>
  );
}
