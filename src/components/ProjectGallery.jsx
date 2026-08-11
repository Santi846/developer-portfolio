import { useState } from 'react';
import Carousel from './Carousel';

/**
 * Carrusel con pestañas por grupo de capturas (Desktop / Mobile).
 * Con un solo grupo no dibuja pestañas: es un carrusel común.
 */
function ProjectGallery({ groups = [], alt = '' }) {
  const [active, setActive] = useState(0);

  const available = groups.filter((group) => group.images?.length > 0);
  if (available.length === 0) return null;

  // Si cambia el contenido y quedan menos grupos que el índice guardado, no se rompe.
  const index = Math.min(active, available.length - 1);
  const current = available[index];

  return (
    <div className="project-gallery">
      {available.length > 1 && (
        <div className="tabs project-gallery__tabs">
          {available.map((group, position) => (
            <button
              type="button"
              key={group.label}
              className={`tab ${position === index ? 'is-active' : ''}`}
              onClick={() => setActive(position)}
              aria-current={position === index}
            >
              {group.label}
            </button>
          ))}
        </div>
      )}

      {/* `key` remonta el carrusel al cambiar de pestaña, así arranca de la primera imagen. */}
      <Carousel
        key={current.label}
        images={current.images}
        alt={`${alt} — ${current.label}`}
        ratio={current.ratio}
      />
    </div>
  );
}

export default ProjectGallery;
