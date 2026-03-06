import React from 'react';
import { Link } from 'react-router-dom';
import volaIcon from '../../../Image/Vola.png';
import vola1 from '../../../Image/Vola1.png';
import vola2 from '../../../Image/Vola2.png';
import vola3 from '../../../Image/Vola3.png';
import vola4 from '../../../Image/Vola4.png';
import vola5 from '../../../Image/Vola5.png';
import vola6 from '../../../Image/Vola6.png';
import './vola.scss';

const Vola = () => {
    const handleDirectDownload = () => {
        window.open('https://apps.apple.com/app/id6758566739', '_blank');
    };

    const highlights = [
        { 
            title: 'Live Note During Voice Transcribe', 
            image: vola2,
            benefits: [
                { 
                    icon: '🎙️', 
                    name: 'Real-Time Transcription', 
                    detail: 'Watch your words appear instantly with industry-leading accuracy. Perfect for meetings and brainstorming sessions.',
                    badge: 'Live'
                },
                { 
                    icon: '✍️', 
                    name: 'Smart Formatting', 
                    detail: 'Auto-adds punctuation and structure as you speak. No manual editing needed.',
                    badge: 'Auto-Format'
                },
                { 
                    icon: '🔍', 
                    name: 'Searchable Notes', 
                    detail: 'Find any word from past recordings in seconds with instant search and filtering.',
                    badge: 'Searchable'
                },
                { 
                    icon: '📝', 
                    name: 'Edit While Recording', 
                    detail: 'Edit, highlight, and organize without pausing. Notes are ready the moment you finish.',
                    badge: 'Multi-task'
                },
            ]
        },
        { 
            title: 'Instant Translation', 
            image: vola3,
            benefits: [
                { 
                    icon: '🌐', 
                    name: 'Real-Time Translation', 
                    detail: 'Translate text and conversations instantly with zero delay. Perfect for video calls and international collaboration.',
                    badge: 'Real-Time'
                },
                { 
                    icon: '🗣️', 
                    name: '20+ Languages', 
                    detail: 'Connect globally with support for 100+ languages including regional dialects.',
                    badge: '20+ Languages'
                },
                { 
                    icon: '💡', 
                    name: 'Context Preserved', 
                    detail: 'Maintains tone, idioms, and cultural nuance. Your message lands as intended across cultures.',
                    badge: 'Nuanced'
                },
                { 
                    icon: '📡', 
                    name: 'Offline Mode', 
                    detail: 'Works without internet for essential languages. Never stuck when traveling or in remote areas.',
                    badge: 'Works Offline'
                },
            ]
        },
        { 
            title: 'Edit & Take Important Notes While Recording', 
            image: vola5,
            benefits: [
                { 
                    icon: '✏️', 
                    name: 'Live Editing', 
                    detail: 'Edit text while recording. Fix typos and add clarifications without pausing.',
                    badge: 'Real-Time'
                },
                { 
                    icon: '⭐', 
                    name: 'Highlight Key Moments', 
                    detail: 'Mark important sections with one tap. Jump straight to what matters when reviewing.',
                    badge: 'Quick Mark'
                },
                { 
                    icon: '📌', 
                    name: 'Instant Tags & Labels', 
                    detail: 'Add tags and categories during recording. Your notes are organized before you finish.',
                    badge: 'Organized'
                },
                { 
                    icon: '🎯', 
                    name: 'Action Items Tracker', 
                    detail: 'Create tasks with one tap. Meeting audio becomes a clear next-steps checklist instantly.',
                    badge: 'Actionable'
                },
            ]
        },
    ];

    return (
        <div className="vola-landing">
            <header className="vola-nav" role="banner">
                <div className="vola-nav-inner">
                    <Link to="/" className="vola-logo" aria-label="Vola – Home">
                        <img src={volaIcon} alt="" className="vola-logo-img" />
                        <span>Vola</span>
                    </Link>
                    <button
                        type="button"
                        onClick={handleDirectDownload}
                        className="vola-cta vola-cta--nav"
                        aria-label="Try Vola now"
                    >
                        Try it free
                    </button>
                </div>
            </header>

            <main>
                <section className="vola-hero" aria-labelledby="vola-heading">
                    <div className="vola-hero-inner">
                        <h1 id="vola-heading" className="vola-hero-title">
                            Work smarter, not harder.
                        </h1>
                        <p className="vola-hero-lead">
                            Voice to text, across languages, while staying organized.
                        </p>
                        <button
                            type="button"
                            onClick={handleDirectDownload}
                            className="vola-cta vola-cta--primary"
                            aria-label="Download Vola"
                        >
                            Get Vola
                        </button>
                    </div>
                </section>

                <section className="vola-benefits" aria-labelledby="vola-benefits-heading">
                    <div className="vola-benefits-inner">
                        <div className="vola-highlights-container">
                            {highlights.map((item, index) => (
                                <div key={item.title} className="vola-highlight-row">
                                    <div className="vola-highlight-visual">
                                        <img src={item.image} alt={`${item.title} preview`} />
                                    </div>
                                    <div className="vola-highlight-content">
                                        <h3 className="vola-highlight-title">{item.title}</h3>
                                        <div className="vola-benefit-cards">
                                            {item.benefits.map((benefit) => (
                                                <div key={benefit.name} className="vola-benefit-card">
                                                    <div className="vola-benefit-header">
                                                        <span className="vola-benefit-icon" aria-hidden="true">{benefit.icon}</span>
                                                        <span className="vola-benefit-badge">{benefit.badge}</span>
                                                    </div>
                                                    <h4 className="vola-benefit-name">{benefit.name}</h4>
                                                    <p className="vola-benefit-detail">{benefit.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="vola-final-cta" aria-labelledby="vola-final-heading">
                    <h2 id="vola-final-heading" className="vola-final-title">
                        Ready to try?
                    </h2>
                    <p className="vola-final-text">
                        Download Vola and see the difference.
                    </p>
                    <button
                        type="button"
                        onClick={handleDirectDownload}
                        className="vola-cta vola-cta--primary"
                        aria-label="Download Vola"
                    >
                        Get Vola
                    </button>
                </section>
            </main>

            <footer className="vola-footer" role="contentinfo">
                <div className="vola-footer-inner">
                    <Link to="/policy/vola" className="vola-footer-link">Privacy Policy</Link>
                    <Link to="/policy/vola-eula" className="vola-footer-link">Terms of Use (EULA)</Link>
                </div>
            </footer>
        </div>
    );
};

export default Vola;
