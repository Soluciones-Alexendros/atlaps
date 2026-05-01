import Link from "next/link";

export function Hero() {
  return (
    <section
      className="border-paper-grid/70 relative overflow-hidden border-b"
      aria-labelledby="hero-title"
    >
      <BlueprintGrid />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="border-blueprint-soft/40 bg-paper-bone/80 text-blueprint-mid inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-widest uppercase">
            <span className="bg-amber-signal h-1.5 w-1.5 rounded-full" aria-hidden="true" />
            Atlas SaaS · multi-protocolo
          </p>
          <h1
            id="hero-title"
            className="text-blueprint-deep mt-5 text-5xl leading-[1.05] font-bold tracking-tight text-balance md:text-6xl"
          >
            Tu casa inteligente,
            <br />
            <span className="text-blueprint-mid">dibujada como un atlas.</span>
          </h1>
          <p className="text-ink-pencil mt-6 max-w-xl text-lg leading-relaxed">
            Diseña la topología, calcula el material y opera la instalación. Multi-protocolo (KNX,
            Matter, Zigbee y 5 más), voz local UE y un atlas vivo en castellano.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#waitlist"
              className="bg-blueprint-deep text-paper-bone hover:bg-blueprint-mid inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-sm transition-colors"
            >
              Empezar gratis
            </Link>
            <Link
              href="/#como-funciona"
              className="border-blueprint-soft/50 text-blueprint-deep hover:bg-paper-grid/40 inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-base font-medium transition-colors"
            >
              Ver el atlas en acción
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="text-ink-pencil mt-6 text-xs">
            Sin tarjeta · Self-host UE · Voz 100 % local · Apache-2.0 ABP
          </p>
        </div>

        <BlueprintCanvas />
      </div>
    </section>
  );
}

function BlueprintGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--color-paper-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-paper-grid)_1px,transparent_1px)] [background-size:48px_48px] opacity-50"
    />
  );
}

function BlueprintCanvas() {
  return (
    <div className="relative aspect-[4/3] w-full">
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label="Mockup de canvas blueprint con tres habitaciones, dispositivos y conexiones"
        className="h-full w-full"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="var(--color-paper-grid)"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>

        <rect
          x="4"
          y="4"
          width="392"
          height="292"
          rx="6"
          fill="var(--color-paper-bone)"
          stroke="var(--color-blueprint-soft)"
          strokeWidth="1.2"
        />
        <rect x="4" y="4" width="392" height="292" rx="6" fill="url(#grid)" />

        <g fill="none" stroke="var(--color-blueprint-mid)" strokeWidth="1.5" strokeLinejoin="round">
          <rect x="30" y="40" width="160" height="110" rx="2" />
          <rect x="30" y="160" width="160" height="100" rx="2" />
          <rect x="200" y="40" width="170" height="220" rx="2" />
        </g>

        <g>
          <Device cx={70} cy={80} label="KNX" />
          <Device cx={140} cy={120} label="ZB" />
          <Device cx={70} cy={210} label="Matter" />
          <Device cx={160} cy={230} label="Wi-Fi" />
          <Device cx={250} cy={90} label="DALI" />
          <Device cx={330} cy={150} label="BACnet" />
          <Device cx={280} cy={230} label="Z-Wave" />
        </g>

        <g stroke="var(--color-blueprint-soft)" strokeWidth="1" strokeDasharray="3 3" fill="none">
          <path d="M70 80 L140 120" />
          <path d="M70 210 L160 230" />
          <path d="M250 90 L330 150" />
          <path d="M330 150 L280 230" />
          <path d="M140 120 L250 90" />
        </g>

        <g fontFamily="ui-monospace, monospace" fontSize="9">
          <text x="32" y="32" fill="var(--color-blueprint-deep)">
            sala-estar.knx
          </text>
          <text x="32" y="180" fill="var(--color-blueprint-deep)">
            cocina.matter
          </text>
          <text x="202" y="32" fill="var(--color-blueprint-deep)">
            zonas-tecnicas
          </text>
        </g>
      </svg>
    </div>
  );
}

function Device({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="6"
        fill="var(--color-amber-signal)"
        stroke="var(--color-blueprint-deep)"
        strokeWidth="1"
      />
      <text
        x={cx + 9}
        y={cy + 3}
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        fill="var(--color-blueprint-deep)"
      >
        {label}
      </text>
    </g>
  );
}
