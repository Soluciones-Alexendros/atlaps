/* global React */
// Bloques 11-15: Equipo · Financiación · Colaborar · Contacto · Footer

// — 11. Equipo y vehículo ————————————————————————————————————
const Equipo = () => (
  <section id="equipo" className="block" data-screen-label="11 Equipo">
    <div className="sect-head">
      <span className="kicker"><span className="num">/11</span> Equipo y vehículo</span>
      <div>
        <h2>Estructura ligera por elección, capacidad real con <em>Claude Code</em>.</h2>
        <p>Solo founder a 30-abr-2026. Subcontrataciones puntuales y plan de incorporaciones a 24 meses sobre tracción real.</p>
      </div>
    </div>

    <div className="team">
      <div className="photo">
        <svg className="photo-topo" viewBox="0 0 200 200" aria-hidden="true">
          <g fill="none" stroke="var(--blueprint-soft)" strokeWidth="0.6" opacity="0.45">
            <ellipse cx="100" cy="100" rx="92" ry="36"/>
            <ellipse cx="100" cy="100" rx="74" ry="30"/>
            <ellipse cx="100" cy="100" rx="56" ry="24"/>
            <ellipse cx="100" cy="100" rx="38" ry="18"/>
          </g>
        </svg>
        <picture>
          <source srcSet="assets/founder-ada.webp" type="image/webp" />
          <img
            className="photo-img"
            src="assets/founder-ada.jpg"
            alt="Alejandro Domingo Agustí, fundador de Iniciativa Alexendros, S.L."
            width="800"
            height="800"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <span className="photo-caption" aria-hidden="true">ADA · València · 2026</span>
      </div>
      <div>
        <h3>Alejandro Domingo Agustí</h3>
        <div className="role">PI · Solo founder · València</div>
        <p>Arquitecto de software con 12 años en SaaS B2B y sistemas distribuidos. Experiencia previa en stack TypeScript, infra UE soberana, integraciones de hardware (KNX, Modbus, BACnet).</p>
        <p>Atlaps nace de la frustración de instalar domótica profesional en casa: ETS5 + cuatro apps + nube americana. La tesis es que un solista con tooling moderno (Claude Code, Trigger.dev, Supabase) puede entregar un equivalente a un equipo de 4 a velocidad equivalente.</p>
        <div className="roles">
          <span>Arquitectura</span>
          <span>Fullstack</span>
          <span>DevOps</span>
          <span>Comunicación</span>
        </div>
        <div style={{padding:16, background:"var(--bg-elev)", border:"1px solid var(--line-soft)", borderRadius:4, fontSize:13, fontFamily:"var(--font-mono)", lineHeight:1.7, marginTop:16}}>
          <strong>Vehículo:</strong> Iniciativa Alexendros, S.L.<br/>
          <strong>Forma:</strong> pluripersonal · Comunitat Valenciana<br/>
          <strong>CNAE:</strong> 6201 (programación) + 7022 (consultoría)<br/>
          <strong>Subcontrataciones:</strong> diseño industrial · auditoría legal RGPD · firmware ABP (puntual)<br/>
          <strong>Plan 24 m:</strong> +1 fullstack (mes 6) · +1 ventas integrador (mes 12) · sobre MRR ≥ 3 k€
        </div>
        <div className="closing">"Estructura ligera por elección; capacidad real con Claude Code factor ~3× equivalente."</div>
      </div>
    </div>
  </section>
);

