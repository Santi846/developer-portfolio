/**
 * Educación. Timeline de lo más reciente arriba hacia abajo, con la imagen del
 * certificado / título al costado de cada entrada.
 *
 * `certificate`:
 *   - una URL  -> se muestra la imagen
 *   - `''`     -> se muestra el placeholder "sin certificado cargado" (pendiente de subir)
 *   - `null`   -> no se muestra la columna del certificado (no aplica, por ejemplo en curso)
 *
 * Una entrada con `courses` se vuelve clickeable y abre el modal con materias
 * exoneradas (y sus créditos) y materias en curso.
 *
 * `tech` (opcional) muestra las tecnologías/temas vistos, igual que en `experience.js`.
 * `info` (opcional) es una lista de líneas para el modal de detalle que se abre con el
 * botón "info" de la tarjeta. Si no está, no se muestra el botón.
 */

import { certificateImages } from './icons';

export const education = [
  {
    id: 'fing',
    institution: 'Facultad de Ingeniería — UdelaR',
    title: {
      es: 'Ingeniería en Computación',
      en: 'Computer Engineering',
    },
    start: '2025',
    end: null, // en curso
    certificate: null, // en curso: por ahora no va la columna del certificado
    logo: '', // TODO: escudo de FING (Cloudinary)
    courses: {
      approved: [
        { name: 'Matemática Inicial', credits: 4 },
        { name: 'Economía', credits: 7 },
      ],
      inProgress: [
        { name: 'Física 1' },
        { name: 'Geometría y Álgebra Lineal 1' },
        { name: 'Fundamentos de la Combinatoria' },
        { name: 'Programación Imperativa' },
      ],
    },
  },
  {
    id: 'utu-redes-software',
    institution: 'UTU',
    title: {
      es: 'Tecnicatura en Redes y Software',
      en: 'Technical Degree in Networking and Software',
    },
    start: '2021',
    end: '2023',
    certificate: certificateImages['tecnicatura'],
    logo: '',
    courses: null,
    tech: [
      'PHP',
      'Laravel',
      'React',
      'JavaScript',
      { es: 'Redes', en: 'Networking' },
      'Linux',
      { es: 'Servidores Microsoft', en: 'Microsoft servers' },
      { es: 'Servidores Linux', en: 'Linux servers' },
      'Proxmox',
      'MySQL',
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
      'Jira',
      'Miro',
      'SCRUM'
    ],
    info: {
      es: [
        'Aprendizaje de desarrollo web, arquitectura cliente-servidor, seguridad y relevamiento de información. Proyecto de egreso: FeelUy.',
      ],
      en: [
        'Learning of web development, client-server architecture, security and information gathering. Final project: FeelUy.',
      ],
    },
  },
  {
    // TODO: si preferís que figure el instituto donde lo rendiste en vez de Cambridge, cambialo acá.
    id: 'b2-first',
    institution: 'Cambridge English',
    title: 'B2 First Certificate',
    start: null, // sólo se conoce la fecha de finalización
    end: '2021-08',
    certificate: certificateImages['first'],
    logo: '',
    courses: null,
    tech: [{ es: 'Inglés', en: 'English' }],
    info: {
      es: ['Estudiante de inglés desde 2012 (Juniors 1) hasta rendir el examen B2 First Certificate en 2021.'],
      en: ['English student since 2012 (Juniors 1) until sitting the B2 First Certificate exam in 2021.'],
    },
  },
  {
    id: 'utu-bachillerato',
    institution: 'UTU',
    title: {
      es: 'Bachillerato Tecnológico en Informática',
      en: 'Technological Baccalaureate in IT',
    },
    start: '2018',
    end: '2020',
    certificate: certificateImages['bachillerato'],
    logo: '',
    courses: null,
    tech: [
      { es: 'Programación', en: 'Programming' },
      { es: 'POO', en: 'OOP' },
      { es: 'Redes', en: 'Networking' },
      'Linux',
      'Java',
      'MySQL',
      { es: 'Electrónica', en: 'Electronics' },
      { es: 'Especificación de requerimientos', en: 'Requirements specification' },
    ],
    info: {
      es: [
        'Primeros aprendizajes de programación, bases de datos, software, electrónica, redes y equipos, con desarrollo de aplicaciones de escritorio en Java y Visual Basic.',
      ],
      en: [
        'First introduction to programming, databases, software, electronics, networking and hardware, including desktop application development in Java and Visual Basic.',
      ],
    },
  },
  // TODO: agregar cursos y certificaciones adicionales si querés listarlos acá.
];

export function findEducation(id) {
  return education.find((entry) => entry.id === id);
}
