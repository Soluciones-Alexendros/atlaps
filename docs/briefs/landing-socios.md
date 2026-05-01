# Brief para Design de Claude · Landing de socios y colaboradores

> Aplica el design system Atlaps (estética blueprint, configuración tipográfica A para marketing) para producir una landing privada dirigida a **socios potenciales, business angels, partners estratégicos e instaladores integradores**. NO es la landing pública para usuarios finales (esa la cubre `BRIEF-PROTOTYPE.md`). Hereda paleta, tokens, logo, motion y tono. Ruta objetivo: `/socios` (también accesible vía `socios.atlaps.com`).

---

## Encargo en una frase

Construye una **landing privada `/socios`** que explique a futuros socios y colaboradores qué es Atlaps, en qué se diferencia frente a Home Assistant / SmartThings / Hubitat / Loxone / Apple Home / Google Home / Homey / D-Tools, qué garantías de privacidad y soberanía aporta, cómo se complementan sus cinco pilares, y qué formas concretas hay de colaborar — sin caer en marketing-puffery ni jerga inversora vacía.

## Quién verá esta página

- **Business angels** especializados en SaaS B2B / hardware / IoT.
- **Partners estratégicos**: distribuidores domótica (Domótica Davinci, Casadomo, Automatización Online, Futurasmus), fabricantes hardware Matter/KNX, instaladoras integradoras de cultura CEDIA.
- **Operadores autónomos avanzados** y arquitectos que pueden actuar como early adopters / advisors.
- **Evaluadores de programas públicos** (IVACE, ENISA, CDTI Neotec, AVI) que aterricen al revisar la solicitud.
- **NO es para clientes finales** (DIYer suelto, casual home automator); para esos está la landing pública.

## Tono editorial

- **Técnico-empresarial.** Cifras, ratios, fechas, hitos verificables. Cero adjetivos vacíos ("revolucionario", "disruptivo", "ground-breaking" — todos prohibidos).
- **Honestidad operativa.** Decir lo que está hecho (F0), lo que está en marcha (F1-F4) y lo que está abierto (Bloque B y C, ADRs deferidos) con la misma claridad. Si una cifra es estimada o supuesta, marcarla con ⚠ explícito.
- **Soberanía como hilo conductor.** Cada bloque conecta con la promesa de soberanía UE, no como slogan sino como decisión técnica concreta (self-host, voz local, ABP open-source, sin CDNs Google, etc.).
- **Castellano peninsular.** Sin voseo, sin anglicismos gratuitos. Términos técnicos consagrados se mantienen (KNX, Matter, Zigbee, MRR, NPS, LTV/CAC).
- **Confidencialidad explícita.** Watermark visible: _"Documento de trabajo · confidencial · v0.1 · 30-abr-2026"_ en footer y en margen lateral.

## Sistema visual

- **Heredar tokens del design system** (`tokens.css`, `app/globals.css`).
- **Configuración tipográfica A** (Fraunces + Inter + JetBrains Mono). El cuerpo es marketing, no app.
- **Modo claro por defecto** (paper-bone), toggle a oscuro disponible en header.
- **Logo horizontal** en header. **Watermark** del wordmark al 6% de opacidad como fondo decorativo opcional en hero (estilo plano técnico).

## Sitemap detallado de la landing /socios

Una sola página, 14 bloques en orden:

### 1. Header sticky

- Logo horizontal a la izquierda.
- Nav minimal: _Producto_ (anchor) · _Diferenciación_ · _Privacidad_ · _Negocio_ · _Roadmap_ · _Colaborar_.
- Toggle dark/light.
- CTA primario derecha: `Solicitar conversación` (abre el formulario del bloque 14).
- Sub-bandera discreta: `Documento confidencial · v0.1` con tooltip de última actualización.

### 2. Hero

