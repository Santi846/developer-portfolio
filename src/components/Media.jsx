import { useLanguage } from '../context/LanguageContext';

/**
 * Imagen del contenido. Mientras la URL esté vacía (o falle la carga) dibuja un
 * placeholder del mismo tamaño, así se ve dónde falta material sin romper el layout.
 *
 * `ratio` fija la proporción de la caja (por ejemplo '16 / 9'); si se omite, la
 * imagen manda.
 */
function Media({ src, alt = '', ratio, className = '', fallbackLabel }) {
  const { t } = useLanguage();
  const style = ratio ? { aspectRatio: ratio } : undefined;

  if (!src) {
    return (
      <div className={`media media--empty ${className}`} style={style} aria-hidden="true">
        <span>{fallbackLabel ?? t('image.pending')}</span>
      </div>
    );
  }

  return (
    <div className={`media ${className}`} style={style}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default Media;
