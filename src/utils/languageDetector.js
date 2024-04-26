// utils/languageDetector.js
export const detectLanguage = () => {
    const language = navigator.language || navigator.userLanguage;
    return language.split('-')[0]; // Return the primary language (e.g., 'en', 'es')
  };