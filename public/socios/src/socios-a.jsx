/* global React */
// Bloques 1-5: Header · Hero · Problema · Mirada · Diferenciación

const SUN = (s=18) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
);
const MOON = (s=18) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
);

// — 1. Header sticky ————————————————————————————————————————
const Header = ({ theme, onToggleTheme }) => (
  <header className="hdr">
    <div className="hdr-inner">
      <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
        <img src="assets/logo-icon.svg" alt="" width="28" height="28" style={{ filter: theme === "dark" ? "invert(1) brightness(1.2)" : "none" }} />
        <span style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "0.06em", fontWeight: 500 }}>atlaps</span>
      </a>
      <nav>
        <a href="#producto">Producto</a>
        <a href="#diferenciacion">Diferenciación</a>
        <a href="#privacidad">Privacidad</a>
        <a href="#negocio">Negocio</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#colaborar">Colaborar</a>
      </nav>
      <div className="hdr-meta" aria-label="Documento confidencial">
        <span>Documento confidencial</span>
        <strong>v0.1 · 30-abr-2026</strong>
      </div>
      <button className="btn-icon" onClick={onToggleTheme} aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"} title={theme === "dark" ? "Modo claro" : "Modo oscuro"}>
        {theme === "dark" ? SUN(16) : MOON(16)}
      </button>
      <a className="btn btn-primary" href="#contacto">Solicitar conversación</a>
    </div>
  </header>
);

// — 2. Hero —————————————————————————————————————————————————
const Hero = () => (
  <section id="hero" className="block" data-screen-label="01 Hero">
    <span className="kicker"><span className="num">/01</span> Landing socios · Privada</span>
    <div className="hero" style={{ marginTop: 24 }}>
      <div>
        <h1>Un atlas de domótica que se opera, no se <em>gestiona</em>.</h1>
        <p className="lead">Atlaps construye desde Comunitat Valenciana el primer SaaS español multi-protocolo con voz local UE, self-host de stack completo y un protocolo abierto Apache-2.0 para operar instalaciones reales. Esta página explica por qué buscamos socios y qué hay debajo.</p>
        <div className="hero-cta">
          <a className="btn btn-accent" href="#contacto">Solicitar conversación</a>
          <a className="btn btn-secondary" href="#dossier" onClick={(e)=>{e.preventDefault(); alert("Dossier PDF · pendiente de empaquetado. En showcase, simulado.");}}>Descargar dossier PDF</a>
        </div>
        <div className="hero-meta">
          <div><strong>Bootstrap</strong>4-may-2026</div>
          <div><strong>v1.0 GA</strong>2-ago-2026</div>
          <div><strong>Cash-runway</strong>12 meses · 1.080 € <span className="caveat" style={{marginLeft:6}}>supuesto</span></div>
        </div>
      </div>

      <HeroBlueprint />
    </div>
  </section>
);

