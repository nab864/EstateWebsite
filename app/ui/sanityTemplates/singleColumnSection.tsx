"use client";
import { SingleColumnProps } from "@/app/lib/definition";
import clsx from "clsx";
import { useInView } from "../use-in-view-div";
import CompanyLogo from "../company-logo";

export function SingleColumnSection({
  useLogo,
  inverseColor,
  mainHeading,
  subHeading,
  body,
  missionStatementBeginning,
  missionStatementOne,
  missionStatementTwo,
  missionStatementThree,
}: SingleColumnProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <section className="w-screen flex flex-col items-center mt-5 mb-20">
      <div className="max-w-2xl flex flex-col items-center text-center gap-6">
        {useLogo && (
          <div className={clsx("transition-all duration-2000")}>
            <div className="h-[40vh]">
              <CompanyLogo />
            </div>
          </div>
        )}

        {mainHeading ? (
          <h2
            className={clsx(
              "text-4xl font-serif text-center tracking-wide text-primary",
            )}
          >
            {mainHeading}
          </h2>
        ) : null}

        {subHeading ? (
          <h3
            className={clsx(
              "text-sm uppercase tracking-[0.3em] transition-all duration-2000 text-primary",
            )}
          >
            {subHeading}
          </h3>
        ) : null}

        <p
          className={clsx(
            "text-base leading-relaxed text-muted-foreground transition-all duration-2000 text-primary",
          )}
        >
          {body && body}
        </p>
      </div>
      <h3
        className={clsx(
          "text-3xl text-primary text-center mt-15 transition-all duration-2000",
        )}
      >
        {missionStatementBeginning && missionStatementBeginning}
      </h3>
      <div
        className={clsx(
          "flex flex-col sm:flex-row justify-between items-between text-3xl space-y-5 text-primary mt-10 text-center w-3/4 italic font-bold",
        )}
      >
        <h4>{missionStatementOne && missionStatementOne}</h4>
        <h4>{missionStatementTwo && missionStatementTwo}</h4>
        <h4>{missionStatementThree && missionStatementThree}</h4>
      </div>
    </section>
  );
}
