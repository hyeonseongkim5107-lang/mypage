import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mypage",
  images: { unoptimized: true },
};

export default nextConfig;
