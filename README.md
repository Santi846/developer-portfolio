# Portafolio — Santiago Arocha

React + Vite. Navegación fija a la izquierda y un panel de contenido que cambia según la
sección seleccionada, con tema claro/oscuro y español/inglés.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Cómo está organizado

```
src/
  content/     ← TODO el texto y los datos del sitio (ver content/README.md)
  i18n/        ← strings de la interfaz (botones, títulos, etiquetas) en es / en
  context/     ← ThemeContext (claro/oscuro) y LanguageContext (es/en + helpers t y pick)
  components/  ← piezas reutilizables (Layout, Sidebar, Modal, Carousel, Media, …)
  pages/       ← una por sección de la navegación
  styles/      ← theme.css (tokens) + layout / components / pages
  utils/       ← formateo de fechas
```

**Para actualizar el portafolio no hace falta tocar componentes: sólo `src/content/`.**
Ese directorio tiene su propio README con las convenciones (campos bilingües, imágenes,
fechas). Los `TODO:` marcan lo que falta completar.

## Temas e idioma

- El tema sale de `data-theme` en `<html>`; todos los colores son variables CSS definidas
  en `src/styles/theme.css`. Para retocar la paleta se edita sólo ese archivo.
- Arranca con la preferencia del sistema / del navegador y después recuerda la elección
  del visitante en `localStorage`.

## Rutas

| Ruta                          | Sección                       |
| ----------------------------- | ----------------------------- |
| `/`                           | Acerca de mí                  |
| `/habilidades`                | Habilidades — tecnologías     |
| `/habilidades/herramientas`   | Habilidades — herramientas    |
| `/proyectos`                  | Proyectos (cards)             |
| `/proyectos/:slug`            | Detalle de un proyecto        |
| `/experiencia`                | Experiencia profesional       |
| `/educacion`                  | Educación                     |
| `/presentaciones`             | Presentaciones                |
| `/contacto`                   | Contacto                      |

Al ser una SPA, el hosting tiene que devolver `index.html` para cualquier ruta.
Para Netlify eso ya está resuelto en `public/_redirects`.

## Archivos estáticos

- `public/cv/` — los PDF del CV (`-ES` y `-EN`), que el botón "CV" abre en una pestaña nueva.
- `public/img/` — imágenes servidas desde el proyecto. Lo nuevo va preferentemente a
  Cloudinary: los campos de imagen del contenido aceptan una URL completa.
