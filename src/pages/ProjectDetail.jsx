import { Link, useParams } from 'react-router-dom';
import {
  IoArrowBack,
  IoArrowForward,
  IoLogoGithub,
  IoLogoYoutube,
  IoOpenOutline,
} from 'react-icons/io5';
import Carousel from '../components/Carousel';
import ImageCards from '../components/ImageCards';
import ProjectGallery from '../components/ProjectGallery';
import TagList from '../components/TagList';
import { detailSections, findProject } from '../content/projects';
import { findTalk } from '../content/talks';
import { useLanguage } from '../context/LanguageContext';

/** Ícono de cada tipo de enlace declarado en `projects.js`. */
const LINK_ICONS = {
  github: IoLogoGithub,
  video: IoLogoYoutube,
  external: IoOpenOutline,
  internal: IoArrowForward,
};

/** Botonera de enlaces: repos, tutoriales en video, tableros. */
function LinkList({ items = [] }) {
  const { pick } = useLanguage();

  return (
    <ul className="project-links">
      {items.map((item) => {
        const Icon = LINK_ICONS[item.kind] ?? IoOpenOutline;
        const label = pick(item.label);

        return (
          <li key={item.url ?? item.to}>
            {item.kind === 'internal' ? (
              <Link to={item.to} className="button button--ghost">
                <Icon />
                {label}
              </Link>
            ) : (
              <a className="button button--ghost" href={item.url} target="_blank" rel="noopener noreferrer">
                <Icon />
                {label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Un bloque de una sección: párrafos, carrusel, tarjetas con imagen o enlaces. */
function SectionBlock({ block, projectName }) {
  const { pick } = useLanguage();

  if (block.type === 'text') {
    const paragraphs = pick(block.paragraphs) || [];

    return (
      <div className="prose">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (block.type === 'gallery') {
    return <ProjectGallery groups={block.groups} alt={projectName} />;
  }

  if (block.type === 'cards') {
    const title = pick(block.title);

    return (
      <div className="project-section__cards">
        {title && <h3 className="project-section__subtitle">{title}</h3>}
        <ImageCards items={block.items} />
      </div>
    );
  }

  if (block.type === 'links') {
    return <LinkList items={block.items} />;
  }

  return null;
}

function ProjectDetail() {
  const { slug } = useParams();
  const { t, pick } = useLanguage();
  const project = findProject(slug);

  const backLink = (
    <Link to="/proyectos" className="button button--ghost">
      <IoArrowBack />
      {t('projects.back')}
    </Link>
  );

  if (!project) {
    return (
      <section className="page">
        {backLink}
        <p className="empty-state">{t('projects.notFound')}</p>
      </section>
    );
  }

  // Formato viejo (`detail`): sólo se muestran las secciones con texto en el idioma activo.
  const legacySections = detailSections
    .map((key) => ({ key, text: pick(project.detail?.[key]) }))
    .filter((section) => section.text);

  const talk = project.presentation ? findTalk(project.presentation.talkId) : null;

  return (
    <article className="page project-detail">
      <div className="project-detail__top">
        {backLink}

        <div className="project-detail__links">
          {project.repo && (
            <a className="button button--ghost" href={project.repo} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
              {t('projects.repo')}
            </a>
          )}
          {project.liveUrl && (
            <a
              className="button button--primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoOpenOutline />
              {t('projects.live')}
            </a>
          )}
        </div>
      </div>

      <header className="project-detail__header">
        <h1>{project.name}</h1>
        {project.year && <span className="project-detail__year">{project.year}</span>}
      </header>

      <p className="project-detail__summary">{pick(project.summary)}</p>

      {legacySections.map((section) => (
        <section key={section.key} className="panel prose">
          <h2 className="section-title">{t(`projects.sections.${section.key}`)}</h2>
          <p>{section.text}</p>
        </section>
      ))}

      {project.sections?.map((section) => (
        <section key={section.id} className="panel project-section">
          <h2 className="section-title">{pick(section.title)}</h2>

          {section.blocks.map((block, index) => (
            <SectionBlock key={`${section.id}-${index}`} block={block} projectName={project.name} />
          ))}
        </section>
      ))}

      {project.tech.length > 0 && (
        <section className="panel">
          <h2 className="section-title">{t('projects.tech')}</h2>
          <TagList items={project.tech} className="tag-list--lg" />
        </section>
      )}

      {project.gallery?.length > 0 && (
        <section className="panel">
          <h2 className="section-title">{t('projects.gallery')}</h2>
          <Carousel images={project.gallery} alt={project.name} />
        </section>
      )}

      {talk && (
        <section className="panel project-section">
          <h2 className="section-title">{t('projects.presentation')}</h2>

          <div className="prose">
            <p>{pick(project.presentation.note)}</p>
          </div>

          <LinkList
            items={[{ kind: 'internal', to: '/presentaciones', label: t('talks.viewPresentation') }]}
          />
        </section>
      )}
    </article>
  );
}

export default ProjectDetail;
