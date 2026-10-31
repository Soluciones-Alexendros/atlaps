import { describe, expect, it } from "vitest";
import { validate } from "../validate";

const base = {
  name: "Ana Ejemplo",
  email: "ana@example.invalid",
  via: "piloto",
  rgpd: true,
  company: "Atlaps Demo",
  msg: "Solicitud de prueba",
  website: "",
};

describe("validate (contacto)", () => {
  it("acepta un payload válido", () => {
    const r = validate(base);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.email).toBe("ana@example.invalid");
      expect(r.data.via).toBe("piloto");
    }
  });

  it("rechaza body no objeto", () => {
    expect(validate(null).ok).toBe(false);
    expect(validate("x").ok).toBe(false);
  });

  it("exige nombre entre 2 y 200 caracteres", () => {
    expect(validate({ ...base, name: "A" }).ok).toBe(false);
    expect(validate({ ...base, name: "A".repeat(201) }).ok).toBe(false);
  });

  it("valida email", () => {
    expect(validate({ ...base, email: "sin-arroba" }).ok).toBe(false);
    expect(validate({ ...base, email: `${"a".repeat(250)}@example.invalid` }).ok).toBe(false);
  });

  it("exige vía en allowlist", () => {
    expect(validate({ ...base, via: "otro" }).ok).toBe(false);
  });

  it("exige RGPD", () => {
    expect(validate({ ...base, rgpd: false }).ok).toBe(false);
  });

  it("limita empresa y mensaje", () => {
    expect(validate({ ...base, company: "x".repeat(201) }).ok).toBe(false);
    expect(validate({ ...base, msg: "m".repeat(5001) }).ok).toBe(false);
  });

  it("acepta honeypot legacy y nuevo sin fallar la validación", () => {
    const withLegacy = validate({ ...base, website: "bot" });
    expect(withLegacy.ok).toBe(true);
    if (withLegacy.ok) expect(withLegacy.data.website).toBe("bot");

    const withHp = validate({ ...base, website: undefined, hp_fax_number: "bot" });
    expect(withHp.ok).toBe(true);
    if (withHp.ok) expect(withHp.data.website).toBe("bot");
  });
});
