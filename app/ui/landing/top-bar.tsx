import CompanyLogo from "../company-logo";
export default function TopBar() {
  return (
    <div className="w-screen grid grid-cols-3 items-center h-[12vh] px-12">
      <div className="justify-self-start opacity-0 animate-slide-down delay-300">
        <div className="h-[12vh]">
          <CompanyLogo />
        </div>
      </div>

      <h1 className="text-center font-serif text-[2rem] tracking-wide text-primary opacity-0 animate-slide-down delay-500">
        Estate Services Collective
      </h1>

      <div className="justify-self-end text-sm tracking-widest uppercase text-muted-foreground opacity-0 animate-slide-down delay-3000">
        Private Estate Management
      </div>
    </div>
  );
}
