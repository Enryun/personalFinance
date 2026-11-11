import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import appStoreBadge from '../../../Image/appStore.webp';
import { LanguagePicker } from '../Vola/vola';
import { HOROLOGY_STORE, horologyContent } from './content';
import { horologyLocales, getHorologyLocale } from './locales';
import './horology.scss';

function StoreLink({ label }) {
  return (
    <a href={HOROLOGY_STORE} className="horology-store-link" aria-label={`${label} — Horology Studio`}>
      <img src={appStoreBadge} alt={label} width="180" height="60" />
    </a>
  );
}

function Screenshot({ lang, number, alt }) {
  const widget = number === '03' || number === '07';
  return (
    <div className={`horology-screen${widget ? ' horology-screen-widget' : ''}`}>
      <img
        src={`/horology-studio/${lang}/${number}-420.webp`}
        srcSet={`/horology-studio/${lang}/${number}-420.webp 420w, /horology-studio/${lang}/${number}-760.webp 760w`}
        sizes="(max-width: 700px) 42vw, 260px"
        width="420"
        height="913"
        loading="lazy"
        decoding="async"
        alt={alt}
      />
    </div>
  );
}

export default function HorologyStudio() {
  const { pathname } = useLocation();
  const locale = getHorologyLocale(pathname);
  const c = horologyContent[locale.code];

  return (
    <div className="horology-page" lang={locale.code}>
      <a className="horology-skip" href="#horology-main">{c.skip}</a>
      <header className="horology-nav horology-container">
        <Link to="/" className="horology-brand" aria-label={c.home}>
          <img src="/horology-studio/icon.webp" width="36" height="36" alt="" />
          <span>Horology Studio</span>
        </Link>
        <div className="horology-nav-actions">
          <LanguagePicker lang={locale.code} ui={{ language: c.language, choose: c.choose }} locales={horologyLocales} className="horology-language-picker" />
          <a className="horology-button" href={HOROLOGY_STORE}>{c.get}</a>
        </div>
      </header>

      <main id="horology-main">
        <section className="horology-hero horology-container">
          <div className="horology-hero-copy">
            <h1>{c.heading}</h1>
            <p className="horology-lede">{c.lede}</p>
            <div className="horology-actions">
              <StoreLink label={c.download} />
              <a href="#horology-collection" className="horology-text-link">{c.closer} <span aria-hidden="true">↓</span></a>
            </div>
            <p className="horology-note">iPhone · iOS 18+</p>
            <p className="horology-note">{c.free}</p>
          </div>
          <figure className="horology-hero-art">
            <img
              src="/horology-studio/woodland-hero-1200.webp"
              srcSet="/horology-studio/woodland-hero-1200.webp 1200w, /horology-studio/woodland-hero-2000.webp 2000w"
              sizes="(max-width: 700px) 100vw, 900px"
              width="2000"
              height="857"
              decoding="async"
              alt={`Woodland Cushion — ${c.headlines[4]}`}
            />
          </figure>
        </section>

        <div className="horology-content horology-container">
          {c.scenes.map((scene, index) => (
            <section
              className={`horology-scene${index % 2 ? ' horology-scene-reverse' : ''}`}
              id={index === 0 ? 'horology-collection' : undefined}
              key={scene.title}
            >
              <div className="horology-scene-copy">
                <h2>{scene.title}</h2>
                {scene.text.map(text => <p key={text}>{text}</p>)}
                {index === c.scenes.length - 1 && <p className="horology-requirement">{c.alarmsNote}</p>}
              </div>
              <figure className={`horology-scene-media${scene.shots.length === 1 ? ' horology-scene-media-single' : ''}`}>
                {scene.shots.map(number => (
                  <Screenshot key={number} lang={locale.code} number={number} alt={`Horology Studio — ${c.headlines[Number(number) - 1]}`} />
                ))}
              </figure>
            </section>
          ))}

          <section className="horology-pricing" aria-labelledby="horology-pricing-title">
            <h2 id="horology-pricing-title">{c.pricingTitle}</h2>
            <p>{c.pricingText}</p>
            <p className="horology-note">{c.pricingNote}</p>
            <p className="horology-note">{c.localNote}</p>
            <StoreLink label={c.download} />
          </section>

          <section className="horology-faq" aria-labelledby="horology-faq-title">
            <h2 id="horology-faq-title">{c.faqTitle}</h2>
            <div>{c.faqs.map(({ question, answer }) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}</div>
          </section>

          <section className="horology-closing" aria-label={c.get}>
            <p>{c.closingText}</p>
            <StoreLink label={c.download} />
          </section>
        </div>
      </main>

      <figure className="horology-download-qr">
        <a href={HOROLOGY_STORE} aria-label={c.download}>
          <div className="horology-qr-art">
            <img src="/horology-studio/download-qr.svg" width="216" height="216" alt={`${c.download} — Horology Studio`} />
            <img className="horology-qr-logo" src="/horology-studio/qr-logo.webp" width="192" height="192" alt="" />
          </div>
        </a>
        <figcaption>{c.qrHook}</figcaption>
      </figure>

      <footer className="horology-footer horology-container">
        <Link to="/">{c.madeBy}</Link>
        <Link to="/policy/horology-studio">{c.privacy}</Link>
        <a href="mailto:jamesthang1996@gmail.com">{c.support}</a>
      </footer>
    </div>
  );
}
