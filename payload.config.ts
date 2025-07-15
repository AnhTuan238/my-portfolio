import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Project } from "./collections/Project";
import { Media } from "./collections/Media";
import { Technology } from "./collections/Technology";
import { Portfolio } from "./Global/Portfolio";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Project, Media, Technology],
  globals: [Portfolio],
  serverURL: process.env.PAYLOAD_URL || "http://localhost:3000",
  cors: [
    "http://localhost:3000", // Cho phép khi phát triển cục bộ
    "https://my-portfolio-rho-green-25.vercel.app", // THAY THẾ BẰNG URL VERCEL THỰC TẾ CỦA BẠN
    // ... các domain khác nếu có
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  i18n: {
    fallbackLanguage: "en",
  },
});
