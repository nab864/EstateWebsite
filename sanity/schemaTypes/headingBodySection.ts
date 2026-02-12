import { defineType, defineField } from 'sanity'

export const headingBodySection = defineType({
  name: 'headingBodySection',
  title: 'Heading Body Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'body',
      type: 'text',
    }),
  ],
})