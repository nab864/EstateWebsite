import { PersonCardDef } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";

export default function PersonCard({
  name,
  url,
  region,
  categories,
  image,
}: PersonCardDef) {
  return (
    <div className="flex flex-col w-96 h-[400px] items-center p-4 text-primary">
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <Link
          href={url}
          target="_blank"
          className="bg-background-secondary rounded"
        >
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover rounded hover:opacity-80 transition-all duration-300"
          />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Link href={url} target="_blank">
          <h3 className="font-semibold text-lg text-center hover:text-[#636b6e]">
            {name}
          </h3>
        </Link>
        <h4 className="text-sm text-gray-600">{region}</h4>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {categories.map((category, i) => {
            return (
              <h5
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                {category}
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
}
