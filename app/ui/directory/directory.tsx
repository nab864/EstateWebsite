"use client";
import { PersonCardDef } from "@/app/lib/definition";
import { useEffect, useState } from "react";
import personJSON from "@/public/dummy-data.json";
import PersonCard from "./person-card";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Directory({
  state,
  service,
}: {
  state: string;
  service: string;
}) {
  const [personList, setPersonList] = useState<PersonCardDef[]>(personJSON);
  const [filterPersonList, setFilterPersonList] =
    useState<PersonCardDef[]>(personJSON);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    let filteredList = personList;
    if (state) {
      filteredList = personList.filter((entry) => entry.state === state);
    }
    if (service) {
      filteredList = filteredList.filter((entry) =>
        entry.services.includes(service),
      );
    }
    setFilterPersonList(filteredList);
  }, [state, service]);

  const handleRegionSearch = (state: string) => {
    const params = new URLSearchParams(searchParams);
    if (state) {
      params.set("state", state);
    } else {
      params.delete("state");
    }
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  };
  const handleCategorySearch = (service: string) => {
    const params = new URLSearchParams(searchParams);
    if (service) {
      params.set("service", service);
    } else {
      params.delete("service");
    }
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  };
  return (
    <div>
      <div className="flex justify-center">
        <select
          name="state"
          id="state-select"
          className="border p-1 w-96"
          onChange={(e) => handleRegionSearch(e.target.value)}
          value={state}
        >
          <option value="">Select Region</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Florida">Florida</option>
          <option value="Texas">Texas</option>
        </select>

        <select
          name="service"
          id="service-select"
          className="border p-1 w-96 ml-5"
          onChange={(e) => handleCategorySearch(e.target.value)}
          value={service}
        >
          <option value="">Select Service</option>
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
                company={person.company}
                url={person.url}
                state={person.state}
                region={person.region}
                markets={person.markets}
                services={person.services}
                specialties={person.specialties}
                about={person.about}
                established={person.established}
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
