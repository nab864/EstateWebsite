"use client";
import { PersonCardDef } from "@/app/lib/definition";
import { useEffect, useState } from "react";
import personJSON from "@/public/dummy-data.json";
import PersonCard from "./person-card";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Directory({
  region,
  category,
}: {
  region: string;
  category: string;
}) {
  const [personList, setPersonList] = useState<PersonCardDef[]>(personJSON);
  const [filterPersonList, setFilterPersonList] =
    useState<PersonCardDef[]>(personJSON);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    let filteredList = personList;
    if (region) {
      filteredList = personList.filter((entry) => entry.region === region);
    }
    if (category) {
      filteredList = filteredList.filter((entry) =>
        entry.categories.includes(category),
      );
    }
    setFilterPersonList(filteredList);
  }, [region, category]);

  const handleRegionSearch = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  };
  const handleCategorySearch = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  };
  return (
    <div>
      <div className="flex justify-center">
        <select
          name="region"
          id="region-select"
          className="border p-1 w-96"
          onChange={(e) => handleRegionSearch(e.target.value)}
          value={region}
        >
          <option value="">Select Region</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Florida">Florida</option>
          <option value="Texas">Texas</option>
        </select>

        <select
          name="category"
          id="category-select"
          className="border p-1 w-96 ml-5"
          onChange={(e) => handleCategorySearch(e.target.value)}
          value={category}
        >
          <option value="">Select Category</option>
          <option value="Estate Oversight & Property Maintenance">
            Estate Oversight & Property Maintenance
          </option>
          <option value="Home Watch & Absentee Owner Care">
            Home Watch & Absentee Owner Care
          </option>
          <option value="Vendor & Contractor Management">
            Vendor & Contractor Management
          </option>
          <option value="Household Staff & Operations Support">
            Household Staff & Operations Support
          </option>
          <option value="Lifestyle & Personal Concierge">
            Lifestyle & Personal Concierge
          </option>
          <option value="Project Management & Renovations">
            Project Management & Renovations
          </option>
          <option value="Emergency Planning & Response">
            Emergency Planning & Response
          </option>
          <option value="Administrative & Owner Reporting">
            Administrative & Owner Reporting
          </option>
          <option value="Estate Strategy & Consulting">
            Estate Strategy & Consulting
          </option>
          <option value="Smart Home & Systems Integration">
            Smart Home & Systems Integration
          </option>
          <option value="Guest Hospitality & Hosting Assistance">
            Guest Hospitality & Hosting Assistance
          </option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center mt-2 gap">
        {filterPersonList.map((person, i) => {
          return (
            <div key={i}>
              <PersonCard
                name={person.name}
                url={person.url}
                region={person.region}
                categories={person.categories}
                image={person.image}
                handleRegionSearch={handleRegionSearch}
                handleCategorySearch={handleCategorySearch}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
