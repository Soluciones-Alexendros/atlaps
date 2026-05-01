# Brief para Design de Claude · Prototipo landing+app · Atlaps

> Este brief produce un prototipo navegable de **landing pública + 3 vistas de app autenticada** (Planificador, Mercado, Monitor). Reusa los tokens del design system ya definidos. No tocar identidad visual: heredar.

---

## Encargo en una frase

Diseña y prototipa la **landing pública de `atlaps.com`** y las **3 vistas de la app autenticada** (Planificador, Mercado, Monitor preview) coherentes con el sistema blueprint, listas para iterar como base del frontend Next.js 15.

## Audiencia y posicionamiento

- **Producto:** Atlaps — atlas SaaS de domótica multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI). 5 pilares: Planificador · Mercado · Monitor · Sugerencias · ComtubernIA voz local.
- **Tagline:** _"Tu casa inteligente, dibujada como un atlas."_
- **Posicionamiento:** _"Para el entusiasta y el profesional de la domótica que orquesta más de un protocolo, Atlaps es el atlas SaaS español que diseña, compra y opera tu instalación bajo soberanía europea — porque tu casa inteligente merece un mapa propio, no un dashboard ajeno."_
- **4 audiencias:** DIYer avanzado · Instalador · Integrador (CEDIA) · Arquitecto.
- **Idioma:** **castellano peninsular** (tú/vosotros, sin voseo, sin anglicismos gratuitos).

## Sistema cromático (heredado del design system)

Ver `app/globals.css` y `design-system/TOKENS.md`. Resumen:

- Blueprint deep `#0F2A4A` · mid `#1E4D7A` · soft `#3A7BB8`
- Paper bone `#F5F1E8` · grid `#E8E0CC`
- Amber signal `#C77D2C` · glow `#E89642`
- Ink graphite `#1A1F2E` · pencil `#5C6B7F`

## Tono de voz (5 reglas que el copy debe respetar)

1. Sobrio pero accesible. El técnico se reconoce, el DIYer no se asusta.
2. Confiado sin arrogancia.
3. Soberano y radical en transparencia (self-host, voz local, comisiones declaradas).
4. Castellano peninsular sin voseo, sin anglicismos.
5. Anti-jerga: "atlas" no "dashboard", "memoria profesional" no "as-built doc", "instalación" no "setup".

## Stack técnico del prototipo

- Next.js 15 App Router + TypeScript + Tailwind v4 con `@theme`.
- shadcn/ui + Radix UI primitives.
- Lucide React para iconos.
- WCAG 2.2 AA · mobile-first 360px · Lighthouse mobile ≥95 objetivo.
- Modo claro y oscuro (toggle visible en header).
- i18n estructura preparada (es por defecto, en como segunda).

## Sitemap del prototipo

### A · Landing pública (`/`)

1. Header sticky · logo + nav (Producto · Precios · Documentación · Comunidad) + toggle dark/light + CTA `Crear cuenta gratis`.
2. Hero · titular + subtítulo + 2 CTAs (`Empezar gratis` primario · `Ver el atlas en acción` secundario) + visual blueprint del canvas tldraw mockup.
3. Cinturón de logos protocolos · KNX · Matter · Zigbee · Z-Wave · Modbus · BACnet · Wi-Fi · DALI con tooltip de "compatible / experimental".
4. 5 pilares en grid · cards con icono + título + descripción 2 frases + enlace `Saber más →` (Planificador · Mercado · Monitor · Sugerencias · ComtubernIA).
5. Bloque "Cómo funciona" · 3 pasos: _Diseña tu instalación → Compra el material → Opera y monitoriza_.
6. Pricing · 3 tiers (Free 0 € · **Solo 24,90 €/mes** destacado · Studio 59 €/mes) con feature checklist.
7. Bloque ABP open-source · _"Atlaps Bridge Protocol — un MCP para domótica"_ + badge GitHub stars.
8. Bloque transparencia radical · 3 promesas con icono: self-host UE · voz local · comisiones declaradas.
9. Testimonios · 3 slots con `data-testimonial-slot` placeholder.
10. FAQ · 8 preguntas.
11. Newsletter / waitlist · email + checkbox RGPD + CTA `Avísame cuando esté listo`.
12. Footer · navegación + redes + about Iniciativa Alexendros S.L. + NIF + legales + selector idioma.

Copy del hero (literal):

- **Titular:** _Tu casa inteligente, dibujada como un atlas._
- **Subtítulo:** _Diseña la topología, calcula el material y opera la instalación. Multi-protocolo (KNX, Matter, Zigbee y 5 más), voz local UE y un atlas vivo en castellano._
- **CTA primario:** Empezar gratis
- **CTA secundario:** Ver el atlas en acción

### B · App autenticada · 3 vistas

Shell común con sidebar izquierda (logo · Planificador · Mercado · Monitor · Sugerencias · Configuración · perfil abajo).

#### B1 · `/app/planificador/proyecto-ejemplo`

3 columnas: izquierda 240 px (árbol estancias), centro flexible (canvas blueprint con grid 8 px, dispositivos como pins ámbar, conexiones blueprint-soft), derecha 320 px (propiedades + BOM).

Demo: casa 80 m² con 12 dispositivos (3 termostatos KNX, 4 luminarias Matter, 2 persianas Zigbee, 1 cámara Wi-Fi, 1 panel principal, 1 sensor exterior).

#### B2 · `/app/mercado`

Header con buscador + filtros. Grid 3-col cards de producto con foto, marca, modelo, protocolo, precio, comparativa Amazon Business, badge "2.ª mano A". Lateral derecho 320 px: carrito + comisión declarada.

#### B3 · `/app/monitor` (preview F4)

Header con instalación seleccionada + estado bridge (verde/ámbar/rojo). Grid de tiles por estancia. Timeline inferior con eventos (`device.state` · `incident.open` · `bridge.heartbeat`). Latencia P95 visible.

## Restricciones explícitas

- NO paletas púrpura (no confundir con Vergina Imperial).
- NO parallax decorativo, fades genéricos, neón sci-fi, partículas.
- NO imágenes stock cliché.
- NO texto en inglés (excepto nombres propios).
- NO traducir términos técnicos consagrados: KNX, Matter, Zigbee se mantienen.

## Output esperado

Aplicación Next.js 15 navegable con las 4 rutas (`/`, `/app/planificador/proyecto-ejemplo`, `/app/mercado`, `/app/monitor`), `globals.css` con tokens Tailwind v4, componente `<Logo />` SVG inline, README breve.

Si single-page artifact: HTML autocontenido con anchors entre las 4 secciones.

---

Versión del brief: prototype-landing v0 · 2026-04-30.
