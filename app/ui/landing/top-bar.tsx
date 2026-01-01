import Image from "next/image";
export default function TopBar() {
  return (
    <div className="w-screen grid grid-cols-3 items-center h-[12vh] px-12">
  {/* Logo */}
  <div className="relative h-[90%] w-40 justify-self-start opacity-0 animate-slide-down delay-300">
    <Image
      src="/company-logo.svg"
      alt="Estate Services Collective logo"
      fill
      className="object-contain object-left"
      priority
    />
  </div>

  {/* Brand Name */}
  <h1 className="text-center font-serif text-[2rem] tracking-wide text-primary opacity-0 animate-slide-down delay-500">
    Estate Services Collective
  </h1>

  {/* Right Spacer / Future Nav */}
  <div className="justify-self-end text-sm tracking-widest uppercase text-muted-foreground opacity-0 animate-slide-down delay-3000">
    Private Estate Management
  </div>
</div>

  );
}
