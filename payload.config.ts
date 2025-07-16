import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

import { Technology, Project, Media } from "./cms/collections";
import { Portfolio } from "./cms/globals/portfolio";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Project, Media, Technology],
  globals: [Portfolio],
  serverURL: process.env.PAYLOAD_URL || "http://localhost:3000",
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  i18n: {
    fallbackLanguage: "en",
  },
});
