import Image from "next/image";
import { useEffect, useRef } from "react";

type ImageCarouselProps = {
  images: string[];
  speed?: number;
};

export default function ImageCarousel({ images, speed = 2 }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animation: number;
    let position = 0;

    const animate = () => {
      position -= speed / 10;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animation = requestAnimationFrame(animate);
    };

    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="overflow-hidden w-full relative flex-1 animate-slide-left opacity-0" style={{ animationDelay: `${1}s` }}>
      <div
        ref={trackRef}
        className="flex absolute top-0 left-0 h-full"
        style={{ width: "max-content" }}
      >
        {[...images, ...images].map((src, i) => (
          <Image width={1000} height={1000} src={src} alt={`carousel-item-${i}`} key={i} className="h-full w-auto object-cover border border-secondary" />
        ))}
      </div>
    </div>
  );
}

