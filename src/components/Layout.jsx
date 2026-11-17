import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import Sidebar from './Sidebar';
import { site } from '../content/site';

/**
 * Estructura de la app: navegación fija a la izquierda y un panel de contenido
 * que cambia según la ruta. En pantallas chicas el sidebar pasa a ser un cajón.
 */
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // Cada cambio de sección arranca desde arriba y cierra el cajón móvil.
  // En desktop scrollea el panel <main>; en mobile scrollea la ventana, así que se resetean ambos.
  useEffect(() => {
    setMenuOpen(false);
    mainRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // Con el cajón abierto, el contenido de atrás no se desplaza y Escape lo cierra.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className={`layout ${menuOpen ? 'is-menu-open' : ''}`}>
      <header className="topbar">
        <button
          type="button"
          className="icon-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
        <span className="topbar__name">{site.name}</span>
      </header>

      <Sidebar onNavigate={() => setMenuOpen(false)} />

      {/* Sólo intercepta clicks cuando el cajón está abierto (ver CSS). */}
      <div className="layout__scrim" onClick={() => setMenuOpen(false)} role="presentation" />

      <main className="layout__main" ref={mainRef}>
        <div className="layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
