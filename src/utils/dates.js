/**
 * Formateo de las fechas del contenido, que vienen como 'YYYY-MM' o 'YYYY'.
 * `null` significa "actualidad" y lo resuelve quien llama, con su traducción.
 */

const LOCALES = { es: 'es-UY', en: 'en-US' };

export function formatDate(value, lang) {
  if (!value) return '';

  const [year, month] = value.split('-');
  if (!month) return year;

  // Día 1 arbitrario: sólo se muestran mes y año.
  const date = new Date(Number(year), Number(month) - 1, 1);
  const label = date.toLocaleDateString(LOCALES[lang] ?? LOCALES.es, {
    month: 'short',
    year: 'numeric',
  });

  // es-UY devuelve "ene 2024"; queda mejor capitalizado.
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function formatRange(start, end, lang, presentLabel) {
  const from = formatDate(start, lang);
  const to = end ? formatDate(end, lang) : presentLabel;

  if (!from) return to;
  return `${from} — ${to}`;
}
