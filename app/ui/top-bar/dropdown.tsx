"use client";
import { RegionNavItem } from "@/app/lib/definition";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function DropDownMenu({
  regions,
}: {
  regions: RegionNavItem[];
}) {
  return (
    <Menu>
      {({ open }) => (
        <div className="group">
          <MenuButton
            className={`inline-flex items-center gap-2 relative font-serif text-primary
            after:absolute after:left-0 after:-bottom-1
            after:h-px after:bg-current
            after:transition-all after:duration-300
            select-none focus:not-data-focus:outline-none
            ${open ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`}
          >
            REGIONS WE SERVE
            <ChevronDownIcon className="size-4" />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 bg-background z-50 p-1 text-sm text-primary transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
          >
            {regions.map((region, index) => {
              return (
                <MenuItem key={index}>
                  <Link
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-background-secondary/10"
                    href={`/regions/${region.slug}`}
                  >
                    {region.title}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuItems>
        </div>
      )}
    </Menu>
  );
}
