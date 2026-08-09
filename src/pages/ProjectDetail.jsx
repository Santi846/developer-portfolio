import { Link, useParams } from 'react-router-dom';
import { IoArrowBack, IoLogoGithub, IoOpenOutline } from 'react-icons/io5';
import Carousel from '../components/Carousel';
import TagList from '../components/TagList';
import { detailSections, findProject } from '../content/projects';
import { useLanguage } from '../context/LanguageContext';

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

  // Sólo se muestran las secciones que ya tienen texto en el idioma activo.
  const sections = detailSections
    .map((key) => ({ key, text: pick(project.detail?.[key]) }))
    .filter((section) => section.text);

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

      {project.tech.length > 0 && (
        <section className="panel">
          <h2 className="section-title">{t('projects.tech')}</h2>
          <TagList items={project.tech} />
        </section>
      )}

      {sections.map((section) => (
        <section key={section.key} className="panel prose">
          <h2 className="section-title">{t(`projects.sections.${section.key}`)}</h2>
          <p>{section.text}</p>
        </section>
      ))}

      {project.gallery?.length > 0 && (
        <section className="panel">
          <h2 className="section-title">{t('projects.gallery')}</h2>
          <Carousel images={project.gallery} alt={project.name} />
        </section>
      )}
    </article>
  );
}

export default ProjectDetail;
