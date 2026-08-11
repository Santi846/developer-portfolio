/**
 * Presentaciones. Cada una muestra su imagen y enlaza con la formación
 * correspondiente (`educationId` apunta a un `id` de `education.js`).
 *
 * Si `link` tiene una URL (por ejemplo Prezi), el título se vuelve un enlace.
 */

export const talks = [
  {
    id: 'talk-utu-tecnicatura',
    title: {
      es: 'Proyecto final — Tecnicatura en Redes y Software',
      en: 'Final project — Technical Degree in Networking and Software',
    },
    year: '2023',
    educationId: 'utu-redes-software',
    link: 'https://prezi.com/p/rujqeeg-p6kw/marrz/',
    image:
      'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786247896/presentacion_tecnicatura_ukmelk.jpg',
    description: {
      es: '', // TODO: una o dos líneas sobre qué se presentó
      en: '',
    },
  },
  {
    id: 'talk-utu-bachillerato',
    title: {
      es: 'Proyecto final — Bachillerato Tecnológico',
      en: 'Final project — Technological Baccalaureate',
    },
    year: '2020',
    educationId: 'utu-bachillerato',
    link: '',
    image:
      'https://res.cloudinary.com/dmwkalfmj/image/upload/v1786247684/Defensa_emt_utu_zmeypj.jpg',
    description: {
      es: '', // TODO
      en: '',
    },
  },
];

export function findTalk(id) {
  return talks.find((talk) => talk.id === id);
}
