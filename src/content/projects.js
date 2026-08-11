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
];

/**
 * Orden en que la página de detalle muestra las secciones de `detail`.
 * Sólo aplica a los proyectos que todavía usan el formato viejo (`detail`).
 */
export const detailSections = ['context', 'problem', 'process', 'decisions', 'solution', 'result'];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}
