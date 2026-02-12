import { defineType, defineField } from 'sanity'

export const singleColumnSection = defineType({
  name: 'singleColumnSection',
  title: 'Single Column Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'headingBodySection' }],
    }),
  ],
})