import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.styles.scss';

const ContactArrow = () => <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 18 18 6M6 6h12v12" /></svg>;

const Contact = () => {
    const [copyStatus, setCopyStatus] = useState('');
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText('jamesthang1996@gmail.com');
            setCopyStatus('Email copied. Paste it into your preferred email app.');
        } catch (error) {
            setCopyStatus('Select and copy the email address above to get in touch.');
        }
    };
    return (
        <div className="contact-page">
            <a className="contact-skip" href="#contact-main">Skip to content</a>
            <header className="contact-nav contact-container">
                <Link to="/" className="contact-brand">James Thang<span>Developer &amp; maker</span></Link>
                <Link to="/" className="contact-back">View my work <ContactArrow /></Link>
            </header>
            <main id="contact-main" className="contact-container">
                <section className="contact-hero" aria-labelledby="contact-heading">
                    <div className="contact-introduction">
                        <p className="contact-eyebrow">WORK WITH ME</p>
                        <h1 id="contact-heading">Good work starts<br />with a <em>hello.</em></h1>
                        <p className="contact-lede">Have a mobile product in mind, an app to improve, or a team that could use another pair of hands? I’d like to hear about it.</p>
                        <p className="contact-summary">I’m James Thang (Dương Đình Bảo Thăng), an independent developer working with SwiftUI, UIKit, and React Native. I bring product development experience across iOS and macOS, alongside workflows with Codex, Claude Code, and Cursor.</p>
                    </div>
                    <aside className="contact-details" aria-labelledby="contact-details-heading">
                        <h2 id="contact-details-heading">Start a conversation.</h2>
                        <p>A project, an opportunity, or a thoughtful question — my inbox is open.</p>
                        <div className="contact-email">
                            <h3>Email</h3>
                            <p className="contact-email-address">jamesthang1996@gmail.com</p>
                            <button type="button" onClick={copyEmail}>Copy email address <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 4H6a2 2 0 0 0-2 2v9" /></svg></button>
                            <p className="contact-copy-status" role="status">{copyStatus}</p>
                        </div>
                        <a className="contact-channel" href="https://www.linkedin.com/in/jamesthang/" target="_blank" rel="noopener noreferrer"><span><strong>LinkedIn</strong><span>linkedin.com/in/jamesthang</span></span><ContactArrow /></a>
                        <a className="contact-channel" href="tel:+84857713736"><span><strong>Phone</strong><span>+84 85 771 3736</span></span><ContactArrow /></a>
                    </aside>
                </section>
                <section className="contact-projects" aria-labelledby="contact-projects-heading">
                    <div className="contact-section-heading"><p className="contact-eyebrow">WAYS TO COLLABORATE</p><h2 id="contact-projects-heading">An idea. A challenge.<br /><em>A next chapter.</em></h2></div>
                    <div className="contact-services">
                        <article><span className="contact-number">01</span><h3>Build a new product</h3><p>Turn a product idea into an iOS, macOS, or React Native app, with thoughtful interfaces and a clear path toward release.</p></article>
                        <article><span className="contact-number">02</span><h3>Improve an existing app</h3><p>Refine the user experience, add platform features, work through integrations, or make the code easier to maintain.</p></article>
                        <article><span className="contact-number">03</span><h3>Work with your team</h3><p>Contribute mobile development skills and practical experience with coding agents to your product and engineering work.</p></article>
                    </div>
                </section>
                <section className="contact-brief" aria-labelledby="contact-brief-heading"><div><p className="contact-eyebrow">A HELPFUL FIRST MESSAGE</p><h2 id="contact-brief-heading">Tell me a little<br /><em>about your idea.</em></h2><p>You don’t need a finished specification. A short introduction and a few details are a good place to start.</p></div><ul><li>What your product does and who it’s for</li><li>The platforms you want to build for</li><li>Where things stand and what help you need</li><li>Your preferred timeline and budget, if known</li></ul></section>
            </main>
        </div>
    );
}

export default Contact
