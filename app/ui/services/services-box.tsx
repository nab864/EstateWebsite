import ServiceDescription from "./service-description";
import clsx from "clsx";
import { useInView } from "../use-in-view-div";

export default function ServiceBox() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <div className="text-primary bg-background p-6 mx-6 mb-2">
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
    </div>
  );
}
