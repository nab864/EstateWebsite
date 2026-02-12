import { defineType, defineField } from 'sanity'

export const twoColumnSection = defineType({
  name: 'twoColumnSection',
  title: 'Two Column Section',
  type: 'object',
  fields: [
    defineField({
      name: 'leftColumnTitle',
      title: 'Left Column Title',
      type: 'string',
    }),
    defineField({
      name: 'leftColumn',
      title: 'Left Column',
      type: 'array',
      of: [{ type: 'headingBodySection' }],
    }),
    defineField({
      name: 'rightColumnTitle',
      title: 'Right Column Title',
      type: 'string',
    }),
    defineField({
      name: 'rightColumn',
      title: 'Right Column',
      type: 'array',
      of: [{ type: 'headingBodySection' }],
    }),
  ],
})