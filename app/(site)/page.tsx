import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";

import HomePage from "../ui/home/home-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { isEnabled } = await draftMode();
  const home = await client.fetch(
    homepageQuery,
    { },
    isEnabled
      ? { perspective: "drafts", useCdn: false, stega: true }
      : undefined,
  );

  return (
    <div>
      <HomePage home={home} />
    </div>
  );
}
