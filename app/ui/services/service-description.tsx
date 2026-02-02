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
        "transition-all duration-2000 bg-background/10 mb-10 p-3 rounded-2xl",
        { "opacity-100 translate-y-0": isVisible },
        { "": !isVisible },
      )}
    >
      <h4 className="text-3xl underline mb-4 font-serif text-secondary">{title}</h4>
      <p className="text-xl leading-relaxed mb-6 text-secondary">{body}</p>

      <div className="pl-5 text-lg text-secondary">
        <ul className="list-disc">
          {estateServices.map((service, i) => {
            return <li key={i}>{service}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
