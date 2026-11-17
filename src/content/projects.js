/**
 * Proyectos.
 *
 * Cada proyecto alimenta dos vistas:
 *   - la card en /proyectos  -> `slug`, `name`, `cover`, `summary`, `tech`
 *   - la página de detalle   -> `sections` (y `gallery`, si el proyecto no arma secciones)
 *
 * `slug` es lo que aparece en la URL (/proyectos/feeluy): sin espacios ni tildes.
 *
 * ------------------------------------------------------------------------------
 * Estructura de `sections`
 * ------------------------------------------------------------------------------
 * La página de detalle recorre `sections` en el orden en que están escritas acá y
 * dibuja un panel por cada una. Dentro, cada sección lista `blocks`, y cada bloque
 * se renderiza según su `type`:
 *
 *   { type: 'text',    paragraphs: { es: [...], en: [...] } }
 *       Párrafos sueltos.
 *
 *   { type: 'gallery', groups: [{ label: 'Desktop', images: ['url', ...] }, ...] }
 *       Carrusel. Con más de un grupo aparecen pestañas arriba (Desktop / Mobile).
 *       Cada grupo puede fijar la proporción del visor con `ratio` (por defecto '16 / 9').
 *
 *   { type: 'cards',   items: [{ label: {es,en}, images: [{ caption, src }] }] }
 *       Tarjetas con imagen (diagramas, flujos). Al hacer click se abren en grande.
 *
 *   { type: 'links',   items: [{ kind, label: {es,en}, url | to }] }
 *       Botones de enlace. `kind` elige el ícono: 'github' | 'video' | 'external',
 *       y 'internal' navega dentro del portafolio usando `to` en lugar de `url`.
 *
 * Un proyecto sin `sections` sigue funcionando: se le muestran `summary`, `tech` y
 * `gallery` como antes.
 */

