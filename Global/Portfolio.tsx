import { GlobalConfig } from "payload";
import { Experience } from "../Block/Experience";

export const Portfolio: GlobalConfig = {
  slug: "portfolio",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "layouts",
      type: "blocks",
      required: true,
      blocks: [Experience],
    },
  ],
};
