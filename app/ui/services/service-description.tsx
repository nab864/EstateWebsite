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
    <div className={clsx("animate-slide-left duration-1000")}>
      <h2 className="text-3xl underline mb-4">{title}</h2>
      <p className="text-xl leading-relaxed mb-6">{body}</p>

      <div className="pl-5 overflow-hidden text-lg">
        <CyclingList estateServices={estateServices} />
      </div>
    </div>
  );
}