- Título grande (Fraunces 49–61 px): _"Un atlas de domótica que se opera, no se gestiona."_
- Subtítulo (Inter 20 px, ink-pencil): _"Atlaps construye desde Comunitat Valenciana el primer SaaS español multi-protocolo con voz local UE, self-host de stack completo y un protocolo abierto Apache-2.0 para operar instalaciones reales. Esta página explica por qué buscamos socios y qué hay debajo."_
- Dos CTAs: `Solicitar conversación` (primario amber-signal) · `Descargar dossier (PDF)` (secundario outline blueprint).
- Visual a la derecha: composición SVG blueprint con 5 nodos etiquetados (Planificador, Mercado, Monitor, Sugerencias, ComtubernIA) conectados por líneas blueprint-soft.
- Bandera inferior con 3 cifras clave: _Bootstrap 4-may-2026_ · _v1.0 GA prevista 2-ago-2026_ · _Cash-runway 12 meses · 1.080 €_.

### 3. El problema (gap del mercado)

Título: _"El mercado europeo de la domótica está fragmentado en cuatro silos que nadie cose."_

Cuatro tarjetas en grid 2×2:

1. **Diseñar instalaciones** — herramientas DIY gratis (HA Mesh, Z2M Map) o suites profesionales caras (D-Tools 99–999 USD/mes).
2. **Comprar el material** — Amazon Business para particulares, distribuidores opacos para profesionales.
3. **Operar instalaciones** — Home Assistant exige ops casero, plataformas comerciales (SmartThings, Apple Home) son cajas cerradas con dependencia US.
4. **Voz e IA** — Alexa, Google y Siri ofrecen calidad pero leakean datos a US; las alternativas locales (HA Voice, Rhasspy) requieren instalación heroica.

Cada tarjeta cierra con: _"Atlaps cubre las 4 capas en una sola plataforma operada desde UE."_

### 4. Atlaps en una mirada (5 pilares + ABP + ComtubernIA)

Diagrama central (SVG): los 5 pilares como cinco "estancias" de un plano arquitectónico interconectadas por lineas blueprint-soft.

Tarjetas debajo, una por pilar:

| Pilar             | Resumen 2 líneas                                                                                                | Estado                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Planificador**  | Canvas blueprint con BOM auto-calculado, plantillas de escena, import .knxproj, export HA YAML + PDF + DXF/IFC. | F1 (8-may → 29-may)     |
| **Mercado**       | Catálogo SKU con ficha técnica + comparativa precio + 2.ª mano A/B/C verificada + comisiones declaradas.        | mes 5–9                 |
| **Monitor + ABP** | Operación tiempo real vía Atlaps Bridge Protocol Apache-2.0 ("un MCP para domótica"), uptime ≥99%.              | alpha F4, GA F6         |
| **Sugerencias**   | Daemon que muestra el revenue declarado de cada recomendación (transparencia radical).                          | mes 9–12                |
| **ComtubernIA**   | Voz 100% local UE: Whisper-large-v3 ES + Piper TTS + openWakeWord + LLM Mistral La Plateforme UE.               | F4 thin → F6 LLM propio |

Bloque inferior con badge: `Atlaps Bridge Protocol — repo público atlaps/abp (Apache-2.0) · "un MCP para domótica"`.

### 5. Diferenciación competitiva

Tabla comparativa de 8 columnas y ~10 filas. Marcar con tokens del sistema:

- ✅ verde (`--color-success`): cumple
- ⚠ amber-signal: cumple parcialmente / con caveat
- ❌ danger: no cumple
- — neutro (`--color-ink-pencil`): no aplica

Filas obligatorias:

