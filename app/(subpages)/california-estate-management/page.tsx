import { client } from '@/sanity/lib/client'
import { reg } from '@/sanity/lib/queries'
import { SectionRenderer } from '@/app/ui/sanityTemplates/sectionRenderer'

export default async function Page() {
  const page = await client.fetch(californiaEstatePageQuery)

  if (!page) {
    return <div>Page content not found. Please create it in Sanity Studio.</div>
  }

  return (
    <main>
      <SectionRenderer sections={page.sections} />
    </main>
  )
}