import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  async rewrites() {
    return [
      { source: "/socios", destination: "/socios/index.html" },
      { source: "/socios/", destination: "/socios/index.html" },
    ];
  },
};

export default nextConfig;
