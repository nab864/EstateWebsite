import { defineType, defineField } from "sanity";

export const imageStickySection = defineType({
  name: "imageStickySection",
  title: "Image Sticky Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Only used in Sanity"
    }),
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
    }),
    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "text",
    }),
    defineField({
      name: "stickyImage",
      title: "Sticky Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "stickyImageAlt",
      title: "Sticky Image Alt",
      type: "string"
    }),
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "headingBodySection" }],
    }),
  ],
});
