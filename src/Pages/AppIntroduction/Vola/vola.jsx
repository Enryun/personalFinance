import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VOLA_STORE, volaContent } from './content';
import appStoreBadge from '../../../Image/appStore.webp';
import './vola.scss';

function Screenshot({ lang, name, alt, hero = false, tablet = false }) {
    return <img src={`/vola/${lang}/${name}-960.webp`} srcSet={`/vola/${lang}/${name}-480.webp 480w, /vola/${lang}/${name}-960.webp 960w`}
        sizes={tablet ? '(max-width: 760px) 90vw, 700px' : '(max-width: 760px) 80vw, 360px'}
        width={960} height={tablet ? 1280 : 2086} alt={alt} loading={hero ? 'eager' : 'lazy'} decoding="async" />;
}

function LanguagePicker({ lang }) {
    const picker = useRef(null);
    useEffect(() => {
        const closeOutside = event => {
            if (picker.current && !picker.current.contains(event.target)) picker.current.open = false;
        };
        const closeOnEscape = event => {
            if (event.key === 'Escape' && picker.current && picker.current.open) {
                picker.current.open = false;
                picker.current.querySelector('summary').focus();
            }
        };
        document.addEventListener('pointerdown', closeOutside);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOutside);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, []);
    return <details className="vola-language-picker" ref={picker}>
        <summary aria-label={lang === 'vi' ? 'Ngôn ngữ: Tiếng Việt' : 'Language: English'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>
            {lang === 'vi' ? 'VI' : 'EN'}<svg className="vola-language-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <ul aria-label={lang === 'vi' ? 'Chọn ngôn ngữ' : 'Choose language'}>
            {[['en', 'English', '/vola/'], ['vi', 'Tiếng Việt', '/vi/vola/']].map(([code, label, path]) => <li key={code}>
                <Link to={path} lang={code} hrefLang={code} aria-current={code === lang ? 'page' : undefined} onClick={() => { picker.current.open = false; }}>{label}{code === lang && <span aria-hidden="true">✓</span>}</Link>
            </li>)}
        </ul>
    </details>;
}

export default function Vola() {
    const { pathname } = useLocation();
    const lang = pathname.startsWith('/vi/') ? 'vi' : 'en';
    const c = volaContent[lang];
    const download = (place) => <a className={`vola-cta${place === 'navigation' ? '' : ' vola-cta--badge'}`} aria-label={lang === 'vi' ? 'Tải Vola trên App Store' : 'Get Vola on the App Store'} href={VOLA_STORE} target="_blank" rel="noopener noreferrer" data-product="vola" data-placement={place} onClick={() => window.dispatchEvent(new CustomEvent('vola:app-store-click', { detail: { product: 'vola', locale: lang, placement: place } }))}>{place === 'navigation' ? c.download : <img src={appStoreBadge} width="498" height="167" decoding="async" alt="" />}</a>;
    return <div className="vola-landing">
        <a className="vola-skip" href="#vola-main">{lang === 'vi' ? 'Đến nội dung chính' : 'Skip to content'}</a>
        <header className="vola-nav"><nav className="vola-container vola-nav-inner" aria-label={lang === 'vi' ? 'Điều hướng Vola' : 'Vola navigation'}>
            <Link className="vola-logo" to={lang === 'vi' ? '/vi/vola/' : '/vola/'}><img decoding="async" src="/vola/icon.webp" width="36" height="36" alt="" />Vola</Link>
            <div className="vola-nav-actions"><LanguagePicker lang={lang} />{download('navigation')}</div>
        </nav></header>
        <main id="vola-main">
            <section className="vola-container vola-hero">
                <div className="vola-hero-copy"><p className="vola-eyebrow">{c.eyebrow}</p><h1>{c.heading}</h1><p className="vola-lead">{c.intro}</p><div className="vola-hero-download">{download('hero')}<a className="vola-how-link" href="#vola-features">{lang === 'vi' ? 'Xem cách hoạt động' : 'See how it works'}<span aria-hidden="true"> ↓</span></a></div><div className="vola-hero-meta"><p className="vola-small">{c.price}</p><p className="vola-small">{c.compatibility}</p></div></div>
                <div className="vola-hero-image"><Screenshot lang={lang} name="live" alt={c.liveAlt} hero /></div>
            </section>
            <section className="vola-privacy" aria-labelledby="vola-local"><div className="vola-container vola-two-col"><div><p className="vola-eyebrow">{lang === 'vi' ? 'RÕ RÀNG VỀ DỮ LIỆU' : 'CLEAR ABOUT YOUR DATA'}</p><h2 id="vola-local">{c.local}</h2><p>{c.localText}</p></div><div><h3>{c.cloud}</h3><p>{c.cloudText}</p><Link to="/policy/vola">{c.privacy} →</Link></div></div></section>
            <section id="vola-features" className="vola-container vola-features" aria-labelledby="vola-features-heading"><h2 id="vola-features-heading">{c.featuresLabel}</h2>
                {c.features.map((feature, index) => <article className={`vola-feature${index % 2 ? ' vola-feature-reverse' : ''}`} key={feature.image}><div className="vola-feature-copy"><p className="vola-eyebrow">0{index + 1}</p><h3>{feature.title}</h3><p>{feature.text}</p><p className="vola-small">{feature.detail}</p></div><div className="vola-feature-image"><Screenshot lang={lang} name={feature.image} alt={feature.alt} /></div></article>)}
            </section>
            <section className="vola-import"><div className="vola-container"><div className="vola-section-intro"><h2>{c.importHeading}</h2><p>{c.importText}</p></div><div className="vola-tablet"><Screenshot lang={lang} name="import" alt={c.importAlt} tablet /></div></div></section>
            <section id="vola-how-it-works" className="vola-container vola-section"><h2>{c.stepsHeading}</h2><ol className="vola-steps">{c.steps.map(([title, text], index) => <li key={title}><span className="vola-step-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
            <section className="vola-container vola-section vola-audiences"><h2>{c.audienceHeading}</h2><div className="vola-audience-grid">{c.audiences.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><p className="vola-small">{c.consent}</p></section>
            <section className="vola-container vola-section vola-faq"><h2>{c.faqHeading}</h2>{c.faqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
            <section className="vola-final"><div className="vola-container"><h2>{c.finalHeading}</h2><p>{c.finalText}</p>{download('final')}<p className="vola-small">{c.price}</p></div></section>
        </main>
        <figure className="vola-download-qr">
            <div className="vola-qr-art"><img src="/vola/download-qr.svg" width="216" height="216" decoding="async" alt={lang === 'vi' ? 'Mã QR mở Vola trên App Store' : 'QR code opening Vola on the App Store'} /><img className="vola-qr-logo" src="/vola/qr-logo.webp" width="192" height="192" decoding="async" alt="" /></div>
            <figcaption>{lang === 'vi' ? 'Ít gõ hơn, lắng nghe nhiều hơn' : 'Less typing, more listening'}</figcaption>
        </figure>

        <footer className="vola-container vola-footer"><p><Link to="/about">{c.developer}</Link> · <Link to="/case-studies/vola">{c.walkthrough}</Link></p><div><Link to="/policy/vola">{c.privacy}</Link><Link to="/policy/vola-eula">{c.terms}</Link><Link to="/">{c.home}</Link></div></footer>
    </div>;
}
