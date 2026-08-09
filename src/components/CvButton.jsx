import { useEffect, useRef, useState } from 'react';
import { IoChevronDown, IoDocumentTextOutline } from 'react-icons/io5';
import { cvFiles } from '../content/site';
import { useLanguage } from '../context/LanguageContext';

/**
 * Botón "CV" con dropdown de idioma. El idioma activo del sitio queda primero y
 * marcado como opción por defecto, pero se pueden abrir las dos versiones.
 * Cada opción abre el PDF en una pestaña nueva.
 */
function CvButton() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // El idioma actual primero: es el que la mayoría va a querer.
  const options = lang === 'es' ? ['es', 'en'] : ['en', 'es'];
  const labels = { es: t('cv.spanish'), en: t('cv.english') };

  return (
    <div className="cv-button" ref={containerRef}>
      <button
        type="button"
        className="nav-link nav-link--cv"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <IoDocumentTextOutline className="nav-link__icon" />
        <span>{t('cv.label')}</span>
        <IoChevronDown className={`cv-button__caret ${open ? 'is-open' : ''}`} />
      </button>

      {open && (
        <ul className="cv-button__menu panel" role="menu">
          {options.map((code) => (
            <li key={code} role="none">
              <a
                role="menuitem"
                href={cvFiles[code]}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {labels[code]}
                {code === lang && <span className="cv-button__default">•</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CvButton;
