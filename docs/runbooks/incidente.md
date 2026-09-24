# Runbook: incidente de plataforma

### Propósito de este documento

- **Objetivos:** Contener un incidente de seguridad o de disponibilidad del portal sin abrir issues públicos de vulnerabilidades.
- **Estructura:** Severidad → contención → comunicación → post-mortem.
- **Contenido a integrar según contexto:** Adapta canales de este SaaS privado. No copies un desk de comunidad. Las vulnerabilidades van por `SECURITY.md`, no por issues.

## Severidad

| Nivel | Ejemplo                                       | Respuesta       |
| ----- | --------------------------------------------- | --------------- |
| S1    | Fuga de secretos, bypass de auth, sitio caído | Inmediata       |
| S2    | Preview roto, formulario de socios fallando   | Mismo día hábil |
| S3    | Drift de docs, Renovate rojo, lint en main    | Siguiente PR    |

## Contención

1. No abras un issue público si hay sospecha de vulnerabilidad. Sigue [`SECURITY.md`](../../SECURITY.md).
2. Revoca credenciales filtradas (Resend, Vercel, tokens de GitHub) desde el panel del proveedor.
3. No hagas force-push ni reescribas historial para ocultar un secreto: rótalo y documenta.
4. Si el portal de producción está mal, rollback en Vercel al deployment anterior. No toques DNS ni org settings desde un PR.

## Comunicación

- Canal interno: `contacto@alexendros.me` / `security@alexendros.me` según [`SECURITY.md`](../../SECURITY.md).
- CODEOWNERS: `@Alexendros`.
- Tras contener, deja traza en `CHANGELOG.md` (sección Seguridad) y, si aplica, un ADR.

## Post-mortem

Anota causa, impacto, mitigación y acción preventiva. Si cambia una decisión transversal, abre ADR en `docs/architecture/decisions/`.
