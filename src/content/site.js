/**
 * Datos generales del sitio: identidad, enlaces y archivos de CV.
 * Ver README.md de esta carpeta para las convenciones.
 */

export const site = {
  name: 'Santiago Arocha',
  role: {
    es: 'Desarrollador de Software',
    en: 'Software Developer',
  },
  /** Foto de perfil del sidebar. TODO: subir a Cloudinary y pegar la URL. */
  avatar: '',
  linkedin:
    'https://www.linkedin.com/in/santiago-arocha-64960b202',
  github: 'https://github.com/Santi846',
  email: 'arochas846@gmail.com',
};

/**
 * Los PDF se sirven desde `public/cv/`, así que la ruta es absoluta desde la raíz.
 * TODO: agregar `public/cv/CV-Santiago-Arocha-ES.pdf` (todavía sólo está la versión EN).
 */
export const cvFiles = {
  es: '/cv/CV-Santiago-Arocha-ES.pdf',
  en: '/cv/CV-Santiago-Arocha-EN.pdf',
};
