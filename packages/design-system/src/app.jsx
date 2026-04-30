/* global React, ReactDOM, Logo, IcSun, IcMoon, IcCopy, IcCheck,
   SectionBrand, SectionColors, SectionTypography, SectionScales, SectionMotion, SectionIcons,
   SectionComponents, SectionPatterns,
   TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle */

const TOKENS_CSS = `@import "tailwindcss";

@theme {
  /* Blueprint */
  --color-blueprint-deep: #0F2A4A;
  --color-blueprint-mid:  #1E4D7A;
  --color-blueprint-soft: #3A7BB8;

  /* Paper */
  --color-paper-bone: #F5F1E8;
  --color-paper-grid: #E8E0CC;

  /* Amber */
  --color-amber-signal: #C77D2C;
  --color-amber-glow:   #E89642;

  /* Ink */
  --color-ink-graphite: #1A1F2E;
  --color-ink-pencil:   #5C6B7F;

  /* Semantic */
  --color-success: #2F8F5C;
  --color-warning: #C77D2C;
  --color-danger:  #B23A48;
  --color-info:    #3A7BB8;

  /* Spacing */
  --spacing-0: 0px;  --spacing-1: 4px;  --spacing-2: 8px;
  --spacing-3: 12px; --spacing-4: 16px; --spacing-5: 20px;
  --spacing-6: 24px; --spacing-8: 32px; --spacing-10: 40px;
  --spacing-12: 48px; --spacing-16: 64px; --spacing-20: 80px;
  --spacing-24: 96px;

  /* Radii */
  --radius-none: 0px; --radius-xs: 2px; --radius-sm: 4px;
  --radius-md: 8px;   --radius-lg: 12px; --radius-xl: 16px;
  --radius-full: 9999px;

  /* Border widths */
  --border-thin: 1px; --border-mid: 1.5px; --border-bold: 2px;

  /* Paper shadows · sin blur, gridline + tinta */
  --shadow-paper-sm:
    0 0 0 1px var(--color-paper-grid),
    0 1px 0 0 rgba(30, 77, 122, 0.08);
  --shadow-paper-md:
    0 0 0 1px var(--color-paper-grid),
    0 2px 0 0 rgba(30, 77, 122, 0.12),
    0 4px 0 0 rgba(30, 77, 122, 0.04);

  /* Z-index */
  --z-dropdown: 1000; --z-sticky: 1100; --z-modal: 1200;
  --z-popover: 1300;  --z-tooltip: 1400; --z-toast: 1500;

  /* Motion */
  --ease-blueprint: cubic-bezier(0.4, 0.0, 0.2, 1);
  --duration-fast: 120ms; --duration-normal: 240ms;
  --duration-slow: 480ms; --duration-slower: 720ms;

  /* Type */
  --font-display: "Fraunces", Georgia, serif;
  --font-body:    "Inter", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;
}

/* ===== Utilidades propias expuestas =========================
   .bg-grid          — fondo cuadrícula 24px (paper-grid)
   .bg-grid-dense    — fondo cuadrícula 8px
   .ink-stroke       — borde 1px tinta blueprint-mid
   .paper-shadow-sm  — shadow plano técnico ligera
   .paper-shadow-md  — shadow plano técnico media
   .iso-line         — pseudo-elemento isolínea topográfica
   .focus-ring       — focus visible ámbar 2px offset 2px
   ============================================================ */`;

