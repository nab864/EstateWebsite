import { defineType, defineField } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "CTA Section",
      description: "Value is for Studio Purposes Only"
    }),
    defineField({
      name: "mainSection",
      title: "Main Section",
      type: "headingBodySection",
    }),
    defineField({
      name: "ctaText",
      title: "Call to Action Text",
      type: "string",
      description: 'Button text (e.g., "Find Your Estate Manager")',
    }),
    defineField({
      name: "ctaLink",
      title: "Call to Action Link",
      type: "string",
      description: "URL for the button (e.g., /directory?state=Colorado)",
    }),
  ],
});
