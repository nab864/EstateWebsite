import { defineType, defineField } from "sanity";

export const threePerRowSection = defineType({
  name: "threePerRowSection",
  title: "Three Per Row",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
