const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const build = path.resolve(__dirname, '../build');
const source = path.resolve(__dirname, '../src/Pages/AppIntroduction/GalaxyGallery/locales');
const codes = fs.readdirSync(source).filter(name => name.endsWith('.json')).map(name => name.replace('.json', ''));
const routeFor = code => code === 'en' ? '/galaxy-gallery/' : `/${code.toLowerCase()}/galaxy-gallery/`;
const base = 'https://www.jamesthang.com';
const store = 'https://apps.apple.com/app/id1662263674';
const sitemap = fs.readFileSync(path.join(build, 'sitemap.xml'), 'utf8');
for (const code of codes) {
  const route = routeFor(code);
  const doc = new JSDOM(fs.readFileSync(path.join(build, route, 'index.html'), 'utf8')).window.document;
  const copy = JSON.parse(fs.readFileSync(path.join(source, `${code}.json`), 'utf8'));
  assert.equal(doc.documentElement.lang, code);
  assert.equal(doc.title, copy.title);
  assert.equal(doc.querySelector('meta[name="description"]').content, copy.description);
  assert.equal(doc.querySelectorAll('h1').length, 1);
  assert.equal(doc.querySelector('h1').textContent, copy.heading);
  assert.equal(doc.querySelectorAll('footer').length, 1);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, base + route);
  assert.equal(doc.querySelectorAll('link[hreflang]').length, codes.length + 1);
  assert(sitemap.includes(`<loc>${base + route}</loc>`));
  for (const other of codes) assert.equal(doc.querySelector(`link[hreflang="${other}"]`).href, base + routeFor(other));
  assert.equal(doc.querySelector('.galaxy-language-picker a[aria-current="page"]').getAttribute('href'), route);
  assert.equal(doc.querySelector('.galaxy-hero-art img').getAttribute('src').split('/')[2], code);
  for (const image of doc.querySelectorAll('img[srcset]')) {
    for (const item of image.srcset.split(',')) assert(fs.existsSync(path.join(build, item.trim().split(' ')[0])));
  }
  const social = new URL(doc.querySelector('meta[property="og:image"]').content).pathname;
  assert(fs.existsSync(path.join(build, social)));
  const graph = JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
  const app = graph.find(entity => entity['@type'] === 'SoftwareApplication');
  assert.equal(app['@id'], `${base}/galaxy-gallery/#app`);
  assert.equal(app.downloadUrl, store);
  assert.equal(app.description, copy.description);
  assert.equal(app.offers.description, copy.pricingText);
  for (const link of doc.querySelectorAll('a[href*="apps.apple.com"]')) assert.equal(link.href, store);
}
console.log(`Verified ${codes.length} Galaxy Gallery locales, reciprocal language links, localized copy, schema, screenshots, social cards, sitemap entries, and App Store links.`);
