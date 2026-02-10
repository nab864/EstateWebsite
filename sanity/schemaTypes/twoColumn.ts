import { defineType, defineField } from 'sanity'

export const twoColumnSection = defineType({
  name: 'twoColumnSection',
  title: 'Two Column Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'leftColumn',
      title: 'Left Column',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'rightColumn',
      title: 'Right Column',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})