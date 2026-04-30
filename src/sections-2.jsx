/* global React, ATLAPS_ICON_GRID, Logo */

// ===== SPACING / RADII / SHADOWS =====
const SectionScales = () => {
  const spacing = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];
  const radii = [
    { px: 0, name: "none" },
    { px: 2, name: "xs" },
    { px: 4, name: "sm" },
    { px: 8, name: "md" },
    { px: 12, name: "lg" },
    { px: 16, name: "xl" },
    { px: 9999, name: "full" },
  ];
  const borders = [1, 1.5, 2];

  return (
    <section id="scales" className="ds-section">
      <div className="section-head">
        <div className="label">04 — Scales</div>
        <div>
          <h2>Métrica del plano.</h2>
          <p>Spacing en escala 4-base, radii reducidos al mínimo, sombras sin blur — gridline + trazo de tinta. Bordes 1, 1.5 o 2 px. Nunca más.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

        {/* Spacing */}
        <div className="paper-card" style={{ padding: 32 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>Spacing · escala 4-base</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {spacing.map((s) => (
              <div key={s} style={{ display: "grid", gridTemplateColumns: "80px 80px 1fr", gap: 16, alignItems: "center" }}>
                <div className="mono" style={{ color: "var(--fg-soft)" }}>--spacing-{spacing.indexOf(s)}</div>
                <div className="mono">{s}px</div>
                <div style={{ height: 16, width: s, background: "var(--blueprint-mid)", minWidth: 1 }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* Radii */}
          <div className="paper-card" style={{ padding: 32 }}>
            <div className="kicker" style={{ marginBottom: 24 }}>Radii</div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {radii.map((r) => (
                <div key={r.name} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 64, height: 64, background: "var(--blueprint-mid)", borderRadius: r.px, border: "1px solid var(--line-soft)" }} />
                  <div className="mono" style={{ fontSize: 11, color: "var(--fg-soft)" }}>{r.name}<br />{r.px === 9999 ? "full" : r.px + "px"}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Borders */}
          <div className="paper-card" style={{ padding: 32 }}>
            <div className="kicker" style={{ marginBottom: 24 }}>Border widths</div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {borders.map((b) => (
                <div key={b} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 64, height: 64, background: "var(--bg)", border: `${b}px solid var(--blueprint-mid)`, borderRadius: 4 }} />
                  <div className="mono" style={{ fontSize: 11, color: "var(--fg-soft)" }}>{b}px</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shadows */}
        <div className="paper-card" style={{ padding: 32, background: "var(--bg)" }}>
          <div className="kicker" style={{ marginBottom: 24 }}>Paper shadows · sin blur, gridline + trazo</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{
              background: "var(--bg-elev)",
              padding: 24, borderRadius: 4,
              boxShadow: "0 0 0 1px var(--paper-grid), 0 1px 0 0 rgba(30, 77, 122, 0.08)",
            }}>
              <div className="mono" style={{ color: "var(--fg-soft)", marginBottom: 8 }}>paper-shadow-sm</div>
              <div>Trazo ligero · 1 px gridline</div>
            </div>
            <div style={{
              background: "var(--bg-elev)",
              padding: 24, borderRadius: 4,
              boxShadow: "0 0 0 1px var(--paper-grid), 0 2px 0 0 rgba(30, 77, 122, 0.12), 0 4px 0 0 rgba(30, 77, 122, 0.04)",
            }}>
              <div className="mono" style={{ color: "var(--fg-soft)", marginBottom: 8 }}>paper-shadow-md</div>
              <div>Trazo medio · escalonado</div>
            </div>
          </div>
        </div>

        {/* Z-index ladder */}
        <div className="paper-card" style={{ padding: 32 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>Z-index</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              ["dropdown", 1000], ["sticky", 1100], ["modal", 1200],
              ["popover", 1300], ["tooltip", 1400], ["toast", 1500],
            ].map(([name, z]) => (
              <div key={name} style={{ display: "grid", gridTemplateColumns: "120px 80px 1fr", gap: 16, padding: "8px 0", borderBottom: "1px solid var(--line-soft)" }}>
                <div className="mono">{name}</div>
                <div className="mono" style={{ color: "var(--fg-soft)" }}>{z}</div>
                <div style={{ height: 4, background: "var(--blueprint-soft)", width: `${(z - 900) / 6}%`, alignSelf: "center" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== MOTION =====
const SectionMotion = () => {
  const [logoKey, setLogoKey] = React.useState(0);
  const [tabIdx, setTabIdx] = React.useState(0);
  const [skelKey, setSkelKey] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setSkelKey((k) => k + 1), 1600);
    return () => clearInterval(t);
  }, []);

  const tabs = ["Cocina", "Salón", "Exterior"];

  return (
    <section id="motion" className="ds-section">
      <div className="section-head">
        <div className="label">05 — Motion</div>
        <div>
          <h2>Trazo de pluma, no fade.</h2>
          <p>Easing único <code style={{ fontSize: 12, fontFamily: "var(--font-mono)", background: "var(--grid)", padding: "1px 6px", borderRadius: 2 }}>cubic-bezier(0.4, 0, 0.2, 1)</code>. Duraciones 120 / 240 / 480 / 720 ms.</p>
        </div>
      </div>

      <style>{`
        @keyframes drawStroke {
          0% { stroke-dashoffset: 600; opacity: 0; }
          10% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .logo-anim .logo-stroke {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawStroke 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .logo-anim .logo-stroke-2 { animation-delay: 350ms; animation-duration: 600ms; }
        .logo-anim ellipse { opacity: 0; animation: fadeIn 480ms cubic-bezier(0.4,0,0.2,1) forwards; animation-delay: 900ms; }
        .logo-anim circle { opacity: 0; animation: fadeIn 240ms cubic-bezier(0.4,0,0.2,1) forwards; animation-delay: 1200ms; }
        @keyframes fadeIn { to { opacity: 0.55; } }
        .logo-anim circle { animation-fill-mode: forwards; }

        @keyframes topoSweep {
          0% { stroke-dashoffset: 220; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.7; }
        }
        .topo-skel path {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: topoSweep 1400ms cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .topo-skel path:nth-child(1) { animation-delay: 0ms; }
        .topo-skel path:nth-child(2) { animation-delay: 120ms; }
        .topo-skel path:nth-child(3) { animation-delay: 240ms; }
        .topo-skel path:nth-child(4) { animation-delay: 360ms; }
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>

        {/* Logo draw */}
        <div className="paper-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="kicker">01 · Logo · stroke 1000 ms</div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200 }}>
            <div key={logoKey} className="logo-anim">
              <Logo variant="icon" size={140} />
            </div>
          </div>
          <button onClick={() => setLogoKey((k) => k + 1)} style={replayBtn}>↻ Replay</button>
        </div>

        {/* Tab indicator */}
        <div className="paper-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="kicker">02 · Tab · trazo de pluma</div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200 }}>
            <div style={{ position: "relative", display: "inline-flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 0, position: "relative" }}>
                {tabs.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setTabIdx(i)}
                    style={{
                      background: "transparent", border: "none",
                      fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
                      padding: "10px 20px", cursor: "pointer",
                      color: tabIdx === i ? "var(--fg)" : "var(--fg-soft)",
                      transition: "color 240ms var(--ease)",
                    }}
                  >{t}</button>
                ))}
                {/* moving stroke */}
                <span style={{
                  position: "absolute", bottom: 0,
                  left: `${tabIdx * 33.333}%`, width: "33.333%",
                  height: 2, background: tabIdx === 0 ? "var(--blueprint-soft)" : tabIdx === 2 ? "var(--amber-signal)" : "var(--blueprint-mid)",
                  transition: "left 480ms cubic-bezier(0.4,0,0.2,1), background 480ms cubic-bezier(0.4,0,0.2,1)",
                }} />
                <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "var(--line-soft)" }} />
              </div>
            </div>
          </div>
          <button onClick={() => setTabIdx((tabIdx + 1) % tabs.length)} style={replayBtn}>↻ Next tab</button>
        </div>

        {/* Topo skeleton */}
        <div className="paper-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="kicker">03 · Skeleton · isolíneas 480 ms</div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200 }}>
            <svg key={skelKey} className="topo-skel" width={200} height={140} viewBox="0 0 200 140">
              <path d="M10 110 Q 50 80 100 88 T 190 100" stroke="var(--blueprint-soft)" strokeWidth="1.5" fill="none" />
              <path d="M10 90 Q 60 60 100 68 T 190 80" stroke="var(--blueprint-soft)" strokeWidth="1.5" fill="none" />
              <path d="M20 70 Q 70 45 100 50 T 180 60" stroke="var(--blueprint-soft)" strokeWidth="1.5" fill="none" />
              <path d="M40 50 Q 80 30 100 32 T 160 40" stroke="var(--blueprint-soft)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <button onClick={() => setSkelKey((k) => k + 1)} style={replayBtn}>↻ Replay</button>
        </div>
      </div>
    </section>
  );
};

const replayBtn = {
  background: "transparent", border: "1px solid var(--line)",
  padding: "6px 12px", borderRadius: 4, cursor: "pointer",
  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
  textTransform: "uppercase", color: "var(--fg)",
  alignSelf: "flex-start",
};

// ===== ICONOGRAPHY =====
const SectionIcons = () => {
  return (
    <section id="iconography" className="ds-section">
      <div className="section-head">
        <div className="label">06 — Iconography</div>
        <div>
          <h2>Lineal 1.5 px, esquinas geométricas.</h2>
          <p>Set base de 24 iconos en grid 4-col. Mostrados a 24 px (uso en UI) y 32 px (uso en tarjetas y BOM). Si en producción se usa Lucide, mantener strokeWidth=1.5.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {ATLAPS_ICON_GRID.map((g) => (
          <div key={g.group} className="paper-card" style={{ padding: 32 }}>
            <div className="kicker" style={{ marginBottom: 24 }}>{g.group}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
              {g.items.map(([label, Ic]) => (
                <div key={label} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: 12, padding: "24px 8px",
                  border: "1px solid var(--line-soft)",
                  marginLeft: -1, marginTop: -1,
                  background: "var(--bg-elev)",
                }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <Ic size={24} />
                    <Ic size={32} />
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--fg-soft)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { SectionScales, SectionMotion, SectionIcons });
