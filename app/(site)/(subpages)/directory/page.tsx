import clsx from "clsx";
import Directory from "../../../ui/directory/directory";
import CompanyLogo from "@/app/ui/company-logo";
import { client } from "@/sanity/lib/client";
import { directoryQuery } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";
import { stegaClean } from "next-sanity";

export default async function Page(props: {
  searchParams?: Promise<{
    state?: string;
    service?: string;
  }>;
}) {
  const { isEnabled } = await draftMode();
  const searchParams = await props.searchParams;
  const state = searchParams?.state || "";
  const service = searchParams?.service || "";

  const directory = await client.fetch(
      directoryQuery,
      { },
      isEnabled
        ? { perspective: "drafts", useCdn: false, stega: true }
        : undefined,
    );
  const cleanDirectory = stegaClean(directory)

  return (
    <div>
      <div className="pt-[12vh] w-screen flex flex-col items-center mb-5">
            {/*<InterMap /> */}
            <div
              className={clsx(
                "transition-all duration-2000",
              )}
            >
              <div className="h-[40vh]">
                <CompanyLogo />
              </div>
            </div>
      
            <h1
              className={clsx(
                "text-xl font-serif tracking-wide transition-all duration-2000 text-primary mb-5",
              )}
            >
              Browse Our Directory — Find Elite Estate Management Services in Your Market
            </h1>
          </div>
      <Directory state={state} service={service} directory={cleanDirectory} />
    </div>
  );
}
