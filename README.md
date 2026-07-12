# Atlaps

Atlas de aplicaciones domóticas multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI). Bootstrap F0 completado.

|            |                                                              |
| ---------- | ------------------------------------------------------------ |
| **Estado** | F0 completo, plumbing productivo mergeado                    |
| **Stack**  | Next.js 15 · TypeScript 5.9 · Tailwind v4 · shadcn/ui · pnpm |
| **Deploy** | Vercel (preview por PR)                                      |

---

## Estructura

```
apps/
  socios/        presentación privada (servida por el portal)
  web/           landing pública atlaps.com (placeholder · F1)
  platform/      app autenticada (placeholder · F1-F4)
packages/
  design-system/ showcase, tokens, ui_kits, preview
docs/
  adr/           Architecture Decision Records
  briefs/        briefs operativos
```

---

## Arranque

```bash
pnpm install && pnpm dev
# http://localhost:3000
```

Rutas: `/` (índice), `/socios/` (presentación privada), `/fonts/*`, `/logos/*`.

---

## Stack

- **Framework:** Next.js 15 App Router + React 19
- **Estética:** blueprint (azul arquitectónico + pergamino + ámbar). ADR 007
- **Tipografía dual:** A (marketing): Fraunces + Inter + JetBrains Mono · B (app): Inter Display + Geist + IBM Plex Mono
- **Self-host fuentes** (SIL OFL 1.1). RGPD-compliant
- **CI/CD:** GitHub Actions (lint + typecheck + test + build + audit) + Dependabot
- **Security headers:** HSTS, X-Frame-Options DENY, CSP estricta

---

## Despliegue

Vercel + Git integration. Connectar `github.com/Alexendros/Atlaps`. Zero-config.

---

## Vinculaciones

- **GitHub:** [Iniciativas-Alexendros/Atlaps](https://github.com/Iniciativas-Alexendros/Atlaps) (privado)
- **Forgejo:** `git.alexendros.me/Alexendros/Atlaps` (pull-mirror cada 8h)
- **Notion:** Documento de Implementación del MVP

---

## Licencia

Propietario. Ver [`LICENSE`](LICENSE). El protocolo `atlaps/abp` se publicará bajo Apache-2.0 (F4–F6).
