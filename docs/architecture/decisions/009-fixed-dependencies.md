# ADR 009 · Fixed dependencies (no caret policy)

- **Estado:** ✅ aceptado (1-may-2026)
- **Decisor:** Alexendros (PI)
- **Producto:** Atlaps · Iniciativa Alexendros, S.L.

## Contexto

En la mañana del 1-may-2026, Dependabot abrió 13 PRs simultáneos en `Alexendros/Atlaps` (10 npm + 3 GitHub Actions), incluyendo majors potencialmente disruptivos (Next 16, TypeScript 6, lucide-react 1.x, lint-staged 16, commitlint 20, eslint-config-prettier 10, @types/node 25). El proyecto está en F0 cerca del cierre, con foco en plumbing productivo (PR #4) y rebrand v3.1 Atlapp→Atlaps; F6 (drop CDN socios) y F7 (tests Vitest+Playwright) aún no han comenzado.

Recibir bumps automáticos vía rangos `^` significaba que, ante cualquier `pnpm install` fresco (CI, contributor nuevo, Vercel preview), la versión efectiva podía variar sin auditoría humana, especialmente peligroso con majors anunciados (TS 6, Next 16) que podrían colarse vía resolución transitiva de peers.

## Decisión

**Política de pinning estricto**: todas las `dependencies` y `devDependencies` en `package.json` se fijan con versión exacta (sin `^`, sin `~`, sin rangos). El operador (Alexendros) controla manualmente cuándo aceptar un bump major leyendo el migration guide y validando E2E.

`packageManager: pnpm@10.0.0` ya estaba fijado y se conserva.

## Matriz por paquete (1-may-2026)

| Paquete                          | Antes    | Decidida | Tipo        | Razón                                                              |
| -------------------------------- | -------- | -------- | ----------- | ------------------------------------------------------------------ |
| next                             | 15.5.15  | 15.5.15  | PIN-CURRENT | Next 16 introduce async params/cookies/headers; defer hasta F6     |
| react                            | 19.0.0   | 19.2.5   | PIN-LATEST  | Minor compatible; sin breaking en API actual                       |
| react-dom                        | 19.0.0   | 19.2.5   | PIN-LATEST  | Alineado con react                                                 |
| typescript                       | ^5.6.3   | 5.9.3    | PIN-CURRENT | TS 6 muy nuevo; next/typescript plugin no validado en 6.x          |
| @types/node                      | ^22.10.2 | 24.12.2  | PIN-LATEST  | Alineado con runtime (toolbox Node 24.14.1, engines >=22)          |
| @types/react                     | ^19.0.2  | 19.2.14  | PIN-LATEST  | Alineado con react 19.2.5                                          |
| @types/react-dom                 | ^19.0.2  | 19.2.3   | PIN-LATEST  | Alineado con react-dom 19.2.5                                      |
| lucide-react                     | ^0.468.0 | 1.14.0   | PIN-LATEST  | latest real en npm (verificado); ABI compatible para íconos usados |
| @radix-ui/\* (7 paquetes)        | ^x.y.z   | exact    | PIN-LATEST  | Resolución locked actual; sin breaking observado                   |
| clsx                             | ^2.1.1   | 2.1.1    | PIN-LATEST  | Versión idéntica                                                   |
| tailwind-merge                   | ^2.5.5   | 2.5.5    | PIN-CURRENT | v3 disponible pero fuera de Dependabot; defer a refresh trimestral |
| tailwindcss                      | ^4.0.0   | 4.2.4    | PIN-LATEST  | Lockfile actual                                                    |
| @tailwindcss/postcss             | ^4.0.0   | 4.2.4    | PIN-LATEST  | Alineado                                                           |
| postcss                          | ^8.5.0   | 8.5.13   | PIN-LATEST  | Patch                                                              |
| eslint                           | ^9.17.0  | 9.39.4   | PIN-CURRENT | v10 disponible pero fuera Dependabot; defer                        |
| @eslint/eslintrc                 | ^3.2.0   | 3.3.5    | PIN-LATEST  | Patch                                                              |
| eslint-config-next               | 15.5.15  | 15.5.15  | PIN-CURRENT | Debe coincidir con next major                                      |
| eslint-config-prettier           | ^9.1.0   | 10.1.8   | PIN-LATEST  | Major dev-only sin impacto runtime; lint+build verdes              |
| @typescript-eslint/parser        | ^8.20.0  | 8.59.1   | PIN-LATEST  | Minor                                                              |
| @typescript-eslint/eslint-plugin | ^8.20.0  | 8.59.1   | PIN-LATEST  | Minor                                                              |
| eslint-plugin-tailwindcss        | ^3.17.5  | 3.18.3   | PIN-LATEST  | Patch                                                              |
| eslint-plugin-jsx-a11y           | ^6.10.2  | 6.10.2   | PIN-LATEST  | Idéntico                                                           |
| prettier                         | ^3.4.2   | 3.8.3    | PIN-LATEST  | Minor                                                              |
| husky                            | ^9.1.7   | 9.1.7    | PIN-LATEST  | Idéntico                                                           |
| lint-staged                      | ^15.3.0  | 16.4.0   | PIN-LATEST  | Major dev-only; lint+commit verdes                                 |
| @commitlint/cli                  | ^19.6.1  | 20.5.3   | PIN-LATEST  | Major dev-only; commit-msg hook verde                              |
| @commitlint/config-conventional  | ^19.6.0  | 20.5.3   | PIN-LATEST  | Alineado con cli                                                   |

### GitHub Actions (`.github/workflows/ci.yml`)

| Action             | Antes | Decidida | Tipo       |
| ------------------ | ----- | -------- | ---------- |
| actions/checkout   | v4    | v6       | PIN-LATEST |
| pnpm/action-setup  | v4    | v6       | PIN-LATEST |
| actions/setup-node | v4    | v6       | PIN-LATEST |

## Disparadores para cambios futuros

Bumps majors solo tras:

1. Lectura del migration guide oficial.
2. `pnpm install + pnpm lint + pnpm typecheck + pnpm format:check + pnpm build + pnpm audit --audit-level=high` verdes.
3. E2E manual del portal Next + landing socios (cuando F6 esté hecha).

Cuando F6 (drop CDN socios) y F7 (tests Vitest+Playwright) estén listos, abrir un PR de "deps refresh" trimestral que evalúe: Next 16 + TS 6 + tailwind-merge 3 + eslint 10 + @types/node 25.

## Excepciones

Si Dependabot abre un security PR (vulnerabilidad con `audit-level=high` o superior), mergear inmediato saltando esta política. Documentar el bump excepcional en bitácora del cuaderno `atlaps/`.

## Consecuencias

- ✅ Reproducibilidad determinista de builds (CI, Vercel, contributor local).
- ✅ Control humano sobre cada bump major.
- ✅ Reducción de ruido Dependabot a triaje manual periódico.
- ⚠ Los rebases de Dependabot tras este PR cerrarán automáticamente los PRs cuyo target version coincida con la fijada; el operador deberá cerrar manualmente los DEFER (#10 next, #11 typescript, #12 eslint-config-next, #17 @types/node 25 si se prefiere mantener 24).
- ⚠ Más fricción para incorporar parches de seguridad menores (mitigado por excepción documentada arriba).

## Punteros

- PR de aplicación: `chore/pin-deps-and-adr009` → `main`
- Archivo interno del operador (privado): ADR-009-fixed-dependencies.
- ADR previos: 007 (marca independiente blueprint), 008 (en preparación, otra task).
