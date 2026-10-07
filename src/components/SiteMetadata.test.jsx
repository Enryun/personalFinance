import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { act } from 'react-dom/test-utils';
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

it.each(['/about/', '/vi/swiftui-training', '/books', '/case-studies/vola', '/articles/swiftui-or-uikit'])('hydrates %s without mismatches', route => {
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