// — 12. Financiación ————————————————————————————————————
const Financiacion = () => (
  <section id="financiacion" className="block" data-screen-label="12 Financiación">
    <div className="sect-head">
      <span className="kicker"><span className="num">/12</span> Financiación en marcha</span>
      <div>
        <h2>Subvención y deuda blanda complementadas con <em>conocimiento</em>.</h2>
        <p>Programas activos a 30-abr-2026. Riesgo activo declarado: IVACE INNOVA-CV cierra el 5-may.</p>
      </div>
    </div>

    <table className="fund-tbl">
      <caption className="sr-only">Programas de financiación pública</caption>
      <thead><tr><th scope="col" style={{width:200}}>Programa</th><th scope="col">Importe / cobertura</th><th scope="col" style={{width:160}}>Plazo</th><th scope="col" style={{width:140}}>Estado</th></tr></thead>
      <tbody>
        <tr><td><strong>IVACE INNOVA-CV TEIC</strong><br/><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-soft)"}}>Subvención CV</span></td><td className="amt">50–70 % gastos elegibles</td><td>5-may-2026</td><td><span className="status-dot red">Riesgo activo</span></td></tr>
        <tr><td><strong>ENISA Jóvenes Emprendedores</strong><br/><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-soft)"}}>Préstamo participativo</span></td><td className="amt">25–75 k€</td><td>Convocatoria abierta</td><td><span className="status-dot amber">En preparación</span></td></tr>
        <tr><td><strong>CDTI Neotec</strong><br/><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-soft)"}}>Ayuda a startup tecnológica</span></td><td className="amt">Hasta 325 k€</td><td>Convocatoria anual</td><td><span className="status-dot amber">Prevista Q3</span></td></tr>
        <tr><td><strong>AVI · Agencia Valenciana</strong><br/><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-soft)"}}>Innovación · varias líneas</span></td><td className="amt">Variable</td><td>Varias líneas activas</td><td><span className="status-dot amber">Análisis</span></td></tr>
      </tbody>
    </table>
    <p className="note">Buscamos socios que complementen subvención y deuda blanda con conocimiento de mercado y red de contactos.</p>
  </section>
);

// — 13. Cómo colaborar ————————————————————————————————————
const COLLAB = [
  { n:"01", t:"Inversión semilla",       p:"15–50 k€ por socio. Ronda objetivo 200–300 k€. Pacto VC EU estándar (BVCA / SeedSummit).", perks:["Equity 1–4 % por socio","Reporting trimestral","Información trimestral cuantitativa"], cta:"Solicitar pitch deck", via:"inversion" },
  { n:"02", t:"Advisor técnico",         p:"Equity 0,25–1,0 % × 6–12 meses. Áreas: ABP, Matter, voz local, canal integrador CEDIA.",  perks:["Vesting con cliff 3 meses","Compromiso 2 h/sem","Voz en roadmap"], cta:"Hablar de advisor", via:"advisor" },
  { n:"03", t:"Partner integrador",      p:"Early access Studio + comisión sobre proyectos cerrados + voz directa en roadmap.",       perks:["Studio · 0 € F4 → F6","Comisión declarada","Acceso a backlog"], cta:"Pedir acceso anticipado", via:"integrador" },
  { n:"04", t:"Distribución hardware",   p:"Catálogo Mercado integrado vía API + comisión declarada visible al usuario final.",       perks:["Integración SKU live","Comisión 5–12 %","Co-marketing CEDIA"], cta:"Convenio distribución", via:"distribucion" },
  { n:"05", t:"Cliente piloto",          p:"Instalación subvencionada por Atlaps a cambio de feedback estructurado y testimonio.",     perks:["Hardware al coste","Setup gratuito","Testimonio firmado"], cta:"Postularme piloto", via:"piloto" },
];
const Colaborar = () => (
  <section id="colaborar" className="block" data-screen-label="13 Colaborar">
    <div className="sect-head">
      <span className="kicker"><span className="num">/13</span> Cómo colaborar</span>
      <div>
        <h2>Cinco vías, cinco <em>contratos</em> distintos.</h2>
        <p>Cada vía tiene un perfil distinto, un ticket distinto y un compromiso distinto. Elige la que encaje y conversemos.</p>
      </div>
    </div>

    <div className="collab">
      {COLLAB.map(c => (
        <div key={c.n} className="collab-card" data-num={`/${c.n}`}>
          <h3>{c.t}</h3>
          <p>{c.p}</p>
          <div className="perks">
            {c.perks.map((k,i)=> <span key={i}>· {k}</span>)}
          </div>
          <a href={`#contacto?via=${c.via}`} data-via={c.via} className="btn btn-secondary btn-sm" style={{justifyContent:"center"}}>{c.cta} →</a>
        </div>
      ))}
    </div>
  </section>
);

