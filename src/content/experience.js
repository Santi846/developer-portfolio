/**
 * Experiencia profesional. Se muestra como timeline, de lo más reciente arriba
 * hacia lo más antiguo abajo — el orden del array es el orden en pantalla.
 *
 * Fechas en formato 'YYYY-MM'. `end: null` = actualidad.
 *
 * `employment` (jornada completa/parcial/autónomo) y `workMode` (presencial/remoto)
 * son opcionales: se muestran junto a la empresa cuando están cargados, igual que
 * en LinkedIn. Si no aplican, se omiten.
 *
 * `description` es el texto en prosa del puesto; `bullets` es una lista opcional para
 * cuando conviene enumerar. Se pueden usar los dos, o ninguno.
 *
 * En `tech` los nombres propios van como string plano. Los términos que sí se traducen
 * (arquitecturas, metodologías) van como objeto bilingüe.
 */

export const experience = [
  {
    id: 'grupo-gamma',
    company: 'Grupo Gamma',
    role: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    workMode: null,
    location: 'Montevideo, Uruguay',
    start: '2024-09',
    end: null,
    description: {
      es: 'Desarrollo y mantenimiento de soluciones internas orientadas a optimizar procesos de gestión de la empresa, participando en la evolución de un CRM basado en microservicios y en la integración de nuevas funcionalidades y servicios. Además, realizo mejoras y mantenimiento sobre sistemas internos utilizados en la operativa diaria, contribuyendo a su evolución, estabilidad y adaptación a nuevas necesidades del negocio.',
      en: "Development and maintenance of internal solutions aimed at optimising the company's management processes, taking part in the evolution of a microservices-based CRM and in the integration of new features and services. I also carry out improvements and maintenance on internal systems used in day-to-day operations, contributing to their evolution, stability and adaptation to new business needs.",
    },
    bullets: [],
    tech: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'jQuery',
      'Node.js',
      'PHP',
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Flutter',
      'Dart',
      'Android Studio',
      { es: 'Arquitectura de microservicios', en: 'Microservices architecture' },
      { es: 'Monolito', en: 'Monolith' },
    ],
  },
  {
    id: 'jar-uy',
    company: 'JAR.UY',
    role: { es: 'Full Stack Freelance Developer', en: 'Full Stack Freelance Developer' },
    employment: { es: 'Autónomo', en: 'Self-employed' },
    workMode: { es: 'En remoto', en: 'Remote' },
    location: 'Montevideo, Uruguay',
    start: '2024-03',
    end: '2025-10',
    description: {
      es: 'Desarrollo de soluciones para clientes, participando directamente en el relevamiento y análisis de sus necesidades, así como en la definición de las tecnologías y el enfoque técnico de cada proyecto. La experiencia incluyó tanto el desarrollo de una solución desde cero como la implementación de una aplicación integrada con el backend de un sistema ERP existente.',
      en: 'Development of solutions for clients, taking part directly in gathering and analysing their requirements, as well as in defining the technologies and the technical approach of each project. The experience included both building a solution from scratch and implementing an application integrated with the backend of an existing ERP system.',
    },
    bullets: [],
    tech: ['React', 'Node.js', 'MySQL'],
  },
  {
    id: 'sonda',
    company: 'SONDA',
    role: { es: 'Técnico de soporte de TI', en: 'IT Support Technician' },
    employment: { es: 'Jornada completa', en: 'Full-time' },
    workMode: { es: 'Presencial', en: 'On-site' },
    location: 'Montevideo, Uruguay',
    start: '2022-09',
    end: '2024-09',
    // TODO: agregar descripción si querés detallar el puesto.
    description: null,
    bullets: [],
    tech: [],
  },
  {
    id: 'urupago',
    company: 'Urupago',
    role: { es: 'Técnico de soporte', en: 'Support Technician' },
    employment: { es: 'Jornada parcial', en: 'Part-time' },
    workMode: null,
    location: 'Montevideo, Uruguay',
    start: '2021-08',
    end: '2022-09',
    // TODO: agregar descripción si querés detallar el puesto.
    description: null,
    bullets: [],
    tech: ['Jira'],
  },
];
