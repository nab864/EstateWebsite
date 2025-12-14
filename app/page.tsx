"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import FazeWord from "./ui/faze-in";
import Landing from "./ui/landing/landing";
import Map from "./ui/map/map";
import Services from "./ui/services/services";

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
        <Services />
        <Map />
      </div>
    );

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background backdrop-blur-sm">
      <div className="relative">
        <div
          className="absolute bg-background h-full w-full z-50 opacity-0 animate-blur-in"
          style={{ animationDelay: `${3}s` }}
        ></div>
        <Image
          src="/company-logo.svg"
          alt="Logo"
          width={500}
          height={500}
          className="opacity-0 animate-blur-in mb-5"
        />
        <FazeWord text={"Colorado Estate Management"} />
      </div>
    </div>
  );
}