const SectionTokens = () => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(TOKENS_CSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section id="tokens" className="ds-section">
      <div className="section-head">
        <div className="label">09 — Tokens (CSS)</div>
        <div>
          <h2>globals.css listo para copiar.</h2>
          <p>Tailwind v4 <code style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "var(--grid)", padding: "1px 6px", borderRadius: 2 }}>@theme</code> directive con todos los tokens. Pega en <code style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "var(--grid)", padding: "1px 6px", borderRadius: 2 }}>app/globals.css</code> y arranca.</p>
        </div>
      </div>

      <div className="paper-card" style={{ padding: 0, position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid var(--line-soft)" }}>
          <span className="mono" style={{ color: "var(--fg-soft)" }}>app/globals.css</span>
          <button onClick={copy} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "transparent", border: "1px solid var(--line)",
            padding: "6px 10px", borderRadius: 4, cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "var(--fg)",
          }}>
            {copied ? <IcCheck size={12} /> : <IcCopy size={12} />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
        <pre style={{ margin: 0, border: "none", borderRadius: 0, maxHeight: 600 }}>{TOKENS_CSS}</pre>
      </div>
    </section>
  );
};

const SectionNotes = () => (
  <section id="notes" className="ds-section">
    <div className="section-head">
      <div className="label">10 — Notes</div>
      <div>
        <h2>Decisiones abiertas y propuestas D1.</h2>
        <p>Lo que queda por resolver en la siguiente iteración.</p>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div className="paper-card" style={{ padding: 24 }}>
        <div className="kicker" style={{ marginBottom: 12 }}>Decisiones abiertas</div>
        <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.7, color: "var(--fg)" }}>
          <li><b>Configuración tipográfica A o B.</b> Fraunces aporta carácter editorial; Geist es más neutro y técnico. Recomendación: A para marketing, B para app.</li>
          <li><b>Set de iconos propio o Lucide.</b> Lucide cubre el 90% mapeado; un set propio refinaría protocolos (KNX, DALI) con glifos más fieles.</li>
          <li><b>Modo oscuro · contraste de amber.</b> En oscuro, <code>amber-signal</code> baja a 3,8:1 sobre <code>blueprint-deep</code>. Se promueve a <code>amber-glow</code>; validar con auditoría.</li>
          <li><b>Densidad de tabla.</b> Padding 12 px funciona en desktop; en mobile podríamos bajar a 8 px y ocultar columna "Consumo".</li>
        </ol>
      </div>

      <div className="paper-card" style={{ padding: 24 }}>
        <div className="kicker" style={{ marginBottom: 12 }}>3 mejoras fuera de scope · D1</div>
        <ol style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.7, color: "var(--fg)" }}>
          <li><b>Iconografía propia más afinada</b> para protocolos: glifos KNX/DALI/Modbus dibujados a mano siguiendo la métrica 24×24 del set, con esquinas a 1.5 px y empalmes geométricos.</li>
          <li><b>Micro-animación de focus ring</b>: anillo ámbar que se "dibuja" como trazo de pluma alrededor del componente (stroke-dasharray, 240 ms) en lugar de aparecer instantáneamente.</li>
          <li><b>Patrón decorativo de fondo</b> basado en isolíneas topográficas suaves a 4% de opacidad, generadas paramétricamente por sección — un fondo "vivo" sin pasar a parallax ni partículas.</li>
        </ol>
      </div>
    </div>
  </section>
);

