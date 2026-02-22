import { defineType, defineField } from "sanity";

export const richTextBlock = defineType({
  name: 'richTextBlock',
  type: 'object',
  fields: [
    defineField({
      name: "body",
      title: "Body",
      type: "text",
    }),
  ]
});