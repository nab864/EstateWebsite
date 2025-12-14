"use client";

export default function FallingWord({ text }: { text: String }) {
  return (
    <>
      
      <div className="flex">
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            className="animate-slide-in text-background text-center text-3xl"
            style={{ animationDelay: `${1.5 + (i * 0.2)}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  );
}
