import { useState } from "react";
import ServiceDescription from "./service-description";
import clsx from "clsx";
import { useInView } from "../use-in-view-div";
import Image from "next/image";
import CyclingList from "./service-list-cycle";

export default function ServiceBox() {
  const [activeService, setActiveService] = useState<String>("service-1");
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="flex flex-col items-center flex-1 text-secondary transition duration-2000 mt-10">
      <div id="service-list-top" className="flex justify-between w-[75%]">
        <div
          id="service-1"
          ref={ref}
          className={clsx(
            "transition-all duration-2000",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible }
          )}
          onClick={() => setActiveService("service-1")}
        >
          <div
            className={clsx(
              "p-3 hover:bg-highlight hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-xl",
              { "bg-highlight": activeService === "service-1" },
              { "bg-primary": activeService !== "service-1" }
            )}
          >
            Estate Stewardship
          </div>
        </div>
        <div
          id="service-2"
          ref={ref}
          className={clsx(
            "transition-all duration-2000",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible }
          )}
          onClick={() => setActiveService("service-2")}
        >
          <div
            className={clsx(
              "p-3 hover:bg-highlight hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-xl",
              { "bg-highlight": activeService === "service-2" },
              { "bg-primary": activeService !== "service-2" }
            )}
          >
            Fractional Management
          </div>
        </div>
        <div
          id="service-3"
          ref={ref}
          className={clsx(
            "transition-all duration-2000",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible }
          )}
          onClick={() => setActiveService("service-3")}
        >
          <div
            className={clsx(
              "p-3 hover:bg-highlight hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-xl",
              { "bg-highlight": activeService === "service-3" },
              { "bg-primary": activeService !== "service-3" }
            )}
          >
            Household Operations
          </div>
        </div>
      </div>
      <div id="service-list-bot" className="flex justify-between w-[40%] mb-5">
        <div
          id="service-4"
          ref={ref}
          className={clsx(
            "transition-all duration-2000",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible }
          )}
          onClick={() => setActiveService("service-4")}
        >
          <div
            className={clsx(
              "p-3 hover:bg-highlight hover:-translate-y-1  transitionalls duration-300 cursor-pointer rounded-xl",
              { "bg-highlight": activeService === "service-4" },
              { "bg-primary": activeService !== "service-4" }
            )}
          >
            Lifestyle Concierge
          </div>
        </div>
        <div
          id="service-5"
          ref={ref}
          className={clsx(
            "transition-all duration-2000",
            { "opacity-100 translate-y-0": isVisible },
            { "opacity-0 translate-y-12": !isVisible }
          )}
          onClick={() => setActiveService("service-5")}
        >
          <div
            className={clsx(
              "p-3 hover:bg-highlight hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-xl",
              { "bg-highlight": activeService === "service-5" },
              { "bg-primary": activeService !== "service-5" }
            )}
          >
            Fiduciary Coordination
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={clsx(
          "flex mx-2 transition-all duration-2000 w-screen pb-5 justify-center h-96",
          { "opacity-100 translate-x-0": isVisible },
          { "opacity-0 translate-x-12": !isVisible }
        )}
      >
        <div className="w-[45%] max-w-2xl flex flex-col mr-2">
          <div className="bg-background-secondary rounded-xl p-6 relative h-full">
            {activeService === "service-1" ? (
              <ServiceDescription
                title="Estate Stewardship"
                body="We oversee every operational aspect of luxury residences—primary
              homes, second homes, and geographically diverse
              portfolios—ensuring properties are maintained, secure, and
              operating at peak performance year-round."
                estateServices={[
                  "Proactive estate oversight, inspections, and reporting",
                  "Preventative maintenance planning and systems management (HVAC, electrical, plumbing, smart home, security)",
                  "Seasonal readiness, storm/hurricane/wildfire preparation, and post-event recovery",
                  "Home watch and absentee owner services",
                  "Vendor vetting, coordination, contract negotiation, and performance management",
                  "Capital improvement planning and long-term asset preservation",
                ]}
              />
            ) : null}
            {activeService === "service-2" ? (
              <ServiceDescription
                title="Fractional Management"
                body="Our fractional model delivers senior-level estate management without the 
                overhead of a full internal team, making it ideal for UHNW families, family offices, 
                and luxury developers."
                estateServices={[
                  "Strategic oversight across multiple properties or markets",
                  "Acting as the owner’s representative for renovations, new construction, and complex projects",
                  "Integration with architects, builders, designers, and consultants",
                  "Budget oversight, timelines, and accountability across all stakeholders",
                  "Standardization of systems, protocols, and best practices across residences",
                ]}
              />
            ) : null}
            {activeService === "service-3" ? (
              <ServiceDescription
                title="Household Operations"
                body="We design, implement, and manage the human infrastructure that keeps estates running seamlessly."
                estateServices={[
                  "Household staffing strategy, hiring, onboarding, and training",
                  "Staff leadership, scheduling, payroll coordination, and performance management",
                  "Development of household manuals, SOPs, and operational systems",
                  "Culture building, discretion standards, and continuity planning",
                ]}
              />
            ) : null}
            {activeService === "service-4" ? (
              <ServiceDescription
                title="Lifestyle Concierge"
                body="Beyond the estate itself, we support the lifestyle surrounding it—anticipating needs 
                and managing logistics so principals remain focused on what matters most."
                estateServices={[
                  "Arrival and departure preparation",
                  "Travel coordination, scheduling, and calendar management",
                  "Errands, provisioning, and bespoke personal requests",
                  "Trusted local access in each market we serve",
                ]}
              />
            ) : null}
            {activeService === "service-5" ? (
              <ServiceDescription
                title="Fiduciary Coordination"
                body="We operate as a trusted extension of family offices and advisory teams, ensuring alignment 
                across financial, legal, and lifestyle objectives."
                estateServices={[
                  "Coordination with family offices, wealth advisors, attorneys, and accountants",
                  "Reporting and communication structured for fiduciary oversight",
                  "Asset-level transparency and operational clarity",
                  "Risk mitigation and continuity planning",
                ]}
              />
            ) : null}
          </div>
        </div>
        <div className="bg-background-secondary rounded-xl w-1/2 max-w-2xl relative">
          {activeService === "service-1" ? (
            <Image
              src="/property-management.jpg"
              alt="Property Image"
              fill
              className={clsx("animate-blur-in rounded-xl object-cover opacity-0")}
            />
          ) : null}
          {activeService === "service-2" ? (
            <Image
              src="/Staffing.png"
              alt="Property Image"
              fill
              className={clsx("animate-blur-in rounded-xl object-cover opacity-0")}
            />
          ) : null}
          {activeService === "service-3" ? (
            <Image
              src="/seasonal-home.png"
              alt="Property Image"
              fill
              className={clsx("animate-blur-in rounded-xl object-cover opacity-0")}
            />
          ) : null}
          {activeService === "service-4" ? (
            <Image
              src="/landscaping.jpg"
              alt="Property Image"
              fill
              className={clsx("animate-blur-in rounded-xl object-cover opacity-0")}
            />
          ) : null}
          {activeService === "service-5" ? (
            <Image
              src="/vehicle-care.png"
              alt="Property Image"
              fill
              className={clsx("animate-blur-in rounded-xl object-cover opacity-0")}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