| Capacidad                                        | Atlaps | Home Assistant | SmartThings | Hubitat | Loxone | Apple Home | Google Home | Homey | D-Tools |
| ------------------------------------------------ | ------ | -------------- | ----------- | ------- | ------ | ---------- | ----------- | ----- | ------- |
| Diseño + BOM + memoria PDF profesional           | ✅     | ❌             | ❌          | ❌      | ⚠      | ❌         | ❌          | ❌    | ✅      |
| Multi-protocolo nativo (KNX+Matter+Zigbee+...)   | ✅     | ✅             | ⚠           | ⚠       | ⚠      | ❌         | ❌          | ⚠     | ✅      |
| Castellano peninsular completo (UI + voz + docs) | ✅     | ⚠              | ⚠           | ❌      | ⚠      | ✅         | ✅          | ⚠     | ❌      |
| Voz 100% local UE (sin cloud)                    | ✅     | ⚠              | ❌          | ❌      | ❌     | ❌         | ❌          | ❌    | ❌      |
| Self-host UE de stack completo                   | ✅     | ✅             | ❌          | ⚠       | ⚠      | ❌         | ❌          | ❌    | ❌      |
| Protocolo abierto operación (ABP)                | ✅     | ⚠              | ❌          | ❌      | ❌     | ❌         | ❌          | ❌    | ❌      |
| Pricing < 25 €/mes para profesional              | ✅     | —              | ⚠           | ✅      | ❌     | —          | —           | ⚠     | ❌      |
| Marketplace 2.ª mano integrado                   | ✅     | ❌             | ❌          | ❌      | ❌     | ❌         | ❌          | ❌    | ❌      |
| Comisiones declaradas en sugerencias             | ✅     | —              | ❌          | ❌      | —      | ❌         | ❌          | ❌    | —       |
| Cumplimiento RGPD verificable (sin CDN US)       | ✅     | ⚠              | ❌          | ⚠       | ⚠      | ❌         | ❌          | ⚠     | ⚠       |

Pie de tabla: _"Comparativa basada en información pública de cada producto a 30-abr-2026. Marcado conservador en caso de duda."_

### 6. Privacidad y soberanía como decisiones técnicas

Tres columnas con título grande, snippet de código y un párrafo de contexto:

#### Columna 1 — _"Self-host de stack completo"_

```yaml
# /docker-compose.yml (Hetzner CX32 · UE)
services:
  - supabase # postgres + auth + realtime + storage
  - glitchtip # observabilidad
  - trigger.dev # background jobs (Apache-2.0)
```

Texto: Backend completo en VPS Hetzner Falkenstein FR/DE. Coste ~13 €/mes. Backups WAL-G a Cloudflare R2 UE. Cero dependencias managed US. (ADR 006).

#### Columna 2 — _"Voz 100% local"_

```python
# ComtubernIA pipeline
ASR = Whisper-large-v3 ES   # local, GPU/CPU
TTS = Piper                 # local, ONNX
WW  = openWakeWord          # local, TFLite
LLM = Mistral La Plateforme UE → Scaleway L40S Paris (F6+)
```

Texto: Comandos no salen del hogar salvo que el usuario lo autorice explícitamente. (ADR 004 + 005).

#### Columna 3 — _"Sin trackers ni CDNs externos"_

```css
/* public/fonts/fonts.css */
@font-face {
  font-family: "Inter";
  src: url("./inter-variable.woff2");
  /* sin fonts.googleapis.com */
}
```

Texto: Self-host de fuentes (SIL OFL 1.1), sin Google Analytics (Plausible CE EU), sin Hotjar, sin Intercom. DPAs UE firmados con Stripe, Resend, Hetzner, Cloudflare. (ADR 001).

Pie del bloque: _"Cada decisión está documentada en un ADR público de este repositorio."_

### 7. Funcionalidades complementarias (sinergia entre pilares)

Diagrama interactivo: 5 nodos pilares unidos con líneas blueprint-soft etiquetadas con la sinergia.

Ejemplos de etiquetas:

- Planificador → Mercado: _"BOM se completa con SKUs reales de proveedores; precios live"_
- Mercado → Monitor: _"Compra hardware certificado ABP-compatible directamente desde el catálogo"_
- Monitor → ComtubernIA: _"Eventos del bridge alimentan respuestas de voz contextual"_
- Sugerencias → Mercado: _"Sugerencia detecta hueco en la instalación, propone SKU del catálogo"_
- ComtubernIA → Planificador: _"Voz asistida para crear escenas y dispositivos sin tocar el canvas"_

Bloque inferior con tres frases:

1. _"Los pilares operan independientemente: el Planificador funciona sin Monitor, el Mercado sin Sugerencias, etc."_
2. _"Pero juntos cierran el ciclo diseño → compra → operación → optimización."_
3. _"El Atlaps Bridge Protocol asegura que cualquier integración futura siga el mismo modelo de datos."_

### 8. Modelo de negocio

Tres columnas de pricing:

