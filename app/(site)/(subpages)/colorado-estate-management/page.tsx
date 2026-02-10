import Region from "@/app/ui/regions/region";
import type { Metadata } from "next";


//this will change to generatedMetadata
export const metadata: Metadata = {
  title:
    "Colorado Luxury Estate Management Services | Denver, Boulder, Aspen, Vail",
  description:
    "Elite fractional estate management for Colorado's Front Range and Mountain communities. Professional property services for Denver, Boulder, Cherry Hills Village, Aspen, Vail, and Breckenridge luxury homes.",
  keywords: [
    "Colorado estate management",
    "Denver luxury property management",
    "Aspen estate services",
    "Boulder estate manager",
    "Vail property concierge",
  ],
};

export default async function Page() {
  return (
    <div className="">
     <Region />
    </div>
  );
}
