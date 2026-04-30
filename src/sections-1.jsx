/* global React, Logo, IcSun, IcMoon, IcCopy, IcCheck */

// ===== BRAND SECTION =====
const SectionBrand = () => {
  return (
    <section id="brand" className="ds-section">
      <div className="section-head">
        <div className="label">01 — Brand</div>
        <div>
          <h2>Monograma topográfico.</h2>
          <p>La letra "A" trazada como curvas de nivel sugiere elevación, plano de cota y cooperación entre apps independientes. Wordmark en lowercase con kerning amplio.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        {/* Hero monogram */}
        <div className="paper-card gridded" style={{ gridColumn: "span 6", padding: 48, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 360 }}>
          <Logo variant="icon" size={240} />
        </div>
        {/* Variant cards */}
        <div className="paper-card" style={{ gridColumn: "span 6", padding: 48, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 360 }}>
          <Logo variant="horizontal" size={72} />
        </div>

        <div className="paper-card" style={{ gridColumn: "span 4", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 240, gap: 16 }}>
          <Logo variant="vertical" size={88} />
          <div className="kicker">Vertical</div>
        </div>

        {/* Dark on light + light on dark */}
        <div style={{ gridColumn: "span 4", background: "var(--paper-bone)", color: "var(--blueprint-deep)", padding: 32, borderRadius: 4, border: "1px solid var(--line-soft)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 240, gap: 16 }}>
          <Logo variant="horizontal" size={56} />
          <div className="kicker" style={{ color: "var(--ink-pencil)" }}>Dark on light</div>
        </div>

        <div style={{ gridColumn: "span 4", background: "var(--blueprint-deep)", color: "var(--paper-bone)", padding: 32, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 240, gap: 16 }}>
          <Logo variant="horizontal" size={56} />
          <div className="kicker" style={{ color: "rgba(245, 241, 232, 0.6)" }}>Light on dark</div>
        </div>

        {/* Sizes / favicon row */}
        <div className="paper-card" style={{ gridColumn: "span 12", padding: 32 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>Tamaños mínimos</div>
          <div style={{ display: "flex", gap: 48, alignItems: "flex-end", flexWrap: "wrap" }}>
            {[
              { label: "Favicon · 32px", size: 32 },
              { label: "Mín. icon · 24px", size: 24 },
              { label: "App · 48px", size: 48 },
              { label: "PWA · 192px", size: 96 },
              { label: "PWA · 512px", size: 144 },
            ].map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <Logo variant="icon" size={m.size} />
                <div className="mono" style={{ color: "var(--fg-soft)" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Clearspace illustration */}
        <div className="paper-card gridded" style={{ gridColumn: "span 12", padding: 48, position: "relative" }}>
          <div className="kicker" style={{ marginBottom: 24 }}>Clearspace · 1× altura del monograma</div>
          <div style={{ display: "inline-block", position: "relative", padding: 64, border: "1px dashed var(--line)", color: "var(--fg)" }}>
            <Logo variant="horizontal" size={64} />
            <span style={{ position: "absolute", top: 8, left: 8, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-soft)" }}>x</span>
            <span style={{ position: "absolute", bottom: 8, right: 8, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-soft)" }}>x</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== COLORS SECTION =====
const Swatch = ({ name, hex, varName, fg = "var(--paper-bone)", small }) => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button
      onClick={copy}
      style={{
        background: hex, color: fg,
        padding: small ? 16 : 24, borderRadius: 4,
        border: "1px solid var(--line-soft)",
        textAlign: "left", cursor: "pointer",
        minHeight: small ? 96 : 140,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", fontFamily: "var(--font-mono)",
        transition: "transform 120ms var(--ease)",
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
      onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <div style={{ fontSize: 13, fontWeight: 500, fontFamily: "var(--font-body)", letterSpacing: 0 }}>{name}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 11, letterSpacing: "0.04em", opacity: 0.85 }}>
        <span>{hex}</span>
        <span style={{ opacity: 0.7 }}>{varName}</span>
        <span style={{ position: "absolute", top: 8, right: 10, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", opacity: copied ? 1 : 0, transition: "opacity 120ms" }}>copiado</span>
      </div>
    </button>
  );
};

const SectionColors = () => {
  const groups = [
    { title: "Blueprint", desc: "Azul plano arquitectónico. Tinta principal en claro, fondo en oscuro.", swatches: [
      { name: "blueprint-deep", hex: "#0F2A4A", varName: "--blueprint-deep" },
      { name: "blueprint-mid",  hex: "#1E4D7A", varName: "--blueprint-mid" },
      { name: "blueprint-soft", hex: "#3A7BB8", varName: "--blueprint-soft" },
    ]},
    { title: "Paper", desc: "Pergamino. Fondo dominante en claro, divisores y cuadrícula.", swatches: [
      { name: "paper-bone", hex: "#F5F1E8", varName: "--paper-bone", fg: "var(--blueprint-deep)" },
      { name: "paper-grid", hex: "#E8E0CC", varName: "--paper-grid", fg: "var(--blueprint-deep)" },
    ]},
    { title: "Amber", desc: "Acento. Por debajo del 10% de la superficie, reservado a foco y CTAs.", swatches: [
      { name: "amber-signal", hex: "#C77D2C", varName: "--amber-signal" },
      { name: "amber-glow",   hex: "#E89642", varName: "--amber-glow", fg: "var(--blueprint-deep)" },
    ]},
    { title: "Ink", desc: "Tinta. Texto secundario y trazos de detalle.", swatches: [
      { name: "ink-graphite", hex: "#1A1F2E", varName: "--ink-graphite" },
      { name: "ink-pencil",   hex: "#5C6B7F", varName: "--ink-pencil" },
    ]},
    { title: "Semantic", desc: "Estados derivados.", swatches: [
      { name: "success", hex: "#2F8F5C", varName: "--success" },
      { name: "warning", hex: "#C77D2C", varName: "--warning" },
      { name: "danger",  hex: "#B23A48", varName: "--danger" },
      { name: "info",    hex: "#3A7BB8", varName: "--info" },
    ]},
  ];

  return (
    <section id="colors" className="ds-section">
      <div className="section-head">
        <div className="label">02 — Colors</div>
        <div>
          <h2>Cinco familias, cero negociación.</h2>
          <p>Tokens HEX y variables CSS. Cada swatch copia su HEX al portapapeles. Los semánticos derivan de blueprint y amber para no romper la paleta.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {groups.map((g) => (
          <div key={g.title}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
              <h3 className="t-h3" style={{ margin: 0 }}>{g.title}</h3>
              <span className="mono" style={{ color: "var(--fg-soft)" }}>{g.desc}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {g.swatches.map((s) => <Swatch key={s.name} {...s} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ===== TYPOGRAPHY SECTION =====
const SectionTypography = () => {
  const scale = [
    { px: 61, name: "Display 1", lh: 1.05 },
    { px: 49, name: "Display 2", lh: 1.08 },
    { px: 39, name: "Heading 1", lh: 1.10 },
    { px: 31, name: "Heading 2", lh: 1.20 },
    { px: 25, name: "Heading 3", lh: 1.20 },
    { px: 20, name: "Heading 4", lh: 1.30 },
    { px: 16, name: "Body",      lh: 1.55 },
    { px: 14, name: "Small",     lh: 1.50 },
    { px: 12, name: "Caption",   lh: 1.40 },
  ];

  const Spec = ({ family, fontFamily, role }) => (
    <div className="paper-card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div className="kicker">{role}</div>
          <div style={{ fontFamily, fontSize: 39, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{family}</div>
        </div>
        <div className="mono" style={{ color: "var(--fg-soft)" }}>{family.split(" ")[0].toLowerCase()}</div>
      </div>
      <div style={{ fontFamily, fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
        abcdefghijklmnopqrstuvwxyz<br />
        0123456789 — &amp; ¿? ¡! ñÑ
      </div>
    </div>
  );

  return (
    <section id="typography" className="ds-section">
      <div className="section-head">
        <div className="label">03 — Typography</div>
        <div>
          <h2>Dos configuraciones, una decisión pendiente.</h2>
          <p>A · clásica (Fraunces / Inter / JetBrains Mono). B · técnica (Geist / Geist / IBM Plex Mono). Escala Major Third (1.25). Mostradas en paralelo para comparar.</p>
        </div>
      </div>

      <div className="demo-pair" style={{ marginBottom: 32 }}>
        {/* Config A */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="kicker">Configuración A · clásica</div>
          <Spec family="Fraunces" fontFamily='"Fraunces", Georgia, serif' role="Display" />
          <Spec family="Inter" fontFamily='"Inter", system-ui, sans-serif' role="Body" />
          <Spec family="JetBrains Mono" fontFamily='"JetBrains Mono", monospace' role="Mono" />
        </div>
        {/* Config B */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="kicker">Configuración B · técnica</div>
          <Spec family="Geist" fontFamily='"Geist", system-ui, sans-serif' role="Display" />
          <Spec family="Geist" fontFamily='"Geist", system-ui, sans-serif' role="Body" />
          <Spec family="IBM Plex Mono" fontFamily='"IBM Plex Mono", monospace' role="Mono" />
        </div>
      </div>

      {/* Active scale */}
      <div className="paper-card" style={{ padding: 40, marginBottom: 24 }}>
        <div className="kicker" style={{ marginBottom: 24 }}>Escala activa · Configuración <code style={{ background: "var(--grid)", padding: "2px 6px", borderRadius: 2 }} id="active-typeset-label">A</code></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {scale.map((s) => (
            <div key={s.px} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, alignItems: "baseline", borderBottom: "1px solid var(--line-soft)", paddingBottom: 12 }}>
              <div className="mono" style={{ color: "var(--fg-soft)" }}>{s.px}px · {s.name}</div>
              <div style={{
                fontFamily: s.px >= 25 ? "var(--font-display)" : "var(--font-body)",
                fontSize: s.px,
                lineHeight: s.lh,
                letterSpacing: s.px >= 39 ? "-0.02em" : (s.px >= 25 ? "-0.01em" : 0),
                fontWeight: s.px >= 25 ? 500 : 400,
              }}>
                Cartografía de domótica
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test paragraph */}
      <div className="paper-card" style={{ padding: 40 }}>
        <div className="kicker" style={{ marginBottom: 16 }}>Párrafo de prueba · castellano técnico</div>
        <p style={{ fontSize: 20, lineHeight: 1.55, maxWidth: 720, margin: 0, textWrap: "pretty" }}>
          Atlaps reúne en un único atlas las apps capaces de gobernar la vivienda: KNX, Matter, Zigbee, Z-Wave y Modbus conviven en el mismo plano sin renunciar a su autonomía. Cada dispositivo —termostato, luminaria, persiana, sensor de presencia— se traza sobre el plano arquitectónico con la precisión de una curva de nivel.
        </p>
      </div>
    </section>
  );
};

Object.assign(window, { SectionBrand, SectionColors, SectionTypography });