export const projects = [
  {
    slug: 'mi-cartera',
    name: 'Mi Cartera',
    cover: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794528956/login_blimnp.png', // TODO: sin capturas subidas todavia (proyecto sin frontend visual terminado)
    summary: {
      es: 'Plataforma de finanzas personales basada en microservicios, con clasificación de movimientos bancarios asistida por IA y un flujo end-to-end desde la carga de un estado de cuenta hasta el registro de las transacciones.',
      en: 'Personal finance platform built on microservices, with AI-assisted classification of bank transactions and an end-to-end flow from uploading a bank statement to recording the transactions.',
    },
    tech: [
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
      'React',
      'Docker',
      'Microservicios',
      'Git',
      'GitHub',
    ],
    repo: '', // el repo va en la sección de abajo
    year: '2026',

    sections: [
      {
        id: 'descripcion',
        title: { es: 'Descripción del proyecto', en: 'About the project' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'Mi Cartera es una plataforma personal de finanzas basada en microservicios: cuentas bancarias, transacciones, gastos fijos, metas y notificaciones, cada una como un servicio independiente detrás de un API Gateway, con un flujo que va desde la carga de un estado de cuenta en PDF hasta el registro de las transacciones ya clasificadas.',
                'La mayoría de los servicios están construidos en Java 21 con Spring Boot, siguiendo la misma estructura por capas (api, application, domain, infrastructure). Para acelerar y estandarizar esa creación, desarrollé dos scripts propios en PowerShell: uno genera el proyecto Spring Boot desde cero vía Spring Initializr (base de datos, dependencias y configuración por ambiente incluidas) y el otro agrega el CRUD completo de una entidad —entidad, DTOs, repositorio, servicio y controller REST— respetando esas mismas convenciones.',
                'Un servicio en Python con FastAPI se encarga de extraer los movimientos de los estados de cuenta en PDF y clasificarlos combinando reglas propias con modelos de OpenAI, antes de que el usuario los revise y confirme.',
                'Los servicios se comunican de forma asincrónica por RabbitMQ, con reintentos, colas DLQ e idempotencia por evento para evitar registros duplicados, y toda la plataforma corre en contenedores Docker con observabilidad local (Prometheus, Grafana, Loki, Tempo y OpenTelemetry).',
              ],
              en: [
                'Mi Cartera is a personal finance platform built on microservices: bank accounts, transactions, fixed expenses, goals and notifications, each as an independent service behind an API Gateway, with a flow that goes from uploading a PDF bank statement to recording the classified transactions.',
                'Most services are built in Java 21 with Spring Boot, following the same layered structure (api, application, domain, infrastructure). To speed up and standardize that process, I built two custom PowerShell scripts: one generates the Spring Boot project from scratch through Spring Initializr (database, dependencies and per-environment configuration included), and the other adds the full CRUD for an entity —entity, DTOs, repository, service and REST controller— following those same conventions.',
                'A Python service with FastAPI extracts the transactions from PDF bank statements and classifies them by combining custom rules with OpenAI models, before the user reviews and confirms them.',
                'Services communicate asynchronously through RabbitMQ, with retries, DLQ queues and per-event idempotency to avoid duplicate records, and the whole platform runs in Docker containers with local observability (Prometheus, Grafana, Loki, Tempo and OpenTelemetry).',
              ],
            },
          },
          {
            type: 'gallery',
            groups: [
              {
                // Recorrido de la plataforma, en orden: registro y login, gastos fijos, cajas y
                // cuentas, carga y procesado del estado de cuenta, observabilidad y trazabilidad,
                // y el cierre confirmando las transacciones y actualizando el saldo.
                label: 'Desktop',
                images: [
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794534795/registro_guoj6t.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794528956/login_blimnp.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529010/inicio_gastos_fijos_spnclv.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529048/1_mis_cuentas_gfpimb.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529077/2_crear_caja_y_cuenta_mqanqb.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529103/3_cuenta_caja_imcjzy.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529135/5_gestion_archivos_jzlauk.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529163/6_procesando_archivo_ch7wvq.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529191/7_observabilidad_grafana_jda37h.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529314/8_trazabilidad_1_t1qk4o.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529347/8_trazabilidad_2_ruupb3.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529376/8_trazabilidad_3_ojxeur.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529409/9_confirm_transactions_t9y4cs.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529439/10_confirmar_transactions_pdeydb.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794529480/11_actualiza_saldo_caja_ykgzrd.png',
                ],
              },
            ],
          },
          {
            type: 'links',
            items: [
              {
                kind: 'github',
                label: { es: 'Repositorio de arquitectura', en: 'Architecture repository' },
                url: 'https://github.com/MI-CARTERA/mi_cartera_public',
              },
            ],
          },
        ],
      },

      {
        id: 'diagramas',
        title: { es: 'Diagramas del sistema', en: 'System diagrams' },
        blocks: [
          {
            type: 'cards',
            items: [
              {
                label: { es: 'Diseño de sistema', en: 'System design' },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794745631/mi_cartera_system_design_v2_yemtdc.png',
                  },
                ],
              },
              {
                label: { es: 'Eventos del sistema', en: 'System events' },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794702409/eventos_sqk2sg.png',
                  },
                ],
              },
              {
                label: {
                  es: 'Flujo de carga de estado de cuenta',
                  en: 'Bank statement upload flow',
                },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794702431/carga_estado_cuenta_ktk4hr.png',
                  },
                ],
              },
              {
                label: {
                  es: 'Observabilidad aplicada en la arquitectura',
                  en: 'Observability applied across the architecture',
                },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794702439/observabilidad_x6lpjm.png',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    gallery: [], // las capturas van en el bloque `gallery` de la sección de arriba
  },
  {
    slug: 'feeluy',
    name: 'FeelUy',
    cover: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463831/web_1_tyhpix.png',
    summary: {
      es: 'Plataforma para explorar Montevideo armando tours personalizados según los intereses de cada visitante.',
      en: 'Platform to explore Montevideo by building custom tours based on each visitor’s interests.',
    },
    tech: ['React', 'Laravel', 'MySQL', 'Docker', 'Linux', 'Git', 'GitHub', 'CI/CD', 'Jira', 'Miro', 'SCRUM'],
    repo: '', // los repos van uno por uno en las secciones de abajo
    year: '2022-2023',

    sections: [
      {
        id: 'descripcion',
        title: { es: 'Descripción del proyecto', en: 'About the project' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'La letra del proyecto fue un pedido expreso del Ministerio de Hotelería y Turismo del Uruguay: un trabajo integrador que reuniera los conocimientos de desarrollo de software —desarrollo web en particular— y de redes.',
                'Se pidió una plataforma que le diera, tanto a turistas extranjeros como a uruguayos que quisieran recorrer el país, una forma de centralizar los lugares de interés a la hora de visitarlo. En una primera etapa, concentrada en Montevideo.',
                'Le pusimos FeelUy. Definimos los lugares de interés como «puntos de interés», y los tours como el recorrido que se arma al reunir varios de ellos.',
                'Sin autenticarse, el visitante puede ver los tours predefinidos del sistema. Una vez autenticado puede generar y guardar sus propios tours, y sumarles eventos en fechas específicas.',
              ],
              en: [
                'The brief came directly from Uruguay’s Ministry of Hospitality and Tourism: an integrative project bringing together what we had learned about software development —web development in particular— and networking.',
                'They asked for a platform that would give both foreign tourists and Uruguayans travelling around the country a single place to gather the spots worth visiting. The first stage focused on Montevideo.',
                'We named it FeelUy. We modelled the places worth visiting as “points of interest”, and a tour as the route you get by putting several of them together.',
                'Without signing in, a visitor can browse the tours predefined by the system. Once signed in, they can build and save their own tours, and add events happening on specific dates.',
              ],
            },
          },
          {
            type: 'gallery',
            groups: [
              {
                label: 'Desktop',
                images: [
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463831/web_1_tyhpix.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463828/web_2_ypro28.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463827/web_3_adtelw.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463827/web_4_jokbrd.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463829/web_5_y3gama.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463829/web_6_gbskbg.png',
                ],
              },
              {
                label: 'Mobile',
                ratio: '4 / 3', // capturas verticales: en 16/9 quedarían diminutas
                images: [
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463829/mobile_1_iulbih.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463829/mobile_2_vmqrky.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463828/mobile_3_puwdji.png',
                ],
              },
            ],
          },
          {
            type: 'links',
            items: [
              {
                kind: 'video',
                label: { es: 'Ver tutorial de uso', en: 'Watch the walkthrough' },
                url: 'https://youtu.be/0DS5u5XRKik?si=RLq0LoljaD1tmAsU',
              },
              {
                kind: 'github',
                label: { es: 'Frontend FeelUy', en: 'FeelUy frontend' },
                url: 'https://github.com/marrz-uy/frontend-app.git',
              },
              {
                kind: 'github',
                label: { es: 'Backend FeelUy', en: 'FeelUy backend' },
                url: 'https://github.com/marrz-uy/backend-feel.git',
              },
            ],
          },
        ],
      },

      {
        id: 'backoffice',
        title: { es: 'Backoffice', en: 'Backoffice' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'De la mano de la aplicación web para el usuario final definimos un sistema Backoffice, para la gestión de usuarios, tours predefinidos y puntos de interés.',
              ],
              en: [
                'Alongside the web app for the end user we defined a Backoffice system to manage users, predefined tours and points of interest.',
              ],
            },
          },
          {
            type: 'gallery',
            groups: [
              {
                label: 'Desktop',
                images: [
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463852/bo_1_hvp07u.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463852/bo_2_fqtlel.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463852/bo_3_srbyws.png',
                  'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463852/bo_4_iw6s5u.png',
                ],
              },
            ],
          },
          {
            type: 'links',
            items: [
              {
                kind: 'video',
                label: { es: 'Ver tutorial de uso', en: 'Watch the walkthrough' },
                url: 'https://youtu.be/q4ORi_W_FQQ?si=zLOZcSO_BkVGNg58',
              },
              {
                kind: 'github',
                label: { es: 'Frontend Backoffice', en: 'Backoffice frontend' },
                url: 'https://github.com/marrz-uy/backoffice-front.git',
              },
              {
                kind: 'github',
                label: { es: 'Backend Backoffice', en: 'Backoffice backend' },
                url: 'https://github.com/marrz-uy/backoffice-backend.git',
              },
              {
                kind: 'github',
                label: { es: 'Arquitectura Docker Backoffice', en: 'Backoffice Docker architecture' },
                url: 'https://github.com/marrz-uy/Arquitectura-de-Backoffice.git',
              },
            ],
          },
        ],
      },

      {
        id: 'desarrollo',
        title: { es: 'Desarrollo', en: 'Development' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'Para desarrollar el sistema usamos Miro como vision board, para plasmarle los avances al cliente; Jira como issue tracker, para asignar y controlar las tareas del equipo; Git y GitHub para versionar y alojar el código; y Confluence para acompañar la documentación. Todo apoyado en SCRUM como metodología ágil.',
              ],
              en: [
                'To build the system we used Miro as a vision board, to show progress to the client; Jira as the issue tracker, to assign and follow the team’s tasks; Git and GitHub to version and host the code; and Confluence to support the documentation. All of it framed by SCRUM as the agile methodology.',
              ],
            },
          },
          {
            type: 'cards',
            title: { es: 'Diagramas pertinentes', en: 'Relevant diagrams' },
            items: [
              {
                label: { es: 'Casos de uso', en: 'Use cases' },
                images: [
                  {
                    caption: 'FeelUy',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463827/casos_de_uso_mtl6zq.png',
                  },
                  {
                    caption: 'Backoffice',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463853/casos_de_uso_cdvzgi.png',
                  },
                ],
              },
              {
                label: { es: 'Diagrama de paquetes', en: 'Package diagram' },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463828/diagrama_paquetes_ptff5a.png',
                  },
                ],
              },
              {
                label: { es: 'Diagrama de clases', en: 'Class diagram' },
                images: [
                  {
                    caption: 'FeelUy',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463828/diagrama_clases_feelyt_crwqjo.png',
                  },
                  {
                    caption: 'Backoffice',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463853/diagrama_clases_bo_cybqwp.png',
                  },
                ],
              },
              {
                label: { es: 'Diagrama de navegabilidad', en: 'Navigation diagram' },
                images: [
                  {
                    caption: 'FeelUy',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463829/navegavilidad_feeluy_nvqvtl.png',
                  },
                  {
                    caption: 'Backoffice',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463854/navegabilidad_backofffice_jlhele.png',
                  },
                ],
              },
            ],
          },
          {
            type: 'links',
            items: [
              {
                kind: 'external',
                label: { es: 'Ver el tablero de Miro', en: 'Open the Miro board' },
                url: 'https://miro.com/app/board/uXjVOAD0Tdk=/?share_link_id=50504534077',
              },
            ],
          },
        ],
      },

      {
        id: 'desafios',
        title: { es: 'Desafíos técnicos', en: 'Technical challenges' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'Construimos FeelUy y el Backoffice sobre un stack de Laravel (POO + ORM) y React (create-react-app), con una base de datos MySQL compartida entre los dos sistemas.',
                'Ambos sistemas y la base corrían en contenedores Docker orquestados con Docker Compose, sobre servidores Linux de la red local.',
                'Del lado de redes hubo que hacer las configuraciones —firewall incluido— para que FeelUy, estando en la nube, se conectara a la red local en un dominio Active Directory y alcanzara la base de datos compartida del Backoffice.',
                'Sobre esa infraestructura implementamos el flujo de automatización «Continuous Integration, Continuous Delivery», que actualizaba el código de los contenedores en cuanto mergeábamos a main.',
              ],
              en: [
                'We built FeelUy and the Backoffice on a Laravel (OOP + ORM) and React (create-react-app) stack, with a MySQL database shared by both systems.',
                'Both systems and the database ran in Docker containers orchestrated with Docker Compose, on Linux servers inside the local network.',
                'On the networking side we had to set everything up —firewall included— so that FeelUy, running in the cloud, could reach into the local network on an Active Directory domain and connect to the Backoffice’s shared database.',
                'On top of that infrastructure we implemented a Continuous Integration / Continuous Delivery pipeline, which updated the containers’ code as soon as we merged into main.',
              ],
            },
          },
          {
            type: 'cards',
            items: [
              {
                label: { es: 'Flujo general', en: 'Overall flow' },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463827/arquitectura_sistemas_e0frzc.jpg',
                  },
                ],
              },
              {
                label: { es: 'Flujo CI/CD', en: 'CI/CD pipeline' },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463828/flujo_ci_cd_v1edpg.jpg',
                  },
                ],
              },
              {
                label: { es: 'Implementación en red', en: 'Network deployment' },
                images: [
                  {
                    caption: '',
                    src: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786463829/infraestructura_red_tn4fm1.jpg',
                  },
                ],
              },
            ],
          },
          {
            type: 'links',
            items: [
              {
                kind: 'github',
                label: { es: 'Configuraciones de servidores de red', en: 'Network server configurations' },
                url: 'https://github.com/marrz-uy/Important-Files.git',
              },
            ],
          },
        ],
      },
    ],

    /** Se muestra al final, después de las secciones. */
    presentation: {
      talkId: 'talk-utu-tecnicatura',
      note: {
        es: 'La defensa de este proyecto es la presentación final de la Tecnicatura en Redes y Software.',
        en: 'The defence of this project is the final presentation of the Technical Degree in Networking and Software.',
      },
    },

    gallery: [], // las capturas viven en las secciones de arriba
  },
  {
    slug: 'gestor-materias-fing',
    name: 'Gestor de Materias FING',
    cover: 'https://res.cloudinary.com/dmwkalfmj/image/upload/v1794934803/home_page_o7mpfs.png',
    summary: {
      es: 'Aplicación web para seguir el avance de la carrera en la FING: materias aprobadas, créditos obtenidos frente al total para recibirse, materias en curso y equivalencias entre planes de estudio.',
      en: 'Web app to track progress through my degree at FING: passed courses, credits earned against the total required to graduate, courses in progress and equivalences between study plans.',
    },
    tech: ['React', 'Vite', 'JavaScript', 'CSS Modules', 'localStorage', 'Claude Code', 'Git', 'GitHub'],
    repo: '',
    year: '2026',

    sections: [
      {
        id: 'descripcion',
        title: { es: 'Descripción del proyecto', en: 'About the project' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'Gestor de Materias FING es una aplicación de una sola pantalla para llevar el control de la carrera de Ingeniería en Computación: qué materias están aprobadas y cómo (por parciales, examen o examen libre), cuántos créditos faltan para recibirse y qué se está cursando en el semestre actual.',
                'Un resumen muestra los créditos obtenidos, el porcentaje de avance, los créditos faltantes y una proyección de hasta dónde se llega si se aprueba todo lo que se está cursando, junto con el promedio de notas simple y ponderado por créditos. Las materias se pueden ver como tabla ordenable o agrupadas por semestre, con filtros combinables por estado, semestre, modalidad de aprobación y plan.',
                'Como la facultad cambió de plan de estudios, cada materia puede registrar sus equivalencias con materias de planes anteriores, y el cálculo de créditos evita contar dos veces una misma materia aprobada en dos planes distintos.',
                'Para construirlo escribí primero una especificación completa —modelo de datos, reglas de negocio, interfaz, accesibilidad y criterios de aceptación— y lo implementé con Claude Code a partir de ella, documentando cada decisión tomada ante una ambigüedad.',
              ],
              en: [
                'Gestor de Materias FING is a single-screen app to keep track of my Computer Engineering degree: which courses are passed and how (through midterms, a final exam or a free exam), how many credits are left to graduate and what I am taking this semester.',
                'A summary shows credits earned, progress percentage, remaining credits and a projection of where I would land if I pass everything in progress, along with the simple and credit-weighted grade average. Courses can be browsed as a sortable table or grouped by semester, with combinable filters by status, semester, pass type and study plan.',
                'Since the faculty changed its study plan, each course can record its equivalences with courses from previous plans, and the credit count avoids counting the same passed course twice across two plans.',
                'To build it I first wrote a complete specification —data model, business rules, interface, accessibility and acceptance criteria— and implemented it with Claude Code from that spec, documenting every decision made when something was ambiguous.',
              ],
            },
          },
          {
            type: 'gallery',
            groups: [
              {
                label: 'Desktop',
                images: ['https://res.cloudinary.com/dmwkalfmj/image/upload/v1794934803/home_page_o7mpfs.png'],
              },
            ],
          },
          {
            type: 'links',
            items: [
              {
                kind: 'internal',
                label: { es: 'Ver educación anterior', en: 'See previous education' },
                to: '/educacion',
              },
            ],
          },
        ],
      },

      {
        id: 'decisiones',
        title: { es: 'Decisiones técnicas', en: 'Technical decisions' },
        blocks: [
          {
            type: 'text',
            paragraphs: {
              es: [
                'Está hecha con React y Vite en JavaScript, con el estado global manejado por useReducer + Context y estilos en CSS Modules sobre variables CSS, sin librerías de UI.',
                'No tiene backend: todo se guarda en el localStorage del navegador, con un formato versionado. Si los datos guardados están corruptos, la app no se rompe: avisa, guarda una copia de respaldo y no sobrescribe nada hasta que el usuario decida. Los datos se pueden exportar e importar en JSON, reemplazando o fusionando por id.',
                'Se pensó para usarse también desde el celular: por debajo de 640px la tabla pasa a tarjetas y los formularios ocupan toda la pantalla. Los modales y paneles laterales atrapan y devuelven el foco, y los estados se indican con texto además de color.',
              ],
              en: [
                'It is built with React and Vite in JavaScript, with global state handled by useReducer + Context and styles in CSS Modules on top of CSS variables, with no UI libraries.',
                'There is no backend: everything is stored in the browser’s localStorage using a versioned format. If the stored data is corrupted the app does not break: it warns the user, keeps a backup copy and overwrites nothing until the user decides. Data can be exported and imported as JSON, either replacing or merging by id.',
                'It was designed to work on a phone as well: below 640px the table turns into cards and forms take up the whole screen. Modals and side panels trap and return focus, and statuses are conveyed with text, not just colour.',
              ],
            },
          },
        ],
      },
    ],

    gallery: [],
  },
];

/**
 * Orden en que la página de detalle muestra las secciones de `detail`.
 * Sólo aplica a los proyectos que todavía usan el formato viejo (`detail`).
 */
export const detailSections = ['context', 'problem', 'process', 'decisions', 'solution', 'result'];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}
