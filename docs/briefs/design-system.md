# Brief para Design de Claude · Design System de Atlaps (standalone)

> Este brief produce EXCLUSIVAMENTE el design system de Atlaps como showcase navegable. No incluye landing ni vistas de aplicación. El output servirá como fuente única de verdad visual sobre la que se construirán después la landing, las apps y los materiales de marca.

---

## Encargo en una frase

Genera el design system completo de Atlaps como una página única tipo "Storybook lite" + un CSS de tokens, donde se muestren paleta, tipografía, escalas, primitivos UI, logo, iconografía y motion en modo claro y oscuro, listos para copiar a un repo Next.js 15.

## Identidad de marca (contexto mínimo necesario)

- Producto: Atlaps — atlas SaaS de domótica multi-protocolo de Iniciativa Alexendros, S.L.
- Etimología: Atlas + apps — "aplicaciones domóticas capaces de funcionar independientemente y de arrollar cooperativamente".
- Estética matriz: BLUEPRINT (plano arquitectónico). Cartografía técnica, papel cuadrícula, isolíneas topográficas.
- Veta absoluta: nada de gradientes púrpura, neón, sci-fi, partículas, parallax decorativo, stock cliché.
- Idioma del UI y de los textos demo: castellano peninsular sin voseo.

## Sistema cromático (tokens obligatorios, USAR EXACTOS)

```css
:root {
  /* Blueprint — azul plano arquitectónico */
  --blueprint-deep: #0f2a4a;
  --blueprint-mid: #1e4d7a;
  --blueprint-soft: #3a7bb8;

  /* Paper — pergamino */
  --paper-bone: #f5f1e8;
  --paper-grid: #e8e0cc;

  /* Amber — acento (por debajo del 10% de la superficie) */
  --amber-signal: #c77d2c;
  --amber-glow: #e89642;

  /* Tinta */
  --ink-graphite: #1a1f2e;
  --ink-pencil: #5c6b7f;

  /* Estados semánticos derivados */
  --success: #2f8f5c;
  --warning: #c77d2c;
  --danger: #b23a48;
  --info: #3a7bb8;
}
```

Reglas: modo claro = paper-bone fondo · modo oscuro = blueprint-deep fondo · ámbar nunca como fondo dominante (acento por debajo del 10%) · sombras como gridlines (no blur amplio) · bordes 1 px o 1.5 px · WCAG 2.2 AA.

## Tipografía (producir DOS configuraciones)

- **A · clásica:** Display Fraunces · Body Inter · Mono JetBrains Mono
- **B · técnica:** Display Söhne (o Inter Display fallback) · Body Geist · Mono IBM Plex Mono

Escala Major Third (1.25): 12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px.

## Logo

- Monograma: "A" formada por curvas de nivel (isolíneas) que sugieren topografía. SVG inline.
- Wordmark: "atlaps" lowercase, kerning amplio.
- Variantes: icon-only · horizontal · vertical · dark/light · favicon · PWA 192/512.

## Iconografía (set base 24)

Lineal 1.5 px, esquinas geométricas. Lucide React con `strokeWidth={1.5}` mientras llega set propio.

## Componentes primitivos (12)

Button · Input · Textarea · Select · Checkbox/Radio/Switch · Card · Badge · Tabs · Dialog · Toast · Tooltip · Skeleton.

Variantes y estados (default/hover/focus/disabled/loading) en modo claro y oscuro.

## Patrones secundarios (4)

Pagination · Breadcrumb · DataTable básico · EmptyState con ilustración cartográfica.

## Motion (3 demos)

Logo dibujándose con stroke-dasharray (800–1.200 ms) · Tab indicator con trazo de pluma · Skeleton topográfico bucle 480 ms.

Veta: parallax marketing, fades genéricos, neón futurista, partículas decorativas.

## Stack técnico

Next.js 15 App Router + TypeScript + Tailwind v4 con `@theme` + shadcn/ui + Radix UI + Lucide React.

## Estructura del showcase (página única)

1. Brand · 2. Colors · 3. Typography · 4. Spacing/Radii/Shadows · 5. Motion · 6. Iconography · 7. Components · 8. Patterns · 9. Tokens (CSS) · 10. Notes.

## Restricciones explícitas

- NO landing pública, hero, pricing, FAQ, waitlist (otro brief).
- NO vistas de app (Planificador, Mercado, Monitor).
- NO mezcla con Vergina Imperial (púrpura/oro corporativo Alexendros).
- NO gradientes vistosos de fondo.
- NO librerías de estado, fetching, auth.
- NO marcas terceras inventadas.

## Output esperado

Artifact navegable: showcase 10 secciones · toggle dark/light · `<Logo />` SVG inline · `globals.css` Tailwind v4 con tokens copiable. Single-page HTML autocontenido si la herramienta solo lo permite así.

## Criterios de evaluación

Aceptable: blueprint reconocible · logo legible 24-200 px · dark mode convincente · tokens copiables sin retoques · cero anglicismos.

No aceptable: SaaS genérico · mezcla púrpura/oro Vergina · iconografía con grosores variables · landing comercial añadida.

## Pregunta opcional al diseñador IA

Sugerir 3 mejoras concretas fuera de scope al final del entregable (micro-animación, ilustración custom, propuesta patrón decorativo isolíneas).

## Referencias

- ADR 007 · Marca independiente blueprint: `docs/adr/007-marca-independiente-blueprint.md`
- ADR 008 · Tipografía dual A/B + promoción amber-signal → amber-glow en oscuro: `docs/adr/008-tipografia-dual-y-amber-glow.md`

---

Versión: design-system v0 · 2026-04-30.
