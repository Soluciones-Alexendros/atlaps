import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // typedRoutes: deferido a W2 cuando /docs/* y /legal/* existan
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
