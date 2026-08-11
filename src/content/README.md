# Contenido del portafolio

Todo el texto y los datos del sitio viven en esta carpeta. **No hay contenido escrito
dentro de los componentes**: para actualizar el portafolio sólo se tocan estos archivos.

## Convenciones

### 1. Campos bilingües

Cualquier texto que el visitante lee se escribe como un objeto con las dos versiones:

```js
title: { es: 'Desarrollador backend', en: 'Backend developer' }
```

Los nombres propios (empresas, tecnologías, instituciones) van como string plano,
porque no se traducen:

```js
company: 'Antel'
```

El helper `pick()` del `LanguageContext` resuelve cuál mostrar según el idioma activo.

### 2. Imágenes → Cloudinary

Todos los campos de imagen esperan **una URL completa**. Se dejan en `''` mientras no
existan: el componente `<Media>` dibuja un placeholder en su lugar, así se ve dónde falta
algo sin que se rompa el layout.

```js
image: '' // TODO: pegar acá la URL de Cloudinary
```

Para subir una imagen: Cloudinary → Media Library → Upload → copiar la "Secure URL".
Conviene pedirle a Cloudinary que optimice sola la entrega agregando `f_auto,q_auto`
en la ruta de transformación:

```
https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto/v1712345678/portfolio/feeluy-cover.png
```

Si preferís no usar Cloudinary todavía, también sirve una ruta local servida desde
`public/` (por ejemplo `/img/feeluy.png`).

### 3. Fechas

Formato `'YYYY-MM'` (o `'YYYY'` si sólo importa el año). `end: null` significa "actualidad"
y se muestra traducido automáticamente.

## Archivos

| Archivo          | Sección                                            |
| ---------------- | -------------------------------------------------- |
| `site.js`        | Nombre, rol, enlaces (LinkedIn, GitHub) y CVs       |
| `about.js`       | Texto de "Acerca de mí"                             |
| `skills.js`      | Tecnologías y herramientas                          |
| `projects.js`    | Cards de proyectos + página de detalle de cada uno  |
| `experience.js`  | Timeline de experiencia profesional                 |
| `education.js`   | Timeline de educación + modal de FING               |
| `talks.js`       | Presentaciones                                      |

## Detalle de un proyecto

La página de detalle (`/proyectos/<slug>`) se arma con el campo `sections` de
`projects.js`: una lista de paneles que se dibujan en el orden en que están escritos.
Cada panel tiene su título bilingüe y una lista de `blocks`, y cada bloque se renderiza
según su `type` — `text` (párrafos), `gallery` (carrusel con pestañas Desktop/Mobile),
`cards` (diagramas que se abren en grande) y `links` (repos, videos, tableros).

El detalle de cada tipo, con ejemplos, está en el comentario de cabecera de
`projects.js`. Para agregar material a un proyecto no hay que tocar componentes: alcanza
con sumar bloques ahí.

Los `TODO:` marcan lo que todavía falta completar con datos reales.
