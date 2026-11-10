import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import OAnQuan from './o_an_quan';
import { copy } from './copy';
import { getMetadata, SITE_URL } from '../../../siteMetadata';
import { getOAnQuanPath, OANQUAN_STORE } from './locales';

it.each(['vi', 'en'])('renders %s with matching app facts, schema, and reciprocal language links', language => {
  const path = getOAnQuanPath(language);
  const node = document.createElement('div');
  node.innerHTML = renderToString(<MemoryRouter initialEntries={[path]}><OAnQuan /></MemoryRouter>);
  const metadata = getMetadata(path);
  expect(node.querySelectorAll('h1')).toHaveLength(1);
  expect(node.querySelector('h1').textContent).toBe(copy[language].headline);
  expect(metadata.language).toBe(language);
  expect(metadata.url).toBe(SITE_URL + path);
  expect(metadata.image).toBe(`${SITE_URL}/o-an-quan/${language}/social-card.png`);
  expect(metadata.alternates).toEqual([
    { lang: 'vi', href: `${SITE_URL}/o-an-quan/` },
    { lang: 'en', href: `${SITE_URL}/en/o-an-quan/` },
    { lang: 'x-default', href: `${SITE_URL}/o-an-quan/` },
  ]);
  expect(node.querySelector('.oq-language a[aria-current="true"]').getAttribute('href')).toBe(path);
  expect(node.querySelectorAll('.oq-chapters article')).toHaveLength(4);
  expect(node.querySelectorAll('.oq-faq details')).toHaveLength(7);
  expect(node.querySelectorAll('.oq-rules li')).toHaveLength(4);
  expect(node.querySelector('.oq-download-qr a').href).toBe(OANQUAN_STORE);
  const app = metadata.schema['@graph'].find(entity => entity['@id'].endsWith('#game'));
  expect(app['@type']).toContain('VideoGame');
  expect(app.downloadUrl).toBe(OANQUAN_STORE);
  expect(app.operatingSystem).toBe('iOS 17 or later, iPadOS 17 or later');
  expect(app.offers.price).toBe('0');
  expect(app.aggregateRating).toBeUndefined();
});

it('keeps policy metadata and alternate links separate from the game page', () => {
  const metadata = getMetadata('/en/policy/o-an-quan/');
  expect(metadata.language).toBe('en');
  expect(metadata.schema).toBeNull();
  expect(metadata.url).toBe(`${SITE_URL}/en/policy/o-an-quan/`);
  expect(metadata.alternates[0].href).toBe(`${SITE_URL}/policy/o-an-quan/`);
  expect(getMetadata('/o-an-quan', '?lang=en').url).toBe(`${SITE_URL}/en/o-an-quan/`);
});
