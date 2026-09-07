import React from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../../../Image/Horology.png';
import heroShot from '../../../Image/Horology1.png';
import collectionShot from '../../../Image/Horology2.png';
import customizationShot from '../../../Image/Horology3.png';
import widgetShot from '../../../Image/Horology4.png';
import worldTimeShot from '../../../Image/Horology5.png';
import movementShot from '../../../Image/Horology6.png';
import alarmShot from '../../../Image/Horology7.png';
import './horology.scss';

const APP_STORE_URL = 'https://apps.apple.com/app/id6808155373';

const scenes = [
  {
    title: 'A mechanical watch made yours.',
    text: 'Turn time into something you can feel. Horology Studio is a calm, interactive timepiece for people who notice the details.',
    image: heroShot,
    alt: 'Horology Studio interactive mechanical watch with crown and winding controls',
  },
  {
    title: 'Find your signature piece.',
    text: 'Explore a collection of original watches, from natural wood and geometric cases to travel, diving, and celestial designs.',
    image: collectionShot,
    alt: 'Horology Studio watch collection screen showing the Woodland Cushion watch',
  },
  {
    title: 'Make every detail yours.',
    text: 'Shape each watch with its own compatible dials, materials, hands, straps, finishes, complications, and caseback.',
    image: customizationShot,
    alt: 'Horology Studio dial customization screen with materials and decorations',
  },
  {
    title: 'Your watch, at a glance.',
    text: 'Keep your selected timepiece close with a Home Screen widget that follows your design across the day.',
    image: widgetShot,
    alt: 'Horology Studio Home Screen widget showing a customized analog watch',
  },
  {
    title: 'Keep your world in time.',
    text: 'See four places at once with World Time: independent watches, city labels, day relations, and local offsets.',
    image: worldTimeShot,
    alt: 'Horology Studio World Time widget showing four watches and cities',
  },
  {
    title: 'Discover what makes it tick.',
    text: 'Interact with the crown, wind the movement, switch to the caseback, and spend time with the mechanism itself.',
    image: movementShot,
    alt: 'Horology Studio caseback view showing the mechanical gears',
  },
  {
    title: 'Make time for what matters.',
    text: 'On iOS 26 or later, schedule system-backed alarms and use an optional five-minute snooze when you need it.',
    image: alarmShot,
    alt: 'Horology Studio system alarm appearing over a customized watch',
  },
];

const HorologyStudio = () => {
  const handleDownload = () => window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');

  return (
    <div className="horology-page">
      <nav className="horology-nav" aria-label="Horology Studio navigation">
        <Link to="/" className="horology-brand" aria-label="Back to James Thang home">
          <img src={appIcon} alt="" />
          <span>Horology Studio</span>
        </Link>
        <button type="button" onClick={handleDownload}>Download on the App Store</button>
      </nav>

      <header className="horology-hero">
        <div className="horology-hero-copy">
          <p className="eyebrow">HOROLOGY STUDIO · iOS</p>
          <h1>Make time<br />feel personal.</h1>
          <p className="hero-lede">A crafted collection of interactive mechanical watches for looking at time, waking with intention, and enjoying the details.</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={handleDownload}>Get Horology Studio</button>
            <a href="#features" className="text-link">Explore the collection <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note">Free to begin · No account required · iOS 18+</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-glow" />
          <img src={heroShot} alt="" />
        </div>
      </header>

      <main id="features" className="horology-content">
        {scenes.slice(1).map((scene, index) => (
          <section className={`horology-scene ${index % 2 ? 'reverse' : ''}`} key={scene.title}>
            <div className="scene-copy">
              <p className="scene-number">0{index + 2} / 07</p>
              <h2>{scene.title}</h2>
              <p>{scene.text}</p>
            </div>
            <figure className="scene-image">
              <img src={scene.image} alt={scene.alt} loading="lazy" />
            </figure>
          </section>
        ))}

        <section className="horology-closing">
          <img src={appIcon} alt="Horology Studio app icon" />
          <p className="eyebrow">A QUIETER WAY TO LOOK AT TIME</p>
          <h2>Keep a timepiece<br />that feels like yours.</h2>
          <button type="button" className="primary-button" onClick={handleDownload}>Download on the App Store</button>
        </section>
      </main>

      <footer className="horology-footer">
        <span>© {new Date().getFullYear()} James Thang</span>
        <Link to="/policy/horology-studio">Privacy Policy</Link>
      </footer>
    </div>
  );
};

export default HorologyStudio;
