import { client } from "@/sanity/lib/client";
import { VisualEditing } from "next-sanity/visual-editing";
import TopBar from "../ui/top-bar";
import { RegionNavItem } from "../lib/definition";
import { regionNavQuery } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "../ui/disable-draft-mode";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const regions = await client.fetch<RegionNavItem[]>(regionNavQuery)
  
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/dewpq5xih/video/upload/f_auto,q_auto,vc_auto,w_1920/v1768776498/champagne_fqjzmq.mp4"
          type="video/mp4"
        />
      </head>
      <body
      >
        <TopBar regions={regions}/>
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}