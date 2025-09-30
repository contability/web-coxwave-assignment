import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrict: process.env.NODE_ENV === "production" ? false : true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    remotePatterns: [],
  },
};
module.exports = nextConfig;
