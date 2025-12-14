import { useState } from "react";
import ServiceDescription from "./service-description";
import clsx from "clsx";
import { useInView } from "../use-in-view";

export default function ServiceBox() {
  const [activeService, setActiveService] = useState<String>("service-1");
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="flex flex-col items-center w-full h-full text-secondary-accent transition duration-2000">
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
              "p-3 rounded-2xl hover:bg-map-clickable transition-colors duration-300 cursor-pointer h-full w-full",
              { "bg-highlight": activeService === "service-1" },
              { "bg-secondary": activeService !== "service-1" }
            )}
          >
            Property Management
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
              "p-3 rounded-2xl hover:bg-map-clickable transition-colors duration-300 cursor-pointer h-full w-full",
              { "bg-highlight": activeService === "service-2" },
              { "bg-secondary": activeService !== "service-2" }
            )}
          >
            Staff Oversight
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
              "p-3 rounded-2xl hover:bg-map-clickable transition-colors duration-300 cursor-pointer h-full w-full",
              { "bg-highlight": activeService === "service-3" },
              { "bg-secondary": activeService !== "service-3" }
            )}
          >
            Seasonal Residences
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
              "p-3 rounded-2xl hover:bg-map-clickable transition-colors duration-300 cursor-pointer h-full w-full",
              { "bg-highlight": activeService === "service-4" },
              { "bg-secondary": activeService !== "service-4" }
            )}
          >
            Landscaping
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
              "p-3 rounded-2xl hover:bg-map-clickable transition-colors duration-300 cursor-pointer h-full w-full",
              { "bg-highlight": activeService === "service-5" },
              { "bg-secondary": activeService !== "service-5" }
            )}
          >
            Vehicle Care
          </div>
        </div>
      </div>
      <ServiceDescription
        title={"Property Management"}
        body="We provide comprehensive property management, overseeing leasing, maintenance coordination, financial reporting, compliance, and long-term asset strategy—ensuring your investment thrives while delivering seamless, professional, and stress-free management tailored to luxury estates."
        listId="service-1"
        activeService={activeService}
        imageURL="/property-management.jpg"
      />
      <ServiceDescription
        title={"Staff-Oversight"}
        body="We provide meticulous staff oversight, managing recruitment, scheduling, training, and performance to ensure all household personnel operate seamlessly, maintain the highest standards, and deliver discreet, professional, and reliable service tailored to luxury estates."
        listId="service-2"
        activeService={activeService}
        imageURL="/Staffing.png"
      />
      <ServiceDescription
        title={"Seasonal-Residences"}
        body="Our Seasonal Residence service keeps your home protected and arrival-ready year-round. We manage inspections, utilities, security, preventative maintenance, and trusted vendors, ensuring seamless transitions between seasons with complete peace of mind."
        listId="service-3"
        activeService={activeService}
        imageURL="/seasonal-home.png"
      />
      <ServiceDescription
        title={"Landscaping"}
        body="Our Landscaping service ensures your grounds remain pristine, healthy, and seasonally perfected. We manage routine care, seasonal enhancements, irrigation oversight, and trusted vendors to preserve the beauty, value, and curb appeal of your estate year-round."
        listId="service-4"
        activeService={activeService}
        imageURL="/landscaping.jpg"
      />
      <ServiceDescription
        title={"Vehicle Care"}
        body="Our Vehicle & Boat Care service provides white-glove oversight for your automobiles and watercraft. From climate-controlled storage and precision detailing to fueling and maintenance scheduling, every asset is preserved, protected, and prepared to perform flawlessly."
        listId="service-5"
        activeService={activeService}
        imageURL="/vehicle-care.png"
      />
    </div>
  );
}
