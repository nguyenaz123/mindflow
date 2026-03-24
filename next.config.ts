import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.prismic.io", "192.168.16.172", "ska.oa.osim-martech.com"], // 👈 thêm domain Prismic vào đây
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "uat-sg-ska.osim.com",
        "localhost:3000",
        "localhost:3001",
      ],
    },
  },
};
export default nextConfig;
