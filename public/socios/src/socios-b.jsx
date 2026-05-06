/* global React */
// Bloques 6-10: Privacidad · Sinergias · Negocio · Tracción · Roadmap

// — 6. Privacidad y soberanía ————————————————————————————————
const PRIV = [
  {
    t: "Self-host de stack completo",
    code: [
      ["c", "# infra · Hetzner CX32 (Helsinki, UE)"],
      ["k", "host"], [" ", ":   "], ["s", "hetzner.cx32"],
      ["nl"],
      ["k", "stack"], [" ", ": "], ["s", "[supabase, glitchtip, trigger.dev]"],
      ["nl"],
      ["k", "cost"], [" ", ":   "], ["s", "~13 €/mes"],
      ["nl"],
      ["k", "backups"], [" ", ":"], ["s", " WAL-G → Cloudflare R2 (UE)"],
    ],
    p: "Stack co-ubicado en una sola VM europea. Sin AWS, sin GCP, sin Azure. Backups cifrados a R2 UE.",
    adr: "ADR 006",
  },
  {
    t: "Voz 100 % local UE",
    code: [
      ["c", "# pipeline ComtubernIA (F4 thin → F6 full)"],
      ["k", "stt"], [" ", ":  "], ["s", "Whisper-large-v3 ES"],
      ["nl"],
      ["k", "tts"], [" ", ":  "], ["s", "Piper ES + openWakeWord"],
      ["nl"],
      ["k", "llm"], [" ", ":  "], ["s", "Mistral La Plateforme (Paris)"],
      ["nl"],
      ["k", "edge"], [" ", ": "], ["s", "Scaleway L40S Paris (F6+)"],
    ],
    p: "Audio nunca sale del hogar en F6+. La inferencia LLM se procesa en datacenter UE soberano.",
    adr: "ADR 004 + 005",
  },
  {
    t: "Sin trackers ni CDNs externos",
    code: [
      ["c", "# observabilidad sin extracción de datos"],
      ["k", "fonts"], [" ", ":     "], ["s", "self-host SIL OFL 1.1"],
      ["nl"],
      ["k", "analytics"], [" ", ": "], ["s", "Plausible CE (autohospedado)"],
      ["nl"],
      ["k", "errors"], [" ", ":    "], ["s", "GlitchTip self-host"],
      ["nl"],
      ["k", "dpa"], [" ", ":       "], ["s", "DPAs UE firmados"],
    ],
    p: "Cero Google Analytics. Cero Hotjar. Cero Stripe en landing pública. Cookies estrictamente funcionales.",
    adr: "ADR 001",
  },
];
const renderCode = (parts) => parts.map((seg, i) => {
  if (seg[0] === "nl") return <br key={i} />;
  if (seg[0] === " ") return <span key={i}>{seg[1]}</span>;
  return <span key={i} className={seg[0]}>{seg[1]}</span>;
});
const Privacidad = () => (
  <section id="privacidad" className="block" data-screen-label="06 Privacidad">
    <div className="sect-head">
      <span className="kicker"><span className="num">/06</span> Privacidad y soberanía</span>
      <div>
        <h2>Decisiones técnicas, no <em>declaraciones</em> de marketing.</h2>
        <p>Cada decisión de soberanía está documentada en un ADR público del repositorio. Trazabilidad por encima de proclamas.</p>
      </div>
    </div>

    <div className="priv">
      {PRIV.map((p,i)=> (
        <div className="priv-card" key={i}>
          <h3>{p.t}</h3>
          <pre>{renderCode(p.code)}</pre>
          <p>{p.p}</p>
          <span className="adr" title="Trazabilidad — repositorio público próximamente">▸ {p.adr} <span style={{color:"var(--fg-soft)",fontSize:"0.85em"}}>(próximamente)</span></span>
        </div>
      ))}
    </div>
    <p className="note">Cada decisión está documentada en un ADR público de este repositorio. Cualquier socio puede solicitar el ADR completo bajo NDA.</p>
  </section>
);

