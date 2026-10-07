import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function useOAnQuanLanguage() {
  const location = useLocation();
  const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
  return { language, suffix: language === 'en' ? '?lang=en' : '' };
}

export function LanguageSwitch({ language }) {
  const location = useLocation();
  const target = (lang) => {
    const search = new URLSearchParams(location.search);
    if (lang === 'en') search.set('lang', 'en');
    else search.delete('lang');
    return { pathname: location.pathname, search: search.toString() ? `?${search}` : '', hash: location.hash };
  };
  return (
    <nav className="oq-language" aria-label={language === 'vi' ? 'Ngôn ngữ' : 'Language'}>
      <Link to={target('vi')} lang="vi" aria-current={language === 'vi' ? 'true' : undefined}>Tiếng Việt</Link>
      <Link to={target('en')} lang="en" aria-current={language === 'en' ? 'true' : undefined}>English</Link>
    </nav>
  );
}
