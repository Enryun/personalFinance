import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { act, Simulate } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import { HOME_TITLE, SITE_URL } from '../siteMetadata';

let container;
let originalHead;
let originalTitle;
let originalLanguage;
let originalDirection;
let originalScroll;
beforeEach(() => {
  originalHead = document.head.innerHTML;
  originalTitle = document.title;
  originalLanguage = document.documentElement.lang;
  originalDirection = document.documentElement.dir;
  originalScroll = window.scrollTo;
  window.scrollTo = jest.fn();
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  act(() => { ReactDOM.unmountComponentAtNode(container); });
  container.remove();
  document.head.innerHTML = originalHead;
  document.title = originalTitle;
  document.documentElement.lang = originalLanguage;
  document.documentElement.dir = originalDirection;
  window.scrollTo = originalScroll;
});

it('updates canonicals and profile data when navigating between home and app pages', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  expect(document.title).toBe(HOME_TITLE);
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/`);
  expect(JSON.parse(document.getElementById('profile-schema').textContent).mainEntity.name).toBe('James Thang');

  act(() => history.push('/folio'));
  expect(document.title).toBe('Folio: Markdown Editor & Notes for iPhone and Mac');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/folio/`);
  expect(document.getElementById('profile-schema')).toBeNull();

  act(() => history.push('/o-an-quan'));
  expect(document.documentElement.lang).toBe('vi');
  act(() => history.push('/o-an-quan?lang=en'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/en/o-an-quan/`);
  expect(document.title).toContain('Vietnamese Folk Game');

  act(() => history.push('/'));
  expect(document.title).toBe(HOME_TITLE);
  expect(document.querySelector('meta[name="description"]').content).toContain('React Native');
  expect(document.getElementById('profile-schema')).not.toBeNull();
});

it('hydrates prerendered homepage content without replacing or mismatching it', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  container.innerHTML = renderToString(<Router history={history}><App /></Router>);
  const heading = container.querySelector('h1');
  const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
  try {
    act(() => { ReactDOM.hydrate(<Router history={history}><App /></Router>, container); });
    expect(container.querySelector('h1')).toBe(heading);
    expect(container.querySelectorAll('h1')).toHaveLength(1);
    expect(container.textContent).toContain('Claude Code');
    expect(container.querySelector('a[href="/o-an-quan"]')).not.toBeNull();
    expect(errors).not.toHaveBeenCalled();
  } finally {
    errors.mockRestore();
  }
});


it('keeps multilingual identity and metadata consistent during navigation', () => {
  const history = createMemoryHistory({ initialEntries: ['/about'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  expect(document.title).toContain('iOS specialist');
  expect(document.querySelector('link[hreflang="vi"]').href).toBe(`${SITE_URL}/vi/about`);
  const schema = JSON.parse(document.getElementById('page-schema').textContent);
  expect(schema['@graph'][0]['@id']).toBe(`${SITE_URL}/#person`);
  act(() => history.push('/vi/about'));
  expect(document.documentElement.lang).toBe('vi');
  expect(document.querySelector('link[hreflang="en"]').href).toBe(`${SITE_URL}/about`);
  act(() => history.push('/books'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('link[hreflang]')).toBeNull();
  expect(container.textContent).toContain('Ultimate Firebase for iOS and Android Applications');
  expect(JSON.parse(document.getElementById('page-schema').textContent)['@graph'].filter(item => item['@type'] === 'Book')).toHaveLength(2);
  act(() => history.push('/missing-page'));
  expect(container.querySelector('.profile-not-found')).not.toBeNull();
  expect(document.querySelector('meta[name="robots"]').content).toBe('noindex');
  expect(document.getElementById('page-schema')).toBeNull();
  act(() => history.push('/contact'));
  expect(document.querySelector('meta[name="robots"]')).toBeNull();
});

it.each(['/about/', '/vi/swiftui-training', '/books', '/case-studies/vola', '/articles/swiftui-or-uikit', '/vola/', '/vi/vola/'])('hydrates %s without mismatches', route => {
  const history = createMemoryHistory({ initialEntries: [route] });
  container.innerHTML = renderToString(<Router history={history}><App /></Router>);
  const heading = container.querySelector('h1');
  const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
  try {
    act(() => { ReactDOM.hydrate(<Router history={history}><App /></Router>, container); });
    expect(container.querySelector('h1')).toBe(heading);
    expect(errors).not.toHaveBeenCalled();
  } finally { errors.mockRestore(); }
});

it('keeps Vola language, app identity, store links, and social images consistent across navigation', () => {
  const history = createMemoryHistory({ initialEntries: ['/vola/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  expect(document.title).toContain('On-Device Speech to Text');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/vola/`);
  const appId = JSON.parse(document.getElementById('page-schema').textContent)['@graph'][1]['@id'];
  expect(container.querySelectorAll('a[href="https://apps.apple.com/app/id6758566739"]')).toHaveLength(3);
  expect(container.textContent).toContain('Imported-media transcription may use');
  const click = jest.fn();
  window.addEventListener('vola:app-store-click', click);
  try {
    Simulate.click(container.querySelector('a[data-placement="hero"]'));
    expect(click.mock.calls[0][0].detail).toEqual({ product: 'vola', locale: 'en', placement: 'hero' });
  } finally { window.removeEventListener('vola:app-store-click', click); }
  act(() => history.push('/vi/vola/'));
  expect(document.documentElement.lang).toBe('vi');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/vi/vola/`);
  expect(document.querySelector('link[hreflang="en"]').href).toBe(`${SITE_URL}/vola/`);
  expect(container.querySelector('h1').textContent).toContain('Chuyển giọng nói');
  expect(container.querySelector('img[src*="/vi/live-"]')).not.toBeNull();
  expect(JSON.parse(document.getElementById('page-schema').textContent)['@graph'][1]['@id']).toBe(appId);
  expect(document.querySelector('meta[property="og:image"]').content).toBe(`${SITE_URL}/vola/vi/social-card.png`);
  act(() => history.push('/'));
  expect(document.querySelector('meta[property="og:image"]').content).toBe(`${SITE_URL}/social-card.png`);
  expect(document.querySelector('link[hreflang]')).toBeNull();
});

it('switches Vola languages and closes the language picker with Escape and outside clicks', () => {
  const history = createMemoryHistory({ initialEntries: ['/vola/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  const picker = container.querySelector('.vola-language-picker');
  expect(picker.querySelector('[aria-current="page"]').textContent).toContain('English');
  picker.open = true;
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  expect(picker.open).toBe(false);
  expect(document.activeElement).toBe(picker.querySelector('summary'));
  picker.open = true;
  document.body.dispatchEvent(new Event('pointerdown', { bubbles: true }));
  expect(picker.open).toBe(false);
  picker.open = true;
  act(() => { Simulate.click(picker.querySelector('a[hreflang="vi"]'), { button: 0 }); });
  expect(history.location.pathname).toBe('/vi/vola/');
  expect(picker.open).toBe(false);
  expect(container.querySelector('.vola-language-picker [aria-current="page"]').textContent).toContain('Tiếng Việt');
  expect(container.querySelector('.vola-download-qr img').getAttribute('src')).toBe('/vola/download-qr.svg');
});

it('resets right-to-left document direction when leaving an Arabic Vola page', () => {
  const history = createMemoryHistory({ initialEntries: ['/ar/vola/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  expect(document.documentElement.dir).toBe('rtl');
  expect(document.documentElement.lang).toBe('ar');
  act(() => history.push('/de/vola/'));
  expect(document.documentElement.dir).toBe('ltr');
  expect(document.documentElement.lang).toBe('de');
  act(() => history.push('/'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.documentElement.dir).toBe('ltr');
});

it('serves Folio in English with its own store destination, social image, and app entity after an RTL page', () => {
  const history = createMemoryHistory({ initialEntries: ['/ar/vola/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  act(() => history.push('/folio/'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.documentElement.dir).toBe('ltr');
  expect(document.querySelector('link[hreflang]')).toBeNull();
  expect(document.querySelector('meta[property="og:image"]').content).toBe(`${SITE_URL}/folio/social-card.png`);
  const app = JSON.parse(document.getElementById('page-schema').textContent)['@graph'].find(item => item['@type'] === 'SoftwareApplication');
  expect(app.downloadUrl).toBe('https://apps.apple.com/app/id6765871325');
  expect(app.inLanguage).toBe('en');
  expect(app.operatingSystem).toBe('iOS 17 or later, macOS 14 or later');
  expect(container.querySelector('.folio-hero-preview .folio-phone-shot')).not.toBeNull();
  expect(container.querySelectorAll('.folio-paired-media .folio-phone-shot')).toHaveLength(4);
  expect(container.textContent).toContain('iPhone: iOS 17+');
  const qr = container.querySelector('.folio-download-qr');
  expect(qr.querySelector('a').href).toBe(app.downloadUrl);
  expect(qr.querySelector('.folio-qr-logo').getAttribute('src')).toBe('/folio/qr-logo.webp');
  expect(qr.querySelector('button')).toBeNull();
  expect(container.querySelector('a[href="#features"]')).not.toBeNull();
  expect(container.querySelectorAll('h1')).toHaveLength(1);
  expect(container.querySelectorAll('footer')).toHaveLength(1);
  expect(container.textContent).not.toContain('Full Privacy');
  expect(container.textContent).toContain('usage analytics');
});

it.each([
  ['/o-an-quan?lang=en&utm_source=test#cach-choi', '/en/o-an-quan/'],
  ['/policy/o-an-quan?lang=en&utm_source=test#privacy', '/en/policy/o-an-quan/'],
])('preserves legacy English links and attribution from %s', (initial, destination) => {
  const history = createMemoryHistory({ initialEntries: [initial] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  expect(history.location.pathname).toBe(destination);
  expect(history.location.search).toBe('?utm_source=test');
  expect(history.location.hash).not.toBe('');
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(SITE_URL + destination);
  expect(container.querySelectorAll('footer')).toHaveLength(1);
  act(() => { Simulate.click(container.querySelector('.oq-language a[hreflang="vi"]'), { button: 0 }); });
  expect(document.documentElement.lang).toBe('vi');
  expect(history.location.pathname).toBe(destination.replace('/en/', '/'));
});

it.each(['/o-an-quan/', '/en/o-an-quan/'])('hydrates the prerendered game page at %s without replacing its content', path => {
  const history = createMemoryHistory({ initialEntries: [path] });
  container.innerHTML = renderToString(<Router history={history}><App /></Router>);
  const heading = container.querySelector('h1');
  const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
  try {
    act(() => { ReactDOM.hydrate(<Router history={history}><App /></Router>, container); });
    expect(container.querySelector('h1')).toBe(heading);
    expect(errors).not.toHaveBeenCalled();
  } finally { errors.mockRestore(); }
});

it('identifies Galaxy Gallery consistently across its metadata, download links, and exploration content', () => {
  const history = createMemoryHistory({ initialEntries: ['/ar/vola/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  act(() => history.push('/galaxy-gallery/'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.documentElement.dir).toBe('ltr');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/galaxy-gallery/`);
  expect(document.querySelector('meta[property="og:image"]').content).toBe(`${SITE_URL}/galaxy-gallery/social-card.png`);
  expect(document.querySelectorAll('link[hreflang]')).toHaveLength(15);
  const graph = JSON.parse(document.getElementById('page-schema').textContent)['@graph'];
  const app = graph.find(entity => entity['@type'] === 'SoftwareApplication');
  expect(app.name).toBe('Galaxy Gallery: Space & Focus');
  expect(app.downloadUrl).toBe('https://apps.apple.com/app/id1662263674');
  const storeLinks = container.querySelectorAll('a[href*="apps.apple.com"]');
  expect(storeLinks.length).toBeGreaterThan(2);
  storeLinks.forEach(link => expect(link.href).toBe(app.downloadUrl));
  expect(container.querySelectorAll('h1')).toHaveLength(1);
  expect(container.querySelector('h1').textContent).toBe('Explore the universe');
  expect(container.querySelectorAll('footer')).toHaveLength(1);
  expect(container.querySelectorAll('.galaxy-hero-art img')).toHaveLength(2);
  expect(container.querySelector('#explore').compareDocumentPosition(container.querySelector('.galaxy-focus')) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  act(() => history.push('/'));
  expect(document.querySelector('meta[property="og:image"]').content).not.toContain('/galaxy-gallery/');
});

it('switches Galaxy Gallery languages through the flag picker and clears its locale metadata when leaving', () => {
  const history = createMemoryHistory({ initialEntries: ['/galaxy-gallery/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  const picker = container.querySelector('.galaxy-language-picker');
  picker.open = true;
  act(() => { Simulate.click(picker.querySelector('a[hreflang="vi"]'), { button: 0 }); });
  expect(picker.open).toBe(false);
  expect(history.location.pathname).toBe('/vi/galaxy-gallery/');
  expect(document.documentElement.lang).toBe('vi');
  expect(container.querySelector('h1').textContent).toBe('Khám phá vũ trụ');
  expect(document.querySelector('meta[property="og:image"]').content).toBe(`${SITE_URL}/galaxy-gallery/vi/social-card.png`);
  expect(container.querySelectorAll('footer')).toHaveLength(1);
  const switchedPicker = container.querySelector('.galaxy-language-picker');
  switchedPicker.open = true;
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  expect(switchedPicker.open).toBe(false);
  expect(document.activeElement).toBe(switchedPicker.querySelector('summary'));
  switchedPicker.open = true;
  document.body.dispatchEvent(new Event('pointerdown', { bubbles: true }));
  expect(switchedPicker.open).toBe(false);
  act(() => history.push('/folio/'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('link[hreflang]')).toBeNull();
});
