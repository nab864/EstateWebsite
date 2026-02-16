import { defineType, defineField } from "sanity";

export const featuredMarketSubsection = defineType({
  name: "featuredMarketSubsection",
  title: "Featured Market Subsection",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "string" }],
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
      name: 'backgroundImageAltText',
      title: 'Background Image Alt Text',
      type: 'string',
    }),
  ],
});
