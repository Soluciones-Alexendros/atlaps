const PROTOCOLOS = [
  "KNX",
  "Matter",
  "Zigbee",
  "Z-Wave",
  "Modbus",
  "BACnet",
  "Wi-Fi",
  "DALI",
] as const;

export function ProtocolosBelt() {
  return (
    <section
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby="protocolos-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2
          id="protocolos-title"
          className="text-ink-pencil text-center text-xs font-medium tracking-[0.2em] uppercase"
        >
          Ocho protocolos · un único atlas
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 md:grid-cols-8">
          {PROTOCOLOS.map((p) => (
            <li
              key={p}
              className="border-paper-grid/80 bg-paper-bone/80 text-blueprint-mid flex h-10 items-center justify-center rounded-md border font-mono text-sm"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
