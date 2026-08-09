import PageHeader from '../components/PageHeader';
import { about } from '../content/about';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t, pick } = useLanguage();

  return (
    <section className="page">
      <PageHeader title={t('nav.about')} subtitle={pick(about.headline)} />

      <div className="panel prose">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{pick(paragraph)}</p>
        ))}
      </div>

      {about.highlights.length > 0 && (
        <ul className="tag-list tag-list--lg">
          {about.highlights.map((highlight, index) => (
            <li key={index} className="tag">
              {pick(highlight)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default About;
