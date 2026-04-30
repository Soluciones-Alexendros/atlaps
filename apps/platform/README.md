# `apps/platform` · App autenticada del producto

> Estado: **placeholder** · pendiente de construir en F1-F4.

## Qué será

Aplicación autenticada de Atlaps en `app.atlaps.com` (o `atlaps.com/app`). Cinco pilares operando juntos:

1. **Planificador** — canvas tldraw, BOM, plantillas, KNX import, HA export, PDF/DXF/IFC.
2. **Mercado** — catálogo SKU, comparativa precio, 2.ª mano A/B/C, comisiones declaradas.
3. **Monitor + ABP** — operación tiempo real vía Atlaps Bridge Protocol Apache-2.0.
4. **Sugerencias** — daemon con revenue declarado.
5. **ComtubernIA** — voz local UE (Whisper + Piper + openWakeWord + Mistral UE).

## Brief

Ejecutar con Design de Claude: `docs/briefs/prototype-landing-app.md` (sección B · App autenticada con 3 vistas).

## Stack previsto

- Next.js 15 App Router + TypeScript + Tailwind v4
- shadcn/ui + Radix UI primitives
- Configuración tipográfica B (Inter Display + Geist + IBM Plex Mono)
- tldraw SDK con custom shapes (Device, Room, Connection)
- Zustand (estado canvas)
- TanStack Query v5 (server state)
- Yjs + y-supabase (colaboración Slice 3)
- Supabase self-host (auth + Postgres + Realtime + Storage)
- Trigger.dev self-host (background jobs)

## Estructura prevista cuando se cree

```
apps/platform/
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── app/
│   ├── (auth)/                         # login, signup, recovery
│   ├── (dashboard)/
│   │   ├── planificador/[projectId]/page.tsx
│   │   ├── mercado/page.tsx
│   │   ├── monitor/[installationId]/page.tsx
│   │   ├── sugerencias/page.tsx
│   │   ├── configuracion/page.tsx
│   │   └── layout.tsx                  # sidebar shell
│   ├── api/
│   │   ├── webhooks/stripe/route.ts
│   │   ├── trigger/[...task]/route.ts
│   │   └── ...
│   └── globals.css
├── components/
│   ├── canvas/                         # custom tldraw shapes
│   ├── bom/                            # tabla BOM
│   ├── monitor/                        # tiles dispositivos
│   └── ui/                             # locales (importan packages/design-system)
├── lib/
│   ├── supabase/
│   ├── stripe/
│   ├── abp/                            # cliente Atlaps Bridge Protocol
│   └── comtubernia/
└── public/
```

## Roadmap por slice

- **F1 (8 → 29 may)** · Slice 1 Free: tldraw canvas, BOM, share público, react-pdf, 6 MDX cornerstone.
- **F2 (30 may → 20 jun)** · Slice 2 Solo: Stripe + KNX import + HA export + PDF v1.
- **F3 (21 jun → 19 jul)** · Slice 3 Studio: Yjs colaboración, DXF/IFC parcial, 200 SKU FTS.
- **F4 (20 jul → 2 ago)** · Estabilización 1.0 GA.

## Sinergia con `apps/web`

Comparten:
- `packages/design-system` (tokens, logo, motion).
- `public/fonts/` (7 WOFF2 self-host).
- DPA Stripe + Resend + Hetzner.

NO comparten:
- Layout (web es marketing, platform es app de uso intensivo).
- Tipografía (web usa Configuración A, platform usa B — ADR pendiente formalizar).
- Auth state (web es público; platform requiere sesión).
