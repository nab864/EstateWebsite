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
      initialValue: "Region",
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
        { type: "marketOverviewSection" },
        { type: "featuredMarket" },
      ],
      options: {
        sortable: true,
      },
    }),
  ],
});
