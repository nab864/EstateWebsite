import clsx from "clsx";
import Image from "next/image";

export default function PersonCard({
  fadeOutContent,
}: {
  fadeOutContent: Boolean;
}) {
  return (
    <div
      className="h-full opacity-0 animate-blur-in"
    >
      <div className={clsx(
        "flex flex-col items-center justify-center h-full mx-10 transition-opacity duration-1000 ease-in-out",
        { "opacity-0": fadeOutContent },
        { "opacity-100": !fadeOutContent }
      )}>
        <Image
          src={"/Andrew-Profile.png"}
          alt="Person"
          width={200}
          height={200}
        />
        <h1 className="text-3xl">Colorado Estate Management</h1>
        <h1 className="text-2xl">Andrew H. Beardsley</h1>
        <p>
          Colorado Estate Management is a premier full-service property
          management company dedicated to protecting and enhancing the value of
          every investment we oversee. Founded and led by Andrew H. Beardsley,
          the company brings over 10 years of hands-on experience managing
          residential and commercial properties across both Florida and
          Colorado. This diverse background allows us to combine proven coastal
          market strategies with the unique demands of mountain and metropolitan
          real estate.
        </p>
      </div>
    </div>
  );
}
