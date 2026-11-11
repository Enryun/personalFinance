import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import appStoreBadge from '../../../Image/appStore.webp';
import { GALAXY_STORE, galaxyContent } from './content';
import { galaxyLocales, getGalaxyLocale } from './locales';
import { LanguagePicker } from '../Vola/vola';
import './GalaxyGallery.scss';

const sharedAssetRoot = '/galaxy-gallery/en';

function StoreLink({ label }) {
  return (
    <a className="galaxy-store-link" href={GALAXY_STORE} aria-label={`${label} — Galaxy Gallery`}>
      <img src={appStoreBadge} width="180" height="60" alt={label} />
    </a>
  );
}

function Screen({ lang, device, name, alt, eager = false }) {
  const assetRoot = `/galaxy-gallery/${name === 'ar-planets' ? 'en' : lang}`;
  const tablet = device === 'ipad';
  const smallWidth = tablet ? 640 : 400;
  const largeWidth = tablet ? 1000 : 700;
  const height = tablet ? 853 : name === 'ar-planets' ? 865 : 869;

  return (
    <div className={`galaxy-device galaxy-device-${device}`}>
      <img
        src={`${assetRoot}/${device}-${name}-${smallWidth}.webp`}
        srcSet={`${assetRoot}/${device}-${name}-${smallWidth}.webp ${smallWidth}w, ${assetRoot}/${device}-${name}-${largeWidth}.webp ${largeWidth}w`}
        sizes={tablet ? '(max-width: 700px) 60vw, 420px' : '(max-width: 700px) 28vw, 220px'}
        width={smallWidth}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        alt={alt}
      />
    </div>
  );
}

function SpaceView({ name, alt }) {
  return (
    <img
      className="galaxy-space-view"
      src={`${sharedAssetRoot}/${name}-800.webp`}
      srcSet={`${sharedAssetRoot}/${name}-800.webp 800w, ${sharedAssetRoot}/${name}-1600.webp 1600w`}
      sizes="(max-width: 1200px) 100vw, 1200px"
      width="1600"
      height={name === 'planet-comparison' ? 536 : 686}
      loading="lazy"
      decoding="async"
      alt={alt}
    />
  );
}

