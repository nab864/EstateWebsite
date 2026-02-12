import { defineType, defineField } from "sanity";

export const marketOverviewSection = defineType({
  name: "marketOverviewSection",
  title: "Market Overview Section",
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
      name: "bodyText",
      title: "Body Text",
      type: "text",
    }),
    defineField({
      name: "columnOne",
      title: "Column One",
      type: "headingBodySection",
    }),
    defineField({
      name: "columnTwo",
      title: "Column Two",
      type: "headingBodySection",
    }),
    defineField({
      name: "columnThree",
      title: "Column Three",
      type: "headingBodySection",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
    }),
  ],
});
