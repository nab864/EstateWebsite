import clsx from "clsx";
import { useInView } from "../use-in-view-div";

export default function ServiceDescription({
  title,
  body,
  estateServices,
}: {
  title: String;
  body: String;
  estateServices: String[];
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div
    ref={ref}
      className={clsx(
        "transition-all duration-2000 bg-background mb-10 p-3 rounded-2xl",
        { "opacity-100 translate-y-0": isVisible },
        { "": !isVisible },
      )}
    >
      <h2 className="text-3xl underline mb-4 font-serif">{title}</h2>
      <p className="text-xl leading-relaxed mb-6">{body}</p>

      <div className="pl-5 text-lg text-[#868685]">
        <ul className="list-disc">
          {estateServices.map((service, i) => {
            return <li key={i}>{service}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
