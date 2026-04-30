# `docs` · Documentación canónica

Toda la documentación viva del proyecto Atlaps. Cada subcarpeta es una clase de documento con convención propia.

## Estructura

- `adr/` — Architecture Decision Records (sólo decisiones cerradas). Numerar 001, 002, ... Inmutables tras firma; sólo se añaden ADRs sucesores.
- `briefs/` — briefs operativos para Design de Claude y otros agentes IA. Versionados con `vX` en el frontmatter.
- `tokens.md` — referencia humana de los tokens del design system. Espejo legible de `packages/design-system/tokens.css`.

## ADRs activos

- [`007-marca-independiente-blueprint.md`](adr/007-marca-independiente-blueprint.md) — marca blueprint independiente, no derivada de Vergina Imperial.

## ADRs en otros repos / cuadernos

Los ADRs 001–006 viven en el cuaderno operador `~/.claude/cuadernos/atlaps/artefactos/adr/` (privado). Cuando estabilicen, se publicarán aquí también.

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
