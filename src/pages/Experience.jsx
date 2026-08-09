import PageHeader from '../components/PageHeader';
import TagList from '../components/TagList';
import { experience } from '../content/experience';
import { useLanguage } from '../context/LanguageContext';
import { formatRange } from '../utils/dates';

function Experience() {
  const { lang, t, pick } = useLanguage();

  return (
    <section className="page">
      <PageHeader title={t('nav.experience')} />

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.id} className="timeline__item">
            <span className="timeline__marker" aria-hidden="true" />

            <div className="timeline__body card">
              <div className="timeline__head">
                <div>
                  <h2 className="timeline__title">{pick(job.role)}</h2>
                  <p className="timeline__meta">
                    {job.company}
                    {job.employment && ` · ${pick(job.employment)}`}
                  </p>
                  <p className="timeline__meta">
                    {job.location}
                    {job.workMode && ` · ${pick(job.workMode)}`}
                  </p>
                </div>

                <span className="date-chip">
                  {formatRange(job.start, job.end, lang, t('present'))}
                </span>
              </div>

              {pick(job.description) && (
                <p className="timeline__description">{pick(job.description)}</p>
              )}

              {job.bullets?.length > 0 && (
                <ul className="bullets">
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{pick(bullet)}</li>
                  ))}
                </ul>
              )}

              {/* Las tecnologías admiten string o campo bilingüe, así que se resuelven acá. */}
              <TagList items={(job.tech ?? []).map(pick)} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
