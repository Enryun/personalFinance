import { GALAXY_STORE, GALAXY_TITLE, GALAXY_DESCRIPTION } from './Pages/AppIntroduction/GalaxyGallery/content';
import { OANQUAN_STORE, getOAnQuanLanguage, getOAnQuanPath, isOAnQuanPath } from './Pages/AppIntroduction/OAnQuan/locales';
import { FOLIO_STORE, FOLIO_TITLE, FOLIO_DESCRIPTION } from './Pages/AppIntroduction/Folio/content';
import { volaLocales, getVolaLocale } from './Pages/AppIntroduction/Vola/locales';
import { volaContent, VOLA_STORE } from './Pages/AppIntroduction/Vola/content';
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
  const volaLocale = getVolaLocale(pathname);
  if (volaLocale) {
    const language = volaLocale.code;
    const copy = volaContent[language];
    const url = `${SITE_URL}${volaLocale.path}`;
    const image = `${SITE_URL}/vola/${language}/social-card.png`;
    return {
      title: copy.title, description: copy.description, url, language, direction: volaLocale.direction,
      image, imageAlt: copy.title,
      alternates: [...volaLocales.map(locale => ({lang: locale.code, href: `${SITE_URL}${locale.path}`})), { lang: 'x-default', href: `${SITE_URL}/vola/` }],
      schema: { '@context': 'https://schema.org', '@graph': [person, {
        '@type': 'SoftwareApplication', '@id': `${SITE_URL}/vola/#app`, name: 'Vola: AI Voice Note Taker',
        url, description: copy.description, inLanguage: language, image,
        operatingSystem: 'iOS 26.0 or later, iPadOS 26.0 or later', applicationCategory: 'ProductivityApplication',
        author: { '@id': person['@id'] }, downloadUrl: VOLA_STORE, sameAs: [VOLA_STORE],
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: VOLA_STORE,
          description: copy.price }
      }] }
    };
  }
  if (isOAnQuanPath(pathname)) {
    const language = getOAnQuanLanguage(pathname, search);
    const policy = pathname.includes('/policy/');
    const content = policy ? policyCopy[language] : gameCopy[language];
    const url = `${SITE_URL}${getOAnQuanPath(language, policy)}`;
    const image = `${SITE_URL}/o-an-quan/${language}/social-card.png`;
    const alternates = ['vi', 'en'].map(lang => ({ lang, href: `${SITE_URL}${getOAnQuanPath(lang, policy)}` }));
    alternates.push({ lang: 'x-default', href: `${SITE_URL}${getOAnQuanPath('vi', policy)}` });
    return {
      title: policy ? `Ô Ăn Quan — ${content.title}` : content.title,
      description: policy ? content.intro : content.description, url, language, direction: 'ltr', image,
      imageAlt: language === 'vi' ? 'Ô Ăn Quan cho iPhone và iPad — Một vòng quê nhà' : 'Ô Ăn Quan for iPhone and iPad — A Journey Through the Village',
      alternates,
      schema: policy ? null : { '@context': 'https://schema.org', '@graph': [person, {
        '@type': ['VideoGame', 'SoftwareApplication'], '@id': `${SITE_URL}/o-an-quan/#game`,
        name: language === 'vi' ? 'Ô Ăn Quan: Trò chơi dân gian' : 'O An Quan: vietnamese mancala',
        url, description: content.description, inLanguage: ['vi', 'en'], image,
        operatingSystem: 'iOS 17 or later, iPadOS 17 or later', applicationCategory: 'GameApplication',
        genre: ['Board game', 'Strategy'], author: { '@id': person['@id'] },
        downloadUrl: OANQUAN_STORE, sameAs: [OANQUAN_STORE],
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND', url: OANQUAN_STORE,
          description: content.note }
      }] }
    };
  }
  if (pathname === '/galaxy-gallery') {
    const url = `${SITE_URL}/galaxy-gallery/`;
    const image = `${SITE_URL}/galaxy-gallery/social-card.png`;
    return {
      title: GALAXY_TITLE, description: GALAXY_DESCRIPTION, url, language: 'en', direction: 'ltr',
      image, imageAlt: 'Galaxy Gallery — explore space and the Solar System on iPhone and iPad', alternates: [],
      schema: { '@context': 'https://schema.org', '@graph': [person, {
        '@type': 'SoftwareApplication', '@id': `${url}#app`, name: 'Galaxy Gallery: Space & Focus',
        url, description: GALAXY_DESCRIPTION, image,
        inLanguage: ['en', 'vi', 'ja', 'zh-Hant', 'zh-Hans', 'ko', 'th', 'id', 'de', 'fr', 'es', 'pt-BR', 'it', 'pt-PT'],
        operatingSystem: 'iOS 17 or later, iPadOS 17 or later', applicationCategory: 'ProductivityApplication',
        applicationSubCategory: 'Space exploration and astronomy education',
        author: { '@id': person['@id'] }, downloadUrl: GALAXY_STORE, sameAs: [GALAXY_STORE],
        featureList: ['Interactive 3D planets and moons', 'Solar System and Earth–Moon orbits', 'Relative planet-size comparisons', 'AR Quick Look', 'Space facts and Wonder Journeys', 'Optional Galaxy Focus missions'],
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: GALAXY_STORE,
          description: 'Free download with ads and optional in-app purchases. Galaxy Plus offers monthly and lifetime options.' }
      }] }
    };
  }
  if (pathname === '/folio') {
    const url = `${SITE_URL}/folio/`;
    const image = `${SITE_URL}/folio/social-card.png`;
    return {
      title: FOLIO_TITLE, description: FOLIO_DESCRIPTION, url, language: 'en', direction: 'ltr',
      image, imageAlt: 'Folio Markdown editor and connected notes on iPhone and Mac', alternates: [],
      schema: { '@context': 'https://schema.org', '@graph': [person, {
        '@type': 'SoftwareApplication', '@id': `${url}#app`, name: 'Folio: Markdown Library',
        url, description: FOLIO_DESCRIPTION, inLanguage: 'en', image,
        operatingSystem: 'iOS 17 or later, macOS 14 or later', applicationCategory: 'ProductivityApplication',
        author: { '@id': person['@id'] }, downloadUrl: FOLIO_STORE, sameAs: [FOLIO_STORE],
        featureList: ['Markdown Editor, Preview, and Split View', 'Folders, tags, and library search', 'Link Map', 'On-device Writing Assistant', 'Public GitHub Markdown import'],
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', url: FOLIO_STORE,
          description: 'Free download with an optional one-time Pro purchase. See the App Store for current pricing.' }
      }] }
    };
  }
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
