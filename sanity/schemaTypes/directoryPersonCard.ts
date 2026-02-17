import { defineType, defineField } from "sanity";

export const personCard = defineType({
  name: "personCard",
  title: "Person Card",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "string",
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
    }),
    defineField({
      name: "markets",
      title: "Markets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
    }),
    defineField({
      name: "established",
      title: "Established",
      type: "string",
      description: "ex. 2015",
    }),
    defineField({
      name: "personImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
