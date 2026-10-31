# Checklist de acceso (solo Alejandro)

### Propósito de este documento

- **Objetivos:** Listar ajustes de Settings de GitHub y tokens que el agente no aplica.
- **Estructura:** Actions → colaboradores → tokens.
- **Contenido a integrar según contexto:** Fase 4 hardening Atlaps.

## GitHub Settings

1. **Actions → General → Fork pull request workflows from outside collaborators:** exigir aprobación para workflows de forks de todo colaborador externo.
2. Revisar **Collaborators** y equipos: mínimo privilegio; quitar cuentas que no aporten.
3. Revisar **Personal access tokens** / fine-grained tokens y GitHub Apps con acceso al repo: permisos mínimos, rotar si hay duda.
4. No activar revisión obligatoria ni commits firmados (operador solo).
5. CODEOWNERS ya cubre `.github/`, `proxy.ts`/`middleware.ts`, `vercel.json`, `app/api/` y `lib/contacto/` (`@Alexendros`).
