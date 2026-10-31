# Respuesta a incidentes de seguridad

### Propósito de este documento

- **Objetivos:** Procedimiento de revocar, rotar, avisar y analizar después un incidente que afecte a Atlaps (repo público / Vercel Hobby).
- **Estructura:** Contención → rotación → aviso → post-mortem → revisión mensual.
- **Contenido a integrar según contexto:** Complementa [`docs/runbooks/incidente.md`](../runbooks/incidente.md) y [`SECURITY.md`](../../SECURITY.md). No sustituye el canal privado de vulnerabilidades.

## 1. Contener

1. No abras un issue público si hay sospecha de vulnerabilidad. Sigue [`SECURITY.md`](../../SECURITY.md) (`security@alexendros.me`).
2. Si el portal está comprometido: rollback del deployment en Vercel al anterior estable. No toques DNS desde un PR.
3. **No** reescribas historial Git (`filter-repo`, BFG, force push). El secreto queda en el historial público: hay que **rotarlo**.

## 2. Revocar y rotar

| Activo                       | Acción                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`             | Revocar en Resend; emitir nueva; actualizar solo en Vercel Production (y Preview de prueba si aplica). |
| Tokens GitHub / fine-grained | Revocar en Settings; emitir con permisos mínimos.                                                      |
| Variables Vercel             | Rotar valor; no pegar el valor en issues ni chats.                                                     |
| Credenciales de terceros     | Revocar en el proveedor; regenerar.                                                                    |

Documenta en el post-mortem **qué** se rotó y **cuándo**, nunca el valor nuevo.

## 3. Avisar

- Interno: `security@alexendros.me` / `contacto@alexendros.me` según severidad ([SECURITY.md](../../SECURITY.md)).
- Si hubo exposición de datos personales de terceros: evaluar aviso RGPD (responsable Iniciativa Alexendros, S.L.).

## 4. Analizar después

1. Causa (filtración en repo, log de build, dependencia, malconfiguración).
2. Impacto (qué entornos, qué datos).
3. Mitigación aplicada y lagunas (p. ej. rate limit por instancia: ver [`rate-limit-contacto.md`](./rate-limit-contacto.md)).
4. Acciones preventivas: gitleaks, Dependabot/OSV, CODEOWNERS, CSP.
5. Si cambia una decisión transversal: ADR en `docs/architecture/decisions/`.

## 5. Revisión mensual (calendario)

| Chequeo               | Comando / sitio                                                             |
| --------------------- | --------------------------------------------------------------------------- |
| Secretos en historial | `pnpm secrets` o `gitleaks detect --no-banner --redact --log-opts="--all"`  |
| Dependencias          | `pnpm audit --audit-level high` + OSV en CI; UI Dependabot 0 críticas/altas |
| Alertas abiertas      | GitHub Security (secret scanning, Dependabot, CodeQL)                       |
| Cabeceras prod        | `curl -sI https://atlaps.vercel.app`                                        |