// ===== HEADER =====
const Header = ({ theme, onToggleTheme }) => {
  const sections = [
    ["Brand", "brand"], ["Colors", "colors"], ["Type", "typography"],
    ["Scales", "scales"], ["Motion", "motion"], ["Icons", "iconography"],
    ["Components", "components"], ["Patterns", "patterns"],
    ["Tokens", "tokens"], ["Notes", "notes"],
  ];
  return (
    <header className="atlaps-header">
      <div className="atlaps-header-inner">
        <a href="#brand" style={{ textDecoration: "none", color: "inherit", flexShrink: 0 }}>
          <Logo variant="horizontal" size={32} />
        </a>
        <nav>
          {sections.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === "light" ? <IcMoon size={14} /> : <IcSun size={14} />}
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
};

// ===== APP =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "typeset": "A",
  "showGrid": true,
  "headline": "Cartografía de domótica."
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme + typeset to <html>
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    try { localStorage.setItem("atlaps-theme", tweaks.theme); } catch (e) {}
  }, [tweaks.theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-typeset", tweaks.typeset === "B" ? "b" : "a");
    try { localStorage.setItem("atlaps-typeset", tweaks.typeset === "B" ? "b" : "a"); } catch (e) {}
    const lbl = document.getElementById("active-typeset-label");
    if (lbl) lbl.textContent = tweaks.typeset;
  }, [tweaks.typeset]);

  React.useEffect(() => {
    document.body.style.backgroundImage = tweaks.showGrid
      ? "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)"
      : "none";
  }, [tweaks.showGrid]);

  const toggleTheme = () => setTweak("theme", tweaks.theme === "light" ? "dark" : "light");

  return (
    <>
      <Header theme={tweaks.theme} onToggleTheme={toggleTheme} />
      <main>
        {/* Hero */}
        <section style={{ padding: "64px 0 48px" }}>
          <div className="kicker" style={{ marginBottom: 16 }}>Atlaps · Design System v0.1 · Iniciativa Alexendros</div>
          <h1 className="t-display-1" style={{ margin: 0, maxWidth: 880, textWrap: "balance" }}>
            {tweaks.headline}
            <span style={{ color: "var(--amber-signal)" }}> ·</span>
          </h1>
          <p style={{ fontSize: 20, color: "var(--fg-soft)", maxWidth: 640, marginTop: 24, textWrap: "pretty" }}>
            Atlas SaaS de domótica multi-protocolo. Estética blueprint: cartografía técnica, papel cuadrícula, isolíneas. Cero gradientes púrpura, cero neón, cero stock.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
            <div><span className="mono" style={{ color: "var(--fg-soft)" }}>10</span> <span className="mono">secciones</span></div>
            <div><span className="mono" style={{ color: "var(--fg-soft)" }}>12</span> <span className="mono">primitivos</span></div>
            <div><span className="mono" style={{ color: "var(--fg-soft)" }}>04</span> <span className="mono">patrones</span></div>
            <div><span className="mono" style={{ color: "var(--fg-soft)" }}>24</span> <span className="mono">iconos</span></div>
            <div><span className="mono" style={{ color: "var(--fg-soft)" }}>02</span> <span className="mono">configuraciones type</span></div>
          </div>
        </section>

        <SectionBrand />
        <SectionColors />
        <SectionTypography />
        <SectionScales />
        <SectionMotion />
        <SectionIcons />
        <SectionComponents />
        <SectionPatterns />
        <SectionTokens />
        <SectionNotes />

        <footer style={{ paddingTop: 48, marginTop: 48, borderTop: "1px solid var(--line-soft)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Logo variant="horizontal" size={28} />
          <span className="mono" style={{ color: "var(--fg-soft)" }}>
            atlaps · iniciativa alexendros, s.l. · design system v0.1 · 2026
          </span>
        </footer>
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Tema">
          <TweakRadio
            label="Modo"
            value={tweaks.theme}
            options={[{ value: "light", label: "Claro" }, { value: "dark", label: "Oscuro" }]}
            onChange={(v) => setTweak("theme", v)}
          />
          <TweakRadio
            label="Tipografía"
            value={tweaks.typeset}
            options={[{ value: "A", label: "A" }, { value: "B", label: "B" }]}
            onChange={(v) => setTweak("typeset", v)}
          />
          <TweakToggle
            label="Cuadrícula de fondo"
            value={tweaks.showGrid}
            onChange={(v) => setTweak("showGrid", v)}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 500 }}>
            <span>Titular</span>
            <input
              type="text"
              value={tweaks.headline}
              onChange={(e) => setTweak("headline", e.target.value)}
              style={{
                background: "rgba(255,255,255,0.06)", color: "inherit",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 4, padding: "6px 8px",
                fontFamily: "inherit", fontSize: 13, outline: "none",
              }}
            />
          </label>
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
