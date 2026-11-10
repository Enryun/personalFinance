// Validate the built artifacts that crawlers receive, rather than only React metadata.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');
const site = 'https://www.jamesthang.com';
const read = route => new JSDOM(fs.readFileSync(path.join(build, route, 'index.html'), 'utf8')).window.document;
const english = read('/vola/');
const locales = [...english.querySelectorAll('.vola-language-picker a')].map(link => ({code:link.hreflang, path:link.getAttribute('href')}));
assert.equal(locales.length,24);
assert.equal(new Set(locales.map(locale => locale.path)).size,24);
const sitemap = new JSDOM(fs.readFileSync(path.join(build,'sitemap.xml'),'utf8'),{contentType:'application/xml'}).window.document;
const sitemapUrls = [...sitemap.getElementsByTagName('loc')].map(node => node.textContent);
for (const locale of locales) {
  const d=read(locale.path), url=site+locale.path;
  assert.equal(d.documentElement.lang,locale.code);
  assert.equal(d.documentElement.dir,['ar','ur'].includes(locale.code)?'rtl':'ltr');
  assert.equal(d.querySelectorAll('h1').length,1);
  assert(d.querySelector('h1').textContent.trim());
  assert.equal(d.querySelector('link[rel="canonical"]').href,url);
  assert.equal(d.querySelectorAll('link[hreflang]').length,25);
  for(const other of locales)assert.equal(d.querySelector(`link[hreflang="${other.code}"]`).href,site+other.path);
  assert.equal(d.querySelector('link[hreflang="x-default"]').href,site+'/vola/');
  assert.equal(d.querySelectorAll('details:not(.vola-language-picker)').length,6);
  assert.equal(d.querySelector('.vola-language-picker [aria-current="page"]').getAttribute('href'),locale.path);
  assert.equal(d.querySelectorAll('.vola-language-picker a').length,24);
  assert.equal(d.querySelectorAll('a[href="https://apps.apple.com/app/id6758566739"]').length,3);
  assert(d.querySelector('.vola-hero-image img').getAttribute('src').includes(`/vola/${locale.code}/`));
  for(const img of d.images){
    const src=img.getAttribute('src');
    if(src.startsWith('/'))assert(fs.existsSync(path.join(build,src)),src);
    for(const candidate of (img.getAttribute('srcset')||'').split(',').filter(Boolean))assert(fs.existsSync(path.join(build,candidate.trim().split(' ')[0])));
  }
  const social=d.querySelector('meta[property="og:image"]').content;
  assert(social.includes(`/vola/${locale.code}/social-card.png`));
  assert(fs.existsSync(path.join(build,new URL(social).pathname)));
  const schema=JSON.parse(d.querySelector('script[type="application/ld+json"]').textContent)['@graph'].find(item=>item['@type']==='SoftwareApplication');
  assert.equal(schema['@id'],site+'/vola/#app');
  assert.equal(schema.inLanguage,locale.code);
  assert.equal(schema.url,url);
  assert.equal(schema.description,d.querySelector('meta[name="description"]').content);
  assert(sitemapUrls.includes(url));
}
console.log(`Verified ${locales.length} localized Vola pages, 600 reciprocal language annotations, asset variants, app schema, direction, sitemap entries, and store links.`);
