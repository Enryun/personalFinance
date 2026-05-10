import React from 'react';
import { Link } from 'react-router-dom';
import folioIcon from '../../../Image/Folio.png';
import scene1 from '../../../Image/Folio1.png';
import scene2 from '../../../Image/Folio2.png';
import scene3 from '../../../Image/Folio3.png';
import scene4 from '../../../Image/Folio4.png';
import scene5 from '../../../Image/Folio5.png';
import './folio.scss';

const APP_STORE_URL = 'https://apps.apple.com/app/id6765871325';

const Folio = () => {
  const handleDownloadClick = () => {
    window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="folio-page">
      <nav className="top-nav" aria-label="Folio top navigation">
        <div className="nav-content">
          <div className="nav-left">
            <Link to="/" className="nav-logo" aria-label="Back to home">
              <img src={folioIcon} alt="Folio app icon" className="nav-icon" />
              <span>Folio</span>
            </Link>
          </div>
          <div className="nav-right">
            <button onClick={handleDownloadClick} className="nav-button" type="button">
              Download for macOS
            </button>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">macOS • Local-first • Markdown</div>
          <h1>Turn scattered Markdown into a fast, searchable library.</h1>
          <p className="hero-subtitle">
            Folio is a lightweight Markdown reader built for speed—so you can organize docs locally and find the right
            note in seconds.
          </p>
          <div className="hero-actions">
            <button onClick={handleDownloadClick} className="primary-cta" type="button">
              Download for macOS
            </button>
            <a className="secondary-cta" href="#scenes" aria-label="See what Folio can do">
              See what it does
            </a>
          </div>
        </div>
      </header>

      <main className="page-content" id="scenes">
        <section className="scene">
          <div className="scene-text">
            <h2>Simple Markdown Viewer</h2>
            <p>
              Open and read Markdown instantly with a clean, distraction-free layout—perfect for docs, notes, and
              README files.
            </p>
            <div className="caption">Read Markdown clearly—no setup, no clutter.</div>
          </div>
          <figure className="scene-media">
            <img src={scene1} alt="Folio simple Markdown viewer screenshot" />
          </figure>
        </section>

        <section className="scene reverse">
          <div className="scene-text">
            <h2>Organize by Folders / Tags</h2>
            <p>
              Keep your library structured the way you think. Group by folder, add tags, and build a system that scales
              as your notes grow.
            </p>
            <div className="caption">Sort by folder, label with tags, stay organized.</div>
          </div>
          <figure className="scene-media">
            <img src={scene2} alt="Folio folders and tags organization screenshot" />
          </figure>
        </section>

        <section className="scene">
          <div className="scene-text">
            <h2>Find Things Fast</h2>
            <p>
              Stop hunting through directories. Search across your library and jump straight to the document you need
              right now.
            </p>
            <div className="caption">Search your library and jump to the answer.</div>
          </div>
          <figure className="scene-media">
            <img src={scene3} alt="Folio fast search screenshot" />
          </figure>
        </section>

        <section className="scene reverse">
          <div className="scene-text">
            <h2>Local Markdown Hub (Full Privacy)</h2>
            <p>
              Your library stays on your Mac. Folio is designed for a local workflow—so your docs remain private and
              under your control.
            </p>
            <div className="caption">Local-first by design—your notes stay on your Mac.</div>
          </div>
          <figure className="scene-media">
            <img src={scene4} alt="Folio local Markdown hub screenshot" />
          </figure>
        </section>

        <section className="scene">
          <div className="scene-text">
            <h2>Git Import → Auto-extract &amp; Save Locally</h2>
            <p>
              Pull Markdown from a Git repo and keep a local copy in your library. Great for syncing project docs and
              keeping references available offline.
            </p>
            <div className="caption">Import from Git, extract Markdown, keep it local.</div>
          </div>
          <figure className="scene-media">
            <img src={scene5} alt="Folio Git import screenshot" />
          </figure>
        </section>

        <section className="faq" aria-label="Frequently asked questions">
          <h2>FAQ</h2>
          <div className="faq-grid">
            <details>
              <summary>What kind of Markdown does Folio handle?</summary>
              <p>Folio is built for fast reading of Markdown documents so you can browse docs and notes comfortably.</p>
            </details>
            <details>
              <summary>How do folders and tags work together?</summary>
              <p>Use folders for structure and tags for cross-cutting topics—so the same doc can be found both ways.</p>
            </details>
            <details>
              <summary>Is search fast on large libraries?</summary>
              <p>Folio is designed to help you find docs quickly, even as your local library grows over time.</p>
            </details>
            <details>
              <summary>Does Folio upload my notes or track me?</summary>
              <p>No—Folio is designed as a local Markdown hub, keeping your library on your Mac for full privacy.</p>
            </details>
            <details>
              <summary>What does “Git import” mean?</summary>
              <p>It lets you bring Markdown docs from a Git repository and save them locally in your library.</p>
            </details>
            <details>
              <summary>Will Git import overwrite my files?</summary>
              <p>Git import is intended to extract and save Markdown locally; it’s for building a local reference copy.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Folio footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/policy/folio" className="folio-policy-link" aria-label="Read Folio privacy policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Folio;

