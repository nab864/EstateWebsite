import Directory from "../../../ui/directory/directory";
import DirectoryHeader from "../../../ui/directory/directory-header";

export default async function Page(props: {
  searchParams?: Promise<{
    state?: string;
    service?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const state = searchParams?.state || "";
  const service = searchParams?.service || "";
  return (
    <div>
      <DirectoryHeader />
      <Directory state={state} service={service} />
    </div>
  );
}
