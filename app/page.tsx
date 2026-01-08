"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import FazeWord from "./ui/faze-in";
import Landing from "./ui/landing/landing";
import Map from "./ui/map/map";
import Services from "./ui/services/services";
import Footer from "./ui/footer/footer";
import About from "./ui/about/about";
import CompanyLogo from "./ui/company-logo";

export default function WelcomeMessage() {
  const [show, setShow] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    localStorage.setItem("hasVisited", "false");
    scrollRef.current?.scrollTo(0, 0);
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited === "false") {
      setShow(true);
      console.log("This was false");
      localStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show)
    return (
      <div className="fixed inset-0 overflow-auto" ref={scrollRef}>
        <Landing />
        <About />
        <Services />
        <Map />
        <Footer />
      </div>
    );

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-background z-50 opacity-0 animate-blur-in"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="opacity-0 animate-blur-in h-[50vh]">
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
  );
}
