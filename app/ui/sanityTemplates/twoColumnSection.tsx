import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

interface TwoColumnSectionProps {
  title?: string
  leftColumn: PortableTextBlock[]
  rightColumn: PortableTextBlock[]
}

export function TwoColumnSection({ title, leftColumn, rightColumn }: TwoColumnSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="prose prose-lg">
            <PortableText value={leftColumn} />
          </div>
          <div className="prose prose-lg">
            <PortableText value={rightColumn} />
          </div>
        </div>
      </div>
    </section>
  )
}