// — 14. Formulario contacto ————————————————————————————————
const Contacto = () => {
  const [data, setData] = React.useState({ name:"", email:"", company:"", via:"inversion", msg:"", rgpd:false, website:"" });
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");

  // Pre-fill `via` desde hash de la URL: #contacto?via=advisor → setData.via = "advisor"
  React.useEffect(() => {
    const VALID = ["inversion","advisor","integrador","distribucion","piloto"];
    const readVia = () => {
      const h = window.location.hash || "";
      const q = h.split("?")[1];
      if (!q) return;
      const v = new URLSearchParams(q).get("via");
      if (v && VALID.includes(v)) setData(d => ({ ...d, via: v }));
    };
    readVia();
    window.addEventListener("hashchange", readVia);
    return () => window.removeEventListener("hashchange", readVia);
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.rgpd) return;
    if (data.website) return; // honeypot
    setSending(true); setError("");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError(json.error || `Error ${res.status}`);
        return;
      }
      setSent(true);
    } catch (err) {
      setError("Sin conexión. Reintenta en unos segundos.");
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="contacto" className="block" data-screen-label="14 Contacto">
      <div className="sect-head">
        <span className="kicker"><span className="num">/14</span> Solicitar conversación</span>
        <div>
          <h2>Cuéntanos quién eres y por <em>qué vía</em>.</h2>
          <p>Respondemos en menos de 72 horas. NDA recíproco bajo petición. Sin cesión a terceros.</p>
        </div>
      </div>

      <div className="form-wrap">
        <div className="form-side">
          <h3>Tres garantías mínimas</h3>
          <p>Esto no es un formulario de captación. Es el inicio de una conversación profesional.</p>
          <div className="guarantees">
            <h4>Compromisos</h4>
            <ul>
              <li>Respuesta personal en ≤ 72 h</li>
              <li>NDA recíproco firmado bajo petición</li>
              <li>Cero cesión de datos a terceros</li>
              <li>Submit a Resend · sin trackers</li>
            </ul>
          </div>
        </div>

        <div className="form-card">
          {sent ? (
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <div className="submitted">
                <span style={{fontSize:18}}>✓</span>
                <span>Mensaje recibido. Respondemos en ≤ 72 h al correo facilitado.</span>
              </div>
              <p style={{margin:0,fontSize:14,color:"var(--fg-soft)"}}>En esta versión showcase, el envío es simulado. En producción se integra con <code>Resend</code> y un buzón monitorizado por el PI.</p>
              <button type="button" className="btn btn-secondary" onClick={()=>{setSent(false); setData({name:"",email:"",company:"",via:"inversion",msg:"",rgpd:false,website:""});}}>Enviar otro</button>
            </div>
          ) : (
            <form method="post" action="/api/contacto" onSubmit={submit} noValidate>
              {/* Honeypot anti-bot — visually-hidden con label asociado (WCAG 2.2 SC 4.1.2). */}
              <div aria-hidden="true" className="sr-only">
                <label htmlFor="hp-fax">No rellenar este campo</label>
                <input id="hp-fax" type="text" name="hp_fax_number" tabIndex={-1} autoComplete="off" value={data.website||""} onChange={e=>setData({...data,website:e.target.value})} />
              </div>
              <div className="form-row">
                <label htmlFor="contacto-name">Nombre completo <span aria-hidden="true" style={{color:"var(--amber-signal)"}}>*</span><input id="contacto-name" name="name" autoComplete="name" value={data.name} onChange={e=>setData({...data,name:e.target.value})} placeholder="Nombre y apellidos" required aria-required="true" /></label>
                <label htmlFor="contacto-email">Email <span aria-hidden="true" style={{color:"var(--amber-signal)"}}>*</span><input id="contacto-email" name="email" type="email" autoComplete="email" value={data.email} onChange={e=>setData({...data,email:e.target.value})} placeholder="tu@dominio.com" required aria-required="true" /></label>
              </div>
              <label htmlFor="contacto-company">Empresa o vehículo<input id="contacto-company" name="company" autoComplete="organization" value={data.company} onChange={e=>setData({...data,company:e.target.value})} placeholder="Razón social u organización" /></label>
              <label htmlFor="contacto-via">Vía de interés
                <select id="contacto-via" name="via" value={data.via} onChange={e=>setData({...data,via:e.target.value})}>
                  <option value="inversion">Inversión semilla (15–50 k€)</option>
                  <option value="advisor">Advisor técnico</option>
                  <option value="integrador">Partner integrador</option>
                  <option value="distribucion">Distribución hardware</option>
                  <option value="piloto">Cliente piloto</option>
                </select>
              </label>
              <label htmlFor="contacto-msg">Mensaje<textarea id="contacto-msg" name="msg" value={data.msg} onChange={e=>setData({...data,msg:e.target.value})} placeholder="Contexto breve. ¿Qué te ha llamado la atención de Atlaps? ¿Qué tipo de conversación buscas?" /></label>
              <label className="form-checkbox" htmlFor="contacto-rgpd">
                <input id="contacto-rgpd" name="rgpd" type="checkbox" checked={data.rgpd} onChange={e=>setData({...data,rgpd:e.target.checked})} required aria-required="true" />
                <span>He leído y acepto el tratamiento de mis datos según el <a href="/legal/privacidad">RGPD UE 2016/679</a>. Responsable: Iniciativa Alexendros, S.L. Finalidad: respuesta a esta solicitud. Conservación: 24 meses o hasta solicitud de baja.</span>
              </label>
              <p id="contacto-status" role="status" aria-live="polite" aria-atomic="true" style={{margin:0,minHeight:"1em",fontSize:14,color:"var(--fg-soft)"}}>
                {sending ? "Enviando solicitud…" : ""}
              </p>
              {error && (
                <div role="alert" aria-live="assertive" style={{padding:"10px 14px",background:"var(--danger-surface)",border:"1px solid var(--danger)",borderRadius:4,color:"var(--danger)",fontSize:14}}>
                  {error}
                </div>
              )}
              <button type="submit" className="btn btn-accent" style={{justifyContent:"center"}} disabled={sending||!data.name||!data.email||!data.rgpd}>{sending ? "Enviando…" : "Solicitar conversación →"}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// — 15. Footer (siempre blueprint-deep) ———————————————————————
const Footer = () => (
  <footer className="foot" data-screen-label="15 Footer">
    <div className="inner">
      <div className="cols">
        <div className="brand">
          <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:16}}>
            <img src="assets/logo-icon.svg" alt="" aria-hidden="true" loading="lazy" width="28" height="28" style={{filter:"invert(1) brightness(1.1)"}} />
            <span style={{fontFamily:"var(--font-display)",fontSize:22,letterSpacing:"0.06em",color:"var(--paper-bone)"}}>atlaps</span>
          </div>
          <p>Atlas SaaS de domótica multi-protocolo. Construido por Iniciativa Alexendros, S.L. desde Comunitat Valenciana.</p>
        </div>
        <div>
          <h3>Producto</h3>
          <ul><li><a href="#producto">Atlaps en una mirada</a></li><li><a href="#diferenciacion">Diferenciación</a></li><li><a href="#privacidad">Privacidad</a></li><li><a href="#roadmap">Roadmap</a></li></ul>
        </div>
        <div>
          <h3>Compañía</h3>
          <ul><li><a href="#equipo">Equipo</a></li><li><a href="#financiacion">Financiación</a></li><li><a href="#colaborar">Colaborar</a></li><li><a href="#contacto">Contacto</a></li></ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul><li><a href="/legal/aviso-legal">Aviso legal</a></li><li><a href="/legal/privacidad">Política de privacidad</a></li><li><a href="/legal/cookies">Cookies</a></li><li><a href="/legal/nda-reciproco">NDA recíproco</a></li></ul>
        </div>
      </div>
      <div className="water">
        <span>Documento confidencial · v0.1 · 30-abr-2026 · prohibida su reproducción sin autorización escrita de Iniciativa Alexendros, S.L.</span>
        <span className="lang">
          <select defaultValue="es" aria-label="Idioma" onChange={(e)=>{ if (e.target.value !== "es") { alert("Esta versión solo está disponible en castellano. EN y CA, próximamente."); e.target.value = "es"; } }}>
            <option value="es">ES — Castellano</option>
            <option value="en" disabled>EN — English (próximamente)</option>
            <option value="ca" disabled>CA — Català (próximamente)</option>
          </select>
        </span>
      </div>
    </div>
  </footer>
);

window.SociosBlocksC = { Equipo, Financiacion, Colaborar, Contacto, Footer };
