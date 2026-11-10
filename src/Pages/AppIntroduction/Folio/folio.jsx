import React from 'react';
import { Link } from 'react-router-dom';
import folioIcon from '../../../Image/Folio.webp';
import appStore from '../../../Image/appStore.webp';
import scene1 from '../../../Image/Folio1.webp';
import scene2 from '../../../Image/Folio2.webp';
import scene3 from '../../../Image/Folio3.webp';
import scene5 from '../../../Image/Folio5.webp';
import assistant from '../../../Image/folio-writing-assistant.webp';
import { FOLIO_STORE } from './content';
import iphonePreview480 from '../../../Image/folio/iphone-preview-480.webp';
import iphonePreview768 from '../../../Image/folio/iphone-preview-768.webp';
import iphoneEditor480 from '../../../Image/folio/iphone-editor-480.webp';
import iphoneEditor768 from '../../../Image/folio/iphone-editor-768.webp';
import iphoneFolders480 from '../../../Image/folio/iphone-folders-480.webp';
import iphoneFolders768 from '../../../Image/folio/iphone-folders-768.webp';
import iphoneLinkMap480 from '../../../Image/folio/iphone-link-map-480.webp';
import iphoneLinkMap768 from '../../../Image/folio/iphone-link-map-768.webp';
import iphoneAssistant480 from '../../../Image/folio/iphone-assistant-480.webp';
import iphoneAssistant768 from '../../../Image/folio/iphone-assistant-768.webp';
import './folio.scss';

const StoreBadge = () => <a className="folio-store-badge" href={FOLIO_STORE} aria-label="Download Folio on the App Store"><img src={appStore} width="180" height="60" alt="Download on the App Store" /></a>;
const phoneImages = {
  preview: [iphonePreview480, iphonePreview768], editor: [iphoneEditor480, iphoneEditor768],
  folders: [iphoneFolders480, iphoneFolders768], links: [iphoneLinkMap480, iphoneLinkMap768],
  assistant: [iphoneAssistant480, iphoneAssistant768],
};
const PhoneScreenshot = ({ name, alt, eager = false }) => <span className="folio-phone-preview"><img className="folio-phone-shot" src={phoneImages[name][0]} srcSet={`${phoneImages[name][0]} 480w, ${phoneImages[name][1]} 768w`} sizes={eager ? '(max-width: 900px) 29vw, 400px' : '(max-width: 900px) 22vw, 210px'} width="480" height="1039" loading={eager ? 'eager' : 'lazy'} decoding="async" alt={alt} /></span>;
const MacScreenshot = ({ image, alt, eager = false }) => <span className={`folio-mac-preview ${image === assistant ? 'folio-mac-window' : 'folio-mac-device'}`}><img className="folio-mac-shot" src={image} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width={image === assistant ? '1600' : '2880'} height={image === assistant ? '971' : '1800'} /></span>;
const scenes = [
  ['Write and preview Markdown', 'Write and preview Markdown on iPhone and Mac. Use Editor or Preview on iPhone, and choose Split View on Mac to see the source and rendered document side by side.', scene1, 'Folio Markdown document with source and rendered preview on Mac', 'editor', 'Folio Markdown editor and formatting toolbar on iPhone'],
  ['Give every note a home', 'Organize Markdown notes with folders and tags on iPhone and Mac. Needs Organizing gives new imports a place to land; on Mac, nested folders and pinned favorites help structure a larger library.', scene2, 'Folio local Markdown library with folders and tags on Mac', 'folders', 'Folio folders and Needs Organizing inbox on iPhone'],
  ['Find the note. Follow the connection.', 'Find documents in your library, then explore connections between linked Markdown notes with Link Map on iPhone and Mac. On Mac, sidebar search and in-document find help you locate the passage you need.', scene3, 'Folio sidebar search for documents in a local Markdown library on Mac', 'links', 'Folio Link Map showing connections between Markdown notes on iPhone'],
  ['AI writing assistance. Processed on your device.', 'Draft, brainstorm, outline, and refine your writing locally on iPhone or Mac. Your text is not sent to a cloud AI service.', assistant, 'Folio on-device Writing Assistant beside a Markdown document on Mac', 'assistant', 'Folio Writing Assistant with draft, brainstorm, and outline actions on iPhone'],
  ['Bring GitHub docs into your library', 'Import Markdown from supported public GitHub repositories or individual files, then keep a local reference copy. Git import brings documents into Folio; it does not continuously sync repository changes.', scene5, 'Folio importing Markdown documents from a GitHub link'],
];
const questions = [
  ['What is Folio?', 'Folio: Markdown Library is a local-first Markdown editor and organizer for iPhone and Mac. It combines editing and preview, folders, tags, search, Link Map, and an on-device Writing Assistant.'],
  ['Can I edit Markdown as well as read it?', 'Yes. Both iPhone and Mac offer Markdown editing and preview. On Mac, Split View shows your source and rendered document together. Folio also supports plain-text documents.'],
  ['Does Folio work offline?', 'You can work with documents already stored in your local library offline. GitHub imports and model downloads need internet access. The Writing Assistant runs locally once a supported model is downloaded and ready.'],
  ['Does Folio upload my notes for AI?', 'The Writing Assistant uses an on-device model to process your notes locally. This does not mean the entire app has no network activity: Git imports, model downloads, purchases, and app analytics can use the network. See the privacy policy for details.'],
  ['What does Link Map do?', 'Link Map visualizes connections between linked notes so you can explore related documents in your library.'],
  ['Does Git import keep my repository in sync?', 'No. Import from Git Link saves a local reference copy from supported public GitHub repositories or individual files. It is not continuous Git synchronization.'],
  ['Is Folio free?', 'Folio is free to download, with an optional one-time Pro purchase rather than a subscription. Check the App Store and the app for current pricing and included features.'],
  ['Which systems and languages does Folio support?', 'Folio supports iPhone with iOS 17 or later and Mac with macOS 14 or later. The app currently supports English. Local AI model support varies by device; check the in-app model settings for available options.'],
];