const HeroBlueprint = () => (
  <div className="atlas" aria-hidden="true">
    <span className="corner">ATLAPS · 5 PILARES</span>
    <span className="corner r">v1.0 → 2-AGO-2026</span>
    <span className="corner b">ABP · APACHE-2.0</span>
    <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg">
      {/* topographic isolines */}
      <g fill="none" stroke="var(--blueprint-soft)" strokeWidth="1" opacity="0.45">
        <path d="M 20 280 C 80 260, 140 290, 230 270 S 380 240, 440 260" />
        <path d="M 20 260 C 80 240, 140 270, 230 250 S 380 220, 440 240" />
        <path d="M 20 240 C 80 220, 140 250, 230 230 S 380 200, 440 220" />
      </g>
      {/* connecting lines (pen-on-paper) */}
      <g fill="none" stroke="var(--blueprint-mid)" strokeWidth="1" strokeDasharray="3 3" opacity="0.7">
        <line x1="100" y1="100" x2="230" y2="170" />
        <line x1="360" y1="100" x2="230" y2="170" />
        <line x1="80" y1="220" x2="230" y2="170" />
        <line x1="380" y1="220" x2="230" y2="170" />
      </g>
      {/* 5 nodes */}
      <g>
        {/* Planificador (TL) */}
        <g transform="translate(100 100)">
          <rect x="-44" y="-22" width="88" height="44" fill="var(--bg-elev)" stroke="var(--blueprint-mid)" strokeWidth="1.25" rx="2"/>
          <text textAnchor="middle" y="-4" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-soft)" letterSpacing="1">PILAR · 01</text>
          <text textAnchor="middle" y="10" fontFamily="var(--font-display)" fontSize="13" fill="var(--fg)" fontWeight="500">Planificador</text>
        </g>
        {/* Mercado (TR) */}
        <g transform="translate(360 100)">
          <rect x="-44" y="-22" width="88" height="44" fill="var(--bg-elev)" stroke="var(--blueprint-mid)" strokeWidth="1.25" rx="2"/>
          <text textAnchor="middle" y="-4" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-soft)" letterSpacing="1">PILAR · 02</text>
          <text textAnchor="middle" y="10" fontFamily="var(--font-display)" fontSize="13" fill="var(--fg)" fontWeight="500">Mercado</text>
        </g>
        {/* Monitor (center) */}
        <g transform="translate(230 170)">
          <circle r="34" fill="var(--blueprint-deep)" stroke="var(--amber-on-surface)" strokeWidth="1.5"/>
          <text textAnchor="middle" y="-4" fontFamily="var(--font-mono)" fontSize="9" fill="var(--amber-glow)" letterSpacing="1">PILAR · 03</text>
          <text textAnchor="middle" y="10" fontFamily="var(--font-display)" fontSize="13" fill="var(--paper-bone)" fontWeight="500">Monitor</text>
        </g>
        {/* Sugerencias (BL) */}
        <g transform="translate(80 220)">
          <rect x="-44" y="-22" width="88" height="44" fill="var(--bg-elev)" stroke="var(--blueprint-mid)" strokeWidth="1.25" rx="2"/>
          <text textAnchor="middle" y="-4" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-soft)" letterSpacing="1">PILAR · 04</text>
          <text textAnchor="middle" y="10" fontFamily="var(--font-display)" fontSize="13" fill="var(--fg)" fontWeight="500">Sugerencias</text>
        </g>
        {/* ComtubernIA (BR) */}
        <g transform="translate(380 220)">
          <rect x="-50" y="-22" width="100" height="44" fill="var(--bg-elev)" stroke="var(--blueprint-mid)" strokeWidth="1.25" rx="2"/>
          <text textAnchor="middle" y="-4" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-soft)" letterSpacing="1">PILAR · 05</text>
          <text textAnchor="middle" y="10" fontFamily="var(--font-display)" fontSize="13" fill="var(--fg)" fontWeight="500">ComtubernIA</text>
        </g>
        {/* tiny pins on paths */}
        <circle className="pin-ring" cx="160" cy="135" r="6"/>
        <circle className="pin" cx="160" cy="135" r="2.5"/>
        <circle className="pin-ring" cx="300" cy="135" r="6"/>
        <circle className="pin" cx="300" cy="135" r="2.5"/>
        <circle className="pin-ring" cx="160" cy="200" r="6"/>
        <circle className="pin" cx="160" cy="200" r="2.5"/>
        <circle className="pin-ring" cx="300" cy="200" r="6"/>
        <circle className="pin" cx="300" cy="200" r="2.5"/>
      </g>
      <g fontFamily="var(--font-mono)" fontSize="8" fill="var(--amber-on-surface)" opacity="0.85">
        <text x="170" y="138">BOM↔SKU</text>
        <text x="310" y="138">EVT</text>
        <text x="170" y="203">SUG</text>
        <text x="310" y="203">VOZ</text>
      </g>
    </svg>
  </div>
);

// — 3. Problema (silos) ————————————————————————————————————
const SILOS = [
  { n: "01", t: "Diseñar",   p: "ETS5 KNX, Domovea, Komfovent, hojas Excel para BOM. Cada protocolo, su tooling.", pain: "4 herramientas · 0 integración" },
  { n: "02", t: "Comprar",   p: "Distribuidores nacionales (Domótica Davinci, Casadomo) sin interfaz uniforme.",      pain: "Sin SKU comparables" },
  { n: "03", t: "Operar",    p: "Home Assistant para techies, apps fabricante para usuarios. Telemetría dispersa.",   pain: "DIY vs lock-in" },
  { n: "04", t: "Voz e IA",  p: "Alexa, Google, Siri envían audio fuera de la UE. Local sin app comercial.",          pain: "Soberanía rota" },
];
const Problema = () => (
  <section id="problema" className="block" data-screen-label="03 Problema">
    <div className="sect-head">
      <span className="kicker"><span className="num">/03</span> Diagnóstico</span>
      <div>
        <h2>El mercado europeo de la domótica está fragmentado en cuatro silos que <em>nadie cose</em>.</h2>
        <p>Cada capa tiene tooling propio, vocabulario propio, distribución propia. El instalador profesional cambia de software entre fases; el usuario final pierde el contexto entero.</p>
      </div>
    </div>

    <div className="silos">
      {SILOS.map(s => (
        <div className="silo" key={s.n}>
          <span className="silo-num">SILO · {s.n}</span>
          <h3>{s.t}</h3>
          <p>{s.p}</p>
          <span className="pain">{s.pain}</span>
        </div>
      ))}
    </div>

    <div className="silo-cover">
      <span className="seal">Cobertura</span>
      <span>Atlaps cubre las <em>4 capas</em> en una sola plataforma operada desde UE.</span>
    </div>
  </section>
);

