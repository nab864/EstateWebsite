export default function FazeWord({ text }: { text: String }) {
  return (
    <>
      <span
        className="animate-blur-in text-white opacity-0 text-center text-4xl"
        style={{ animationDelay: `${1}s` }}
      >
        {text}
      </span>
    </>
  );
}
