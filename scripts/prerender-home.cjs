// Render the homepage at build time using the same React components as the client.
// Keep a separate SPA shell for deep links so app pages never receive the home canonical.
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { MemoryRouter } = require('react-router-dom');
const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');
const manifest = JSON.parse(fs.readFileSync(path.join(build, 'asset-manifest.json'), 'utf8'));
const originalJs = require.extensions['.js'];
function compile(module, filename) {
  if (!filename.startsWith(path.join(root, 'src') + path.sep)) return originalJs(module, filename);
  const { code } = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename, babelrc: false, configFile: false,
    presets: [[require.resolve('@babel/preset-env'), { targets: { node: 'current' } }], require.resolve('@babel/preset-react')],
  });
  module._compile(code, filename);
}
require.extensions['.js'] = compile;
require.extensions['.jsx'] = compile;
require.extensions['.scss'] = () => {};
for (const extension of ['.png', '.jpg', '.JPG', '.webp']) {
  require.extensions[extension] = (module, filename) => {
    const asset = manifest.files[`static/media/${path.basename(filename)}`];
    if (!asset) throw new Error(`Missing production image: ${filename}`);
    module.exports = asset;
  };
}
const Home = require('../src/Pages/HomePage/HomePage.jsx').default;
const Footer = require('../src/components/Footer/footer.component.jsx').default;
const { projects } = require('../src/Pages/HomePage/projects.js');
const { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, profileSchema } = require('../src/siteMetadata.js');
const shell = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
if (!shell.includes('<div id="root"></div>')) throw new Error('Expected an empty React root in the build template.');
fs.writeFileSync(path.join(build, 'spa.html'), shell);
const markup = renderToString(React.createElement(MemoryRouter, { initialEntries: ['/'] },
  React.createElement('div', { className: 'App' }, React.createElement(Home), React.createElement(Footer))));
const head = `<link rel="canonical" href="${SITE_URL}/"/><meta property="og:url" content="${SITE_URL}/"/><script id="profile-schema" type="application/ld+json">${JSON.stringify(profileSchema).replace(/</g, '\\u003c')}</script>`;
const html = shell.replace('<div id="root"></div>', `<div id="root">${markup}</div>`).replace('</head>', `${head}</head>`);
fs.writeFileSync(path.join(build, 'index.html'), html);
const routes = ['/', '/contact', ...projects.map(project => project.route), '/policy/o-an-quan'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(routes)].map(route => `  <url><loc>${SITE_URL}${route}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(build, 'sitemap.xml'), sitemap);
// Fail the build if important homepage SEO regresses.
const { JSDOM } = require('jsdom');
const doc = new JSDOM(html).window.document;
if (doc.querySelectorAll('h1').length !== 1) throw new Error('Homepage must have exactly one h1.');
if (doc.title !== HOME_TITLE || !doc.querySelector('meta[name="description"]').content.includes('React Native')) throw new Error('Missing home search metadata.');
if (doc.querySelector('link[rel="canonical"]').href !== `${SITE_URL}/`) throw new Error('Incorrect home canonical.');
for (const project of projects) {
  if (!doc.querySelector(`a[href="${project.route}"]`)) throw new Error(`Missing crawlable project: ${project.route}`);
}
for (const image of doc.querySelectorAll('img')) {
  if (!fs.existsSync(path.join(build, image.getAttribute('src')))) throw new Error(`Missing image: ${image.src}`);
}
if (!doc.body.textContent.includes('Claude Code') || !doc.body.textContent.includes('Cursor')) throw new Error('Missing coding agent experience.');
const schema = JSON.parse(doc.querySelector('#profile-schema').textContent);
if (schema.mainEntity.alternateName !== 'James Thang') throw new Error('Invalid profile schema.');
if (shell.includes('rel="canonical"') || shell.includes('profile-schema')) throw new Error('Homepage SEO leaked into the SPA shell.');
if (HOME_DESCRIPTION !== doc.querySelector('meta[name="description"]').content) throw new Error('Homepage description has drifted from shared metadata.');
console.log(`Prerendered homepage, verified ${projects.length} project links and images, and generated sitemap.xml.`);
