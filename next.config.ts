import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";
require("dotenv").config(); // Load .env

const payloadUrl =
  process.env.PAYLOAD_URL || "https://my-portfolio-rho-green-25.vercel.app";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: [new URL(payloadUrl).hostname],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPayload(nextConfig));
