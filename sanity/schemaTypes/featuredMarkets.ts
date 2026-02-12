import { defineType, defineField } from "sanity";

export const featuredMarket = defineType({
  name: "featuredMarket",
  title: "Featured Market",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "market",
      title: "Market",
      type: "array",
      of: [{ type: "featuredMarketAreaSection" }],
    }),
  ],
});
