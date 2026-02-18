"use client";
import { PersonCardDef } from "@/app/lib/definition";
import { useEffect, useState } from "react";
import PersonCard from "./person-card";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { stegaClean } from "next-sanity";
import { findAllServices, findAllStates } from "@/app/lib/utils";

export default function Directory({
  state,
  service,
  directory
}: {
  state: string;
  service: string;
  directory: any;
}) {
  const [personList, setPersonList] = useState<PersonCardDef[]>(directory.data.people);
  const [serviceList, setServiceList] = useState<string[]>(findAllServices(stegaClean(directory.data.people)));
  const [stateList, setStateList] = useState<string[]>(findAllStates(stegaClean(directory.data.people)));
  const [filterPersonList, setFilterPersonList] =
    useState<PersonCardDef[]>(stegaClean(directory.data.people));
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  useEffect(() => {
    let filteredList = personList;
    if (state) {
      filteredList = personList.filter((entry) => stegaClean(entry.state) === state);
    }
    if (service) {
      filteredList = filteredList.filter((entry) =>
        stegaClean(entry.services).includes(service),
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
          {stateList.map((state, index) => {
            return (
              <option key={index} value={state}>{state}</option>
            )
          })}
        </select>

        <select
          name="service"
          id="service-select"
          className="border p-1 w-96 ml-5"
          onChange={(e) => handleCategorySearch(e.target.value)}
          value={service}
        >
          <option value="">Select Service</option>
          {serviceList.map((service, index) => {
            return (
              <option key={index} value={service}>{service}</option>
            )
          })}
          
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
                personImage={person.personImage}
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
