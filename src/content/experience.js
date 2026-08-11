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
 *
 * `info` es opcional: una lista de líneas para el modal de detalle que se abre con el
 * botón "info" de la tarjeta. Si no está, no se muestra el botón.
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
      'Docker',
      { es: 'Arquitectura de microservicios', en: 'Microservices architecture' },
      'RabbitMQ',
      'Redis',
      { es: 'Monolito', en: 'Monolith' },
      'Jira',
      'Confluence'
    ],
    info: {
      es: [
        'Mantenimiento de sistema con jQuery + PHP',
        'Implementación de microservicios desde cero, principalmente backend con Node + TypeScript',
        'Implementaciones frontend con React + Vite',
        'Documentación de avances, principalmente con Confluence',
        'Registro de tareas en curso y realizadas, principalmente con Jira',
        'Microservicios de migración de datos desde archivos CSV a bases de datos MongoDB',
        'Microservicios de notificaciones desde backend a frontend con protocolo HTTP SSE',
        'Desarrollo de aplicación cliente con Android Studio + Flutter + Dart',
      ],
      en: [
        'Maintenance of a system built with jQuery + PHP',
        'Implementation of microservices from scratch, mainly backend with Node + TypeScript',
        'Frontend implementations with React + Vite',
        'Documentation of progress, mainly with Confluence',
        'Tracking of ongoing and completed tasks, mainly with Jira',
        'Data migration microservices from CSV files to MongoDB databases',
        'Notification microservices from backend to frontend using the HTTP SSE protocol',
        'Client application development with Android Studio + Flutter + Dart',
      ],
    },
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
    info: {
      es: [
        'Relevamiento de necesidades con clientes',
        'Desarrollo de aplicación de gestión de inventario y venta para usuarios mayoristas, con frontend en React (Create React App) conectado a un backend en Node.js y base de datos MySQL, desplegados en un servidor VPS Linux',
        'Desarrollo de aplicación de gestión de inventario y venta para usuarios de sistemas de seguridad, con frontend en React (Create React App) conectado a un backend en Node.js y base de datos MySQL, integrada con un servidor backend ERP y su base de datos SQL Server',
      ],
      en: [
        'Requirements gathering with clients',
        'Development of an inventory and sales management application for wholesale users, with a React frontend (Create React App) connected to a Node.js backend and MySQL database, deployed on a Linux VPS server',
        'Development of an inventory and sales management application for security-systems users, with a React frontend (Create React App) connected to a Node.js backend and MySQL database, integrated with an ERP backend server and its SQL Server database',
      ],
    },
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
    tech: ['C#'],
    info: {
      es: [
        'Se utilizaba un cliente VNC para mostrarle al usuario su dirección IP y así poder brindarla a la mesa de soporte, pero al quitar ese sistema el usuario debía ser guiado por teléfono para entrar a la consola (cmd) y ejecutar "ipconfig". Para resolverlo, desarrollé una aplicación como servicio que, al ejecutarse, muestra directamente las direcciones IP de las interfaces del equipo del usuario — proyecto GetIP.',
      ],
      en: [
        'A VNC client used to be used to show the user their IP address so they could give it to the support desk, but once that system was removed the user had to be guided over the phone to open the console (cmd) and run "ipconfig". To solve this, I developed an application running as a service that, when executed, directly shows the IP addresses of the user\'s machine interfaces — the GetIP project.',
      ],
    },
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
    tech: ['Jira', 'Confluence'],
  },
];
