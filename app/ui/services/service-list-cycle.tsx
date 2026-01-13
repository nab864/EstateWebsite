import { useEffect, useState } from "react";

export default function CyclingList({
  estateServices,
}: {
  estateServices: String[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % estateServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <p key={index} className="animate-slide-left-out font-bold italic">
        {estateServices[index]}
      </p>
    </div>
  );
}
