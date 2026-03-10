import { homepageQuery } from "@/sanity/lib/queries";
import HomePage from "../ui/home/home-page";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Page() {
  const home = await sanityFetch({ query: homepageQuery})
  return (
    <div>
      <HomePage home={home} />
    </div>
  );
}
