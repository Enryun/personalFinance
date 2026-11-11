const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const build = path.resolve(__dirname, '../build');
const source = path.resolve(__dirname, '../src/Pages/AppIntroduction/HorologyStudio/locales');
const codes = fs.readdirSync(source).filter(name => name.endsWith('.json')).map(name => name.replace('.json', ''));
const routeFor = code => code === 'en' ? '/horology-studio/' : `/${code.toLowerCase()}/horology-studio/`;
const base = 'https://www.jamesthang.com';
const store = 'https://apps.apple.com/app/id6808155373';
const sitemap = fs.readFileSync(path.join(build, 'sitemap.xml'), 'utf8');
for (const code of codes) {
  const route = routeFor(code);
  const doc = new JSDOM(fs.readFileSync(path.join(build, route, 'index.html'), 'utf8')).window.document;
  const copy = JSON.parse(fs.readFileSync(path.join(source, `${code}.json`), 'utf8'));
  assert.equal(doc.documentElement.lang, code);
  assert.equal(doc.title, copy.title);
  assert.equal(doc.querySelectorAll('h1').length, 1);
  assert.equal(doc.querySelector('h1').textContent, copy.heading);
  assert.equal(doc.querySelectorAll('footer').length, 1);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, base + route);
  assert.equal(doc.querySelectorAll('link[hreflang]').length, codes.length + 1);
  for (const other of codes) assert.equal(doc.querySelector(`link[hreflang="${other}"]`).href, base + routeFor(other));
  assert(sitemap.includes(`<loc>${base + route}</loc>`));
  assert.equal(doc.querySelectorAll('.horology-screen-widget').length, 2);
  assert.equal(doc.querySelectorAll('.horology-faq details').length, 7);
  assert(doc.querySelector('.horology-note').textContent.includes('18+'));
  assert(doc.querySelector('.horology-requirement').textContent.includes('26'));
  for (const image of doc.querySelectorAll('img[srcset]')) {
    for (const item of image.srcset.split(',')) assert(fs.existsSync(path.join(build, item.trim().split(' ')[0])));
  }
  const image = new URL(doc.querySelector('meta[property="og:image"]').content).pathname;
  assert(fs.existsSync(path.join(build, image)));
  const graph = JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
  const app = graph.find(entity => entity['@type'] === 'SoftwareApplication');
  assert.equal(app['@id'], `${base}/horology-studio/#app`);
  assert.equal(app.operatingSystem, 'iOS 18 or later');
  assert.equal(app.downloadUrl, store);
  assert.equal(app.description, copy.description);
  for (const link of doc.querySelectorAll('a[href*="apps.apple.com"]')) assert.equal(link.href, store);
}
console.log(`Verified ${codes.length} Horology Studio locales, canonical and reciprocal language links, widget previews, iOS requirements, app schema, social cards, sitemap, and App Store destinations.`);
