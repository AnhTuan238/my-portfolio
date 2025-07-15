import type { CollectionConfig } from "payload";

export const Project: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "thumbnail",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "projectName",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },

    {
      name: "technologies",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "githubLink",
      type: "text",
    },
    {
      name: "demoLink",
      type: "text",
    },
    {
      name: "order",
      type: "number",
    },
  ],
};
