import { IoOpenOutline } from 'react-icons/io5';
import Media from '../components/Media';
import PageHeader from '../components/PageHeader';
import { findEducation } from '../content/education';
import { talks } from '../content/talks';
import { useLanguage } from '../context/LanguageContext';

function Talks() {
  const { t, pick } = useLanguage();

  return (
    <section className="page">
      <PageHeader title={t('nav.talks')} subtitle={t('talks.intro')} />

      <div className="talks">
        {talks.map((talk) => {
          const related = findEducation(talk.educationId);
          const title = pick(talk.title);

          return (
            <article key={talk.id} className="talk card">
              <Media src={talk.image} alt={title} ratio="16 / 10" className="talk__media" />

              <div className="talk__body">
                <h2 className="talk__title">
                  {talk.link ? (
                    <a href={talk.link} target="_blank" rel="noopener noreferrer">
                      {title}
                      <IoOpenOutline className="talk__link-icon" />
                    </a>
                  ) : (
                    title
                  )}
                </h2>

                {talk.year && <p className="talk__year">{talk.year}</p>}
                {pick(talk.description) && <p className="talk__description">{pick(talk.description)}</p>}

                {related && (
                  <p className="talk__related">
                    <span className="talk__related-label">{t('talks.relatedEducation')}</span>
                    {pick(related.title)} — {related.institution}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Talks;
