import { IoLogoLinkedin } from 'react-icons/io5';
import PageHeader from '../components/PageHeader';
import { site } from '../content/site';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="page">
      <PageHeader title={t('nav.contact')} />

      <div className="panel contact">
        <p className="contact__text">{t('contact.text')}</p>

        <a
          className="contact__linkedin"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
