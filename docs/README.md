# `docs` · Documentación canónica

### Propósito de este documento

- **Objetivos:** Índice de la documentación viva y de las convenciones de cada clase de documento.
- **Estructura:** Estructura de carpetas → ADRs → briefs → convenciones.
- **Contenido a integrar según contexto:** Los ADRs canónicos viven en `architecture/decisions/`. No añadas ADRs nuevos en `adr/` (stub).

Toda la documentación viva del proyecto Atlaps. Cada subcarpeta es una clase de documento con convención propia.

## Estructura

- `architecture/decisions/` — Architecture Decision Records (sólo decisiones cerradas). Numerar 001, 002, ... Inmutables tras firma; sólo se añaden ADRs sucesores. `adr/` es un stub de compatibilidad.
- `guides/` — desarrollo local y calidad (P1).
- `runbooks/` — CI/despliegue e incidente (P1).
- `briefs/` — briefs operativos para Design de Claude y otros agentes IA. Versionados con `vX` en el frontmatter.
- `tokens.md` — referencia humana de los tokens del design system. Espejo legible de `packages/design-system/tokens.css`.

## ADRs activos

- [`007-marca-independiente-blueprint.md`](architecture/decisions/007-marca-independiente-blueprint.md) — marca blueprint independiente, no derivada de Vergina Imperial.
- [`011-alineacion-canon-p1.md`](architecture/decisions/011-alineacion-canon-p1.md) — alineación al contrato P1 de flota.

## ADRs en otros repos / cuadernos

Los ADRs 001–006 permanecen en el archivo interno del operador. Cuando estabilicen, se publicarán aquí también.

## Briefs activos

- [`design-system.md`](briefs/design-system.md) — para iterar el design system standalone con Design de Claude.
- [`prototype-landing-app.md`](briefs/prototype-landing-app.md) — landing pública `atlaps.com` + 3 vistas de la app autenticada.
- [`prototype-landing-app-extended.md`](briefs/prototype-landing-app-extended.md) — versión extensa del anterior con detalle máximo.
- [`landing-socios.md`](briefs/landing-socios.md) — presentación privada para socios y colaboradores. Ya producida y servida en `/socios/`.
- [`company-blurb.md`](briefs/company-blurb.md) — texto de empresa para integraciones externas (Design, formularios de inversión, etc.).
- [`design-notes.md`](briefs/design-notes.md) — notas de marca para integraciones externas.

## Convenciones

- **Todos los documentos en castellano peninsular.** Sin voseo, sin anglicismos gratuitos.
- **Términos técnicos consagrados se mantienen** (KNX, Matter, Zigbee, MRR, NPS, LTV/CAC).
- **Versionado en frontmatter** YAML: `version`, `date`, `status` (draft|active|superseded), `supersedes`, `superseded_by`.
- **No editar ADRs cerrados.** Crear sucesor con número siguiente y enlazar.
