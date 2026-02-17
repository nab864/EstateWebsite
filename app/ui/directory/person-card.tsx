import { PersonCardDef } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function PersonCard({
  name,
  company,
  url,
  state,
  region,
  markets,
  services,
  specialties,
  about,
  established,
  personImage,
  handleRegionSearch,
  handleCategorySearch,
}: PersonCardDef) {
  return (
    <div className="flex flex-col w-96 h-[550px] items-center text-primary bg-background rounded-lg border m-2">
      <div className="w-full h-40 flex items-center justify-center m-2">
        <Link
          href={url}
          target="_blank"
          className="bg-background-secondary rounded"
        >
          <Image
            src={urlFor(personImage).width(160).height(160).url()}
            alt={name}
            width={160}
            height={160}
            className="object-cover rounded hover:opacity-80 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1 mt-2 text-center">
        <Link href={url} target="_blank">
          <h3 className="font-semibold text-lg hover:text-[#636b6e]">
            {company}
          </h3>
        </Link>
        <p className="text-sm text-gray-700 font-medium">{name}</p>
        <p className="text-xs text-gray-500">Established {established}</p>
        <button
          className="text-sm text-gray-600 font-semibold hover:text-[#636b6e]"
          onClick={() => handleRegionSearch?.(region)}
        >
          {region}
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {services.map((service, i) => (
          <button
            key={i}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:text-[#636b6e] cursor-pointer"
            onClick={() => handleCategorySearch?.(service)}
          >
            {service}
          </button>
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-600 text-center px-2">
        <span className="font-semibold">Markets:</span> {markets.join(", ")}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {specialties.map((specialty, i) => (
          <span
            key={i}
            className="text-[11px] bg-background-secondary text-secondary px-2 py-1 rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-600 text-center line-clamp-3 px-2">
        {about}
      </p>
    </div>
  );
}
