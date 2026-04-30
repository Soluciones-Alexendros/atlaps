/* global React, IcCheck, IcX, IcAlert, IcInfo, IcChevDown, IcSearch, IcPlusCircle, IcRefreshCw, IcFileDown */

// ===== UI PRIMITIVES =====

const Button = ({ variant = "primary", size = "md", loading, disabled, children, leadingIcon: Lead, trailingIcon: Trail, ...rest }) => {
  const sizes = {
    sm: { fontSize: 13, padding: "6px 12px", height: 32, gap: 6, iconSize: 14 },
    md: { fontSize: 14, padding: "8px 16px", height: 40, gap: 8, iconSize: 16 },
    lg: { fontSize: 15, padding: "10px 20px", height: 48, gap: 10, iconSize: 18 },
  }[size];

  const variants = {
    primary: {
      background: "var(--blueprint-deep)", color: "var(--paper-bone)",
      border: "1px solid var(--blueprint-deep)",
    },
    secondary: {
      background: "transparent", color: "var(--fg)",
      border: "1px solid var(--line)",
    },
    ghost: {
      background: "transparent", color: "var(--fg)",
      border: "1px solid transparent",
    },
    link: {
      background: "transparent", color: "var(--blueprint-soft)",
      border: "none", textDecoration: "underline", textUnderlineOffset: 4,
      padding: 0, height: "auto",
    },
    destructive: {
      background: "var(--danger)", color: "var(--paper-bone)",
      border: "1px solid var(--danger)",
    },
    accent: {
      background: "var(--amber-signal)", color: "var(--paper-bone)",
      border: "1px solid var(--amber-signal)",
    },
  }[variant];

  return (
    <button
      disabled={disabled || loading}
      {...rest}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: sizes.gap,
        fontFamily: "var(--font-body)", fontWeight: 500,
        fontSize: sizes.fontSize,
        padding: variant === "link" ? 0 : sizes.padding,
        height: variant === "link" ? "auto" : sizes.height,
        borderRadius: 4,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "all 120ms var(--ease)",
        ...variants,
        ...rest.style,
      }}
      onMouseEnter={(e) => {
        if (disabled || loading) return;
        if (variant === "primary") e.currentTarget.style.background = "var(--blueprint-mid)";
        if (variant === "secondary") e.currentTarget.style.background = "var(--bg-elev)";
        if (variant === "ghost") e.currentTarget.style.background = "var(--grid)";
        if (variant === "destructive") e.currentTarget.style.opacity = "0.9";
        if (variant === "accent") e.currentTarget.style.background = "var(--amber-glow)";
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "var(--blueprint-deep)";
        if (variant === "secondary") e.currentTarget.style.background = "transparent";
        if (variant === "ghost") e.currentTarget.style.background = "transparent";
        if (variant === "destructive") e.currentTarget.style.opacity = "1";
        if (variant === "accent") e.currentTarget.style.background = "var(--amber-signal)";
      }}
    >
      {loading ? <span className="spinner" /> : Lead && <Lead size={sizes.iconSize} />}
      {children}
      {Trail && !loading && <Trail size={sizes.iconSize} />}
    </button>
  );
};

