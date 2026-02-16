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
      name: 'inverseColor',
      title: 'InverseColor',
      initialValue: false,
      type: 'boolean',
    }),
    defineField({
      name: "useLogo",
      title: "Use Logo",
      initialValue: false,
      type: "boolean",     
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
    defineField({
      name: 'missionStatementBeginning',
      title: 'Mission Statement Beginning',
      type: 'text',
    }),
    defineField({
      name: 'missionStatementOne',
      title: 'Mission Statement One',
      type: 'text',
    }),
    defineField({
      name: 'missionStatementTwo',
      title: 'Mission Statement Two',
      type: 'text',
    }),
    defineField({
      name: 'missionStatementThree',
      title: 'Mission Statement Three',
      type: 'text',
    }),
  ],
})