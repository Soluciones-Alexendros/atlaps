export function AbpCallout() {
  return (
    <section
      id="abp"
      className="border-paper-grid/70 bg-blueprint-deep text-paper-bone border-b"
      aria-labelledby="abp-title"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-amber-glow text-xs tracking-widest uppercase">
            Atlaps Bridge Protocol · ABP
          </p>
          <h2
            id="abp-title"
            className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
          >
            Un MCP para domótica, abierto bajo Apache-2.0.
          </h2>
          <p className="text-paper-bone/80 mt-4 max-w-xl text-base leading-relaxed">
            ABP es la capa de protocolo que conecta cualquier instalación con el atlas vivo de
            Atlaps. Especificación pública, implementación de referencia y SDKs en TypeScript,
            Python y Go. Sin lock-in: si te vas, tu instalación sigue funcionando.
          </p>
          <ul className="text-paper-bone/85 mt-6 grid gap-2 text-sm sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-glow mt-0.5">
                ●
              </span>
              <span>6 mensajes mínimos · v0.1 en F1</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-glow mt-0.5">
                ●
              </span>
              <span>Federación opcional · self-host primero</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-glow mt-0.5">
                ●
              </span>
              <span>Tests de conformidad ejecutables</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-glow mt-0.5">
                ●
              </span>
              <span>Especificación versionada · SemVer estricto</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Alexendros"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper-bone text-blueprint-deep hover:bg-paper-grid inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.04 11.04 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
              Spec en GitHub
            </a>
            <span className="text-paper-bone/60 font-mono text-xs">
              ★ pendiente · repo público en F1 D1
            </span>
          </div>
        </div>

        <pre
          className="border-paper-bone/15 bg-blueprint-mid/30 text-paper-bone/90 overflow-x-auto rounded-lg border p-5 font-mono text-[12px] leading-relaxed"
          aria-label="Ejemplo de mensaje ABP"
        >
          {`// abp/v0.1/device.state
{
  "msg": "device.state",
  "v": "0.1",
  "topology": "atlas:home/sala-estar",
  "id": "knx:1.1.7",
  "kind": "luminaire",
  "state": { "on": true, "brightness": 60 },
  "ts": "2026-05-08T10:23:14Z",
  "sig": "ed25519:atlas..."
}`}
        </pre>
      </div>
    </section>
  );
}
