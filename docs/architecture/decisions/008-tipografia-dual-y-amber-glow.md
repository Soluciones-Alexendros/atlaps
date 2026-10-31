# ADR 008 · Tipografía dual A/B y promoción amber-signal → amber-glow en oscuro

- **Estado:** ✅ aceptado (1-may-2026)
- **Decisor:** Iniciativa Alexendros, S.L.
- **Producto:** Atlaps · Iniciativa Alexendros, S.L.

## Contexto

ADR 007 (marca independiente blueprint) dejó pendiente la formalización de dos asuntos abiertos:

1. La elección de **dos configuraciones tipográficas** (A clásica · B técnica) propuestas como alternativas a comparar en D1. Tras el progreso de F0–F2, se ha decidido que ambas conviven productivamente como configuraciones por superficie, no como alternativas excluyentes.
2. El comportamiento del acento ámbar sobre superficie oscura. `--amber-signal` (`#C77D2C`) no alcanza el ratio de contraste mínimo WCAG 2.2 AA para texto normal sobre `--blueprint-deep` (`#0F2A4A`), por lo que en modo oscuro debe sustituirse por `--amber-glow` (`#E89642`).

`packages/design-system/tokens.css` ya implementa el _switch_ por `data-surface` con familias duales y la promoción `data-theme="dark" → amber-glow` mediante un token semántico. Tras F6.2, `app/globals.css` importa el canónico `tokens.css` sin duplicar declaraciones. Este ADR formaliza la doctrina y deja constancia de la regla, pero no introduce cambios de implementación; documenta el patrón ya vigente.

## Decisión

### Configuración A · marketing (surface por defecto)

- **Surface:** `data-surface="marketing"` aplicado en `<html>` por defecto.
- **Familias:** Fraunces (display/serif) + Inter (sans UI) + JetBrains Mono (mono).
- **Aplicación:** portal Next (rutas públicas), `public/socios/`, futuras `apps/web/` y todas las secciones de marketing.

### Configuración B · app autenticada

- **Surface:** `data-surface="app"`.
- **Familias:** Inter Tight (display/sans UI) + Geist (sans UI denso) + IBM Plex Mono (mono).
- **Aplicación:** futura `apps/platform/` (route-group `(app)/`) y cualquier vista autenticada del producto (Planificador, Mercado, Monitor).

### Söhne descartado

Söhne queda **fuera de scope en F0–F2** por licencia comercial incompatible con la fase actual (Decisión 4 del backlog). La Configuración B usa Inter Tight como cabecera display y Geist como UI densa, sin dependencia de Söhne.

### Fuente única de tokens

`packages/design-system/tokens.css` (post F6.2) es la **fuente canónica** de tokens cromáticos y tipográficos. Cualquier override en `app/globals.css` se considera excepcional y debe documentarse inline con un comentario que cite este ADR.

## Promoción amber-signal → amber-glow en oscuro

### Justificación

- `--amber-signal` (`#C77D2C`) sobre `--blueprint-deep` (`#0F2A4A`) → ratio ~3.8:1. Insuficiente para texto normal (AA exige ≥ 4.5:1).
- `--amber-glow` (`#E89642`) sobre `--blueprint-deep` (`#0F2A4A`) → ratio ~5.5:1. Cumple AA texto normal; también AA para texto grande con holgura.

### Token semántico

Se formaliza el token `--color-amber-on-surface`, que se sustituye automáticamente por modo (regla ya implementada en `tokens.css`). Este ADR fija la doctrina del patrón, no la implementación.

```css
[data-theme="light"] {
  --color-amber-on-surface: var(--color-amber-signal);
}
[data-theme="dark"] {
  --color-amber-on-surface: var(--color-amber-glow);
}
```

## Consecuencias

- ✅ Coherencia tipográfica por superficie sin recurrir a refactors por componente.
- ✅ Cumplimiento WCAG 2.2 AA del acento ámbar en ambos modos sin esfuerzo adicional del consumidor de tokens.
- ✅ `app/globals.css` deja de duplicar familias y paleta; tokens.css es SSoT.
- ⚠ Ningún componente debe usar `--color-amber-signal` o `--color-amber-glow` directamente para texto/iconos sobre superficie. **Siempre `--color-amber-on-surface`** (o utilidad equivalente). Las dos variables crudas quedan reservadas para artefactos donde el modo está fijado por contexto (p. ej. ilustraciones estáticas).
- ⚠ Cualquier futura sección con `surface=app` debe montar `<html data-surface="app">` o emplear un layout dedicado que active el atributo a nivel de `<html>` o contenedor raíz autenticado.
- ⚠ Cambios en familias requieren actualizar `tokens.css`, `public/fonts/fonts.css` y `docs/design/FUENTES.md` en el mismo PR (paquetes fontsource + `pnpm fonts:sync`).

## Disparadores para revisar

- Si una de las cuatro tipografías SIL OFL listadas (Fraunces, Inter, Inter Tight, JetBrains Mono, Geist, IBM Plex Mono) decae en peso/disponibilidad o cambia de licencia.
- Si Söhne pasa a un plan de licencia compatible con la fase: revisar Configuración B (display) para evaluar adopción.
- Si `--amber-glow` no alcanza AAA en algún contexto crítico (texto largo, estados de error sobre superficie oscura): introducir variante AAA `--amber-glow-strong`.
- Si aparece una tercera surface (`data-surface="docs"`, etc.): este ADR queda como referencia y se redacta uno nuevo que extienda la matriz.

## Punteros

- ADR origen: `docs/architecture/decisions/007-marca-independiente-blueprint.md`
- Tokens canónicos: `packages/design-system/tokens.css`
- Brief: `docs/briefs/design-system.md`
- Showcase: `packages/design-system/showcase.html`
- Archivo interno del operador (privado): ADR-008-tipografia-dual-amber-glow.
