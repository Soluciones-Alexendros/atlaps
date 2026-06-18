import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/socios/vendor/**",
      "public/socios/bundle.js",
      "pnpm-lock.yaml",
      "packages/design-system/preview/**",
      "packages/design-system/ui_kits/**",
      ".claude/worktrees/**",
      "apps/**",
      "packages/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    plugins: ["jsx-a11y", "tailwindcss"],
    extends: ["plugin:jsx-a11y/recommended", "plugin:tailwindcss/recommended"],
  }),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "clsx", "twMerge"],
      },
    },
  },
];

export default config;
