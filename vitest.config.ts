import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: false,
    include: [
      "app/**/__tests__/**/*.test.{ts,tsx}",
      "lib/**/__tests__/**/*.test.{ts,tsx}",
      "packages/**/__tests__/**/*.test.{ts,tsx}",
    ],
    exclude: ["node_modules", ".next", "tests/e2e/**"],
  },
});