const Folio = () => (
  <div className="folio-page" lang="en">
    <nav className="top-nav" aria-label="Folio navigation"><div className="nav-content">
      <Link to="/" className="nav-logo" aria-label="James Thang home"><img src={folioIcon} alt="" className="nav-icon" width="32" height="32" /><span>Folio</span></Link>
      <a href={FOLIO_STORE} className="nav-button">Get Folio</a>
    </div></nav>
    <header className="hero-section"><div className="hero-content">
      <div className="hero-badge">Markdown for iPhone and Mac · Local-first</div>
      <h1>Markdown notes with on-device AI</h1>
      <p className="hero-subtitle">A local-first Markdown editor for iPhone and Mac. Write and preview your notes, connect ideas with Link Map, and refine drafts with on-device writing assistance.</p>
      <div className="hero-actions"><StoreBadge /><a className="secondary-cta" href="#features">See how it works <span aria-hidden="true">↓</span></a></div>
      <p className="folio-requirements">Free download · Optional one-time Pro purchase · English</p><p className="folio-compatibility">iPhone: iOS 17+ · Mac: macOS 14+</p>
    </div>
      <figure className="folio-hero-preview" aria-label="Folio on Mac and iPhone">
        <MacScreenshot image={scene1} alt="Folio Markdown editor with source and rendered preview on Mac" eager />
        <PhoneScreenshot name="preview" alt="Folio rendered Markdown note with images on iPhone" eager />
      </figure>
    </header>
    <main className="page-content" id="features">
      {scenes.map(([title, description, image, alt, phone, phoneAlt], index) => <section className={`scene${index % 2 ? ' reverse' : ''}`} key={title}>
        <div className="scene-text"><h2>{title}</h2><p>{description}</p>{image === assistant && <p className="folio-model-requirements">Requires a supported device and a downloaded local model. Availability and performance depend on your device and chosen model.</p>}</div>
        <figure className={`scene-media${phone ? ' folio-paired-media' : ''}`}><MacScreenshot image={image} alt={alt} />{phone && <PhoneScreenshot name={phone} alt={phoneAlt} />}</figure>
      </section>)}
      <section className="folio-use-cases" aria-labelledby="folio-audience"><h2 id="folio-audience">A local library for the work you keep</h2><div>
        <article><h3>Project documentation</h3><p>Keep README files and imported GitHub documentation together, ready to reference while you work.</p></article>
        <article><h3>Research and study notes</h3><p>Organize related notes with folders and tags, then explore links between them in Link Map.</p></article>
        <article><h3>Personal writing</h3><p>Draft in Markdown, check the preview, and refine your wording with local writing assistance.</p></article>
      </div></section>
      <section className="folio-privacy" aria-labelledby="folio-privacy-heading"><h2 id="folio-privacy-heading">Local notes. Clear privacy boundaries.</h2><p>Your library is stored on your device, and the Writing Assistant processes text with a local model. You do not need an account for core editing, organizing, or search. Network features include Git imports, model downloads, purchases, and usage analytics. The App Store also declares diagnostic data.</p><Link to="/policy/folio">Read the privacy policy →</Link></section>
      <section className="faq" aria-labelledby="folio-faq"><h2 id="folio-faq">Questions about Folio</h2><div className="faq-grid">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <section className="folio-final-cta"><h2>Your Markdown, connected</h2><p>Make room for your notes and project docs on iPhone and Mac.</p><StoreBadge /></section>
    </main>
    <figure className="folio-download-qr"><a href={FOLIO_STORE} aria-label="Open Folio on the App Store"><div className="folio-qr-art"><img src="/folio/download-qr.svg" alt="QR code linking to Folio on the App Store" width="216" height="216" /><img className="folio-qr-logo" src="/folio/qr-logo.webp" alt="" width="192" height="192" /></div></a><figcaption>Your Markdown, connected</figcaption></figure>
    <footer className="folio-footer"><Link to="/">Made by James Thang</Link><Link to="/policy/folio">Privacy policy</Link></footer>
  </div>
);
export default Folio;
