# Política de seguridad de Atlaps

### Propósito de este documento

- **Objetivos:** Canal privado de vulnerabilidades, ventanas de respuesta y versiones soportadas.
- **Estructura:** Esta meta-sección → Reportar → Ventanas → Versiones soportadas → Divulgación → Marco normativo.
- **Contenido a integrar según contexto:** No abras issues públicos. El canal canónico de este producto es el correo cifrado (no GitHub Advisories públicos). Renovate es el único bot de dependencias; Dependabot Alerts permanecen ON a nivel org.

## Reportar vulnerabilidades

Si descubres una vulnerabilidad, **no abras un issue público**.

1. Escribe a **security@alexendros.me** con descripción, impacto, reproducción y commit/versión.
2. Cifra el mensaje con la clave PGP publicada en el directorio Web Key Directory (PENDIENTE_PUBLICAR_WKD, accesible vía `gpg --auto-key-locate wkd --locate-key security@alexendros.me`).

Incluye en el reporte:

- Descripción del problema y posible impacto.
- Pasos para reproducir o prueba de concepto.
- Versiones afectadas.
- Cualquier mitigación temporal conocida.

## Ventanas de respuesta

| Paso                            | Objetivo                                     |
| ------------------------------- | -------------------------------------------- |
| Acuse de recibo                 | ≤ 72 horas hábiles (Europe/Madrid)           |
| Evaluación inicial              | ≤ 7 días naturales                           |
| Resolución o plan de mitigación | ≤ 30 días naturales (90 días si es compleja) |

## Versiones soportadas

| Versión        | Soporte de seguridad |
| -------------- | -------------------- |
| última estable | sí                   |
| previa estable | parches críticos     |
| anteriores     | no                   |

## Divulgación coordinada

Trabajamos contigo para coordinar la divulgación. Si la vulnerabilidad es explotable activamente publicaremos el aviso de seguridad lo antes posible sin comprometer a las personas usuarias.

## Reconocimiento

Reconocemos públicamente a quienes nos ayudan a mejorar la seguridad salvo que solicitéis lo contrario.

## Marco normativo aplicable

Este proyecto se desarrolla y mantiene desde España. La política de divulgación responsable se inspira en lo previsto en el Reglamento General de Protección de Datos (Reglamento (UE) 2016/679, RGPD, art. 33 y 34) y en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE) cuando aplique.

Para consultas no urgentes: security@alexendros.me.
