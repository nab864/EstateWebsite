import Link from "next/link";
import CompanyLogo from "../company-logo";
import { RegionNavItem } from "../../lib/definition";
import DropDownMenu from "./dropdown";
import { client } from "@/sanity/lib/client";
import { regionNavQuery } from "@/sanity/lib/queries";


export default async function TopBar() {
  const regions = await client.fetch<RegionNavItem[]>(regionNavQuery);
  return (
    <div className="w-screen grid grid-cols-2 items-center h-[calc(12vh+1px)] top-0 left-0 z-40 fixed bg-background border-b border-primary">
      <div className="flex">
        <Link
          href="/"
          className="h-[12vh] flex items-center pl-12"
          aria-label="Private Estate Network home"
        >
          <CompanyLogo />
          <h1 className="font-serif text-[1.1rem]">
            <span className="block text-primary">REGENT PROPERTY</span>
            <span className="block leading-1.5 pb-2 text-[#396a83]">
              GROUP
            </span>
          </h1>
        </Link>
      </div>

      <div className="grid grid-cols-2 justify-self-end pr-12">
        <DropDownMenu regions={regions}/>
        <Link
          href="/directory"
          className="relative font-serif text-primary
  after:absolute after:left-0 after:-bottom-1
  after:h-px after:w-0 after:bg-current
  after:transition-all after:duration-300
  hover:after:w-full select-none"
        >
          FIND AN ESTATE MANAGER
        </Link>
      </div>
    </div>
  );
}
