import { defineField, defineType } from "sanity";

export default defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "image",
      title: "Image of the Restaurant",
      type: "image",
    }),
    defineField({
      name: "lat",
      title: "Latitude of the Restaurant",
      type: "number",
    }),
    defineField({
      name: "long",
      title: "Longitude of the Restaurant",
      type: "number",
    }),
    defineField({
      name: "address",
      title: "Address of Restaurant",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Enter a Rating from 1-5 stars",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5"),
    }),
    defineField({
      name: "type",
      title: "Catergory",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "dishes",
      title: "Dishes",

      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }),
  ],
});
