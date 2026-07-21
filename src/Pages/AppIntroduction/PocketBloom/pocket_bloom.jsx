import React from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../../../Image/PocketBloom.png';
import screenshot1 from '../../../Image/PocketBloom1.png';
import screenshot2 from '../../../Image/PocketBloom2.png';
import screenshot3 from '../../../Image/PocketBloom3.png';
import screenshot4 from '../../../Image/PocketBloom4.png';
import screenshot5 from '../../../Image/PocketBloom5.png';
import './pocket_bloom.scss';

const APP_STORE_URL = 'https://apps.apple.com/app/id6785750256';

const PocketBloom = () => {
    const handleAppStoreDownload = () => {
        window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="pocket-bloom-page">
            <nav className="top-nav" aria-label="Pocket Bloom top navigation">
                <div className="nav-content">
                    <div className="nav-left">
                        <Link to="/" className="nav-logo" aria-label="Back to home">
                            <img src={appIcon} alt="Pocket Bloom" className="nav-icon" />
                            <span>Pocket Bloom</span>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <button onClick={handleAppStoreDownload} className="nav-button" type="button">
                            Download Now
                        </button>
                    </div>
                </div>
            </nav>

            <div className="hero-section">
                <div className="hero-content">
                    <h1>Make the Garden Bloom</h1>
                    <p className="hero-subtitle">
                        A cozy garden puzzle where every move plants a seed and every bloom connects the garden
                    </p>
                </div>
            </div>

            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Cozy Puzzle, Clever Solutions</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">
                                Plan your moves carefully on a grid of soil tiles. Plant flowers, meet level goals,
                                and watch your garden come alive with every thoughtful placement.
                            </p>
                            <div className="feature-grid">
                                <div className="feature-card puzzle">
                                    <div className="feature-icon"><span>🌱</span></div>
                                    <h4>Plant & Bloom</h4>
                                    <p>Place flowers on soil tiles</p>
                                </div>
                                <div className="feature-card puzzle">
                                    <div className="feature-icon"><span>🎯</span></div>
                                    <h4>Level Goals</h4>
                                    <p>Complete unique objectives</p>
                                </div>
                                <div className="feature-card puzzle">
                                    <div className="feature-icon"><span>💡</span></div>
                                    <h4>Hints & Undo</h4>
                                    <p>Help when you need it</p>
                                </div>
                                <div className="feature-card puzzle">
                                    <div className="feature-icon"><span>🌻</span></div>
                                    <h4>Multiple Flowers</h4>
                                    <p>Tulips, sunflowers & more</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot1} alt="Cozy puzzle gameplay" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-mode-section featured-mode">
                <div className="mode-container">
                    <h2 className="section-title">Find the Perfect Move</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">
                                Chain blooms together for satisfying combos. Use sun tiles, neighbor rules, and
                                limited moves to solve each puzzle with the perfect strategy.
                            </p>
                            <div className="feature-grid">
                                <div className="feature-card strategy">
                                    <div className="feature-icon"><span>☀️</span></div>
                                    <h4>Bloom Chains</h4>
                                    <p>Connect flowers in sequence</p>
                                </div>
                                <div className="feature-card strategy">
                                    <div className="feature-icon"><span>🧩</span></div>
                                    <h4>Limited Moves</h4>
                                    <p>Every move counts</p>
                                </div>
                                <div className="feature-card strategy">
                                    <div className="feature-icon"><span>🌤️</span></div>
                                    <h4>Sun & Weather</h4>
                                    <p>Special tile mechanics</p>
                                </div>
                                <div className="feature-card strategy">
                                    <div className="feature-icon"><span>↩️</span></div>
                                    <h4>Undo & Retry</h4>
                                    <p>Learn from every attempt</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot2} alt="Find the perfect move" />
                            <div className="featured-badge">FEATURED</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Every Puzzle Fresh</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">
                                Hundreds of handcrafted levels with new challenges around every corner. From
                                simple first blooms to complex garden layouts that test your puzzle skills.
                            </p>
                            <div className="feature-grid">
                                <div className="feature-card garden">
                                    <div className="feature-icon"><span>🌸</span></div>
                                    <h4>Fresh Levels</h4>
                                    <p>New puzzles every chapter</p>
                                </div>
                                <div className="feature-card garden">
                                    <div className="feature-icon"><span>🍀</span></div>
                                    <h4>Special Tiles</h4>
                                    <p>Clovers, weeds & more</p>
                                </div>
                                <div className="feature-card garden">
                                    <div className="feature-icon"><span>💐</span></div>
                                    <h4>Bouquet Goals</h4>
                                    <p>Collect and combine blooms</p>
                                </div>
                                <div className="feature-card garden">
                                    <div className="feature-icon"><span>✨</span></div>
                                    <h4>Garden in Bloom</h4>
                                    <p>Celebrate every victory</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot3} alt="Every puzzle fresh" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Your Garden Journey</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">
                                Progress through chapters, unlock bonus gardens, and track your journey in the
                                journal. 150 bonus challenges await whenever you want more puzzles to explore.
                            </p>
                            <div className="feature-grid">
                                <div className="feature-card progress">
                                    <div className="feature-icon"><span>🗺️</span></div>
                                    <h4>Chapters</h4>
                                    <p>Story-driven progression</p>
                                </div>
                                <div className="feature-card progress">
                                    <div className="feature-icon"><span>📖</span></div>
                                    <h4>Journal</h4>
                                    <p>Track your garden history</p>
                                </div>
                                <div className="feature-card progress">
                                    <div className="feature-icon"><span>🎁</span></div>
                                    <h4>Bonus Gardens</h4>
                                    <p>150 extra challenges</p>
                                </div>
                                <div className="feature-card progress">
                                    <div className="feature-icon"><span>🏡</span></div>
                                    <h4>Continue Anytime</h4>
                                    <p>Pick up where you left off</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot5} alt="Your garden journey" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Watch Every Bloom Connect</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">
                                Clear weeds, bloom every flower, and build flourishing chains across the grid.
                                Each completed garden brings a satisfying moment of growth and accomplishment.
                            </p>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot4} alt="Watch every bloom connect" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="download-section">
                <h2>Ready to Bloom?</h2>
                <p>Download Pocket Bloom on iOS and start your cozy garden puzzle adventure today!</p>
                <div className="download-buttons">
                    <button onClick={handleAppStoreDownload} className="download-button app-store" type="button">
                        <span className="button-icon">🍎</span>
                        Download for iOS
                    </button>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <Link to="/policy/pocket-bloom" className="privacy-policy-link">
                        Privacy Policy & Terms of Service
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default PocketBloom;
