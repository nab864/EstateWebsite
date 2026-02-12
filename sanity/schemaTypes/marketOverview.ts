import { defineType, defineField } from 'sanity'

export const marketOverviewSection = defineType({
  name: 'marketOverviewSection',
  title: 'Market Overview Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text',
      type: 'text',
    }),
    defineField({
      name: 'columnOneHeading',
      title: 'Column One Heading',
      type: 'string',
    }),
    defineField({
      name: 'columnOneBody',
      title: 'Column One Body',
      type: 'text',
    }),
    defineField({
      name: 'columnTwoHeading',
      title: 'Column Two Heading',
      type: 'string',
    }),
    defineField({
      name: 'columnTwoBody',
      title: 'Column Two Body',
      type: 'text',
    }),
    defineField({
      name: 'columnThreeHeading',
      title: 'Column Three Heading',
      type: 'string',
    }),
    defineField({
      name: 'columnThreeBody',
      title: 'Column Three Body',
      type: 'text',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
  ],
})