import { defineType, defineField } from "sanity";

export const featuredMarketAreaSection = defineType({
  name: "featuredMarketAreaSection",
  title: "Featured Market Area Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "array",
      of: [{ type: "featuredMarketSubsection"}]
    }),
  ],
});
