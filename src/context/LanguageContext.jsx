import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from '../i18n/es';
import en from '../i18n/en';

const DICTIONARIES = { es, en };
const STORAGE_KEY = 'portfolio-lang';

const LanguageContext = createContext(null);

/** Idioma guardado > idioma del navegador > español. */
function resolveInitialLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;

  const browser = (navigator.language || 'es').split('-')[0];
  return browser === 'en' ? 'en' : 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(resolveInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'es' ? 'en' : 'es'));
  }, []);

  /** t('projects.back') -> string. Devuelve la clave si no existe, para que el hueco se vea. */
  const t = useCallback(
    (path) => {
      const value = path
        .split('.')
        .reduce((node, key) => (node == null ? undefined : node[key]), DICTIONARIES[lang]);
      return value ?? path;
    },
    [lang],
  );

  /**
   * Resuelve un campo de contenido bilingüe: pick({ es, en }) -> string.
   * Si le pasás un string plano lo devuelve tal cual (útil para nombres propios).
   */
  const pick = useCallback(
    (field) => {
      if (field == null) return '';
      if (typeof field === 'string') return field;
      return field[lang] ?? field.es ?? field.en ?? '';
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLanguage, t, pick }),
    [lang, toggleLanguage, t, pick],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- el hook vive junto a su provider a propósito
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  return context;
}
