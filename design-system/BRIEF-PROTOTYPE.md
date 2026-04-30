# Brief para Design de Claude · Prototipo landing+app · Atlaps

> Este brief es autocontenido. Pégalo tal cual como prompt en la herramienta Design de Claude. Producirá un prototipo navegable de landing + 3 vistas de app que servirán de baseline visual para D1.

---

## Encargo en una frase

Diseña y prototipa la **landing pública de `atlaps.com`** y las **3 vistas de la app autenticada** (Planificador · Mercado · Monitor preview) coherentes con el sistema blueprint, listas para iterar como base del frontend Next.js 15.

## Audiencia y posicionamiento

- Producto: Atlaps — atlas SaaS de domótica multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI). 5 pilares: Planificador · Mercado · Monitor · Sugerencias · ComtubernIA.
- Tagline: "Tu casa inteligente, dibujada como un atlas."
- Posicionamiento: "Para el entusiasta y el profesional de la domótica que orquesta más de un protocolo, Atlaps es el atlas SaaS español que diseña, compra y opera tu instalación bajo soberanía europea — porque tu casa inteligente merece un mapa propio, no un dashboard ajeno."
- 4 audiencias: DIYer avanzado · Instalador · Integrador (CEDIA) · Arquitecto.
- Idioma: castellano peninsular (tú/vosotros, sin voseo, sin anglicismos gratuitos).

## Tono de voz (5 reglas)

1. Sobrio pero accesible.
2. Confiado sin arrogancia.
3. Soberano y radical en transparencia (self-host, voz local, comisiones declaradas).
4. Castellano peninsular sin voseo, sin anglicismos.
5. Anti-jerga: "atlas" no "dashboard", "memoria profesional" no "as-built doc", "instalación" no "setup".

## Sistema cromático

Ver `BRIEF-DESIGN-SYSTEM.md` y `app/globals.css`. Tokens blueprint + paper + amber + ink.

## Tipografía

Configuración A (Fraunces+Inter+JetBrains Mono) y B (Söhne+Geist+IBM Plex Mono) — producir ambas para comparar.

## Sitemap

### A · Landing pública (`/`)

12 secciones obligatorias en orden:

1. Header sticky (logo + nav + toggle + CTA "Crear cuenta gratis")
2. Hero (titular + subtítulo + 2 CTAs + visual blueprint canvas mockup)
3. Cinturón logos protocolos (KNX · Matter · Zigbee · Z-Wave · Modbus · BACnet · Wi-Fi · DALI)
4. 5 pilares en grid (Planificador · Mercado · Monitor · Sugerencias · ComtubernIA)
5. "Cómo funciona" (3 pasos: Diseña → Compra → Opera)
6. Pricing (Free 0 € · Solo 24,90 €/mes destacado · Studio 59 €/mes)
7. ABP open-source ("un MCP para domótica" + GitHub stars)
8. Transparencia radical (self-host UE · voz local · comisiones declaradas)
9. Testimonios (3 slots placeholder `data-testimonial-slot`)
10. FAQ (8 preguntas sobre hardware, alojamiento, gratis, HA migración, autónomo, LATAM, OSS, soporte)
11. Newsletter/waitlist (input email + checkbox RGPD + CTA)
12. Footer (nav + about S.L. + NIF + legales + selector idioma)

Copy del hero (literal):

- Titular: *Tu casa inteligente, dibujada como un atlas.*
- Subtítulo: *Diseña la topología, calcula el material y opera la instalación. Multi-protocolo (KNX, Matter, Zigbee y 5 más), voz local UE y un atlas vivo en castellano.*
- CTA primario: Empezar gratis
- CTA secundario: Ver el atlas en acción

### B · App autenticada · 3 vistas

Shell común con sidebar izquierda (logo · Planificador · Mercado · Monitor · Sugerencias · Configuración · perfil).

#### B1 · `/app/planificador/proyecto-ejemplo`

- Izquierda 240 px: árbol estancias colapsable.
- Centro flexible: canvas blueprint con grid 8 px, dispositivos como pins ámbar, conexiones líneas blueprint-soft, toolbar.
- Derecha 320 px: panel propiedades + tab BOM con SKU/cantidad/precio/total + CTA "Exportar memoria PDF".
- Demo: casa 80 m² con 12 dispositivos.

#### B2 · `/app/mercado`

- Header con buscador + filtros (protocolo, categoría, precio, 2.ª mano, disponibilidad, proveedor).
- Grid 3-col cards de producto (foto, marca, modelo, protocolo badge, precio, comparativa).
- Lateral 320 px: carrito + comisión declarada visible.

#### B3 · `/app/monitor` (preview F4)

- Header con instalación + estado bridge (verde/ámbar/rojo).
- Grid tiles por estancia con dispositivos.
- Timeline eventos.
- Latencia P95 + indicador local/cloud.

## Accesibilidad

WCAG 2.2 AA · navegación teclado · modo oscuro real · `lang="es"`.

## Stack técnico

Next.js 15 App Router + TypeScript + Tailwind v4 + shadcn/ui + Radix UI + Lucide React.

## Restricciones

NO púrpura/oro Vergina Imperial · NO parallax decorativo · NO neón sci-fi · NO stock cliché · NO inglés en copy (excepto nombres propios) · NO traducir KNX/Matter/Zigbee.

## Output esperado

App Next.js 15 navegable con 4 rutas + `globals.css` con tokens + componente `<Logo />` SVG inline + README. Single-page HTML autocontenido si la herramienta lo requiere.

---

Versión: prototype v0 · 2026-04-30.
