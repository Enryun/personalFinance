import { copy } from './copy';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import appIcon from '../../../Image/Oanquan.webp';
import shot1 from '../../../Image/Oanquan1.webp';
import shot2 from '../../../Image/Oanquan2.webp';
import shot3 from '../../../Image/Oanquan3.webp';
import shot4 from '../../../Image/Oanquan4.webp';
import shot5 from '../../../Image/Oanquan5.webp';
import { LanguageSwitch, useOAnQuanLanguage } from './language';
import './o_an_quan.scss';

import { OANQUAN_STORE as APP_STORE_URL } from './locales';
import chapter1 from '../../../Image/oanquan/campaign-san-nha.webp';
import chapter2 from '../../../Image/oanquan/campaign-dau-ngo.webp';
import chapter3 from '../../../Image/oanquan/campaign-san-dinh.webp';
import chapter4 from '../../../Image/oanquan/campaign-hoi-lang.webp';
const chapters = [chapter1, chapter2, chapter3, chapter4];

export default function OAnQuan() {
  const { language, policyPath, legacyTarget } = useOAnQuanLanguage();
  const t = copy[language];
  if (legacyTarget) return <Redirect to={legacyTarget} />;
  return (
    <div className="oq-page" lang={language}>
      <a className="oq-skip" href="#oq-content">{language === 'vi' ? 'Đến nội dung' : 'Skip to content'}</a>
      <header className="oq-nav">
        <Link to="/" className="oq-brand" aria-label={t.home}><img decoding="async" src={appIcon} alt="" width="40" height="40" /><span>Ô Ăn Quan</span></Link>
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
          <figure className="oq-shot oq-hero-shot"><img decoding="async" src={shot1} alt={language === 'vi' ? 'Trang chính Ô Ăn Quan với các chế độ chơi và mục Cách chơi' : 'Ô Ăn Quan home screen with game modes and a How to Play guide'} width="1206" height="2622" /></figure>
        </section>
        <section className="oq-modes oq-container" aria-label={language === 'vi' ? 'Các chế độ chơi' : 'Game modes'}>
          {t.modes.map(([title, text], index) => <article key={title}><span className="oq-eyebrow">0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
        </section>
        <div id="oq-features" className="oq-container">
          <section className="oq-campaign" aria-labelledby="oq-campaign-title"><h2 id="oq-campaign-title">{t.campaignTitle}</h2><p className="oq-section-intro">{t.campaignIntro}</p>
            <div className="oq-chapters">{t.chapters.map((title, index) => <article key={title}><img src={chapters[index]} alt={t.chapterAlts[index]} width="640" height="427" loading="lazy" decoding="async" /><h3><span aria-hidden="true">0{index + 1} · </span>{title}</h3></article>)}</div>
            <p className="oq-section-note">{t.campaignNote}</p>
          </section>
          {t.scenes.map(([title, text, alt], index) => (
            <section className={`oq-scene ${index % 2 ? 'oq-reverse' : ''}`} key={title}>
              <div className="oq-scene-copy"><p className="oq-eyebrow">0{index + 1} / 04</p><h2>{title}</h2><p>{text}</p></div>
              <figure className="oq-shot"><img decoding="async" src={[shot2, shot3, shot4, shot5][index]} alt={alt} width="1206" height="2622" loading="lazy" /></figure>
            </section>
          ))}
          <section className="oq-learn" id="cach-choi"><h2>{t.learnTitle}</h2><p>{t.learn}</p><ol className="oq-rules">{t.rules.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
          <section className="oq-faq" aria-labelledby="oq-faq-title"><h2 id="oq-faq-title">{t.faqTitle}</h2><div>{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
          <section className="oq-closing"><img decoding="async" src={appIcon} alt="Ô Ăn Quan" width="88" height="88" /><h2>{t.closing}</h2><p>{t.closingText}</p><a className="oq-button" href={APP_STORE_URL}>{t.download}</a></section>
        </div>
      </main>
      <figure className="oq-download-qr"><a href={APP_STORE_URL} aria-label={t.download}><div className="oq-qr-art"><img src="/o-an-quan/download-qr.svg" width="216" height="216" alt={t.qrAlt} decoding="async" /><img className="oq-qr-logo" src="/o-an-quan/qr-logo.webp" width="192" height="192" alt="" decoding="async" /></div></a><figcaption>{t.qrHook}</figcaption></figure>
      <footer className="oq-footer oq-container"><span>© {new Date().getFullYear()} James Thang</span><Link to={policyPath}>{t.privacy}</Link><a href="mailto:jamesthang1996@gmail.com">{t.support}</a></footer>
    </div>
  );
}