// — 7. Sinergias ————————————————————————————————————————
const Sinergias = () => (
  <section id="sinergias" className="block" data-screen-label="07 Sinergias">
    <div className="sect-head">
      <span className="kicker"><span className="num">/07</span> Funcionalidades complementarias</span>
      <div>
        <h2>Independientes en aislamiento, <em>indisociables</em> en operación.</h2>
        <p>Los pilares operan por separado. Juntos cierran el ciclo diseño → compra → operación → optimización.</p>
      </div>
    </div>

    <div className="synergy">
      <svg viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--amber-on-surface)"/>
          </marker>
        </defs>
        {/* nodes */}
        <g fontFamily="var(--font-display)" fontWeight="500">
          {[
            { x:120, y: 80, t: "Planificador", k: "01" },
            { x:780, y: 80, t: "Mercado",      k: "02" },
            { x:460, y:180, t: "Monitor + ABP",k: "03" },
            { x:120, y:280, t: "Sugerencias",  k: "04" },
            { x:780, y:280, t: "ComtubernIA",  k: "05" },
          ].map((n,i)=> (
            <g key={i} transform={`translate(${n.x} ${n.y})`}>
              <rect x="-78" y="-30" width="156" height="60" rx="3" fill="var(--bg)" stroke="var(--blueprint-mid)" strokeWidth="1.25"/>
              <text textAnchor="middle" y="-8" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-soft)" letterSpacing="1">PILAR · {n.k}</text>
              <text textAnchor="middle" y="14" fontSize="15" fill="var(--fg)">{n.t}</text>
            </g>
          ))}
        </g>
        {/* arrows w/ labels */}
        <g fill="none" stroke="var(--amber-on-surface)" strokeWidth="1.25" strokeDasharray="4 3">
          <path d="M 198 80 C 320 80, 380 80, 700 80" markerEnd="url(#arr)"/>
          <path d="M 780 110 C 700 130, 580 160, 540 175" markerEnd="url(#arr)"/>
          <path d="M 460 210 C 460 240, 320 270, 200 280" markerEnd="url(#arr)"/>
          <path d="M 200 280 C 320 280, 580 280, 700 280" markerEnd="url(#arr)"/>
          <path d="M 780 250 C 700 220, 540 200, 540 195" markerEnd="url(#arr)"/>
          <path d="M 460 150 C 460 120, 320 90, 198 80" />
        </g>
        <g fontFamily="var(--font-mono)" fontSize="11" fill="var(--amber-on-surface)" letterSpacing="0.5">
          <text x="460" y="60"  textAnchor="middle">BOM ↔ SKU live</text>
          <text x="660" y="148" textAnchor="middle">Compra ABP-compatible</text>
          <text x="280" y="248" textAnchor="middle">Sugerencias ← uso real</text>
          <text x="460" y="304" textAnchor="middle">Hueco detectado → SKU</text>
          <text x="660" y="222" textAnchor="middle">Eventos → respuesta voz</text>
        </g>
      </svg>

      <div className="synergy-closes">
        <div className="synergy-close"><div className="qm">REGLA · 01</div><p>Los pilares operan independientemente.</p></div>
        <div className="synergy-close"><div className="qm">REGLA · 02</div><p>Pero juntos cierran el ciclo diseño → compra → operación → optimización.</p></div>
        <div className="synergy-close"><div className="qm">REGLA · 03</div><p>ABP asegura coherencia con cualquier integración futura.</p></div>
      </div>
    </div>
  </section>
);

// — 8. Modelo de negocio ————————————————————————————————————
const Negocio = () => (
  <section id="negocio" className="block" data-screen-label="08 Negocio">
    <div className="sect-head">
      <span className="kicker"><span className="num">/08</span> Modelo de negocio</span>
      <div>
        <h2>Suscripción · marketplace · servicios. <em>Sin lock-in</em>.</h2>
        <p>Tres planes principales, tres streams complementarios. OKRs declarados con honestidad sobre supuestos.</p>
      </div>
    </div>

    <div className="pricing">
      <div className="plan">
        <span className="label">Free · siempre</span>
        <div className="price">0 €<small> · sin tarjeta</small></div>
        <ul><li>Hasta 10 dispositivos</li><li>Un atlas, una vivienda</li><li>Voz local básica</li></ul>
      </div>
      <div className="plan featured">
        <span className="label">Solo · IVA inc.</span>
        <div className="price">24,90 €<small> /mes</small></div>
        <ul><li>Hasta 50 dispositivos</li><li>Voz local completa UE</li><li>Self-host opcional</li><li>Mercado con comisiones declaradas</li></ul>
      </div>
      <div className="plan">
        <span className="label">Studio · IVA inc.</span>
        <div className="price">59 €<small> /mes</small></div>
        <ul><li>Dispositivos ilimitados</li><li>Multi-vivienda · multi-cliente</li><li>Self-host UE incluido</li><li>Soporte prioritario</li></ul>
      </div>
    </div>

    <div className="streams">
      <div className="stream"><h3>Marketplace</h3><p>Comisión declarada en cada SKU. Mercado de 2.ª mano integrado con verificación.</p><div className="rate">5–12 % nuevo · 18–28 % 2.ª mano</div></div>
      <div className="stream"><h3>Sugerencias</h3><p>Revenue declarado cuando una recomendación deriva en compra. Sin dark patterns.</p><div className="rate">Comisión visible · siempre</div></div>
      <div className="stream"><h3>Operate / Pro</h3><p>Servicio operado para integradores y multi-vivienda. Activa F6+.</p><div className="rate">Por instalación · F6+</div></div>
    </div>

    <table className="okr-tbl" style={{marginTop:32}}>
      <caption className="sr-only">OKRs por horizonte temporal</caption>
      <thead><tr><th scope="col">Horizonte</th><th scope="col">OKR</th><th scope="col" style={{width:180}}>Objetivo</th><th scope="col" style={{width:100}}>Estado</th></tr></thead>
      <tbody>
        <tr><td>F1–F4</td><td>Free → Solo conversion</td><td className="target">3 % en 90 d</td><td><span className="caveat">supuesto</span></td></tr>
        <tr><td>Mes 6</td><td>MRR Solo + Studio</td><td className="target">≥ 1.500 €</td><td><span className="caveat">supuesto</span></td></tr>
        <tr><td>Mes 12</td><td>Marketplace GMV</td><td className="target">≥ 60 k€/trim.</td><td><span className="caveat">supuesto</span></td></tr>
        <tr><td>Mes 9</td><td>Repo ABP · ⭐ GitHub</td><td className="target">≥ 250 ⭐</td><td><span className="caveat">supuesto</span></td></tr>
        <tr><td>Mes 12</td><td>Latencia voz local P95</td><td className="target">≤ 800 ms</td><td><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--success)"}}>medible</span></td></tr>
      </tbody>
    </table>
  </section>
);

