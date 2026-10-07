import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../../Image/Oanquan.png';
import { LanguageSwitch, useOAnQuanLanguage } from '../AppIntroduction/OAnQuan/language';
import '../AppIntroduction/OAnQuan/o_an_quan.scss';

import { content } from '../AppIntroduction/OAnQuan/policyCopy';

export default function PolicyOAnQuan() {
  const location = useLocation();
  const selected = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
  const t = content[selected];
  const { language, suffix } = useOAnQuanLanguage(`Ô Ăn Quan — ${t.title}`, t.intro);
  return (
    <div className="oq-policy-page" lang={language}>
      <header className="oq-nav"><Link to={`/o-an-quan${suffix}`} className="oq-brand" aria-label={t.back}><img src={appIcon} alt="" width="40" height="40" /><span>Ô Ăn Quan</span></Link><LanguageSwitch language={language} /></header>
      <main className="oq-policy oq-container">
        <p className="oq-eyebrow">Ô ĂN QUAN: TRÒ CHƠI DÂN GIAN</p>
        <h1>{t.title}</h1><p className="oq-policy-date"><time dateTime="2026-10-06">{t.date}</time></p><p>{t.intro}</p>
        {t.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
        <section><h2>{t.providers}</h2><ul>
          <li><a href="https://policies.google.com/privacy">Google / AdMob</a></li>
          <li><a href="https://firebase.google.com/support/privacy">Firebase Analytics &amp; Crashlytics</a></li>
          <li><a href="https://www.apple.com/legal/privacy/data/en/game-center/">Apple Game Center</a></li>
          <li><a href="https://www.apple.com/legal/privacy/">Apple / App Store</a></li>
        </ul></section>
        <section><h2>{t.contact}</h2><p>{t.contactText} <a href="mailto:jamesthang1996@gmail.com">jamesthang1996@gmail.com</a>.</p></section>
      </main>
      <footer className="oq-footer oq-container"><span>© {new Date().getFullYear()} James Thang</span><Link to={`/o-an-quan${suffix}`}>{t.back}</Link></footer>
    </div>
  );
}
