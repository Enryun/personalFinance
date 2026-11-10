import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { volaLocales, getVolaLocale } from './locales';
import { volaContent } from './content';
import Vola from './vola';
import { countryFlagUrl } from './languageFlags';
import { getMetadata, SITE_URL } from '../../../siteMetadata';

it.each(volaLocales)('renders complete localized content and reciprocal metadata for $code', locale => {
  const copy = volaContent[locale.code];
  expect(copy).toBeDefined();
  expect(Object.keys(copy).sort()).toEqual(Object.keys(volaContent.en).sort());
  const checkText = value => {
    if (typeof value === 'string') expect(value.trim().length).toBeGreaterThan(0);
    else if (Array.isArray(value)) value.forEach(checkText);
    else Object.values(value).forEach(checkText);
  };
  checkText(copy);
  expect(copy.features).toHaveLength(3);
  expect(copy.faqs).toHaveLength(6);
  expect(copy.steps).toHaveLength(3);
  expect(copy.audiences).toHaveLength(4);
  const html = renderToString(<MemoryRouter initialEntries={[locale.path]}><Vola /></MemoryRouter>);
  const page = document.createElement('div'); page.innerHTML = html;
  expect(page.querySelector('h1').textContent).toBe(copy.heading);
  expect(page.querySelector('.vola-landing').getAttribute('dir')).toBe(locale.direction);
  expect(page.querySelector('.vola-language-picker a[aria-current="page"]').getAttribute('href')).toBe(locale.path);
  expect(page.querySelectorAll('.vola-language-picker a')).toHaveLength(volaLocales.length);
  expect(page.querySelector('.vola-language-trigger-name').textContent).toBe(locale.name);
  expect(page.querySelectorAll('.vola-language-flag')).toHaveLength(volaLocales.length + 1);
  for (const language of volaLocales) {
    const flag = countryFlagUrl(language.country);
    expect(flag).toMatch(/^data:image\/svg\+xml,/);
    const svg = new DOMParser().parseFromString(decodeURIComponent(flag.split(',')[1]), 'image/svg+xml');
    expect(svg.querySelector('parsererror')).toBeNull();
  }
  expect(page.querySelector('.vola-hero-image img').getAttribute('src')).toContain(`/vola/${locale.code}/`);
  expect(page.querySelectorAll('a[href="https://apps.apple.com/app/id6758566739"]')).toHaveLength(3);
  const metadata = getMetadata(locale.path);
  expect(metadata.language).toBe(locale.code);
  expect(metadata.direction).toBe(locale.direction);
  expect(metadata.url).toBe(SITE_URL + locale.path);
  expect(metadata.alternates).toHaveLength(volaLocales.length + 1);
  for (const other of volaLocales) {
    expect(metadata.alternates).toContainEqual({lang: other.code, href: SITE_URL + other.path});
  }
  expect(metadata.schema['@graph'][1]['@id']).toBe(`${SITE_URL}/vola/#app`);
  expect(metadata.schema['@graph'][1].description).toBe(copy.description);
});

it('maps supported codes to canonical paths without accepting asset folder aliases', () => {
  expect(getVolaLocale('/ja/vola/').source).toBe('jap');
  expect(getVolaLocale('/jap/vola/')).toBeUndefined();
  expect(getVolaLocale('/pt-br/vola/').code).toBe('pt-BR');
  expect(getVolaLocale('/zh-hant/vola/').code).toBe('zh-Hant');
  expect(getVolaLocale('/unknown/vola/')).toBeUndefined();
  expect(getMetadata('/PT-BR/vola/').url).toBe(`${SITE_URL}/pt-br/vola/`);
});