// — 4. Atlaps en una mirada ————————————————————————————————
const PILLARS = [
  { n: "01", t: "Planificador", p: "Diseño de topología sobre canvas blueprint. BOM y memoria PDF.",  s: "F1 · 8-29 may" },
  { n: "02", t: "Mercado",      p: "Catálogo multi-proveedor con comisión declarada. 2.ª mano integrado.", s: "Mes 5–9" },
  { n: "03", t: "Monitor + ABP",p: "Telemetría en vivo. ABP como bridge abierto para integraciones futuras.", s: "Alpha F4 · GA F6" },
  { n: "04", t: "Sugerencias",  p: "Recomendaciones detectan huecos en la instalación y proponen SKU.",  s: "Mes 9–12" },
  { n: "05", t: "ComtubernIA",  p: "Voz local UE. Whisper + Piper + openWakeWord + Mistral La Plateforme.", s: "F4 thin → F6" },
];
const Glance = () => (
  <section id="producto" className="block" data-screen-label="04 Mirada">
    <div className="sect-head">
      <span className="kicker"><span className="num">/04</span> Atlaps en una mirada</span>
      <div>
        <h2>Cinco aplicaciones, un solo <em>atlas</em>.</h2>
        <p>Operan independientemente y se potencian al cooperar. ABP (Atlaps Bridge Protocol) abre la coherencia con cualquier integración futura.</p>
      </div>
    </div>

    <div className="pillars">
      {PILLARS.map(p => (
        <div className="pillar" key={p.n}>
          <span className="num">/{p.n}</span>
          <h3>{p.t}</h3>
          <p>{p.p}</p>
          <span className="stage"><strong>Estado:</strong> {p.s}</span>
        </div>
      ))}
    </div>

    <a className="repo-badge" href="#" onClick={(e)=>e.preventDefault()}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
      <span>Repo público <code>atlaps/abp</code></span>
      <span className="lic">Apache-2.0</span>
      <span style={{color:"var(--fg-soft)"}}>· "un MCP para domótica"</span>
    </a>
  </section>
);

// — 5. Diferenciación competitiva —————————————————————————
const CMP_ROWS = [
  { f: "Diseño + BOM + memoria PDF",      v: ["Y","N","N","N","M","N","N","N","Y"] },
  { f: "Multi-protocolo nativo",          v: ["Y","Y","M","M","Y","N","M","M","D"] },
  { f: "Castellano peninsular",           v: ["Y","M","N","N","M","M","M","M","N"] },
  { f: "Voz 100 % local UE",              v: ["W","M","N","N","M","N","N","N","D"] },
  { f: "Self-host UE",                    v: ["Y","Y","N","M","M","N","N","N","N"] },
  { f: "Protocolo abierto Apache-2.0",    v: ["Y","Y","N","N","N","N","N","N","N"] },
  { f: "Pricing < 25 €/mes pro",          v: ["Y","Y","M","M","N","D","D","M","N"] },
  { f: "Marketplace 2.ª mano",            v: ["W","N","N","N","N","N","N","N","N"] },
  { f: "Comisiones declaradas",           v: ["Y","D","N","N","N","N","N","N","D"] },
  { f: "Cumplimiento RGPD verificable",   v: ["Y","Y","M","M","M","M","N","M","M"] },
];
const COMPS = ["Atlaps","Home Assistant","SmartThings","Hubitat","Loxone","Apple Home","Google Home","Homey","D-Tools"];
const mark = (k) => {
  const map = { Y: ["✓","mk-y","sí"], N: ["✕","mk-n","no"], M: ["⚠","mk-w","parcial"], W: ["⚠","mk-w","planificado"], D: ["—","mk-d","sin dato"] };
  const [g, c, lab] = map[k] || ["—","mk-d","sin dato"];
  return <span className={`mk ${c}`} title={lab}>{g}</span>;
};
const Diferenciacion = () => (
  <section id="diferenciacion" className="block" data-screen-label="05 Diferenciación">
    <div className="sect-head">
      <span className="kicker"><span className="num">/05</span> Diferenciación competitiva</span>
      <div>
        <h2>Lo que ningún competidor cubre, <em>simultáneamente</em>.</h2>
        <p>Marcado conservador en duda. ⚠ planificado pero no GA. — sin dato fiable público. La columna Atlaps incluye estado real F0–F6.</p>
      </div>
    </div>

    <div className="cmp-wrap">
      <table className="cmp">
        <thead>
          <tr>
            <th className="feat">Capacidad</th>
            {COMPS.map((c,i) => <th key={c} className={i===0?"us":""}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {CMP_ROWS.map((r, ri) => (
            <tr key={ri}>
              <td className="feat">{r.f}</td>
              {r.v.map((k,i)=> <td key={i} className={i===0?"us":""}>{mark(k)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="note">Comparativa basada en información pública de cada producto a 30-abr-2026. ✓ disponible · ⚠ parcial o planificado · ✕ no disponible · — sin dato fiable.</p>
  </section>
);

window.SociosBlocksA = { Header, Hero, Problema, Glance, Diferenciacion };
