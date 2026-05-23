# Decisión de Accesibilidad — US-15 / TS-04

## 1. Principio WCAG 2.2 Elegido

### Principio: **Perceptible** (Principio 1)
> "La información y los componentes de la interfaz de usuario deben presentarse
> de forma que los usuarios puedan percibirlos."

**Justificación:** En una aplicación de salas de estudio con video, audio y chat
en tiempo real, el principio Perceptible es el más crítico porque afecta
directamente la capacidad de los usuarios para recibir información transmitida
por múltiples canales sensoriales (visual + auditivo).

### Pautas específicas que abordaremos:
| Pauta WCAG 2.2 | Nivel | Aplicación en nuestro proyecto |
|----------------|-------|--------------------------------|
| 1.1.1 Contenido no textual | A | Alt-text en avatares, íconos de estado AV, botones de control |
| 1.3.1 Información y relaciones | A | Estructura semántica en chat, grid de sala, formularios con labels |
| 1.4.3 Contraste mínimo | AA | Colores del chat, botones, indicadores de estado, texto sobre fondos |
| 1.4.11 Contraste no textual | AA | Íconos de mute/unmute, bordes de video activo, focus indicators |

## 2. Discapacidad Objetivo

### Discapacidad: **Visual (baja visión)**

**Justificación:** Según la OMS, la baja visión afecta a ~246 millones de personas
globalmente. En el contexto universitario colombiano, estudiantes con baja visión
pueden beneficiarse de la plataforma si aseguramos:

- Contraste suficiente (ratio ≥ 4.5:1 para texto, ≥ 3:1 para componentes UI)
- Textos redimensionables sin pérdida de funcionalidad (hasta 200% zoom)
- Indicadores de estado no dependientes solo del color (íconos + texto + forma)
- Focus visible en todos los elementos interactivos
- Compatibilidad con herramientas de asistencia (screen readers, magnificadores)

### Herramientas de verificación:
- **Lighthouse** (Chrome DevTools) — Auditoría automática de accesibilidad
- **WAVE** (extensión de navegador) — Evaluación visual de problemas
- **WebAIM Contrast Checker** — Verificación de ratios de contraste
- **axe DevTools** — Testing automatizado en desarrollo
- **eslint-plugin-jsx-a11y** — Linting de accesibilidad en código React

## 3. Plan de Implementación (TS-04)

### Sprint 1 (Actual):
- [x] Elegir principio WCAG 2.2 y discapacidad objetivo
- [x] Documentar decisión y justificación
- [x] Implementar HTML semántico en todas las páginas base
- [x] Configurar paleta de colores con contraste accesible
- [ ] Configurar eslint-plugin-jsx-a11y

### Sprint 2:
- [ ] Implementar skip-links y navegación completa por teclado
- [ ] Auditoría Lighthouse ≥ 90 en accesibilidad en todas las vistas
- [ ] Verificar contraste en todos los componentes con WebAIM
- [ ] Testing con screen reader (NVDA en Windows / VoiceOver en Mac)

### Sprint 3:
- [ ] Auditoría final WCAG 2.2 completa
- [ ] Corrección de todos los issues encontrados
- [ ] Documento de evidencia de accesibilidad con capturas
- [ ] Verificación con usuarios (si es posible)

## 4. Evidencia de Investigación
- [WCAG 2.2 - W3C Recommendation](https://www.w3.org/TR/WCAG22/)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)
- [OMS - Discapacidad visual y ceguera](https://www.who.int/es/news-room/fact-sheets/detail/blindness-and-visual-impairment)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
