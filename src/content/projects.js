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
    tech: ['React', 'Laravel', 'MySQL'],
    liveUrl: 'https://feeluy.netlify.app/',
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
  },
  {
    slug: 'salvaje-life-fitness',
    name: 'Salvaje Life Fitness',
    cover: '/img/salvajelifefitness.png',
    summary: {
      es: 'Sistema de gestión de socios e ingresos para un gimnasio, con control de pagos y administración de usuarios.',
      en: 'Member and revenue management system for a gym, with payment control and user administration.',
    },
    tech: ['React', 'Laravel', 'MySQL'],
    liveUrl: 'http://lifefitnessfrontend.javierjar.shop/',
    repo: '', // TODO
    year: '2024',
    detail: {
      context: { es: '', en: '' }, // TODO
      problem: { es: '', en: '' }, // TODO
      process: { es: '', en: '' }, // TODO
      decisions: { es: '', en: '' }, // TODO
      solution: { es: '', en: '' }, // TODO
      result: { es: '', en: '' }, // TODO
    },
    gallery: [
      '/img/salvajelifefitness.png',
      '/img/salvajelifefitness2.png',
      '/img/salvajelifefitness3.png',
      '/img/salvajelifefitness4.png',
      '/img/salvajelifefitness5.png',
      '/img/salvajelifefitness7.png',
    ],
  },
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
