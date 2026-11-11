import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import GalaxyGallery from './GalaxyGallery';
import { galaxyContent, GALAXY_STORE } from './content';
import { galaxyLocales } from './locales';
import { getMetadata, SITE_URL } from '../../../siteMetadata';
import { countryFlagUrl } from '../Vola/languageFlags';

it.each(galaxyLocales)('renders complete $code content and reciprocal metadata with matching app screenshots', locale => {
  const copy = galaxyContent[locale.code];
  expect(Object.keys(copy).sort()).toEqual(Object.keys(galaxyContent.en).sort());
  const checkStrings = value => {
    if (typeof value === 'string') expect(value.trim().length).toBeGreaterThan(0);
    else if (Array.isArray(value)) value.forEach(checkStrings);
    else Object.values(value).forEach(checkStrings);
  };
  checkStrings(copy);
  const page = document.createElement('div');
  page.innerHTML = renderToString(<MemoryRouter initialEntries={[locale.path]}><GalaxyGallery /></MemoryRouter>);
  expect(page.querySelector('.galaxy-page').lang).toBe(locale.code);
  expect(page.querySelector('h1').textContent).toBe(copy.heading);
  expect(page.querySelectorAll('h1')).toHaveLength(1);
  expect(page.querySelectorAll('.galaxy-faq details')).toHaveLength(8);
  expect(page.querySelectorAll('.galaxy-language-picker a')).toHaveLength(14);
  expect(page.querySelector('.galaxy-language-picker a[aria-current="page"]').getAttribute('href')).toBe(locale.path);
  expect(page.querySelector('.galaxy-hero-art img').src).toContain(`/galaxy-gallery/${locale.code}/`);
  expect(countryFlagUrl(locale.country)).toMatch(/^data:image\/svg\+xml,/);
  page.querySelectorAll('a[href*="apps.apple.com"]').forEach(link => expect(link.href).toBe(GALAXY_STORE));
  const metadata = getMetadata(locale.path);
  expect(metadata.url).toBe(SITE_URL + locale.path);
  expect(metadata.language).toBe(locale.code);
  expect(metadata.title).toBe(copy.title);
  expect(metadata.description).toBe(copy.description);
  expect(metadata.alternates).toHaveLength(15);
  for (const other of galaxyLocales) {
    expect(metadata.alternates).toContainEqual({ lang: other.code, href: SITE_URL + other.path });
  }
  const app = metadata.schema['@graph'].find(entity => entity['@type'] === 'SoftwareApplication');
  expect(app['@id']).toBe(`${SITE_URL}/galaxy-gallery/#app`);
  expect(app.downloadUrl).toBe(GALAXY_STORE);
  expect(app.description).toBe(copy.description);
  expect(app.offers.description).toBe(copy.pricingText);
});
