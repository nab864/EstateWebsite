"use client";

import { useEffect, useState, useRef } from "react";
import Landing from "./../ui/landing/landing";
import Map from "./../ui/map/map";
import Services from "./../ui/services/services";
import About from "./../ui/about/about";
import CompanyLogo from "./../ui/company-logo";
import Footer from "./../ui/footer/footer";

export default function Page() {
  const [show, setShow] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    //localStorage.setItem("hasVisited", "false");
    scrollRef.current?.scrollTo(0, 0);
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited === "false") {
      setShow(true);
      setIsFirstVisit(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
      const timer2 = setTimeout(() => {
        localStorage.setItem("hasVisited", "true");
      }, 10000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
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
            <h1
              className="font-serif text-5xl animate-blur-in opacity-0"
              style={{ animationDelay: `${1}s` }}
            >
              <span className="text-primary">
                PRIVATE ESTATE
                <span className="text-[#396a83]">{" NETWORK"}</span>
              </span>
            </h1>
          </div>
        </div>
      ) : null}

      <div>
        <Landing isFirstVisit={isFirstVisit} />
        {!show ? (
          <div>
            <About />
            <Services />
            <Map />
            <Footer />
          </div>
        ) : null}
      </div>
    </div>
  );
}
