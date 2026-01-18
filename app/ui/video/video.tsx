import { useEffect, useRef } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {}
    };

    tryPlay();

    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover absolute inset-0"
      autoPlay
      playsInline
      muted
      loop
      preload="auto"
      src="/champagne.mp4"
    />
  );
}
