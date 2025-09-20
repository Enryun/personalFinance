import React from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../../../Image/PirateWar1.png';
import screenshot1 from '../../../Image/PirateWar2.png';
import screenshot2 from '../../../Image/PirateWar3.png';
import screenshot3 from '../../../Image/PirateWar4.png';
import screenshot4 from '../../../Image/PirateWar5.png';
import './battle_ship_pirate_war.scss';

const BattleShipPirateWar = () => {
    const handleAppStoreDownload = () => {
        // Placeholder for App Store download link
        window.open('https://apps.apple.com/app/battle-ship-pirate-war/id123456789', '_blank');
    };


    return (
        <div className="battle-ship-pirate-war-page">
            {/* Top Navigation Bar */}
            <nav className="top-nav">
                <div className="nav-content">
                    <div className="nav-left">
                        <Link to="/" className="nav-logo">
                            <img src={appIcon} alt="Battle Ship: Pirate War" className="nav-icon" />
                            <span>Battle Ship: Pirate War</span>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <button onClick={handleAppStoreDownload} className="nav-button">
                            Download Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Command Your Fleet in Epic Naval Battles</h1>
                    <p className="hero-subtitle">Experience the thrill of strategic warfare on the high seas in this exciting battleship game</p>
                </div>
            </div>


            {/* Multiplayer Online Section */}
            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Multiplayer Online</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">Battle against friends and players worldwide in real-time multiplayer matches. Test your skills against human opponents and climb the global leaderboards.</p>
                            <div className="feature-grid">
                                <div className="feature-card multiplayer">
                                    <div className="feature-icon">
                                        <span>🌍</span>
                                    </div>
                                    <h4>Global Players</h4>
                                    <p>Compete worldwide</p>
                                </div>
                                <div className="feature-card multiplayer">
                                    <div className="feature-icon">
                                        <span>👥</span>
                                    </div>
                                    <h4>Real-time Battles</h4>
                                    <p>Live multiplayer action</p>
                                </div>
                                <div className="feature-card multiplayer">
                                    <div className="feature-icon">
                                        <span>🏆</span>
                                    </div>
                                    <h4>Leaderboards</h4>
                                    <p>Climb the ranks</p>
                                </div>
                                <div className="feature-card multiplayer">
                                    <div className="feature-icon">
                                        <span>⚡</span>
                                    </div>
                                    <h4>Quick Match</h4>
                                    <p>Instant battles</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot3} alt="Multiplayer Online" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Single Player vs AI Section */}
            <div className="game-mode-section featured-mode">
                <div className="mode-container">
                    <h2 className="section-title">Single Player vs AI</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">Challenge intelligent AI opponents with varying difficulty levels. Experience epic naval battles with advanced AI that adapts to your playing style.</p>
                            <div className="feature-grid">
                                <div className="feature-card ai">
                                    <div className="feature-icon">
                                        <span>🤖</span>
                                    </div>
                                    <h4>Intelligent AI</h4>
                                    <p>Smart opponents</p>
                                </div>
                                <div className="feature-card ai">
                                    <div className="feature-icon">
                                        <span>📈</span>
                                    </div>
                                    <h4>Adaptive Difficulty</h4>
                                    <p>Scales to your skill</p>
                                </div>
                                <div className="feature-card ai">
                                    <div className="feature-icon">
                                        <span>⚔️</span>
                                    </div>
                                    <h4>Epic Battles</h4>
                                    <p>Thrilling combat</p>
                                </div>
                                <div className="feature-card ai">
                                    <div className="feature-icon">
                                        <span>🎯</span>
                                    </div>
                                    <h4>Strategic Depth</h4>
                                    <p>Master tactics</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot2} alt="Single Player vs AI" />
                            <div className="featured-badge">FEATURED</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements & Collection Section */}
            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Achievements & Collection</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">Unlock achievements, collect rare ship designs, and track your progress. Complete challenges to earn exclusive rewards and showcase your naval mastery.</p>
                            <div className="feature-grid">
                                <div className="feature-card achievement">
                                    <div className="feature-icon">
                                        <span>🏅</span>
                                    </div>
                                    <h4>Unlock Achievements</h4>
                                    <p>Earn rewards</p>
                                </div>
                                <div className="feature-card achievement">
                                    <div className="feature-icon">
                                        <span>🚢</span>
                                    </div>
                                    <h4>Rare Ship Designs</h4>
                                    <p>Collect unique ships</p>
                                </div>
                                <div className="feature-card achievement">
                                    <div className="feature-icon">
                                        <span>📊</span>
                                    </div>
                                    <h4>Progress Tracking</h4>
                                    <p>Monitor your growth</p>
                                </div>
                                <div className="feature-card achievement">
                                    <div className="feature-icon">
                                        <span>⭐</span>
                                    </div>
                                    <h4>Exclusive Rewards</h4>
                                    <p>Special unlocks</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot4} alt="Achievements Collection" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Practice Training Mode Section */}
            <div className="game-mode-section">
                <div className="mode-container">
                    <h2 className="section-title">Practice Training Mode</h2>
                    <div className="mode-content-wrapper">
                        <div className="mode-content">
                            <p className="mode-description">Master the art of naval warfare with our comprehensive training system. Perfect your strategies before heading into real battles.</p>
                            <div className="feature-grid">
                                <div className="feature-card training">
                                    <div className="feature-icon">
                                        <span>🎯</span>
                                    </div>
                                    <h4>Target Practice</h4>
                                    <p>Perfect your aim</p>
                                </div>
                                <div className="feature-card training">
                                    <div className="feature-icon">
                                        <span>📚</span>
                                    </div>
                                    <h4>Strategy Learning</h4>
                                    <p>Master tactics</p>
                                </div>
                                <div className="feature-card training">
                                    <div className="feature-icon">
                                        <span>⚡</span>
                                    </div>
                                    <h4>Quick Training</h4>
                                    <p>Fast skill building</p>
                                </div>
                                <div className="feature-card training">
                                    <div className="feature-icon">
                                        <span>🏴‍☠️</span>
                                    </div>
                                    <h4>Pirate Mastery</h4>
                                    <p>Become a legend</p>
                                </div>
                            </div>
                        </div>
                        <div className="mode-image">
                            <img src={screenshot1} alt="Practice Training Mode" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Download Section */}
            <div className="download-section">
                <h2>Ready to Set Sail?</h2>
                <p>Download Battle Ship: Pirate War on iOS and start your naval adventure today!</p>
                <div className="download-buttons">
                    <button onClick={handleAppStoreDownload} className="download-button app-store">
                        <span className="button-icon">🍎</span>
                        Download for iOS
                    </button>
                </div>
            </div>
            
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <Link to="/policy/battle-ship-pirate-war" className="privacy-policy-link">
                        Privacy Policy & Terms of Service
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default BattleShipPirateWar;
