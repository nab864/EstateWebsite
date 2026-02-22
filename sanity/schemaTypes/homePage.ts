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
      initialValue: "Home",
      readOnly: true,
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "heroVideoSection" },
        { type: "singleColumnSection" },
        { type: "twoColumnSection" },
        { type: "marketOverviewSection" },
        { type: "featuredMarket" },
        { type: "threePerRowSection" },
        { type: "ctaSection" },
        { type: "ctaSectionImage" },
        { type: "imageStickySection" },
        { type: "marketsWeServe"},

      ],
      options: {
        // This enables drag-and-drop reordering in the Studio
        sortable: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page'
      }
    }
  }
});
