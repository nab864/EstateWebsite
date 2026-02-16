import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Home Page",
      readOnly: true,
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "heroSectionVideo" },
        { type: "singleColumnSection" },
        { type: "twoColumnSection" },
        { type: "marketOverviewSection" },
        { type: "featuredMarket" },
        { type: "threePerRowSection"},
        { type: "ctaSection"},
      ],
      options: {
        // This enables drag-and-drop reordering in the Studio
        sortable: true,
      },
    }),
  ],
});