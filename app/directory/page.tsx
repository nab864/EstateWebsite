import Directory from "../ui/directory/directory";
import DirectoryHeader from "../ui/directory/directory-header";

export default async function Page(props: {
  searchParams?: Promise<{
    region?: string;
    service?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const region = searchParams?.region || "";
  const service = searchParams?.service || "";
  return (
    <div>
      <DirectoryHeader />
      <Directory region={region} service={service} />
    </div>
  );
}
