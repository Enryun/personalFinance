export const OANQUAN_STORE = 'https://apps.apple.com/app/id6817187778';
export function getOAnQuanLanguage(pathname, search = '') {
  return pathname.startsWith('/en/') || new URLSearchParams(search).get('lang') === 'en' ? 'en' : 'vi';
}
export function getOAnQuanPath(language, policy = false) {
  return `${language === 'en' ? '/en' : ''}${policy ? '/policy' : ''}/o-an-quan/`;
}
export function isOAnQuanPath(pathname) {
  return ['/o-an-quan', '/en/o-an-quan', '/policy/o-an-quan', '/en/policy/o-an-quan'].includes(pathname.replace(/\/+$/, ''));
}
