import clsx from "clsx";
import Image from "next/image";
import { useInView } from "../use-in-view-div";

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
  const textSplit = title.split(" ");
  return (
    <div
      ref={ref}
      className={clsx(
        "flex transition-all duration-2000 rounded-xl mx-2",
        { hidden: listId !== activeService },
        { "opacity-100 translate-x-0": isVisible },
        { "opacity-0 translate-x-12": !isVisible }
      )}
    >
      <div className="w-[40%] bg-background-secondary rounded-xl p-5">
        <h2 className="text-3xl underline mb-5">{title}</h2>
        <p className="text-xl">{body}</p>
      </div>
      <div className="w-[20%] bg-background-secondary rounded-xl mx-2 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-secondary/40 flex items-center justify-center">
          <span className="text-4xl font-serif tracking-wide">⟡</span>
        </div>
      </div>
      <div className="w-[40%] bg-background-secondary rounded-xl p-5">
        <Image
          src={imageURL as string}
          alt="Property Image"
          width={500}
          height={500}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
