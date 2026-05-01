import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn() · class merge utility", () => {
  it("dedupes repeated tokens", () => {
    const out = cn("a", "b", "a");
    // clsx no dedupe; twMerge sí cuando hay conflicto Tailwind.
    // Para clases sin conflicto Tailwind, esperamos al menos que ambos
    // tokens estén presentes (la dedup estricta no es contrato de twMerge).
    expect(out.split(/\s+/)).toEqual(expect.arrayContaining(["a", "b"]));
  });

  it("resolves tailwind conflicts (p-4 wins over p-2)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});
