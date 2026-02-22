import { defineType, defineField } from "sanity";

export const marketsWeServe = defineType({
  name: "marketsWeServe",
  title: "Markets We Serve",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "bodyList",
      title: "Body List",
      type: "array",
      of: [{ type: "imageFlip" }],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
    }),
  ],
});
