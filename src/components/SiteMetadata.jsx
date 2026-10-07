import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HOME_TITLE, HOME_DESCRIPTION, CONTACT_TITLE, CONTACT_DESCRIPTION, SITE_URL, profileSchema } from '../siteMetadata';
import { projects } from '../Pages/HomePage/projects';

export default function SiteMetadata() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const home = pathname === '/';
    const project = projects.find(item => item.route === pathname);
    const title = home ? HOME_TITLE : pathname === '/contact' ? CONTACT_TITLE : project ? `${project.title} | James Thang` : `James Thang — ${pathname.startsWith('/policy') ? 'Privacy & Terms' : 'Mobile Developer'}`;
    const description = home ? HOME_DESCRIPTION : pathname === '/contact' ? CONTACT_DESCRIPTION : project ? project.story : 'App information, support, and policies from independent mobile developer James Thang.';
    document.title = title;
    document.documentElement.lang = pathname.includes('o-an-quan') && new URLSearchParams(search).get('lang') !== 'en' ? 'vi' : 'en';
    function setMeta(attribute, name, content) {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = content;
    }
    const languageQuery = pathname.includes('o-an-quan') && new URLSearchParams(search).get('lang') === 'en' ? '?lang=en' : '';
    const url = `${SITE_URL}${pathname}${languageQuery}`;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = url;
    let schema = document.getElementById('profile-schema');
    if (home) {
      if (!schema) { schema = document.createElement('script'); schema.id = 'profile-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
      schema.textContent = JSON.stringify(profileSchema);
    } else if (schema) schema.remove();
  }, [pathname, search]);
  return null;
}
