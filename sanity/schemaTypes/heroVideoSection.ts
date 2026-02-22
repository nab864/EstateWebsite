import { defineType, defineField } from 'sanity'

export const heroVideoSection = defineType({
  name: 'heroVideoSection',
  title: 'Hero Video Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading (h1)',
      type: 'text',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading (h2)',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Text shown in the box below the subheading',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'string',
      description: '(ex. https://res.cloudinary.com/dlboibern/video/upload/f_auto,q_auto,vc_auto,w_1920/v1770257029/champagne_fqofx2.mp4)',
    }),
    defineField({
      name: 'backgroundVideoAltText',
      title: 'Background Video Alt Text',
      type: 'string',
      description: '(ex. Luxury estate champagne service video',
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
    defineField({
      name: 'ctaText2',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Button text (e.g., "Find Your Estate Manager")',
    }),
    defineField({
      name: 'ctaLink2',
      title: 'Call to Action Link',
      type: 'string',
      description: 'URL for the button (e.g., /directory?state=Colorado)',
    }),
  ],
})