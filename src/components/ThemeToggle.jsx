import { IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';
  const label = isDark ? t('toggles.toLight') : t('toggles.toDark');

  return (
    <button type="button" className="pill-button" onClick={toggleTheme} title={label} aria-label={label}>
      {isDark ? <IoSunny /> : <IoMoon />}
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}

export default ThemeToggle;
