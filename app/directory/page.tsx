import Directory from "../ui/directory/directory";
import DirectoryHeader from "../ui/directory/directory-header";

export default async function Page(props: {
  searchParams?: Promise<{
    region?: string;
    category?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const region = searchParams?.region || "";
  const category = searchParams?.category || "";
  return (
    <div>
      <DirectoryHeader />
      <Directory region={region} category={category} />
    </div>
  );
}
