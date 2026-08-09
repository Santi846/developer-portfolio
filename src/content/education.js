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
 */

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
    certificate: '', // TODO: foto del título (Cloudinary)
    logo: '',
    courses: null,
  },
  {
    // TODO: si preferís que figure el instituto donde lo rendiste en vez de Cambridge, cambialo acá.
    id: 'b2-first',
    institution: 'Cambridge English',
    title: 'B2 First Certificate',
    start: null, // sólo se conoce la fecha de finalización
    end: '2021-08',
    certificate: '', // TODO: foto del certificado (Cloudinary)
    logo: '',
    courses: null,
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
    certificate: '', // TODO: foto del título (Cloudinary)
    logo: '',
    courses: null,
  },
  // TODO: agregar cursos y certificaciones adicionales si querés listarlos acá.
];

export function findEducation(id) {
  return education.find((entry) => entry.id === id);
}
