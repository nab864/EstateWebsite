import { defineType, defineField } from "sanity";

export const imageFlip = defineType({
  name: "imageFlip",
  title: "Image Flip",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "frontText",
      title: "Front Text",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
});