- **Free** — 0 € — 3 proyectos, ≤25 dispositivos, PDF básico → _"Captura de comunidad y SEO orgánico"_.
- **Solo** — 24,90 €/mes IVA inc. — proyectos ilimitados, KNX import, HA export, memoria PDF → _"DIYer avanzado e instalador autónomo"_.
- **Studio** — 59 €/mes IVA inc. — colaboración tiempo real, cajetín arquitectónico, DXF, catálogo profesional → _"Integradores y arquitectos"_.

Debajo, tres streams adicionales (futuro F2-F6):

- **Marketplace** — comisión 5–12% acuerdos directos · 2–8% afiliación · 18–28% margen 2.ª mano. GMV objetivo ≥5.000 €/mes mes 9.
- **Sugerencias** — comisión declarada por recomendación. Revenue objetivo ≥1.500 €/mes mes 12.
- **Operate / Pro** — tiers F6+ con ABP cloud y bundles para integradoras.

Debajo, tabla de **OKRs cuantitativos** (5 destacados):

| OKR                             | Hito      | Cuándo | Confianza                      |
| ------------------------------- | --------- | ------ | ------------------------------ |
| 100 cuentas Free + NPS ≥ 30     | tracción  | mes 6  | media-alta                     |
| 25 conversiones Solo            | revenue   | mes 4  | ⚠ supuesto sin tracción previa |
| 5 cuentas Studio                | revenue   | mes 6  | media                          |
| ≥100 ⭐ GitHub `atlaps/abp`     | comunidad | mes 12 | media                          |
| 25 instalaciones ABP en Monitor | red       | mes 13 | abierto                        |

### 9. Tracción y métricas tempranas (si las hay)

Si en el momento de mostrar la landing existen ya datos (waitlist, entrevistas, prensa), poner aquí:

- N emails en waitlist + tasa de validación.
- N entrevistas hechas + 2-3 quotes anonimizadas.
- N estrellas en repo `atlaps/abp` si está publicado.

Si todavía no hay datos: una sola frase honesta — _"Tracción en construcción. F0 arranca 4-may-2026."_

### 10. Roadmap 18 meses (timeline visual)

Línea horizontal con 6 hitos:

- F0 (4-7 may 2026) → bootstrap, IVACE radicada
- F1 Slice 1 Free (8-29 may)
- F2 Slice 2 Solo (30 may - 20 jun)
- F3 Slice 3 Studio (21 jun - 19 jul)
- F4 GA 1.0 (2-ago-2026)
- Mes 5-9: Marketplace + Bloque B
- Mes 10-13: P3 Monitor + LATAM + IFC 2x3
- Mes 14-18: Matter 1.5 Energy + ComtubernIA F6 LLM propio

Cada nodo con tooltip de hitos cuantitativos.

### 11. Equipo y vehículo

- Foto + nombre + bio breve del PI (Alejandro Domingo Agustí).
- Breakdown rol PI: arquitecto, fullstack, ops, comunicación.
- Vehículo jurídico: **Iniciativa Alexendros, S.L.** pluripersonal, sede Comunitat Valenciana, CNAE 6201/7022.
- Subcontrataciones previstas: laboratorio CE/RED, asesoría legal RGPD, traducciones LATAM.
- Plan de incorporaciones 24 meses (con métricas de activación).

Frase de cierre del bloque: _"Estructura ligera por elección; capacidad real con Claude Code factor ~3× equivalente."_

### 12. Financiación en marcha

Estado de los 4 programas:

| Programa                           | Importe             | Plazo                 | Estado                   |
| ---------------------------------- | ------------------- | --------------------- | ------------------------ |
| IVACE INNOVA-CV TEIC               | 50–70% del proyecto | 5-may-2026 23:59      | 🔴 redacción urgente     |
| ENISA Jóvenes Emprendedores        | 25–75 k€            | abierto               | 🟡 borrador desde D-1    |
| CDTI Neotec                        | hasta 325 k€        | conv. anual jun-jul   | 🟡 monitorizar           |
| AVI Agència Valenciana d'Innovació | variable            | varias líneas anuales | 🟡 mapear compatibilidad |

Frase de cierre: _"Buscamos socios que complementen subvención y deuda blanda con conocimiento de mercado, red de contactos y validación operativa."_

