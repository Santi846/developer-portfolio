import { useState } from 'react';
import Media from './Media';
import Modal from './Modal';
import { useLanguage } from '../context/LanguageContext';

/** 'Casos de uso' + 'FeelUy' -> 'Casos de uso — FeelUy' (sin guión si no hay epígrafe). */
function fullLabel(label, caption) {
  return [label, caption].filter(Boolean).join(' — ');
}

/**
 * Grilla de tarjetas con imagen (diagramas, flujos de arquitectura).
 *
 * Una tarjeta puede traer más de una imagen —por ejemplo el mismo diagrama para FeelUy
 * y para el Backoffice—, cada una con su epígrafe. Al hacer click se abre en grande.
 */
function ImageCards({ items = [] }) {
  const { t, pick } = useLanguage();
  const [openImage, setOpenImage] = useState(null);

  if (items.length === 0) return null;

  return (
    <>
      <div className="image-cards">
        {items.map((item) => {
          const label = pick(item.label);

          return (
            <article key={label} className="image-card card">
              <h4 className="image-card__title">{label}</h4>

              <div className="image-card__shots">
                {item.images.map((image) => (
                  <button
                    type="button"
                    key={image.src}
                    className="image-card__shot"
                    onClick={() => setOpenImage({ ...image, label })}
                    aria-label={`${t('projects.viewImage')} — ${fullLabel(label, image.caption)}`}
                  >
                    <Media src={image.src} alt={fullLabel(label, image.caption)} ratio="4 / 3" />
                    {image.caption && <span className="image-card__caption">{image.caption}</span>}
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <Modal
        open={Boolean(openImage)}
        onClose={() => setOpenImage(null)}
        title={openImage ? fullLabel(openImage.label, openImage.caption) : ''}
        className="modal-panel--wide"
      >
        {openImage && (
          <img
            src={openImage.src}
            alt={fullLabel(openImage.label, openImage.caption)}
            className="image-modal__image"
          />
        )}
      </Modal>
    </>
  );
}

export default ImageCards;
