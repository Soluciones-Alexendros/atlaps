<!-- canon-managed: true -->

# Pull request

### Propósito de este documento

- **Objetivos:** Guiar la descripción de un PR (qué, por qué, cómo probar) y la lista de comprobación P1.
- **Estructura:** Qué → por qué → cómo probar → capturas → checklist → notas.
- **Contenido a integrar según contexto:** El CI canónico son los jobs `quality`, `test`, `build` y `smoke`. No pidas force-push ni cambios de org settings.

## Qué

Resume en una o dos frases qué cambia este pull request.

## Por qué

Explica el motivo. Si cierra un issue, indica `Cierra #N`.

## Cómo probar

Pasos verificables para revisar manualmente:

1.
2.
3.

## Capturas (si afecta a UI)

<!-- pega capturas o gifs antes / después -->

## Lista de comprobación

- [ ] El CI está verde (`quality`, `test`, `build`, `smoke`).
- [ ] Se han añadido o ajustado tests cuando aplica.
- [ ] La documentación pertinente (README, ARCHITECTURE, ADR) está actualizada.
- [ ] El `CHANGELOG.md` recoge el cambio en `[Sin publicar]`.
- [ ] No se introducen secretos ni credenciales.
- [ ] Los cambios siguen el [Código de Conducta](../CODE_OF_CONDUCT.md) y la guía de [contribución](../CONTRIBUTING.md).

## Notas para revisión

<!-- consideraciones especiales para quien revise -->
