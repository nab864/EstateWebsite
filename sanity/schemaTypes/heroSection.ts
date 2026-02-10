import { defineType, defineField } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
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
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Text shown in the box below the subheading',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Button text (e.g., "Find Your Estate Manager")',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'URL for the button (e.g., /directory?state=Colorado)',
    }),
  ],
})