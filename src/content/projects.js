/**
 * Proyectos.
 *
 * Cada proyecto alimenta dos vistas:
 *   - la card en /proyectos  -> `slug`, `name`, `cover`, `summary`, `tech`
 *   - la página de detalle   -> el resto de los campos
 *
 * `slug` es lo que aparece en la URL (/proyectos/feeluy): sin espacios ni tildes.
 *
 * Las secciones de `detail` se renderizan en el orden en que están acá y las que
 * queden vacías (`''` en ambos idiomas) simplemente no se muestran.
 *
 * Las imágenes apuntan por ahora a `public/img/` (las que ya estaban en el repo).
 * TODO: reemplazar por URLs de Cloudinary cuando estén subidas.
 */

export const projects = [
  {
    slug: 'feeluy',
    name: 'FeelUy',
    cover: '/img/feeluy.png',
    summary: {
      es: 'Plataforma para explorar Montevideo armando tours personalizados según los intereses de cada visitante.',
      en: 'Platform to explore Montevideo by building custom tours based on each visitor’s interests.',
    },
    tech: ['React', 'Laravel', 'MySQL','Docker','Linux','Git','GitHub','CI/CD','Jira','Miro','SCRUM'],
    repo: '', // TODO: URL del repo si es público
    year: '2024',
    detail: {
      context: {
        es: '', // TODO: ¿para quién era? ¿en qué marco surgió (equipo, curso, cliente)?
        en: '',
      },
      problem: {
        es: '', // TODO: qué necesidad concreta tenía el usuario final
        en: '',
      },
      process: {
        es: '', // TODO: cómo lo encararon, cómo se repartió el trabajo, qué iteraciones hubo
        en: '',
      },
      decisions: {
        es: '', // TODO: por qué Laravel + React, cómo modelaron los datos, qué se descartó
        en: '',
      },
      solution: {
        es: '', // TODO: qué hace el producto y cómo resuelve el problema
        en: '',
      },
      result: {
        es: '', // TODO: resultado, aprendizajes, métricas si hay
        en: '',
      },
    },
    gallery: [
      // TODO: capturas del proyecto (Cloudinary o /img/...)
      '/img/feeluy.png',
    ],
  }
];

/** Orden en que la página de detalle muestra las secciones de `detail`. */
export const detailSections = [
  'context',
  'problem',
  'process',
  'decisions',
  'solution',
  'result',
];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}
