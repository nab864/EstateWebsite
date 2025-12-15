import Image from "next/image";
export default function TopBar() {
  return (
    <div className="w-screen grid grid-cols-3 items-center h-[10vh] bg-background text-secondary-accent">
      <div className="relative h-full animate-slide-down delay-500 opacity-0">
        <Image
          src="/company-logo.svg"
          alt="company-logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      <h1 className="text-center font-serif text-4xl animate-slide-down">
        Colorado Estate Management
      </h1>
    </div>
  );
}
