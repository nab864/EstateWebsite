import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

interface SingleColumnSectionProps {
  title?: string
  content: PortableTextBlock[]
}

export function SingleColumnSection({ title, content }: SingleColumnSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        )}
        <div className="prose prose-lg max-w-none">
          <PortableText value={content} />
        </div>
      </div>
    </section>
  )
}