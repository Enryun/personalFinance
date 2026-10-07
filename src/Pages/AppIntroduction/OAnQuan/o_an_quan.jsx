import { copy } from './copy';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../../../Image/Oanquan.png';
import shot1 from '../../../Image/Oanquan1.png';
import shot2 from '../../../Image/Oanquan2.png';
import shot3 from '../../../Image/Oanquan3.png';
import shot4 from '../../../Image/Oanquan4.png';
import shot5 from '../../../Image/Oanquan5.png';
import { LanguageSwitch, useOAnQuanLanguage } from './language';
import './o_an_quan.scss';

const APP_STORE_URL = 'https://apps.apple.com/app/id6817187778';

export default function OAnQuan() {
  const location = useLocation();
  const selected = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
  const t = copy[selected];
  const { language, suffix } = useOAnQuanLanguage(t.title, t.description);
  return (
    <div className="oq-page" lang={language}>
      <a className="oq-skip" href="#oq-content">{language === 'vi' ? 'Đến nội dung' : 'Skip to content'}</a>
      <header className="oq-nav">
        <Link to="/" className="oq-brand" aria-label={t.home}><img src={appIcon} alt="" width="40" height="40" /><span>Ô Ăn Quan</span></Link>
        <LanguageSwitch language={language} />
        <a className="oq-button oq-nav-download" href={APP_STORE_URL}>{t.download}</a>
      </header>
      <main id="oq-content">
        <section className="oq-hero oq-container">
          <div className="oq-hero-copy">
            <p className="oq-eyebrow">{t.eyebrow}</p>
            <p className="oq-app-name">Ô Ăn Quan: Trò chơi dân gian</p>
            <h1>{t.headline}</h1>
            <p className="oq-lede">{t.description}</p>
            <div className="oq-actions"><a className="oq-button" href={APP_STORE_URL}>{t.download}</a><a href="#oq-features">{t.explore} <span aria-hidden="true">↓</span></a></div>
            <p className="oq-note">{t.note}</p>
          </div>
          <figure className="oq-shot oq-hero-shot"><img src={shot1} alt={language === 'vi' ? 'Trang chính Ô Ăn Quan với các chế độ chơi và mục Cách chơi' : 'Ô Ăn Quan home screen with game modes and a How to Play guide'} width="1206" height="2622" /><figcaption>{t.imageNote}</figcaption></figure>
        </section>
        <section className="oq-modes oq-container" aria-label={language === 'vi' ? 'Các chế độ chơi' : 'Game modes'}>
          {t.modes.map(([title, text], index) => <article key={title}><span className="oq-eyebrow">0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
        </section>
        <div id="oq-features" className="oq-container">
          {t.scenes.map(([title, text, alt], index) => (
            <section className={`oq-scene ${index % 2 ? 'oq-reverse' : ''}`} key={title}>
              <div className="oq-scene-copy"><p className="oq-eyebrow">0{index + 1} / 04</p><h2>{title}</h2><p>{text}</p></div>
              <figure className="oq-shot"><img src={[shot2, shot3, shot4, shot5][index]} alt={alt} width="1206" height="2622" loading="lazy" /></figure>
            </section>
          ))}
          <section className="oq-learn"><h2>{t.learnTitle}</h2><p>{t.learn}</p></section>
          <section className="oq-closing"><img src={appIcon} alt="Ô Ăn Quan" width="88" height="88" /><h2>{t.closing}</h2><p>{t.closingText}</p><a className="oq-button" href={APP_STORE_URL}>{t.download}</a></section>
        </div>
      </main>
      <footer className="oq-footer oq-container"><span>© {new Date().getFullYear()} James Thang</span><Link to={`/policy/o-an-quan${suffix}`}>{t.privacy}</Link><a href="mailto:jamesthang1996@gmail.com">{t.support}</a></footer>
    </div>
  );
}
