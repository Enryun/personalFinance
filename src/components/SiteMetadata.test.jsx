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
let originalScroll;
beforeEach(() => {
  originalHead = document.head.innerHTML;
  originalTitle = document.title;
  originalLanguage = document.documentElement.lang;
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
  window.scrollTo = originalScroll;
});

it('updates canonicals and profile data when navigating between home and app pages', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  act(() => { ReactDOM.render(<Router history={history}><App /></Router>, container); });
  expect(document.title).toBe(HOME_TITLE);
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/`);
  expect(JSON.parse(document.getElementById('profile-schema').textContent).mainEntity.name).toBe('James Thang');

  act(() => history.push('/folio'));
  expect(document.title).toBe('Folio | James Thang');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/folio`);
  expect(document.getElementById('profile-schema')).toBeNull();

  act(() => history.push('/o-an-quan'));
  expect(document.documentElement.lang).toBe('vi');
  act(() => history.push('/o-an-quan?lang=en'));
  expect(document.documentElement.lang).toBe('en');
  expect(document.querySelector('link[rel="canonical"]').href).toBe(`${SITE_URL}/o-an-quan?lang=en`);
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
  expect(picker.querySelector('[aria-current="page"]').textContent).toContain('Tiếng Việt');
  expect(container.querySelector('.vola-download-qr img').getAttribute('src')).toBe('/vola/download-qr.svg');
});
