import { useRef, useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Media from './Media';
import { useLanguage } from '../context/LanguageContext';

/** Desplazamiento horizontal mínimo (px) para que un toque cuente como deslizar. */
const SWIPE_THRESHOLD = 40;

/**
 * Carrusel simple con flechas, miniaturas y deslizamiento táctil.
 *
 * `ratio` fija la proporción del escenario: las capturas se muestran enteras dentro de
 * esa caja, así que conviene achicarla cuando las imágenes son verticales (mobile).
 */
function Carousel({ images = [], alt = '', ratio = '16 / 9' }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);

  if (images.length === 0) return null;

  const go = (next) => setIndex((next + images.length) % images.length);

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  // Sólo cuenta como deslizar si el gesto fue más horizontal que vertical (si no, era scroll).
  const onTouchEnd = (event) => {
    if (!touchStart.current || images.length < 2) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? index + 1 : index - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Media src={images[index]} alt={`${alt} ${index + 1}`} ratio={ratio} />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => go(index - 1)}
              aria-label={t('carousel.prev')}
            >
              <IoChevronBack />
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={() => go(index + 1)}
              aria-label={t('carousel.next')}
            >
              <IoChevronForward />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel__thumbs">
          {images.map((image, position) => (
            <button
              type="button"
              key={`${image}-${position}`}
              className={`carousel__thumb ${position === index ? 'is-active' : ''}`}
              onClick={() => setIndex(position)}
              aria-label={`${t('carousel.goTo')} ${position + 1}`}
              aria-current={position === index}
            >
              <Media src={image} alt="" ratio="16 / 9" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
