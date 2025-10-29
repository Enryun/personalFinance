import React from 'react';
import { Link } from 'react-router-dom';
import tidoraIcon from '../../../Image/Tidora.png';
import screenshot2 from '../../../Image/TidyMac1.png';
import './tidora.scss';

const Tidora = () => {
    const handleDirectDownload = () => {
        // App Store link for Tidora
        window.open('https://apps.apple.com/app/id6747400514', '_blank');
    };

    return (
        <div className="tidora-page">
            {/* Top Navigation Bar */}
            <nav className="top-nav">
                <div className="nav-content">
                    <div className="nav-left">
                        <Link to="/" className="nav-logo">
                            <img src={tidoraIcon} alt="Tidora" className="nav-icon" />
                            <span>Tidora</span>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <button onClick={handleDirectDownload} className="nav-button">
                            Try it Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Centered Image */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Keep Your Mac Clean</h1>
                    <p className="hero-subtitle">A powerful yet simple Mac utility to keep your system running smoothly</p>
                    <div className="hero-image">
                        <img src={screenshot2} alt="Tidora Screenshot" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>System Cleanup</h3>
                        <p>Remove unnecessary files, caches, and logs to free up valuable disk space</p>
                    </div>
                    <div className="feature-card">
                        <h3>Performance Boost</h3>
                        <p>Optimize your Mac's performance by cleaning system junk and temporary files</p>
                    </div>
                    <div className="feature-card">
                        <h3>Smart Analysis</h3>
                        <p>Intelligent scanning to identify and safely remove redundant files</p>
                    </div>
                    <div className="feature-card">
                        <h3>User-Friendly</h3>
                        <p>Simple, intuitive interface designed for both beginners and power users</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <h2>Ready to Optimize Your Mac?</h2>
                <p>Download Tidora and start enjoying a cleaner, faster system today.</p>
                <button onClick={handleDirectDownload} className="download-button">
                    Try it Now
                </button>
            </div>
            
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/policy/tidora" className="tidora-policy-link">
                            Privacy Policy
                        </Link>
                        <Link to="/policy/tidora-eula" className="tidora-policy-link">
                            Terms of Use (EULA)
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Tidora;

