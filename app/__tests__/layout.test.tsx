import { describe, it, expect, vi } from "vitest";
import { isValidElement, type ReactElement } from "react";
import RootLayout from "../layout";

// `next/headers` solo existe en runtime servidor; en vitest hay que stubearlo.
vi.mock("next/headers", () => ({
  headers: () =>
    Promise.resolve({
      get: (_: string) => null,
    }),
}));

describe("RootLayout", () => {
  it("devuelve <html> con <body> conteniendo los children", async () => {
    // Invocamos el Server Component async directamente. No usamos
    // @testing-library/react.render porque React 19 no soporta render
    // de async Client Components en jsdom — y `RootLayout` es server-only
    // (`await headers()`).
    const tree = (await RootLayout({
      children: <div data-testid="kid">child</div>,
    })) as ReactElement;

    expect(isValidElement(tree)).toBe(true);
    expect((tree as ReactElement<{ lang?: string }>).type).toBe("html");

    const serialized = JSON.stringify(tree);
    expect(serialized).toContain('"kid"');
    expect(serialized).toContain("child");
    expect(serialized).toContain("body");
  });
});
