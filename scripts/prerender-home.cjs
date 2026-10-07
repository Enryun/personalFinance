// Render public routes with the same React tree used by the client.
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { MemoryRouter } = require('react-router-dom');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');
const manifest = JSON.parse(fs.readFileSync(path.join(build, 'asset-manifest.json'), 'utf8'));
const originalJs = require.extensions['.js'];
function compile(module, filename) {
  if (!filename.startsWith(path.join(root, 'src') + path.sep)) return originalJs(module, filename);
  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), { filename, babelrc: false, configFile: false,
    presets: [[require.resolve('@babel/preset-env'), { targets: { node: 'current' } }], require.resolve('@babel/preset-react')],
  });
  module._compile(code, filename);
}
require.extensions['.js'] = compile;
require.extensions['.jsx'] = compile;
require.extensions['.scss'] = require.extensions['.css'] = () => {};
for (const extension of ['.png', '.jpg', '.JPG', '.webp', '.svg']) require.extensions[extension] = (module, filename) => {
  const asset = manifest.files[`static/media/${path.basename(filename)}`];
  if (asset) { module.exports = asset; return; }
  const bytes = fs.readFileSync(filename);
  if (bytes.length < 10000 && extension !== '.svg') {
    const mime = ['.jpg', '.JPG'].includes(extension) ? 'image/jpeg' : `image/${extension.slice(1)}`;
    module.exports = `data:${mime};base64,${bytes.toString('base64')}`;
    return;
  }
  throw new Error(`Missing production image: ${filename}`);
};
const App = require('../src/App.js').default;
const { professionalPages } = require('../src/Pages/Professional/content.js');
const { projects } = require('../src/Pages/HomePage/projects.js');
const { SITE_URL, HOME_TITLE, getMetadata } = require('../src/siteMetadata.js');
const shell = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
if (!shell.includes('<div id="root"></div>')) throw new Error('Expected an empty React root in the build template.');
fs.writeFileSync(path.join(build, 'spa.html'), shell);
const legacyRoutes = [...fs.readFileSync(path.join(root, 'src/App.js'), 'utf8').matchAll(/path='([^']+)'/g)].map(match => match[1]);
const routes = [...new Set([...legacyRoutes, ...Object.keys(professionalPages)])];
// Keep the local-storage tool on a client shell to avoid hydrating saved private data.
const clientRoutes = ['/cost-tracking'];
function renderRoute(route, notFound = false) {
  const markup = renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)));
  const doc = new JSDOM(shell.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)).window.document;
  const metadata = getMetadata(route);
  doc.documentElement.lang = metadata.language;
  doc.title = notFound ? 'Page not found | James Thang' : metadata.title;
  const setMeta = (attribute, name, value) => {
    let element = doc.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) { element = doc.createElement('meta'); element.setAttribute(attribute, name); doc.head.appendChild(element); }
    element.content = value;
  };
  setMeta('name', 'description', metadata.description);
  setMeta('property', 'og:title', doc.title);
  setMeta('property', 'og:description', metadata.description);
  setMeta('property', 'og:url', metadata.url);
  setMeta('name', 'twitter:title', doc.title);
  setMeta('name', 'twitter:description', metadata.description);
  if (notFound) setMeta('name', 'robots', 'noindex');
  else {
    const canonical = doc.createElement('link'); canonical.rel = 'canonical'; canonical.href = metadata.url; doc.head.appendChild(canonical);
    for (const alternate of metadata.alternates) { const link = doc.createElement('link'); link.rel = 'alternate'; link.hreflang = alternate.lang; link.href = alternate.href; doc.head.appendChild(link); }
    if (metadata.schema) { const schema = doc.createElement('script'); schema.id = route === '/' ? 'profile-schema' : 'page-schema'; schema.type = 'application/ld+json'; schema.textContent = JSON.stringify(metadata.schema).replace(/</g, '\\u003c'); doc.head.appendChild(schema); }
  }
  if (professionalPages[route] || route === '/') {
    if (doc.querySelectorAll('h1').length !== 1) throw new Error(`${route}: expected one h1`);
    if (doc.querySelector('link[rel="canonical"]').href !== metadata.url) throw new Error(`${route}: wrong canonical`);
  }
  for (const img of doc.querySelectorAll('img')) {
    const src = img.getAttribute('src');
    if (src.startsWith('/') && !fs.existsSync(path.join(build, src))) throw new Error(`${route}: missing image ${src}`);
  }
  if (route === '/') {
    if (doc.title !== HOME_TITLE) throw new Error('Incorrect home title');
    for (const project of projects) if (!doc.querySelector(`a[href="${project.route}"]`)) throw new Error(`Missing project link ${project.route}`);
  }
  return '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;
}
for (const route of routes.filter(route => !clientRoutes.includes(route))) {
  const directory = path.join(build, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), renderRoute(route));
}
fs.writeFileSync(path.join(build, '404.html'), renderRoute('/404', true));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.filter(route => !clientRoutes.includes(route)).map(route => `  <url><loc>${SITE_URL}${route}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(build, 'sitemap.xml'), sitemap);
// Non-forced rules let static assets and generated route directories win.
fs.writeFileSync(path.join(build, '_redirects'), `${clientRoutes.map(route => `${route} /spa.html 200`).join('\n')}\n/* /404.html 404\n`);
// Validate all local links and reciprocal language declarations in generated content.
for (const route of routes.filter(route => !clientRoutes.includes(route))) {
  const doc = new JSDOM(fs.readFileSync(path.join(build, route, 'index.html'), 'utf8')).window.document;
  for (const link of doc.querySelectorAll('a[href^="/"]')) {
    const destination = link.getAttribute('href').split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (!routes.includes(destination) && !fs.existsSync(path.join(build, destination))) throw new Error(`${route}: broken local link ${destination}`);
  }
  const page = professionalPages[route];
  if (page && page.translation && professionalPages[page.translation].translation !== route) throw new Error(`Non-reciprocal translation ${route}`);
}
console.log(`Prerendered ${routes.length - clientRoutes.length} public routes, validated links and images, generated XML sitemap and 404 fallback.`);
