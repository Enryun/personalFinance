import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMetadata } from '../siteMetadata';

export default function SiteMetadata() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const metadata = getMetadata(pathname, search);
    document.title = metadata.title;
    document.documentElement.lang = metadata.language;
    function setMeta(attribute, name, content) {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = content;
    }
    setMeta('name', 'description', metadata.description);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:url', metadata.url);
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
    const notFound = Boolean(document.querySelector('.profile-not-found'));
    if (notFound) { document.title = 'Page not found | James Thang'; setMeta('name', 'robots', 'noindex'); }
    else { const robots = document.querySelector('meta[name="robots"]'); if (robots) robots.remove(); }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    if (notFound) canonical.remove();
    else canonical.href = metadata.url;
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
    metadata.alternates.forEach(alternate => { const link = document.createElement('link'); link.rel = 'alternate'; link.hreflang = alternate.lang; link.href = alternate.href; document.head.appendChild(link); });
    document.querySelectorAll('#profile-schema, #page-schema').forEach(element => element.remove());
    if (metadata.schema) {
      const schema = document.createElement('script'); schema.id = pathname === '/' ? 'profile-schema' : 'page-schema'; schema.type = 'application/ld+json'; schema.textContent = JSON.stringify(metadata.schema); document.head.appendChild(schema);
    }
  }, [pathname, search]);
  return null;
}
