/* global React, ReactDOM, SociosBlocksA, SociosBlocksB, SociosBlocksC */
// App principal — composición de los 15 bloques

const { useState, useEffect } = React;
const { Header, Hero, Problema, Glance, Diferenciacion } = SociosBlocksA;
const { Privacidad, Sinergias, Negocio, Traccion, Roadmap } = SociosBlocksB;
const { Equipo, Financiacion, Colaborar, Contacto, Footer } = SociosBlocksC;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showCaveats": true,
  "compactRoadmap": false,
  "heroAccent": "amber"
}/*EDITMODE-END*/;

function App() {
  const [theme, setTheme] = useState("light");
  const [tweaks, setTweaksState] = useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Tweak panel protocol
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaksState(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <div className="confband"><span className="dot"/>Documento de trabajo · confidencial · v0.1 · 30-abr-2026</div>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main id="main">
        <Hero />
        <Problema />
        <Glance />
        <Diferenciacion />
        <Privacidad />
        <Sinergias />
        <Negocio />
        <Traccion />
        <Roadmap />
        <Equipo />
        <Financiacion />
        <Colaborar />
        <Contacto />
      </main>
      <Footer />

      {tweaksOpen && (
        <div style={{
          position: "fixed", bottom: 24, right: 24, width: 280,
          background: "var(--bg-elev)", border: "1px solid var(--line-soft)",
          borderRadius: 4, padding: 16, zIndex: 1500,
          boxShadow: "0 0 0 1px var(--grid), 0 8px 0 0 rgba(30,77,122,.18)",
          fontFamily: "var(--font-body)",
        }}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <strong style={{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500}}>Tweaks</strong>
            <button onClick={()=>{setTweaksOpen(false); window.parent.postMessage({type:"__edit_mode_dismissed"}, "*");}} style={{background:"transparent",border:"none",cursor:"pointer",color:"var(--fg-soft)",fontSize:18}}>×</button>
          </div>
          <label style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:13,padding:"8px 0",borderTop:"1px solid var(--line-soft)"}}>
            <span>Modo</span>
            <button className="btn btn-secondary btn-sm" onClick={()=>setTheme(theme==="light"?"dark":"light")}>{theme==="light"?"Claro":"Oscuro"}</button>
          </label>
          <label style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:13,padding:"8px 0",borderTop:"1px solid var(--line-soft)"}}>
            <span>Mostrar caveats ⚠</span>
            <input type="checkbox" checked={tweaks.showCaveats} onChange={e=>setTweak("showCaveats", e.target.checked)} />
          </label>
          <p style={{fontSize:11,color:"var(--fg-soft)",marginTop:12,fontFamily:"var(--font-mono)",lineHeight:1.5}}>Atlaps · landing socios v0.1<br/>2026-04-30</p>
        </div>
      )}

      <style>{`
        ${tweaks.showCaveats ? "" : ".caveat { display: none !important; }"}
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