const Input = ({ label, helper, error, leadingIcon: Lead, ...rest }) => {
  const id = React.useId();
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" }}>
      {label && <span style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>{label}</span>}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {Lead && <span style={{ position: "absolute", left: 12, color: "var(--fg-soft)", display: "flex" }}><Lead size={16} /></span>}
        <input
          id={id}
          {...rest}
          style={{
            width: "100%",
            background: "var(--bg-elev)",
            color: "var(--fg)",
            border: `1px solid ${error ? "var(--danger)" : "var(--line-soft)"}`,
            borderRadius: 4, height: 40,
            padding: Lead ? "0 12px 0 36px" : "0 12px",
            fontFamily: "var(--font-body)", fontSize: 14,
            outline: "none",
            transition: "border-color 120ms var(--ease), box-shadow 120ms var(--ease)",
            ...rest.style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--blueprint-mid)";
            e.currentTarget.style.boxShadow = `0 0 0 2px ${error ? "rgba(178,58,72,0.18)" : "rgba(199,125,44,0.30)"}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--line-soft)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      {error ? (
        <span style={{ fontSize: 12, color: "var(--danger)" }}>{error}</span>
      ) : helper ? (
        <span style={{ fontSize: 12, color: "var(--fg-soft)" }}>{helper}</span>
      ) : null}
    </label>
  );
};

const Textarea = ({ label, helper, ...rest }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" }}>
    {label && <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>}
    <textarea
      rows={4}
      {...rest}
      style={{
        background: "var(--bg-elev)", color: "var(--fg)",
        border: "1px solid var(--line-soft)", borderRadius: 4,
        padding: 12, fontFamily: "var(--font-body)", fontSize: 14,
        resize: "vertical", outline: "none",
        transition: "border-color 120ms var(--ease)",
      }}
      onFocus={(e) => e.currentTarget.style.borderColor = "var(--blueprint-mid)"}
      onBlur={(e) => e.currentTarget.style.borderColor = "var(--line-soft)"}
    />
    {helper && <span style={{ fontSize: 12, color: "var(--fg-soft)" }}>{helper}</span>}
  </label>
);

const Select = ({ label, options, value, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const current = options.find((o) => o.value === value) || options[0];
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative", minWidth: 200 }}>
      {label && <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          background: "var(--bg-elev)", color: "var(--fg)",
          border: "1px solid var(--line-soft)", borderRadius: 4,
          height: 40, padding: "0 12px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          fontFamily: "var(--font-body)", fontSize: 14, cursor: "pointer", textAlign: "left",
        }}
      >
        <span>{current.label}</span>
        <IcChevDown size={16} />
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          marginTop: 4, background: "var(--bg-elev)",
          border: "1px solid var(--line-soft)", borderRadius: 4,
          boxShadow: "0 0 0 1px var(--paper-grid), 0 4px 0 0 rgba(30,77,122,0.08)",
          zIndex: 1300, overflow: "hidden",
        }}>
          {options.map((o) => (
            <button
              key={o.value}
              onClick={() => { onChange?.(o.value); setOpen(false); }}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: o.value === value ? "var(--grid)" : "transparent",
                border: "none", padding: "8px 12px",
                fontFamily: "var(--font-body)", fontSize: 14, cursor: "pointer",
                color: "var(--fg)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--grid)"}
              onMouseLeave={(e) => e.currentTarget.style.background = o.value === value ? "var(--grid)" : "transparent"}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Checkbox = ({ checked, onChange, label }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14 }}>
    <span style={{
      width: 18, height: 18, borderRadius: 2,
      border: `1.5px solid ${checked ? "var(--blueprint-mid)" : "var(--line)"}`,
      background: checked ? "var(--blueprint-mid)" : "transparent",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      transition: "all 120ms var(--ease)",
    }}>
      {checked && <IcCheck size={12} style={{ stroke: "var(--paper-bone)", strokeWidth: 2.5 }} />}
    </span>
    <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} style={{ display: "none" }} />
    {label && <span>{label}</span>}
  </label>
);

const Radio = ({ checked, onChange, label, name }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14 }}>
    <span style={{
      width: 18, height: 18, borderRadius: "50%",
      border: `1.5px solid ${checked ? "var(--blueprint-mid)" : "var(--line)"}`,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      transition: "all 120ms var(--ease)",
    }}>
      {checked && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blueprint-mid)" }} />}
    </span>
    <input type="radio" name={name} checked={checked} onChange={(e) => onChange?.(e.target.checked)} style={{ display: "none" }} />
    {label && <span>{label}</span>}
  </label>
);

const Switch = ({ checked, onChange, label }) => (
  <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14 }}>
    <span style={{
      width: 36, height: 20, borderRadius: 9999,
      background: checked ? "var(--blueprint-mid)" : "var(--line-soft)",
      position: "relative", transition: "background 240ms var(--ease)",
      border: "1px solid var(--line-soft)",
    }}>
      <span style={{
        position: "absolute", top: 1, left: checked ? 17 : 1,
        width: 16, height: 16, borderRadius: "50%",
        background: "var(--paper-bone)",
        transition: "left 240ms var(--ease)",
        boxShadow: "0 1px 0 rgba(0,0,0,0.1)",
      }} />
    </span>
    <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} style={{ display: "none" }} />
    {label && <span>{label}</span>}
  </label>
);

const Badge = ({ variant = "neutral", dot, children }) => {
  const v = {
    neutral: { bg: "var(--grid)", fg: "var(--fg)", dot: "var(--ink-pencil)" },
    success: { bg: "rgba(47, 143, 92, 0.12)", fg: "var(--success)", dot: "var(--success)" },
    warning: { bg: "rgba(199, 125, 44, 0.14)", fg: "var(--warning)", dot: "var(--warning)" },
    danger:  { bg: "rgba(178, 58, 72, 0.12)", fg: "var(--danger)",  dot: "var(--danger)" },
    info:    { bg: "rgba(58, 123, 184, 0.14)", fg: "var(--info)",    dot: "var(--info)" },
    default: { bg: "var(--blueprint-deep)", fg: "var(--paper-bone)", dot: "var(--amber-glow)" },
  }[variant];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: v.bg, color: v.fg,
      fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
      padding: "3px 8px", borderRadius: 9999,
      border: variant === "neutral" ? "1px solid var(--line-soft)" : "none",
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: v.dot }} />}
      {children}
    </span>
  );
};

const Card = ({ title, description, footer, gridded, children }) => (
  <div className={`paper-card ${gridded ? "gridded" : ""}`} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
    {title && <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</div>}
    {description && <div style={{ fontSize: 14, color: "var(--fg-soft)" }}>{description}</div>}
    {children}
    {footer && <div style={{ borderTop: "1px solid var(--line-soft)", paddingTop: 12, marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-soft)" }}>{footer}</div>}
  </div>
);

const Tabs = ({ tabs, value, onChange }) => {
  const idx = tabs.findIndex((t) => t.value === value);
  return (
    <div>
      <div style={{ display: "flex", position: "relative", borderBottom: "1px solid var(--line-soft)" }}>
        {tabs.map((t, i) => (
          <button
            key={t.value}
            onClick={() => onChange?.(t.value)}
            style={{
              background: "transparent", border: "none",
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
              padding: "10px 16px", cursor: "pointer",
              color: value === t.value ? "var(--fg)" : "var(--fg-soft)",
              transition: "color 240ms var(--ease)",
              flex: "0 0 auto",
            }}
          >{t.label}</button>
        ))}
        <span style={{
          position: "absolute", bottom: -1,
          left: `${(100 / tabs.length) * idx}%`,
          width: `${100 / tabs.length}%`,
          height: 2, background: "var(--amber-signal)",
          transition: "left 480ms cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>
    </div>
  );
};

const Tooltip = ({ content, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      <span style={{
        position: "absolute", bottom: "calc(100% + 8px)", left: "50%",
        transform: `translateX(-50%) translateY(${open ? 0 : 4}px)`,
        background: "var(--ink-graphite)", color: "var(--paper-bone)",
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.04em",
        padding: "4px 8px", borderRadius: 2,
        opacity: open ? 1 : 0, pointerEvents: "none", whiteSpace: "nowrap",
        transition: "opacity 120ms var(--ease), transform 120ms var(--ease)",
        zIndex: 1400,
      }}>
        {content}
        <span style={{ position: "absolute", top: "100%", left: "50%", marginLeft: -4, width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "4px solid var(--ink-graphite)" }} />
      </span>
    </span>
  );
};

const Skeleton = ({ width = "100%", height = 12 }) => (
  <span style={{
    display: "block", width, height, borderRadius: 2,
    background: "linear-gradient(90deg, var(--grid) 0%, var(--line-soft) 50%, var(--grid) 100%)",
    backgroundSize: "200% 100%",
    animation: "skeletonSweep 1400ms cubic-bezier(0.4,0,0.2,1) infinite",
  }} />
);

const Toast = ({ variant = "info", title, body, onClose }) => {
  const v = {
    success: { Ic: IcCheck,  c: "var(--success)" },
    warning: { Ic: IcAlert,  c: "var(--warning)" },
    danger:  { Ic: IcX,      c: "var(--danger)" },
    info:    { Ic: IcInfo,   c: "var(--info)" },
  }[variant];
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      background: "var(--bg-elev)", border: "1px solid var(--line-soft)",
      borderLeft: `3px solid ${v.c}`,
      borderRadius: 4, padding: 12,
      boxShadow: "0 0 0 1px var(--paper-grid), 0 2px 0 0 rgba(30,77,122,0.12)",
      minWidth: 280,
    }}>
      <span style={{ color: v.c, marginTop: 1 }}><v.Ic size={16} /></span>
      <div style={{ flex: 1, fontFamily: "var(--font-body)" }}>
        {title && <div style={{ fontWeight: 600, fontSize: 13 }}>{title}</div>}
        {body && <div style={{ fontSize: 13, color: "var(--fg-soft)", marginTop: 2 }}>{body}</div>}
      </div>
      <button onClick={onClose} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--fg-soft)", padding: 0 }}><IcX size={14} /></button>
    </div>
  );
};

// ============== COMPONENTS SECTION ==============
const SectionComponents = () => {
  const [text, setText] = React.useState("");
  const [textareaVal, setTextareaVal] = React.useState("Termostato KNX en salón. Configurar curva ECO 22→18 °C entre 23:00 y 06:00.");
  const [selectVal, setSelectVal] = React.useState("knx");
  const [check, setCheck] = React.useState(true);
  const [radio, setRadio] = React.useState("matter");
  const [sw, setSw] = React.useState(true);
  const [tab, setTab] = React.useState("planta-baja");
  const [modalOpen, setModalOpen] = React.useState(false);

  const Demo = ({ title, kicker, code, children }) => (
    <div className="paper-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <div>
          <div className="kicker">{kicker}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, marginTop: 4 }}>{title}</div>
        </div>
        {code && <code style={{ fontSize: 11, color: "var(--fg-soft)" }}>{code}</code>}
      </div>
      <div style={{ borderTop: "1px solid var(--line-soft)", paddingTop: 16 }}>{children}</div>
    </div>
  );

  return (
    <section id="components" className="ds-section">
      <div className="section-head">
        <div className="label">07 — Components</div>
        <div>
          <h2>Doce primitivos coherentes.</h2>
          <p>shadcn/ui + Radix tematizado con tokens Atlaps. Mismas radii (4 px), mismas border-widths (1 / 1.5 px), mismos focos (anillo ámbar 2 px).</p>
        </div>
      </div>

      <style>{`
        @keyframes skeletonSweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>

        {/* 1. Buttons */}
        <Demo kicker="01 / 12" title="Button" code="<Button />" >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button variant="primary">Guardar plano</Button>
              <Button variant="secondary">Cancelar</Button>
              <Button variant="ghost">Más opciones</Button>
              <Button variant="link">Ver detalle</Button>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button variant="destructive">Eliminar</Button>
              <Button variant="accent" leadingIcon={IcPlusCircle}>Añadir dispositivo</Button>
              <Button variant="primary" loading>Sincronizando</Button>
              <Button variant="primary" disabled>Desactivado</Button>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Button size="sm" variant="primary">sm</Button>
              <Button size="md" variant="primary">md</Button>
              <Button size="lg" variant="primary">lg</Button>
            </div>
          </div>
        </Demo>

        {/* 2. Input */}
        <Demo kicker="02 / 12" title="Input · Label · helper" code="<Input />">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Input label="Nombre del proyecto" placeholder="Casa Aldebarán" helper="Único por organización." value={text} onChange={(e) => setText(e.target.value)} />
            <Input label="Buscar dispositivo" placeholder="Termostato, luminaria…" leadingIcon={IcSearch} />
            <Input label="Dirección KNX" placeholder="1.1.255" error="Formato inválido. Usa N.N.N." defaultValue="1.1" />
          </div>
        </Demo>

        {/* 3. Textarea */}
        <Demo kicker="03 / 12" title="Textarea" code="<Textarea />">
          <Textarea label="Notas de instalación" helper="Visible para el instalador en el BOM." value={textareaVal} onChange={(e) => setTextareaVal(e.target.value)} />
        </Demo>

        {/* 4. Select */}
        <Demo kicker="04 / 12" title="Select (Radix)" code="<Select />">
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 320 }}>
            <Select label="Protocolo" value={selectVal} onChange={setSelectVal} options={[
              { value: "knx", label: "KNX TP" },
              { value: "matter", label: "Matter / Thread" },
              { value: "zigbee", label: "Zigbee 3.0" },
              { value: "modbus", label: "Modbus RTU" },
              { value: "dali", label: "DALI-2" },
            ]} />
          </div>
        </Demo>

        {/* 5. Checkbox / Radio / Switch */}
        <Demo kicker="05 / 12" title="Checkbox · Radio · Switch" code="<Checkbox /> <Radio /> <Switch />">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <Checkbox checked={check} onChange={setCheck} label="Activar escena de mañana" />
              <Checkbox checked={!check} onChange={(v) => setCheck(!v)} label="Notificar al móvil" />
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <Radio name="proto" checked={radio === "matter"} onChange={() => setRadio("matter")} label="Matter" />
              <Radio name="proto" checked={radio === "knx"} onChange={() => setRadio("knx")} label="KNX" />
              <Radio name="proto" checked={radio === "zigbee"} onChange={() => setRadio("zigbee")} label="Zigbee" />
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <Switch checked={sw} onChange={setSw} label="Modo nocturno automático" />
              <Switch checked={!sw} onChange={(v) => setSw(!v)} label="Telemetría anónima" />
            </div>
          </div>
        </Demo>

        {/* 6. Card */}
        <Demo kicker="06 / 12" title="Card" code="<Card />">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Card title="Termostato KNX" description="1.1.42 · Salón · ECO" footer="Última lectura · 21,4 °C">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 24, color: "var(--fg)" }}>21.4°<span style={{ fontSize: 12, color: "var(--fg-soft)" }}>C</span></div>
            </Card>
            <Card title="Plano · planta baja" description="Atlas v3 · 96 m²" gridded footer="48 dispositivos · 3 escenas">
              <Badge variant="success" dot>Sincronizado</Badge>
            </Card>
          </div>
        </Demo>

        {/* 7. Badge */}
        <Demo kicker="07 / 12" title="Badge" code="<Badge />">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Badge variant="default">Atlaps Pro</Badge>
            <Badge variant="success" dot>Activo</Badge>
            <Badge variant="warning" dot>Atención</Badge>
            <Badge variant="danger" dot>Caído</Badge>
            <Badge variant="info" dot>KNX</Badge>
            <Badge variant="neutral">Borrador</Badge>
          </div>
        </Demo>

        {/* 8. Tabs */}
        <Demo kicker="08 / 12" title="Tabs · trazo de mapa" code="<Tabs />">
          <Tabs value={tab} onChange={setTab} tabs={[
            { value: "planta-baja", label: "Planta baja" },
            { value: "planta-1", label: "Planta 1ª" },
            { value: "exterior", label: "Exterior" },
          ]} />
          <div style={{ paddingTop: 16, fontSize: 14, color: "var(--fg-soft)" }}>
            {tab === "planta-baja" && "48 dispositivos · 3 escenas configuradas."}
            {tab === "planta-1" && "32 dispositivos · 2 escenas configuradas."}
            {tab === "exterior" && "12 dispositivos · 1 escena configurada."}
          </div>
        </Demo>

        {/* 9. Dialog/Modal */}
        <Demo kicker="09 / 12" title="Dialog · modal shell" code="<Dialog />">
          <Button variant="secondary" onClick={() => setModalOpen(true)}>Abrir diálogo</Button>
          {modalOpen && (
            <div style={{
              position: "fixed", inset: 0, background: "rgba(15, 42, 74, 0.55)",
              backdropFilter: "blur(2px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1200, padding: 24,
            }} onClick={() => setModalOpen(false)}>
              <div onClick={(e) => e.stopPropagation()} style={{
                background: "var(--bg-elev)", color: "var(--fg)",
                border: "1px solid var(--line-soft)", borderRadius: 4,
                width: "min(480px, 100%)", padding: 32,
                boxShadow: "0 0 0 1px var(--paper-grid), 0 8px 0 0 rgba(30,77,122,0.18)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 8 }}>¿Sincronizar atlas?</div>
                <p style={{ color: "var(--fg-soft)", fontSize: 14, margin: "0 0 24px" }}>Se enviarán las modificaciones de las últimas 2 h al gateway. Esta acción no es reversible una vez confirmada.</p>
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancelar</Button>
                  <Button variant="primary" leadingIcon={IcRefreshCw} onClick={() => setModalOpen(false)}>Sincronizar</Button>
                </div>
              </div>
            </div>
          )}
        </Demo>

        {/* 10. Toast */}
        <Demo kicker="10 / 12" title="Toast · 4 variantes" code="<Toast />">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Toast variant="success" title="Atlas sincronizado" body="48 dispositivos actualizados en 1,2 s." />
            <Toast variant="warning" title="Termostato sin respuesta" body="1.1.42 no responde desde hace 4 min." />
            <Toast variant="danger"  title="Conflicto de direcciones" body="Dos dispositivos en 1.1.42." />
            <Toast variant="info"    title="Nueva versión disponible" body="Atlaps 3.4 · changelog en notas." />
          </div>
        </Demo>

        {/* 11. Tooltip */}
        <Demo kicker="11 / 12" title="Tooltip" code="<Tooltip />">
          <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "16px 0" }}>
            <Tooltip content="Sincronizar con gateway"><Button variant="ghost" leadingIcon={IcRefreshCw}>Sincronizar</Button></Tooltip>
            <Tooltip content="Exportar BOM en PDF"><Button variant="ghost" leadingIcon={IcFileDown}>Exportar</Button></Tooltip>
            <Tooltip content="Añadir nuevo dispositivo al plano"><Button variant="ghost" leadingIcon={IcPlusCircle}>Añadir</Button></Tooltip>
          </div>
        </Demo>

        {/* 12. Skeleton */}
        <Demo kicker="12 / 12" title="Skeleton · isolíneas" code="<Skeleton />">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Skeleton width="60%" height={20} />
            <Skeleton width="100%" height={12} />
            <Skeleton width="92%" height={12} />
            <Skeleton width="78%" height={12} />
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <Skeleton width={80} height={24} />
              <Skeleton width={120} height={24} />
            </div>
          </div>
        </Demo>

      </div>
    </section>
  );
};

Object.assign(window, {
  Button, Input, Textarea, Select, Checkbox, Radio, Switch,
  Badge, Card, Tabs, Tooltip, Skeleton, Toast,
  SectionComponents,
});