### 13. Cómo colaborar (5 vías concretas)

Cinco tarjetas, cada una con título + descripción 2-3 líneas + CTA propio:

1. **Inversión semilla / pre-seed** — ticket orientativo 15-50 k€ por socio, hasta ronda 200-300 k€. Pacto de socios estándar VC EU. CTA: _"Ver dossier financiero"_.
2. **Advisor técnico** — equity ~0.25-1.0% por compromiso 6-12 meses, foco en ABP, Matter, voz local o canal integrador. CTA: _"Contactar como advisor"_.
3. **Partner integrador** — early access Studio + comisión por cuentas referidas + voz en roadmap del módulo Profesional. CTA: _"Programa partners"_.
4. **Distribución hardware** — incorporación al catálogo Mercado + integración API + comisión declarada. CTA: _"Acuerdo distribución"_.
5. **Cliente piloto** — instalación real subvencionada por Atlaps a cambio de feedback estructurado y testimonio. CTA: _"Aplicar como piloto"_.

### 14. Formulario contacto + CTA

Form simple en card con grid 1-col:

- Nombre · email · empresa (opcional) · vía de interés (select con las 5 opciones del bloque 13) · mensaje libre · checkbox RGPD obligatorio · botón `Solicitar conversación`.

Submit: webhook a Resend que crea ticket interno + envía respuesta automática en castellano firmada por _"Iniciativa Alexendros, S.L. · contacto@alexendros.me"_.

Sub-bandera con tres garantías: _"Respondemos en ≤72 h"_ · _"NDA recíproco bajo petición"_ · _"Tu correo nunca se cede a terceros"_.

### 15. Footer

- Logo horizontal blanco sobre blueprint-deep (modo dark del footer aunque la página esté en claro).
- 3 columnas: _Producto_ (links a la landing pública atlaps.com) · _Compañía_ (Iniciativa Alexendros, S.L. · NIF · sede CV) · _Legal_ (privacy · terms · cookies · imprint).
- Línea final con watermark: _"Documento confidencial · v0.1 · 30-abr-2026 · prohibida su reproducción sin autorización escrita de Iniciativa Alexendros, S.L."_
- Selector de idioma (es default · en futuro).

## Restricciones absolutas

- NO inventar testimonios. Si no hay quotes reales, dejar el bloque 9 con la frase honesta _"Tracción en construcción"_.
- NO inflar cifras. Si una métrica es supuesto, marcarla con ⚠ en la propia tabla.
- NO usar imágenes stock genéricas. Sólo SVG inline blueprint, fotografía real (operador), o ilustración custom cartográfica.
- NO usar paletas púrpura ni mezcla con Vergina Imperial.
- NO usar parallax, fades genéricos, neón, partículas decorativas.
- NO incluir métricas de "competencia" como rankings G2/Capterra (la landing es para socios, no SEO comparativo).
- NO ocultar caveats. La sección 8 muestra ⚠ en los OKRs sin tracción previa, la 12 muestra el riesgo IVACE 5-may, la 11 muestra que el equipo es solista.

## Output esperado

- Una sola página `/socios` (HTML autocontenida si es single-page artifact, o ruta App Router `app/socios/page.tsx`).
- Hereda todos los tokens del design system actual (`tokens.css`, `app/globals.css`).
- Usa configuración tipográfica A (Fraunces + Inter + JetBrains Mono).
- Modo claro por defecto + toggle a oscuro funcional.
- Watermark "confidencial / v0.1 / 30-abr-2026" visible en footer y barra superior.
- Form de contacto funcional (mock submit en showcase, real con Resend en producción).
- Lighthouse mobile ≥95 objetivo, WCAG 2.2 AA cumplido (focus visibles, contraste, alt text).
- Si single-page artifact: HTML autocontenido con CSS inline + SVG inline.

## Pregunta opcional al diseñador IA

Al final del entregable, sugerir 3 mejoras concretas que NO se hayan ejecutado por scope (p.ej. data-room privado por código, guard de acceso con magic-link, integración Notion para que el formulario de contacto cree una entrada de CRM).

---

Versión del brief: socios v0 · 2026-04-30.
