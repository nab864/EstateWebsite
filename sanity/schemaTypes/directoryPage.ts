import { defineType, defineField } from "sanity";

export const directory = defineType({
  name: "directory",
  title: "Directory",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Directory",
      readOnly: true,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
    }),
    defineField({
      name: "people",
      title: "Person Cards",
      type: "array",
      of: [
        { type: "personCard" },
      ],
      options: {
        // This enables drag-and-drop reordering in the Studio
        sortable: true,
      },
    }),
  ],
});