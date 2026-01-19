import clsx from "clsx";
import CyclingList from "./service-list-cycle";

export default function ServiceDescription({
  title,
  body,
  estateServices,
}: {
  title: String;
  body: String;
  estateServices: String[];
}) {
  return (
    <div className={clsx("animate-blur-in opacity-0")}>
      <h2 className="text-3xl underline mb-4">{title}</h2>
      <p className="text-xl leading-relaxed mb-6">{body}</p>

      <div className="pl-5 text-lg">
        <ul className="list-disc">
          {estateServices.map((service) => {
            return <li>{service}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
