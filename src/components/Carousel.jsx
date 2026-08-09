import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Media from './Media';
import { useLanguage } from '../context/LanguageContext';

/** Carrusel simple con flechas, puntos y miniaturas. */
function Carousel({ images = [], alt = '' }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const go = (next) => setIndex((next + images.length) % images.length);

  return (
    <div className="carousel">
      <div className="carousel__stage">
        <Media src={images[index]} alt={`${alt} ${index + 1}`} ratio="16 / 9" />

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
