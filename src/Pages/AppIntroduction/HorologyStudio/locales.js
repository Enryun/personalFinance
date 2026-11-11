export const horologyLocales = [
  ['en', 'English', 'us'],
  ['vi', 'Tiếng Việt', 'vn'],
  ['fr', 'Français', 'fr'],
  ['ja', '日本語', 'jp'],
  ['zh-Hans', '简体中文', 'cn'],
  ['zh-Hant', '繁體中文', 'tw'],
  ['ko', '한국어', 'kr'],
  ['th', 'ไทย', 'th'],
  ['de', 'Deutsch', 'de'],
  ['es', 'Español', 'es'],
  ['it', 'Italiano', 'it'],
  ['pt-PT', 'Português (Portugal)', 'pt'],
  ['pt-BR', 'Português (Brasil)', 'br'],
].map(([code, name, country]) => ({
  code, name, country,
  path: code === 'en' ? '/horology-studio/' : `/${code.toLowerCase()}/horology-studio/`,
}));

export function getHorologyLocale(pathname) {
  const normalized = pathname.replace(/\/+$/, '').toLowerCase();
  return horologyLocales.find(locale => locale.path.replace(/\/$/, '') === normalized);
}
