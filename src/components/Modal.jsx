import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

/**
 * Modal centrado con el fondo desenfocado. Cierra con Escape, con el botón y
 * clickeando fuera del panel. Bloquea el scroll del body mientras está abierto.
 */
function Modal({ open, onClose, title, children, className = '' }) {
  const { t } = useLanguage();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className={`modal-panel panel ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-panel__head">
          <h2>{title}</h2>
          <button type="button" className="icon-button" onClick={onClose} aria-label={t('education.close')}>
            <IoClose />
          </button>
        </header>
        <div className="modal-panel__body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
