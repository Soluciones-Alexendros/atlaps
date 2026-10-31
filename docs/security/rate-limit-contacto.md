# Límite de peticiones en `/api/contacto`

### Propósito de este documento

- **Objetivos:** Documentar el rate limit en memoria y el riesgo en Vercel serverless.
- **Estructura:** Comportamiento actual → riesgo → alternativas para Alejandro.
- **Contenido a integrar según contexto:** Fase 5 hardening. Sin secretos.

## Comportamiento actual

- Implementación: [`lib/rate-limit.ts`](../../lib/rate-limit.ts) — ventana 60 s, máx. 5 peticiones por IP (cabeceras `x-forwarded-for` / `x-real-ip`).
- Respuesta 429: `{ ok: false, error: "demasiadas peticiones" }` + `Retry-After`.

## Riesgo (Vercel)

Cada instancia/fluid compute cuenta por separado: el mapa en memoria **no** es compartido entre aislados. Un atacante puede repartir carga entre instancias y superar el límite aparente.

## Alternativas (Alejandro; no implementadas)

1. **Almacén compartido** (p. ej. Redis/Upstash vía Marketplace) con la misma clave IP + ventana.
2. **Regla del firewall de Vercel** (rate limit / WAF) en el path `/api/contacto` a nivel de borde.
