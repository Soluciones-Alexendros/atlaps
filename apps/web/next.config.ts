import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // typedRoutes: deferido a W2 cuando /docs/* y /legal/* existan
  poweredByHeader: false,
  outputFileTracingRoot: path.resolve(__dirname, "..", ".."),
  turbopack: {
    root: path.resolve(__dirname, "..", ".."),
  },
};

export default nextConfig;
