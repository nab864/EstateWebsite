import clsx from "clsx";
import Image from "next/image";
import { useInView } from "../use-in-view";

export default function ServiceDescription({
  title,
  body,
  listId,
  activeService,
  imageURL,
}: {
  title: String;
  body: String;
  listId: String;
  activeService: String;
  imageURL: String;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={clsx(
        "w-[75%] max-w-[150ch] flex bg-secondary p-5 rounded-2xl overflow-hidden transition-all duration-2000",
        { hidden: listId !== activeService },
        { "opacity-100 translate-y-0": isVisible },
        { "opacity-0 translate-y-12": !isVisible }
      )}
    >
      <div className="w-[50%]">
        <h2 className="text-3xl underline mb-5">{title}</h2>
        <p className="text-xl">{body}</p>
      </div>
      <Image
        src={imageURL as string}
        alt="Property Image"
        width={500}
        height={500}
        className="h-full w-[50%] object-cover"
      />
    </div>
  );
}
