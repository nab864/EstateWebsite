import { defineType, defineField } from "sanity";

export const regions = defineType({
  name: "regions",
  title: "Regions",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "California Estate Management",
      //readOnly: true,
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "singleColumnSection" },
        { type: "twoColumnSection" },
      ],
      options: {
        // This enables drag-and-drop reordering in the Studio
        sortable: true,
      },
    }),
  ],
});
