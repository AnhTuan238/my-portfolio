import { CollectionConfig } from "payload";

export const Technology: CollectionConfig = {
  slug: "technologies",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "icon",
      type: "text",
    },
    {
      name: "color",
      type: "text",
    },
  ],
};
