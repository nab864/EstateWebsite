import { defineType, defineField } from "sanity";

export const singleColumnSection = defineType({
  name: "singleColumnSection",
  title: "Single Column Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "inverseColor",
      title: "InverseColor",
      initialValue: false,
      type: "boolean",
    }),
    defineField({
      name: "useLogo",
      title: "Use Logo",
      initialValue: false,
      type: "boolean",
    }),
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "richTextBlock" }, { type: "headingBodySection" }],
    }),
  ],
});
