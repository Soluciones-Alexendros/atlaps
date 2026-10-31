# Checklist Vercel (solo Alejandro)

### Propósito de este documento

- **Objetivos:** Listar ajustes del proyecto Vercel que el agente no aplica ni imprime.
- **Estructura:** Reconexión → variables → protección → forks → logs.
- **Contenido a integrar según contexto:** Fase 6 hardening Atlaps. Producción: `https://atlaps.vercel.app`.

## Antes de todo

1. Reconectar el proyecto al repo **`Soluciones-Alexendros/atlaps`** (el remoto antiguo era `saas-atlaps` / org previa).
2. **Root Directory** vacío (raíz del monorepo).

## Variables de entorno

- Ejecutar `vercel env ls` y anotar **solo nombres** (nunca valores).
- Separar Production / Preview / Development.
- Previews **sin** secretos de producción (`RESEND_API_KEY`, `CONTACTO_TO` de prod). Usar buzones/claves de prueba o omitir envío real.

## Protección y despliegues

1. Protección de vistas previas **activada**.
2. Producción **pública** (el apex ya responde 200).
3. Forks **sin** despliegue automático.
4. Revisar logs de build recientes por filtraciones (tokens, `.env`, rutas personales).

## Verificación post-fase 5

```bash
curl -sI https://atlaps.vercel.app | rg -i 'strict-transport|content-security|referrer-policy|permissions-policy|x-frame|x-powered'
```

Esperado: 200, HSTS, CSP (y Report-Only tras 5a), Referrer-Policy, Permissions-Policy, X-Frame-Options / frame-ancestors; **sin** `x-powered-by`.
