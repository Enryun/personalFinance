export const SITE_URL = 'https://www.jamesthang.com';
export const HOME_TITLE = 'James Thang | iOS & React Native Developer';
export const CONTACT_TITLE = 'Contact James Thang | Mobile App Development';
export const CONTACT_DESCRIPTION = 'Discuss iOS, macOS, and React Native projects with James Thang. Find his email, phone, and LinkedIn, and share what you want to build or improve.';
export const HOME_DESCRIPTION = 'James Thang builds iOS and macOS apps with SwiftUI and UIKit, develops with React Native, and works with Codex, Claude Code, and Cursor. Explore his apps, books, and course.';
export const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profile`,
  url: `${SITE_URL}/`,
  name: HOME_TITLE,
  description: HOME_DESCRIPTION,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Dương Đình Bảo Thăng',
    alternateName: 'James Thang',
    url: `${SITE_URL}/`,
    jobTitle: 'iOS and React Native Developer',
    description: 'Independent mobile developer, technical author, and SwiftUI course instructor.',
    sameAs: ['https://www.linkedin.com/in/jamesthang/'],
    knowsAbout: ['iOS development', 'macOS development', 'Swift', 'SwiftUI', 'UIKit', 'React Native', 'Firebase', 'Codex', 'Claude Code', 'Cursor'],
  },
};