// — 9. Tracción ————————————————————————————————————————
const Traccion = () => (
  <section id="traccion" className="block" data-screen-label="09 Tracción">
    <div className="sect-head">
      <span className="kicker"><span className="num">/09</span> Tracción y métricas tempranas</span>
      <div>
        <h2>Tracción en <em>construcción</em>.</h2>
        <p>F0 arranca 4-may-2026. No inventamos cifras, no fabricamos quotes.</p>
      </div>
    </div>

    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16}}>
      {[
        { l: "Waitlist", v: "—", n: "Form privado activo desde 30-abr-2026." },
        { l: "Entrevistas instaladores", v: "0/12", n: "Plan: 12 entrevistas en F0–F1.", warn: true },
        { l: "Repo atlaps/abp · ⭐", v: "—", n: "Repo público al cierre de F1 (29-may)." },
      ].map((m,i)=> (
        <div key={i} className="paper-card">
          <span className="corner">MÉTRICA · 0{i+1}</span>
          <div style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-soft)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:12}}>{m.l}</div>
          <div style={{fontFamily:"var(--font-display)",fontSize:49,fontWeight:500,letterSpacing:"-0.02em",lineHeight:1}}>{m.v}</div>
          <div style={{fontSize:13,color:"var(--fg-soft)",marginTop:12}}>{m.n}</div>
          {m.warn && <span className="caveat" style={{marginTop:12, alignSelf:"flex-start"}}>aspiracional</span>}
        </div>
      ))}
    </div>

    <p className="note" style={{marginTop:24}}>Cuando exista tracción real, sustituiremos los placeholders por cifras verificables y testimonios firmados. Hasta entonces, esta sección no inflará nada.</p>
  </section>
);

// — 10. Roadmap —————————————————————————————————————————
const ROADMAP = [
  { k:"F0",  ttl:"Bootstrap",         dt:"4-7 may", done:true,  tip:"Repo, infra Hetzner, brand v0." },
  { k:"F1",  ttl:"Slice 1 · Free",    dt:"8-29 may", warn:true, tip:"Planificador + atlas básico. Free GA." },
  { k:"F2",  ttl:"Slice 2 · Solo",    dt:"30 may – 20 jun",   tip:"Voz local thin · Stripe · Marketplace v0." },
  { k:"F3",  ttl:"Slice 3 · Studio",  dt:"21 jun – 19 jul",   tip:"Multi-vivienda · self-host UE · API." },
  { k:"F4",  ttl:"GA 1.0",            dt:"2-ago-2026",        tip:"v1.0 estable. Voz F4-thin. ABP alpha." },
  { k:"M5–9", ttl:"Marketplace · B",  dt:"sep–ene 2027", future:true, tip:"Bloque B: 2.ª mano + integradores." },
  { k:"M10–13", ttl:"Monitor · LATAM",dt:"feb–may 2027", future:true, tip:"GA Monitor + entrada México · Argentina." },
  { k:"M14–18", ttl:"Matter 1.5 · LLM",dt:"jun–oct 2027",future:true, tip:"Matter 1.5 + LLM propio fine-tuned." },
];
const Roadmap = () => (
  <section id="roadmap" className="block" data-screen-label="10 Roadmap">
    <div className="sect-head">
      <span className="kicker"><span className="num">/10</span> Roadmap 18 meses</span>
      <div>
        <h2>De bootstrap a Matter 1.5, en <em>fases verificables</em>.</h2>
        <p>Cada hito tiene fecha y entregable. Pasa el cursor sobre un nodo para ver el detalle.</p>
      </div>
    </div>

    <div className="roadmap-wrap">
      <div className="roadmap">
        {ROADMAP.map((m,i)=> (
          <div key={i} className={`milestone ${m.done?"done":""} ${m.warn?"warn":""} ${m.future?"future":""}`}>
            <div className="label-top">
              <span className="ttl">{m.k}</span>
              <span className="dt">{m.dt}</span>
            </div>
            <div className="node" />
            <div className="label-bot" style={{color:"var(--fg)"}}>{m.ttl}</div>
            <div className="tip">{m.tip}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

window.SociosBlocksB = { Privacidad, Sinergias, Negocio, Traccion, Roadmap };
