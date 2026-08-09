import { NavLink } from 'react-router-dom';
import {
  IoBriefcaseOutline,
  IoConstructOutline,
  IoEaselOutline,
  IoFolderOpenOutline,
  IoMailOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoSparklesOutline,
} from 'react-icons/io5';
import CvButton from './CvButton';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { site } from '../content/site';
import { useLanguage } from '../context/LanguageContext';

/**
 * Navegación principal. `end` en "Acerca de mí" evita que quede activa en todas
 * las rutas, porque su path es "/".
 */
const NAV_ITEMS = [
  { to: '/', labelKey: 'nav.about', icon: IoPersonOutline, end: true },
  {
    to: '/habilidades',
    labelKey: 'nav.skills',
    icon: IoSparklesOutline,
    children: [{ to: '/habilidades/herramientas', labelKey: 'nav.tools', icon: IoConstructOutline }],
  },
  { to: '/proyectos', labelKey: 'nav.projects', icon: IoFolderOpenOutline },
  { to: '/experiencia', labelKey: 'nav.experience', icon: IoBriefcaseOutline },
  { to: '/educacion', labelKey: 'nav.education', icon: IoSchoolOutline },
  { to: '/presentaciones', labelKey: 'nav.talks', icon: IoEaselOutline },
  { to: '/contacto', labelKey: 'nav.contact', icon: IoMailOutline },
];

function NavItem({ item, onNavigate }) {
  const { t } = useLanguage();
  const Icon = item.icon;

  return (
    <li>
      <NavLink
        to={item.to}
        end={item.end}
        className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
        onClick={onNavigate}
      >
        <Icon className="nav-link__icon" />
        <span>{t(item.labelKey)}</span>
      </NavLink>

      {item.children && (
        <ul className="nav-sublist">
          {item.children.map((child) => (
            <NavItem key={child.to} item={child} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Sidebar({ onNavigate }) {
  const { pick } = useLanguage();

  return (
    <aside className="sidebar">
      <div className="sidebar__identity">
        <div>
          <p className="sidebar__name">{site.name}</p>
          <p className="sidebar__role">{pick(site.role)}</p>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Principal">
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} item={item} onNavigate={onNavigate} />
          ))}
          <li>
            <CvButton />
          </li>
        </ul>
      </nav>

      <div className="sidebar__settings">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </aside>
  );
}

export default Sidebar;
