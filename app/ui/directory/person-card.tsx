import { PersonCardDef } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";

export default function PersonCard({
  name,
  url,
  region,
  categories,
  image,
  handleRegionSearch,
  handleCategorySearch,
}: PersonCardDef) {
  return (
    <div className="flex flex-col w-96 h-[400px] items-center text-primary">
      <div className="w-full h-48 flex items-center justify-center">
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
        <button className="text-sm text-gray-600 cursor-pointer font-semibold hover:text-[#636b6e]"
        onClick={() => handleRegionSearch?.(region)}>
          {region}
        </button>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:text-[#636b6e]"
                onClick={() => handleCategorySearch?.(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
