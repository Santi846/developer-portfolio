import { IoLanguage } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';

function LanguageToggle() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      className="pill-button"
      onClick={toggleLanguage}
      title={t('toggles.language')}
      aria-label={t('toggles.language')}
    >
      <IoLanguage />
      <span>{lang === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
}

export default LanguageToggle;
