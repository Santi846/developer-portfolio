import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import Media from '../components/Media';
import PageHeader from '../components/PageHeader';
import TagList from '../components/TagList';
import { projects } from '../content/projects';
import { useLanguage } from '../context/LanguageContext';

function ProjectCard({ project }) {
  const { t, pick } = useLanguage();

  return (
    <article className="project-card card">
      <Link to={`/proyectos/${project.slug}`} className="project-card__media">
        <Media src={project.cover} alt={project.name} ratio="16 / 10" />
      </Link>

      <div className="project-card__body">
        <h2 className="project-card__title">
          <Link to={`/proyectos/${project.slug}`}>{project.name}</Link>
        </h2>
        <p className="project-card__summary">{pick(project.summary)}</p>
        <TagList items={project.tech} />

        <Link to={`/proyectos/${project.slug}`} className="button button--primary">
          {t('projects.view')}
          <IoArrowForward />
        </Link>
      </div>
    </article>
  );
}

function Projects() {
  const { t } = useLanguage();

  return (
    <section className="page">
      <PageHeader title={t('nav.projects')} subtitle={t('projects.intro')} />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
