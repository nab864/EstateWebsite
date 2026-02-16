import { defineType, defineField } from "sanity";

export const ctaSectionImage = defineType({
  name: "ctaSectionImage",
  title: "CTA Section with Image",
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
      type: "string",
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
    defineField({
      name: "ctaImage",
      title: "CTA Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ctaImageAlt",
      title: "CTA Image Alt",
      type: "string"
    }),
  ],
});