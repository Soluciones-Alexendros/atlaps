# Atlaps

### Propósito de este documento

- **Objetivos:** Presentar el producto, el arranque local y los contratos del repositorio (perfil P1, SaaS privado).
- **Estructura:** Estado → arranque → stack → despliegue → contratos → licencia.
- **Contenido a integrar según contexto:** Conserva la tesis de producto y la estética blueprint. No copies un README de landing pública ni cambies la licencia propietaria.

Atlas de aplicaciones domóticas multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI). Bootstrap F0 completado.

|            |                                                           |
| ---------- | --------------------------------------------------------- |
| **Estado** | F0 completo, plumbing productivo mergeado                 |
| **Stack**  | Next.js 16 · TypeScript 6 · Tailwind v4 · Radix · pnpm 11 |
| **Deploy** | Vercel (preview por PR)                                   |

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

- **Framework:** Next.js 16 App Router + React 19
- **Estética:** blueprint (azul arquitectónico + pergamino + ámbar). ADR 007
- **Tipografía dual:** A (marketing): Fraunces + Inter + JetBrains Mono · B (app): Inter Display + Geist + IBM Plex Mono
- **Self-host fuentes** (SIL OFL 1.1). RGPD-compliant
- **CI/CD:** GitHub Actions (`quality` · `test` · `build` · `smoke`) + Renovate
- **Security headers:** HSTS, X-Frame-Options DENY, CSP con nonce en `middleware.ts` (+ headers en `next.config.ts` para `/socios`)

---

## Despliegue

Vercel + Git integration sobre `Soluciones-Alexendros/saas-atlaps`. Preview por PR.

---

## Contratos

- [Contribuir](CONTRIBUTING.md)
- [Seguridad](SECURITY.md)
- [Arquitectura](ARCHITECTURE.md)
- [Agentes](AGENTS.md)
- [Decisiones](docs/architecture/decisions/)
- [Calidad](docs/guides/calidad.md)
- [Soporte](SUPPORT.md)
- [Código de conducta](CODE_OF_CONDUCT.md)
- [Changelog](CHANGELOG.md)

---

## Vinculaciones

- **GitHub:** [Soluciones-Alexendros/saas-atlaps](https://github.com/Soluciones-Alexendros/saas-atlaps) (privado)
- **Forgejo:** `git.alexendros.me/Alexendros/Atlaps` (pull-mirror cada 8h)
- **Notion:** Documento de Implementación del MVP

---

## Licencia

Propietario. Ver [`LICENSE`](LICENSE). El protocolo `atlaps/abp` se publicará bajo Apache-2.0 (F4–F6).
