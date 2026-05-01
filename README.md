# Atlaps

> _Atlas de aplicaciones domóticas capaces de funcionar independientemente y de arrollar cooperativamente._
>
> Iniciativa Alexendros, S.L. · Comunitat Valenciana · Bootstrap F0 4-may-2026.

Repositorio monorepo del producto **Atlaps**: design system, landings y aplicaciones del atlas SaaS de domótica multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI).

## Estructura

```
Atlaps/
├── apps/                           # productos finales desplegables
│   ├── socios/                     # presentación privada para socios (servida por el portal)
│   ├── web/                        # landing pública atlaps.com (placeholder · F1)
│   └── platform/                   # app autenticada (5 pilares · placeholder · F1-F4)
│
├── packages/                       # piezas compartidas entre apps
│   └── design-system/              # showcase, tokens, ui_kits, preview, logo, iconos
│
├── docs/                           # documentación canónica
│   ├── adr/                        # Architecture Decision Records
│   ├── briefs/                     # briefs operativos para Design de Claude
│   └── tokens.md                   # referencia humana de tokens
│
├── public/                         # assets servidos por el portal Next.js del root
│   ├── fonts/                      # 7 WOFF2 self-host (SIL OFL 1.1)
│   ├── logos/                      # SVG compartidos
│   ├── socios/                     # contenido vivo de apps/socios servido por el portal
│   └── favicon.svg
│
├── app/                            # portal Next.js del root
│   ├── layout.tsx
│   ├── page.tsx                    # índice navegable a apps + recursos
│   └── globals.css                 # tokens duplicados de packages/design-system/tokens.css
│
├── components/ui/                  # primitivos shadcn (futuro)
├── lib/utils.ts                    # cn helper
├── scripts/
│   └── fetch-fonts.sh              # descarga WOFF2 desde Google Fonts (build-time)
│
├── package.json                    # workspace root (Next.js portal)
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── LICENSE                         # propietario · Iniciativa Alexendros, S.L.
└── README.md
```

## Quién va dónde

| Si quieres...                                    | Mira...                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Ver la presentación de socios (privada)          | `apps/socios/README.md` → contenido en `public/socios/`                             |
| Construir / iterar la landing pública atlaps.com | `apps/web/` (placeholder) + `docs/briefs/prototype-landing-app.md`                  |
| Construir / iterar la app autenticada            | `apps/platform/` (placeholder) + `docs/briefs/prototype-landing-app.md` (sección B) |
| Iterar el design system con Design de Claude     | `packages/design-system/` + `docs/briefs/design-system.md`                          |
| Consultar tokens, paleta, tipografía             | `docs/tokens.md` y `packages/design-system/tokens.css`                              |
| Conocer las decisiones de marca                  | `docs/adr/`                                                                         |
| Descargar / regenerar las fuentes self-host      | `bash scripts/fetch-fonts.sh`                                                       |

## Stack

- **Framework portal:** Next.js 15 App Router + TypeScript 5.6 + Tailwind v4 (`@theme`).
- **Componentes:** shadcn/ui + Radix UI primitives + Lucide React (provisional iconos).
- **Estética:** **blueprint** (azul plano arquitectónico + pergamino + ámbar señalético). Marca independiente, no derivada de Vergina Imperial. Ver ADR 007.
- **Tipografía dual:**
  - **A · marketing** — Fraunces + Inter + JetBrains Mono.
  - **B · app autenticada** — Inter Display + Geist + IBM Plex Mono.
- **Self-host de fuentes** (SIL OFL 1.1) en `public/fonts/`. Sin requests a CDN externos. RGPD-compliant.
- **Backend objetivo:** Supabase self-host + GlitchTip self-host + Trigger.dev self-host en VPS Hetzner CX32 Falkenstein FR/DE. Ver ADR 006 (cuaderno operador).
- **LLM:** Mistral La Plateforme UE managed → Scaleway L40S Paris self-host con umbrales 2/4 (F6+). Ver ADR 005.

## Cómo arrancar localmente

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

El portal Next.js sirve:

- `/` → home con índice de recursos del monorepo.
- `/socios/` → presentación privada para socios.
- `/fonts/*` → fuentes self-host.
- `/logos/*` → SVG.

## Cómo desplegar

Vercel + Git integration. Conectar `https://github.com/Alexendros/Atlaps`. Vercel detecta Next.js automáticamente.

- **Build command:** `next build` (default).
- **Install command:** `pnpm install`.
- **Output:** `.next` (default).
- **Variables de entorno:** ninguna en F0.

## Vinculaciones

- **GitHub:** [`Alexendros/Atlaps`](https://github.com/Alexendros/Atlaps) (privado).
- **Forgejo (espejo):** `git.alexendros.me/Alexendros/Atlaps` (pull-mirror cada 8h).
- **Notion (canónico operativo):** Atlaps · Documento de Implementación del MVP.
- **Cuaderno operador (privado):** `~/.claude/cuadernos/atlaps/`.
- **Repo público del protocolo:** `atlaps/abp` (Apache-2.0, separado, F1+).

## Licencia

Propietario. Ver [`LICENSE`](LICENSE).

El protocolo `atlaps/abp` se publicará por separado bajo Apache-2.0 cuando se estabilice (F4–F6).

## Estado del bootstrap (30-abr-2026)

- ✅ Repo y monorepo organizados.
- ✅ Design System v0 generado con Design de Claude (showcase + ui_kits + preview).
- ✅ Self-host de 7 WOFF2 (Fraunces, Inter, Inter Tight, Geist, JetBrains Mono, IBM Plex Mono 400/500).
- ✅ Presentación de socios v0 publicada en `apps/socios/`.
- ⏳ Vercel deploy con dominio de prueba.
- ⏳ Forgejo pull-mirror tras siguiente ejecución de `bootstrap-org-and-mirrors.sh`.
- ⏳ Memoria IVACE INNOVA-CV TEIC (deadline 5-may-2026).
- ⏳ `apps/web/` y `apps/platform/` aún sin código.
