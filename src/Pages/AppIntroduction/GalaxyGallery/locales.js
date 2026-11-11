export const galaxyLocales = [
  ['en', 'English', 'us'],
  ['vi', 'Tiếng Việt', 'vn'],
  ['ja', '日本語', 'jp'],
  ['zh-Hant', '繁體中文', 'tw'],
  ['zh-Hans', '简体中文', 'cn'],
  ['ko', '한국어', 'kr'],
  ['th', 'ไทย', 'th'],
  ['id', 'Bahasa Indonesia', 'id'],
  ['de', 'Deutsch', 'de'],
  ['fr', 'Français', 'fr'],
  ['es', 'Español', 'es'],
  ['pt-BR', 'Português (Brasil)', 'br'],
  ['it', 'Italiano', 'it'],
  ['pt-PT', 'Português (Portugal)', 'pt'],
].map(([code, name, country]) => ({
  code, name, country,
  path: code === 'en' ? '/galaxy-gallery/' : `/${code.toLowerCase()}/galaxy-gallery/`,
}));

export function getGalaxyLocale(pathname) {
  const normalized = pathname.replace(/\/+$/, '').toLowerCase();
  return galaxyLocales.find(locale => locale.path.replace(/\/$/, '') === normalized);
}
