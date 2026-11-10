import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getOAnQuanLanguage, getOAnQuanPath } from './locales';

export function useOAnQuanLanguage() {
  const location = useLocation();
  const language = getOAnQuanLanguage(location.pathname, location.search);
  const search = new URLSearchParams(location.search);
  const legacy = !location.pathname.startsWith('/en/') && search.get('lang') === 'en';
  search.delete('lang');
  return {
    language, pagePath: getOAnQuanPath(language), policyPath: getOAnQuanPath(language, true),
    legacyTarget: legacy ? { pathname: getOAnQuanPath('en', location.pathname.includes('/policy/')), search: search.toString() ? `?${search}` : '', hash: location.hash } : null,
  };
}

export function LanguageSwitch({ language }) {
  const location = useLocation();
  const policy = location.pathname.includes('/policy/');
  return <nav className="oq-language" aria-label={language === 'vi' ? 'Ngôn ngữ' : 'Language'}>
    <Link to={getOAnQuanPath('vi', policy)} lang="vi" hrefLang="vi" aria-current={language === 'vi' ? 'true' : undefined}>Tiếng Việt</Link>
    <Link to={getOAnQuanPath('en', policy)} lang="en" hrefLang="en" aria-current={language === 'en' ? 'true' : undefined}>English</Link>
  </nav>;
}
