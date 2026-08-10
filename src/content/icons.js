/**
 * Logos de tecnologías y herramientas.
 *
 * Las imágenes viven en `src/tecnologias/` y `src/herramientas/`, y Vite las procesa
 * como assets: las copia al build con un nombre con hash y devuelve su URL final.
 *
 * Se importan por carpeta en vez de servirlas desde `public/` para que el bundler les
 * ponga hash y las versione solo.
 *
 * Para agregar un logo alcanza con dejar el archivo en la carpeta y referenciarlo en
 * `skills.js` por su nombre sin extensión — no hay que tocar este archivo.
 *
 * Ojo con el nombre del archivo: `#` rompe la resolución del import porque se
 * interpreta como fragmento de URL (por eso el logo de C# se llama `csharp.png`).
 */

/** { '../tecnologias/react.png': 'https://…/react-a1b2c3.png' } -> { react: 'https://…' } */
function byFileName(modules) {
  return Object.fromEntries(
    Object.entries(modules).map(([path, url]) => {
      const fileName = path.split('/').pop().replace(/\.[^.]+$/, '');
      return [fileName, url];
    }),
  );
}

export const techIcons = byFileName(
  import.meta.glob('../tecnologias/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

export const toolIcons = byFileName(
  import.meta.glob('../herramientas/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

/** Fotos de títulos/certificados, usadas en `education.js`. Mismo mecanismo que los logos. */
export const certificateImages = byFileName(
  import.meta.glob('../certificados/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);
