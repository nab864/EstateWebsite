import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";

import HomePage from "../ui/home/home-page";
import { stegaClean } from "next-sanity";

export default async function Page() {
  const { isEnabled } = await draftMode();
  const home = await client.fetch(
    homepageQuery,
    { },
    isEnabled
      ? { perspective: "drafts", useCdn: false, stega: true }
      : undefined,
  );
  const cleanHome = stegaClean(home)
  console.log(cleanHome)
  console.log(home)
  return (
    <div>
      <HomePage home={cleanHome} />
    </div>
  );
}
