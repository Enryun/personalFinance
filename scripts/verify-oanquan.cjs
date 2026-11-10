const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const build = path.resolve(__dirname, '../build');
const base = 'https://www.jamesthang.com';
const store = 'https://apps.apple.com/app/id6817187778';
for (const language of ['vi', 'en']) {
  for (const policy of [false, true]) {
    const route = `${language === 'en' ? '/en' : ''}${policy ? '/policy' : ''}/o-an-quan/`;
    const doc = new JSDOM(fs.readFileSync(path.join(build, route, 'index.html'), 'utf8')).window.document;
    assert.equal(doc.documentElement.lang, language);
    assert.equal(doc.querySelectorAll('h1').length, 1);
    assert.equal(doc.querySelectorAll('footer').length, 1);
    assert.equal(doc.querySelector('link[rel="canonical"]').href, base + route);
    assert.equal(doc.querySelectorAll('link[hreflang]').length, 3);
    assert.equal(doc.querySelector(`link[hreflang="${language}"]`).href, base + route);
    assert(fs.readFileSync(path.join(build, 'sitemap.xml'), 'utf8').includes(`<loc>${base + route}</loc>`));
    if (policy) continue;
    const graph = JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
    const game = graph.find(entity => entity['@type'].includes('VideoGame'));
    assert.equal(game.downloadUrl, store);
    assert.equal(game.offers.price, '0');
    assert.equal(doc.querySelector('.oq-download-qr a').href, store);
    assert.equal(doc.querySelectorAll('.oq-chapters article').length, 4);
    assert.equal(doc.querySelectorAll('.oq-faq details').length, 7);
    assert.equal(doc.querySelectorAll('.oq-rules li').length, 4);
    const image = new URL(doc.querySelector('meta[property="og:image"]').content).pathname;
    assert(fs.existsSync(path.join(build, image)));
  }
}
const redirects = fs.readFileSync(path.join(build, '_redirects'), 'utf8');
assert(redirects.includes('/o-an-quan lang=en /en/o-an-quan/? 301!'));
assert(redirects.includes('/policy/o-an-quan lang=en /en/policy/o-an-quan/? 301!'));
console.log('Verified Vietnamese and English Ô Ăn Quan pages and policies, reciprocal alternates, canonical sitemap entries, app schema, QR destination, rules, FAQs, and legacy redirect rules.');
