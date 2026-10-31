# ADR 007 · Marca independiente blueprint

- **Estado:** ✅ aceptado (30-abr-2026)
- **Decisor:** Alexendros (PI)
- **Producto:** Atlaps · Iniciativa Alexendros, S.L.

## Contexto

Atlaps necesita identidad visual y verbal coherente para landing, 5 apps, iconografía, audiovisual, copy y logo. Tres opciones planteadas:

- (a) Sub-brand visualmente derivada de **Vergina Imperial** (corporativa Alexendros: atmósfera púrpura pretoriana + acentos oro/titanio)
- (b) Marca **independiente** con paleta blueprint (azul cartográfico + ámbar)
- (c) Híbrida (paleta independiente, motion heredado)

## Decisión

**Opción (b) · Marca independiente blueprint.** Atlaps NO hereda visualmente de Vergina Imperial; vinculación a Alexendros queda en footer/legal/about. Identidad inspirada en planos arquitectónicos.

## Razón

La audiencia técnica de domótica (DIYer, instalador, integrador, arquitecto) no se siente interpelada por la estética imperial púrpura corporativa. La metáfora cartográfica (atlas) y el lenguaje del plano técnico se alinean naturalmente con:

- El producto principal (Planificador con canvas blueprint).
- El público objetivo (cultura técnica / arquitectónica).
- El posicionamiento ("dibujada como un atlas").
- La cultura visual de Home Assistant, KNX, Matter en la que el operador entrará a competir.

## Sistema cromático adoptado

| Token              | Hex       | Uso                                                 |
| ------------------ | --------- | --------------------------------------------------- |
| `--blueprint-deep` | `#0F2A4A` | superficie primaria oscura · tinta papel cuadrícula |
| `--blueprint-mid`  | `#1E4D7A` | acciones primarias · headers                        |
| `--blueprint-soft` | `#3A7BB8` | hover · interactividad                              |
| `--paper-bone`     | `#F5F1E8` | superficie clara · pergamino                        |
| `--paper-grid`     | `#E8E0CC` | gridlines · sombras suaves · bordes                 |
| `--amber-signal`   | `#C77D2C` | acento · dispositivos activos · CTA secundario      |
| `--amber-glow`     | `#E89642` | hover ámbar · estados de éxito energético           |
| `--ink-graphite`   | `#1A1F2E` | texto base modo claro                               |
| `--ink-pencil`     | `#5C6B7F` | texto secundario · anotaciones                      |

Reglas: ámbar por debajo del 10% de superficie. Modo oscuro = `blueprint-deep`. Modo claro = `paper-bone`.

## Tipografía

Producir 2 propuestas para comparar D1:

- **A · clásica:** Fraunces + Inter + JetBrains Mono
- **B · técnica:** Söhne (o Inter Display fallback) + Geist + IBM Plex Mono

## Logo

- Monograma: "A" cartográfica formada por curvas de nivel (isolíneas) que sugieren elevación
- Wordmark: `atlaps` lowercase, kerning amplio
- Variantes: icon-only · horizontal · vertical · dark/light · favicon · PWA icons (192/512)

## Motion

- Trazo de mapa: SVG `stroke-dasharray` animado (efecto pen-on-paper)
- Curva por defecto: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- Duración: 240 ms (micro) · 480 ms (macro)
- **Veta:** parallax marketing · fades genéricos · neón sci-fi · partículas decorativas

## Tono de voz

5 reglas:

1. Sobrio pero accesible.
2. Confiado sin arrogancia.
3. Soberano y radical en transparencia.
4. Castellano peninsular (tú/vosotros). Sin voseo. Sin anglicismos gratuitos.
5. Anti-jerga: "atlas" no "dashboard"; "memoria profesional" no "as-built doc"; "instalación" no "setup".

## Posicionamiento (statement)

> _Para el entusiasta y el profesional de la domótica que orquesta más de un protocolo, Atlaps es el atlas SaaS español que diseña, compra y opera tu instalación bajo soberanía europea — porque tu casa inteligente merece un mapa propio, no un dashboard ajeno._

## Consecuencias

- ✅ Máximo _fit_ con audiencia DIY/instalador/integrador/arquitecto
- ✅ Diferenciación clara frente a competencia (estética cartográfica única)
- ✅ Compatible con tldraw canvas (lienzo "azul-blanco/papel cuadrícula")
- ⚠ Pérdida de coherencia visual corporativa Alexendros (mitigado: footer + about page enlazan a Alexendros)
- ⚠ Vergina Imperial no se reutiliza → +effort System Design propio

## Punteros

- Repo Design System: este repositorio
- Brief Design System: `design-system/BRIEF-DESIGN-SYSTEM.md`
- Brief Prototipo: `design-system/BRIEF-PROTOTYPE.md`
- Tokens: `tokens.css`, `app/globals.css`, `design-system/TOKENS.md`
- Showcase v0: `Atlaps Design System.html`
- Archivo interno del operador (privado): ADR-007-marca-independiente.
