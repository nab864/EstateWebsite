import { defineType, defineField } from "sanity";

export const threePerRowSubSection = defineType({
  name: "threePerRowSubSection",
  title: "Three Per Row",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
    }),
    defineField({
      name: "bodyList",
      title: "Body List",
      type: "array",
      of: [{ type: "headingBodySection" }],
    }),
  ],
});