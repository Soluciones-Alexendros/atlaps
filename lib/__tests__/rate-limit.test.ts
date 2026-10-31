import { describe, expect, it } from "vitest";
import { rateLimit } from "../rate-limit";

describe("rateLimit", () => {
  it("permite hasta 5 peticiones por clave", () => {
    const ip = `test-${Date.now()}-${Math.random()}`;
    for (let i = 0; i < 5; i += 1) {
      expect(rateLimit(ip).ok).toBe(true);
    }
    const blocked = rateLimit(ip);
    expect(blocked.ok).toBe(false);
    expect(blocked.retryAfter).toBeGreaterThan(0);
  });

  it("aísla claves distintas", () => {
    const a = `a-${Date.now()}-${Math.random()}`;
    const b = `b-${Date.now()}-${Math.random()}`;
    for (let i = 0; i < 5; i += 1) expect(rateLimit(a).ok).toBe(true);
    expect(rateLimit(a).ok).toBe(false);
    expect(rateLimit(b).ok).toBe(true);
  });
});