export default function GalaxyGallery() {
  const { pathname } = useLocation();
  const locale = getGalaxyLocale(pathname);
  const lang = locale.code;
  const c = galaxyContent[lang];
  return (
    <div className="galaxy-page" lang={lang}>
      <a className="galaxy-skip" href="#galaxy-content">{c.skip}</a>
      <header className="galaxy-nav galaxy-container">
        <Link to="/" className="galaxy-brand" aria-label={c.home}>
          <img src="/galaxy-gallery/icon.webp" width="40" height="40" alt="" />
          <span>Galaxy Gallery</span>
        </Link>
        <div className="galaxy-nav-actions">
          <LanguagePicker lang={lang} ui={{ language: c.language, choose: c.choose }} locales={galaxyLocales} className="galaxy-language-picker" />
          <a href={GALAXY_STORE} className="galaxy-button">{c.get}</a>
        </div>
      </header>

      <main id="galaxy-content">
        <section className="galaxy-hero galaxy-container" aria-labelledby="galaxy-heading">
          <div className="galaxy-hero-copy">
            <h1 id="galaxy-heading">{c.heading}</h1>
            <p className="galaxy-lede">{c.lede}</p>
            <div className="galaxy-actions">
              <StoreLink label={c.download} />
              <a className="galaxy-text-link" href="#explore">{c.closer} <span aria-hidden="true">↓</span></a>
            </div>
            <p className="galaxy-requirements">{c.requirements}</p>
            <p className="galaxy-requirements">{c.free}</p>
          </div>
          <figure className="galaxy-device-pair galaxy-hero-art" aria-label={c.requirements}>
            <Screen lang={lang} device="ipad" name="solar-system" eager alt={c.alts.tablet} />
            <Screen lang={lang} device="iphone" name="planet-effects" eager alt={c.alts.phone} />
          </figure>
        </section>

        <section className="galaxy-worlds galaxy-container" id="explore" aria-labelledby="galaxy-worlds-title">
          <div className="galaxy-section-heading">
            <h2 id="galaxy-worlds-title">{c.worldsTitle}</h2>
            <p>{c.worldsText}</p>
          </div>
          <figure className="galaxy-panorama">
            <SpaceView name="solar-system" alt={c.alts.orbits} />
          </figure>
          <div className="galaxy-explore-details">
            {c.details.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="galaxy-comparison galaxy-container" aria-labelledby="galaxy-comparison-title">
          <div className="galaxy-section-heading">
            <h2 id="galaxy-comparison-title">{c.comparisonTitle}</h2>
            <p>{c.comparisonText}</p>
          </div>
          <figure className="galaxy-panorama">
            <SpaceView name="planet-comparison" alt={c.alts.comparison} />
            <figcaption>{c.scaleNote}</figcaption>
          </figure>
        </section>

        <section className="galaxy-feature galaxy-container" aria-labelledby="galaxy-discoveries-title">
          <div className="galaxy-feature-copy">
            <h2 id="galaxy-discoveries-title">{c.discoveryTitle}</h2>
            <p>{c.discoveryText}</p>
            <p>{c.discoveryMore}</p>
          </div>
          <figure className="galaxy-device-pair">
            <Screen lang={lang} device="ipad" name="journeys" alt={c.alts.journeys} />
            <Screen lang={lang} device="iphone" name="space-facts" alt={c.alts.facts} />
          </figure>
        </section>

        <section className="galaxy-feature galaxy-feature-reverse galaxy-container" aria-labelledby="galaxy-ar-title">
          <div className="galaxy-feature-copy">
            <h2 id="galaxy-ar-title">{c.arTitle}</h2>
            <p>{c.arText}</p>
            <p className="galaxy-small">{c.arNote}</p>
          </div>
          <figure className="galaxy-single-phone">
            <Screen lang={lang} device="iphone" name="ar-planets" alt={c.alts.ar} />
          </figure>
        </section>

        <section className="galaxy-focus galaxy-container" aria-labelledby="galaxy-focus-title">
          <div className="galaxy-feature-copy">
            <h2 id="galaxy-focus-title">{c.focusTitle}</h2>
            <p>{c.focusText}</p>
            <p>{c.focusMore}</p>
          </div>
          <figure className="galaxy-single-phone">
            <Screen lang={lang} device="iphone" name="focus" alt={c.alts.focus} />
          </figure>
        </section>

        <section className="galaxy-pricing galaxy-container" aria-labelledby="galaxy-pricing-title">
          <h2 id="galaxy-pricing-title">{c.pricingTitle}</h2>
          <p>{c.pricingText}</p>
          <p className="galaxy-small">{c.pricingNote}</p>
          <StoreLink label={c.download} />
        </section>

        <section className="galaxy-faq galaxy-container" aria-labelledby="galaxy-faq-title">
          <h2 id="galaxy-faq-title">{c.faqTitle}</h2>
          <div>{c.faqs.map(({ question, answer }) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}</div>
        </section>

        <section className="galaxy-closing galaxy-container">
          <h2>{c.closingTitle}</h2>
          <p>{c.closingText}</p>
          <StoreLink label={c.download} />
        </section>
      </main>

      <figure className="galaxy-download-qr">
        <a href={GALAXY_STORE} aria-label={c.download}>
          <div className="galaxy-qr-art">
            <img src="/galaxy-gallery/download-qr.svg" width="216" height="216" alt={c.qrAlt} />
            <img className="galaxy-qr-logo" src="/galaxy-gallery/qr-logo.webp" width="192" height="192" alt="" />
          </div>
        </a>
        <figcaption>{c.qrHook}</figcaption>
      </figure>
      <footer className="galaxy-footer galaxy-container">
        <Link to="/">{c.madeBy}</Link>
        <Link to="/policy/galaxy-gallery">{c.privacy}</Link>
        <a href="mailto:jamesthang1996@gmail.com">{c.support}</a>
      </footer>
    </div>
  );
}
