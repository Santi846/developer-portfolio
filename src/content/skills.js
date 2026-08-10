/**
 * Habilidades. Dos colecciones separadas porque la página las muestra en pestañas
 * ("Tecnologías" / "Herramientas") y el sidebar tiene un sub-ítem para las herramientas.
 *
 * `icon` sale de los logos en `src/tecnologias/` y `src/herramientas/` — la clave es el
 * nombre del archivo sin extensión (ver `icons.js`). También acepta una URL suelta
 * (por ejemplo de Cloudinary). Si queda vacío se dibuja un placeholder con la inicial.
 */

import { techIcons, toolIcons } from './icons';

/** Tecnologías usadas en proyectos, agrupadas por rol dentro del stack. */
export const technologies = [
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'JavaScript', icon: techIcons['js'] },
      { name: 'React', icon: techIcons['react'] },
      { name: 'Vite', icon: techIcons['vite'] },
    ],
  },
  {
    id: 'backend',
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Node.js', icon: techIcons['node'] },
      { name: 'TypeScript', icon: techIcons['ts'] },
      { name: 'PHP', icon: techIcons['php'] },
      { name: 'Laravel', icon: techIcons['laravel'] },
      { name: 'Python', icon: techIcons['python'] },
      { name: 'Java', icon: techIcons['java'] },
      { name: 'Spring', icon: techIcons['spring'] },
      { name: 'Spring Boot', icon: techIcons['spring boot'] },
    ],
  },
  {
    id: 'mobile',
    label: { es: 'Mobile', en: 'Mobile' },
    items: [
      { name: 'Flutter', icon: techIcons['flutter'] },
      { name: 'Dart', icon: techIcons['dart'] },
    ],
  },
  {
    id: 'databases',
    label: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: 'MySQL', icon: techIcons['mysql'] },
      { name: 'PostgreSQL', icon: techIcons['postgres'] },
      { name: 'MongoDB', icon: techIcons['mongodb'] },
    ],
  },
  {
    id: 'infra',
    label: { es: 'Infraestructura', en: 'Infrastructure' },
    items: [{ name: 'Docker', icon: techIcons['docker'] }],
  },
];

/** Herramientas de trabajo diario. */
export const tools = [
  {
    id: 'management',
    label: { es: 'Gestión y colaboración', en: 'Management & collaboration' },
    items: [
      { name: 'Jira', icon: toolIcons['jira'] },
      { name: 'Confluence', icon: toolIcons['confluence'] },
      { name: 'Miro', icon: toolIcons['miro'] },
    ],
  },
  {
    id: 'versioning',
    label: { es: 'Control de versiones', en: 'Version control' },
    items: [
      { name: 'Git', icon: toolIcons['git'] },
      { name: 'GitHub', icon: toolIcons['github'] },
    ],
  },
  {
    id: 'dev-environments',
    label: { es: 'Entornos de desarrollo', en: 'Development environments' },
    items: [{ name: 'Android Studio', icon: toolIcons['android_studio'] }],
  },
  {
    id: 'systems',
    label: { es: 'Sistemas e infraestructura', en: 'Systems & infrastructure' },
    items: [
      // Docker es el mismo logo que en tecnologías, así que se reutiliza el de esa carpeta.
      { name: 'Docker', icon: techIcons['docker'] },
      { name: 'Linux (servidores y clientes)', icon: toolIcons['linux'] },
    ],
  },
];
