import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const tokens = readFileSync(
  resolve(__dirname, "../tokens.css"),
  "utf-8",
);

describe("tokens.css · canonical Tailwind v4 @theme source", () => {
  it("declares blueprint-deep #0F2A4A", () => {
    expect(tokens).toMatch(/--color-blueprint-deep:\s*#0F2A4A/);
  });
  it("declares amber-signal #C77D2C", () => {
    expect(tokens).toMatch(/--color-amber-signal:\s*#C77D2C/);
  });
  it("declares amber-glow #E89642", () => {
    expect(tokens).toMatch(/--color-amber-glow:\s*#E89642/);
  });
  it("declares display font Fraunces", () => {
    expect(tokens).toMatch(/--font-display:\s*"Fraunces"/);
  });
  it("declares ease-blueprint motion token", () => {
    expect(tokens).toMatch(/--ease-blueprint:/);
  });
  it("declares shadow-paper-sm", () => {
    expect(tokens).toMatch(/--shadow-paper-sm:/);
  });
});
