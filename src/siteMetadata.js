import { copy as gameCopy } from './Pages/AppIntroduction/OAnQuan/copy';
import { content as policyCopy } from './Pages/AppIntroduction/OAnQuan/policyCopy';
import { professionalPages, books, publisherLinks } from './Pages/Professional/content';
import { projects } from './Pages/HomePage/projects';
export const SITE_URL = 'https://www.jamesthang.com';
export const HOME_TITLE = 'James Thang | iOS Specialist, SwiftUI Instructor & Author';
export const CONTACT_TITLE = 'Contact James Thang | iOS Projects & SwiftUI Learning';
export const CONTACT_DESCRIPTION = 'Discuss iOS, macOS, React Native projects, or SwiftUI learning with James Thang. Find his email, phone, and LinkedIn on the contact page.';
export const HOME_DESCRIPTION = 'James Thang is an iOS specialist, SwiftUI instructor, and technical author. Explore his iPhone and Mac apps, SwiftUI and Firebase books, course, and React Native experience.';
export const person = {
  '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'James Thang',
  alternateName: ['Dương Đình Bảo Thăng', 'Dương Đình Bảo (James) Thăng', 'Duong Dinh Bao (James) Thang', 'Thăng Dương'],
  url: `${SITE_URL}/about`, jobTitle: 'iOS developer, SwiftUI instructor, and technical author',
  description: 'Independent iOS and macOS developer specializing in SwiftUI and UIKit, technical author, and SwiftUI course instructor.',
  sameAs: ['https://www.linkedin.com/in/jamesthang/'],
  knowsAbout: ['iOS development', 'macOS development', 'Swift', 'SwiftUI', 'UIKit', 'React Native', 'Firebase', 'Codex', 'Claude Code', 'Cursor'],
};
export const profileSchema = {
  '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': `${SITE_URL}/#profile`, url: `${SITE_URL}/`, name: HOME_TITLE, description: HOME_DESCRIPTION, mainEntity: person,
};
export function getMetadata(pathname, search = '') {
  pathname = pathname.replace(/\/+$/, '') || '/';
  const page = professionalPages[pathname];
  const project = projects.find(item => item.route === pathname);
  const languageQuery = pathname.includes('o-an-quan') && new URLSearchParams(search).get('lang') === 'en' ? '?lang=en' : '';
  const url = `${SITE_URL}${pathname}${languageQuery}`;
  const language = pathname.startsWith('/vi/') || (pathname.includes('o-an-quan') && !languageQuery) ? 'vi' : 'en';
  const oq = pathname.includes('o-an-quan') ? (pathname.startsWith('/policy/') ? policyCopy : gameCopy)[language] : null;
  const policyName = pathname.startsWith('/policy/') ? pathname.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  const title = oq ? `${pathname.startsWith('/policy/') ? 'Ô Ăn Quan — ' : ''}${oq.title}` : pathname === '/' ? HOME_TITLE : pathname === '/contact' ? CONTACT_TITLE : page ? page.title : project ? `${project.title} | James Thang` : `${policyName ? `${policyName} — ` : ''}${pathname.startsWith('/policy') ? 'Privacy & Terms' : 'Mobile Developer'} | James Thang`;
  const description = oq ? oq.description || oq.intro : pathname === '/' ? HOME_DESCRIPTION : pathname === '/contact' ? CONTACT_DESCRIPTION : page ? page.description : project ? project.story : 'App information, support, and policies from independent mobile developer James Thang.';
  let schema = pathname === '/' ? profileSchema : null;
  if (page) {
    const type = page.article ? 'Article' : pathname.endsWith('/about') ? 'ProfilePage' : 'WebPage';
    const entity = { '@type': type, '@id': `${url}#page`, url, name: title, description, inLanguage: language };
    if (type === 'ProfilePage') entity.mainEntity = { '@id': person['@id'] };
    else { entity.author = { '@id': person['@id'] }; entity.about = { '@id': person['@id'] }; }
    if (page.article) Object.assign(entity, { headline: page.heading, datePublished: page.date, author: { '@id': person['@id'] }, mainEntityOfPage: url });
    const graph = [person, entity];
    if (page.books) for (const book of books) graph.push({ '@type': 'Book', '@id': `${book.url}#book`, name: book.title, author: { '@id': person['@id'] }, isbn: book.isbn, datePublished: book.date, url: book.url, publisher: { '@type': 'Organization', name: 'Orange AVA' } });
    if (page.course) graph.push({ '@type': 'Course', '@id': `${publisherLinks.course}#course`, name: 'SwiftUI Essentials: Kickstart Your iOS Development Journey', description: 'An English-language introduction to SwiftUI interface building, layout, state management, navigation, and MVVM.', inLanguage: 'en', url: publisherLinks.course, provider: { '@id': person['@id'] } });
    schema = { '@context': 'https://schema.org', '@graph': graph };
  }
  const alternates = page && page.translation ? [{ lang: language, href: url }, { lang: language === 'vi' ? 'en' : 'vi', href: `${SITE_URL}${page.translation}` }, { lang: 'x-default', href: `${SITE_URL}${language === 'vi' ? page.translation : pathname}` }] : [];
  return { title, description, url, language, schema, alternates };
}
