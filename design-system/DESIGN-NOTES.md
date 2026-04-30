# Para el campo "Any other notes?" de Design de Claude

Pega TAL CUAL el siguiente texto (o adapta lo que necesites):

---

**Sistema cromático (USAR EXACTOS, no aproximar):**

- Blueprint deep `#0F2A4A` · mid `#1E4D7A` · soft `#3A7BB8`
- Paper bone `#F5F1E8` · grid `#E8E0CC`
- Amber signal `#C77D2C` · glow `#E89642` (acento <10% superficie, NUNCA fondo dominante)
- Ink graphite `#1A1F2E` · pencil `#5C6B7F`
- Semánticos: success `#2F8F5C`, warning `#C77D2C`, danger `#B23A48`, info `#3A7BB8`

Modo claro: fondo paper-bone, tinta blueprint-deep. Modo oscuro: fondo blueprint-deep, tinta paper-bone (NO invert brusco).

**Tipografía** (decidir entre dos configuraciones, mostrar ambas si es posible):

- A (clásica): Display Fraunces · Body Inter · Mono JetBrains Mono
- B (técnica): Display Söhne (o Inter Display fallback) · Body Geist · Mono IBM Plex Mono

Escala Major Third 1.25: 12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px.

**Logo:** monograma letra "A" formada por curvas de nivel topográficas (isolíneas) + wordmark `atlaps` lowercase con kerning amplio. SVG inline, no placeholder.

**Iconografía:** lineal 1.5 px, esquinas geométricas. Si no hay set propio, Lucide React con `strokeWidth={1.5}`.

**Motion:** trazo de mapa (SVG `stroke-dasharray` animado, efecto pen-on-paper). Curva `cubic-bezier(0.4, 0.0, 0.2, 1)`. Duraciones 240 ms (micro) y 480 ms (macro). Veta: parallax marketing, fades genéricos, neón, partículas decorativas.

**Sombras:** NO blur amplio. SÍ gridlines `--paper-grid` 1 px o trazos de tinta `--blueprint-mid`. Bordes 1 px o 1.5 px máximo.

**Tono de voz:**

1. Sobrio pero accesible (técnico se reconoce, DIYer no se asusta).
2. Confiado sin arrogancia.
3. Soberano y radical en transparencia (self-host, voz local, comisiones declaradas).
4. Castellano peninsular (tú/vosotros, sin voseo, sin anglicismos gratuitos).
5. Anti-jerga: "atlas" no "dashboard"; "memoria profesional" no "as-built doc"; "instalación" no "setup".

**Restricciones absolutas:**

- NO paletas púrpura ni mezcla con la marca corporativa Vergina Imperial (Alexendros).
- NO gradientes vistosos como fondo dominante.
- NO stock cliché (manos en teclado, nubes abstractas, personas mirando pantallas).
- NO texto en inglés en copy de UI (excepto nombres propios y términos técnicos consagrados: KNX, Matter, Zigbee se mantienen).

**Output preferente:** componentes con tokens CSS Tailwind v4 `@theme` directamente importables, modo claro+oscuro funcional, accesibilidad WCAG 2.2 AA real (focus rings, contrastes, targets ≥44 px), mobile-first 360 px.

---
