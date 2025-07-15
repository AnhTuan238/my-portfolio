import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";
require("dotenv").config();

const payloadUrl =
  process.env.PAYLOAD_URL || "https://my-portfolio-rho-green-25.vercel.app";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  // images: {
  //   domains: [new URL(payloadUrl).hostname],
  // },
  images: {
    domains: ["localhost", "my-portfolio-rho-green-25.vercel.app"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPayload(nextConfig));
