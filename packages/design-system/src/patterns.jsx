/* global React, Button, Badge, IcChevL, IcChevR, IcChevDown, IcChevUp, IcMap, IcPlusCircle */

// ===== PATTERNS =====

const Pagination = ({ page, total, onChange }) => {
  const pages = [];
  for (let i = 1; i <= total; i++) pages.push(i);
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <button onClick={() => onChange(Math.max(1, page - 1))} style={pagBtn(page === 1)}><IcChevL size={14} /></button>
      {pages.map((p) => (
        <button key={p} onClick={() => onChange(p)} style={pagBtn(false, p === page)}>{p}</button>
      ))}
      <button onClick={() => onChange(Math.min(total, page + 1))} style={pagBtn(page === total)}><IcChevR size={14} /></button>
    </div>
  );
};
const pagBtn = (disabled, active) => ({
  height: 32, minWidth: 32, padding: "0 8px",
  background: active ? "var(--blueprint-deep)" : "transparent",
  color: active ? "var(--paper-bone)" : "var(--fg)",
  border: `1px solid ${active ? "var(--blueprint-deep)" : "var(--line-soft)"}`,
  borderRadius: 4,
  fontFamily: "var(--font-mono)", fontSize: 12,
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.4 : 1,
  display: "inline-flex", alignItems: "center", justifyContent: "center",
});

const Breadcrumb = ({ items }) => (
  <nav style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-soft)" }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span style={{ opacity: 0.5 }}>/</span>}
        <span style={{ color: i === items.length - 1 ? "var(--fg)" : "var(--fg-soft)", textDecoration: i === items.length - 1 ? "none" : "underline", textUnderlineOffset: 3 }}>{it}</span>
      </React.Fragment>
    ))}
  </nav>
);

const DataTable = () => {
  const [sort, setSort] = React.useState({ key: "name", dir: "asc" });
  const [page, setPage] = React.useState(1);

  const rows = React.useMemo(() => ([
    { id: "1.1.10", name: "Termostato KNX", room: "Salón",       status: "ok",      consumo: "0,8 W" },
    { id: "1.1.11", name: "Luminaria Matter",room: "Cocina",      status: "ok",      consumo: "9,4 W" },
    { id: "1.1.12", name: "Persiana Z-Wave", room: "Dormitorio",  status: "warning", consumo: "—" },
    { id: "1.1.13", name: "Sensor presencia",room: "Pasillo",     status: "ok",      consumo: "0,2 W" },
    { id: "1.1.14", name: "Caldera Modbus",  room: "Garaje",      status: "ok",      consumo: "12 W" },
    { id: "1.1.15", name: "Luz exterior DALI",room: "Exterior",   status: "danger",  consumo: "—" },
  ]), []);

  const sorted = [...rows].sort((a, b) => {
    const av = a[sort.key], bv = b[sort.key];
    return (av < bv ? -1 : av > bv ? 1 : 0) * (sort.dir === "asc" ? 1 : -1);
  });

  const Header = ({ k, label, align }) => (
    <th
      onClick={() => setSort({ key: k, dir: sort.key === k && sort.dir === "asc" ? "desc" : "asc" })}
      style={{
        textAlign: align || "left", padding: "10px 12px",
        fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--fg-soft)", cursor: "pointer", userSelect: "none",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
        {label}
        {sort.key === k ? (sort.dir === "asc" ? <IcChevUp size={12} /> : <IcChevDown size={12} />) : <span style={{ width: 12 }} />}
      </span>
    </th>
  );

  return (
    <div className="paper-card" style={{ padding: 0, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 14 }}>
        <thead>
          <tr>
            <Header k="id" label="Dirección" />
            <Header k="name" label="Dispositivo" />
            <Header k="room" label="Estancia" />
            <Header k="status" label="Estado" />
            <Header k="consumo" label="Consumo" align="right" />
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => (
            <tr key={r.id}
              style={{ borderBottom: "1px solid var(--line-soft)", transition: "background 120ms var(--ease)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--grid)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <td style={tdMono}>{r.id}</td>
              <td style={td}>{r.name}</td>
              <td style={td}>{r.room}</td>
              <td style={td}>
                {r.status === "ok" && <Badge variant="success" dot>OK</Badge>}
                {r.status === "warning" && <Badge variant="warning" dot>Atención</Badge>}
                {r.status === "danger" && <Badge variant="danger" dot>Caído</Badge>}
              </td>
              <td style={{ ...tdMono, textAlign: "right" }}>{r.consumo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line-soft)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-soft)", letterSpacing: "0.04em" }}>
          {sorted.length} dispositivos · página {page} de 4
        </span>
        <Pagination page={page} total={4} onChange={setPage} />
      </div>
    </div>
  );
};
const td = { padding: "12px", color: "var(--fg)" };
const tdMono = { ...td, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-soft)" };

const EmptyState = () => (
  <div className="paper-card gridded" style={{ padding: 48, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
    {/* Cartographic illustration */}
    <svg width={140} height={100} viewBox="0 0 140 100" aria-hidden="true">
      <g stroke="var(--blueprint-soft)" strokeWidth="1.25" fill="none">
        <path d="M10 80 Q 40 60 70 65 T 130 70" />
        <path d="M10 60 Q 50 40 75 45 T 130 50" />
        <path d="M20 40 Q 55 22 80 25 T 125 30" />
        <path d="M40 22 Q 65 12 80 14 T 115 18" />
      </g>
      <circle cx="78" cy="20" r="2" fill="var(--amber-signal)" />
      <path d="M78 22 L78 35" stroke="var(--amber-signal)" strokeWidth="1" strokeDasharray="2 2" />
      <text x="82" y="38" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-soft)" letterSpacing="0.08em">CIMA</text>
    </svg>
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 500, letterSpacing: "-0.01em" }}>Atlas vacío.</div>
      <p style={{ color: "var(--fg-soft)", fontSize: 14, maxWidth: 380, margin: "8px auto 0" }}>
        Aún no hay dispositivos en este plano. Empieza añadiendo el primero o importando un BOM existente.
      </p>
    </div>
    <div style={{ display: "flex", gap: 8 }}>
      <Button variant="primary" leadingIcon={IcPlusCircle}>Añadir dispositivo</Button>
      <Button variant="secondary" leadingIcon={IcMap}>Importar plano</Button>
    </div>
  </div>
);

const SectionPatterns = () => {
  const [page, setPage] = React.useState(2);
  return (
    <section id="patterns" className="ds-section">
      <div className="section-head">
        <div className="label">08 — Patterns</div>
        <div>
          <h2>Cuatro composiciones secundarias.</h2>
          <p>Pagination, Breadcrumb, DataTable y EmptyState. Construidos sobre los primitivos, sin nuevos tokens.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

        <div className="paper-card" style={{ padding: 24 }}>
          <div className="kicker" style={{ marginBottom: 16 }}>Breadcrumb</div>
          <Breadcrumb items={["Atlas", "Casa Aldebarán", "Planta baja", "Salón"]} />
        </div>

        <div className="paper-card" style={{ padding: 24 }}>
          <div className="kicker" style={{ marginBottom: 16 }}>Pagination</div>
          <Pagination page={page} total={7} onChange={setPage} />
        </div>

        <div>
          <div className="kicker" style={{ marginBottom: 16 }}>DataTable</div>
          <DataTable />
        </div>

        <div>
          <div className="kicker" style={{ marginBottom: 16 }}>EmptyState</div>
          <EmptyState />
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { SectionPatterns, Pagination, Breadcrumb, DataTable, EmptyState });
