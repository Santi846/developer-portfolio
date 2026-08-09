import { NavLink } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { technologies, tools } from '../content/skills';
import { useLanguage } from '../context/LanguageContext';

/** Tarjeta de una tecnología: logo (o inicial) + nombre. */
function SkillCard({ item }) {
  return (
    <li className="skill-card">
      {item.icon ? (
        <img src={item.icon} alt="" className="skill-card__icon" loading="lazy" />
      ) : (
        <span className="skill-card__icon skill-card__icon--empty" aria-hidden="true">
          {item.name.charAt(0)}
        </span>
      )}
      <span className="skill-card__name">{item.name}</span>
    </li>
  );
}

function SkillGroups({ groups }) {
  const { pick } = useLanguage();

  return (
    <div className="skill-groups">
      {groups.map((group) => (
        <section key={group.id} className="skill-group">
          <h2 className="skill-group__title">{pick(group.label)}</h2>
          <ul className="skill-grid">
            {group.items.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/**
 * Una sola página para las dos pestañas: `variant` viene de la ruta
 * (/habilidades y /habilidades/herramientas), así el sub-ítem del sidebar
 * y las pestañas apuntan al mismo lugar.
 */
function Skills({ variant = 'tech' }) {
  const { t } = useLanguage();
  const showingTools = variant === 'tools';

  return (
    <section className="page">
      <PageHeader
        title={showingTools ? t('nav.tools') : t('nav.skills')}
        subtitle={showingTools ? t('skills.toolsIntro') : t('skills.intro')}
      />

      <nav className="tabs" aria-label={t('nav.skills')}>
        <NavLink to="/habilidades" end className={({ isActive }) => `tab ${isActive ? 'is-active' : ''}`}>
          {t('skills.tabTech')}
        </NavLink>
        <NavLink
          to="/habilidades/herramientas"
          className={({ isActive }) => `tab ${isActive ? 'is-active' : ''}`}
        >
          {t('skills.tabTools')}
        </NavLink>
      </nav>

      <SkillGroups groups={showingTools ? tools : technologies} />
    </section>
  );
}

export default Skills;
