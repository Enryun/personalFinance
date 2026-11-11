import React from 'react';
import { Link } from 'react-router-dom';
import appStoreBadge from '../../../Image/appStore.webp';
import { GALAXY_STORE, galaxyQuestions } from './content';
import './GalaxyGallery.scss';

const assetRoot = '/galaxy-gallery/en';

function StoreLink() {
  return (
    <a className="galaxy-store-link" href={GALAXY_STORE} aria-label="Download Galaxy Gallery on the App Store">
      <img src={appStoreBadge} width="180" height="60" alt="Download on the App Store" />
    </a>
  );
}

function Screen({ device, name, alt, eager = false }) {
  const tablet = device === 'ipad';
  const smallWidth = tablet ? 640 : 400;
  const largeWidth = tablet ? 1000 : 700;
  const height = tablet ? 853 : name === 'ar-planets' ? 865 : 869;

  return (
    <div className={`galaxy-device galaxy-device-${device}`}>
      <img
        src={`${assetRoot}/${device}-${name}-${smallWidth}.webp`}
        srcSet={`${assetRoot}/${device}-${name}-${smallWidth}.webp ${smallWidth}w, ${assetRoot}/${device}-${name}-${largeWidth}.webp ${largeWidth}w`}
        sizes={tablet ? '(max-width: 700px) 60vw, 420px' : '(max-width: 700px) 28vw, 220px'}
        width={smallWidth}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        alt={alt}
      />
    </div>
  );
}

function SpaceView({ name, alt }) {
  return (
    <img
      className="galaxy-space-view"
      src={`${assetRoot}/${name}-800.webp`}
      srcSet={`${assetRoot}/${name}-800.webp 800w, ${assetRoot}/${name}-1600.webp 1600w`}
      sizes="(max-width: 1200px) 100vw, 1200px"
      width="1600"
      height={name === 'planet-comparison' ? 536 : 686}
      loading="lazy"
      decoding="async"
      alt={alt}
    />
  );
}

export default function GalaxyGallery() {
  return (
    <div className="galaxy-page" lang="en">
      <a className="galaxy-skip" href="#galaxy-content">Skip to content</a>
      <header className="galaxy-nav galaxy-container">
        <Link to="/" className="galaxy-brand" aria-label="James Thang home">
          <img src="/galaxy-gallery/icon.webp" width="40" height="40" alt="" />
          <span>Galaxy Gallery</span>
        </Link>
        <a href={GALAXY_STORE} className="galaxy-button">Get the app</a>
      </header>

      <main id="galaxy-content">
        <section className="galaxy-hero galaxy-container" aria-labelledby="galaxy-heading">
          <div className="galaxy-hero-copy">
            <h1 id="galaxy-heading">Explore the universe</h1>
            <p className="galaxy-lede">Discover planets and moons in interactive 3D, explore the Solar System, and learn fascinating facts about space.</p>
            <div className="galaxy-actions">
              <StoreLink />
              <a className="galaxy-text-link" href="#explore">Take a closer look <span aria-hidden="true">↓</span></a>
            </div>
            <p className="galaxy-requirements">For iPhone and iPad · iOS / iPadOS 17+</p>
            <p className="galaxy-requirements">Free download with ads and optional purchases</p>
          </div>
          <figure className="galaxy-device-pair galaxy-hero-art" aria-label="Galaxy Gallery on iPad and iPhone">
            <Screen device="ipad" name="solar-system" eager alt="Galaxy Gallery Solar System with planetary orbits on iPad" />
            <Screen device="iphone" name="planet-effects" eager alt="Interactive 3D Earth with planet effects in Galaxy Gallery on iPhone" />
          </figure>
        </section>

        <section className="galaxy-worlds galaxy-container" id="explore" aria-labelledby="galaxy-worlds-title">
          <div className="galaxy-section-heading">
            <h2 id="galaxy-worlds-title">The Solar System, within reach</h2>
            <p>Get closer to planets and moons. Rotate a world, zoom in on its surface, and watch the Earth–Moon system and planetary orbits in motion.</p>
          </div>
          <figure className="galaxy-panorama">
            <SpaceView name="solar-system" alt="Galaxy Gallery’s 3D Solar System view with the Sun, planets, and their orbital paths" />
          </figure>
          <div className="galaxy-explore-details">
            <article><h3>Look closer</h3><p>Explore day and night on Earth, turn a planet around, and inspect it from a new angle.</p></article>
            <article><h3>See worlds in motion</h3><p>Follow the Earth and Moon, then explore how the planets move around the Sun.</p></article>
            <article><h3>Follow your curiosity</h3><p>Open planet information and hear optional narrated facts as you explore.</p></article>
          </div>
        </section>

        <section className="galaxy-comparison galaxy-container" aria-labelledby="galaxy-comparison-title">
          <div className="galaxy-section-heading">
            <h2 id="galaxy-comparison-title">How big is your world?</h2>
            <p>Put Earth beside Jupiter, Saturn, and the other planets. Comparing their relative sizes makes the scale of the Solar System easier to grasp.</p>
          </div>
          <figure className="galaxy-panorama">
            <SpaceView name="planet-comparison" alt="Relative planet-size comparison showing Earth beside Jupiter, Saturn, Uranus, and Neptune" />
            <figcaption>Planet sizes are compared at relative scale. Spacing is arranged for viewing.</figcaption>
          </figure>
        </section>

        <section className="galaxy-feature galaxy-container" aria-labelledby="galaxy-discoveries-title">
          <div className="galaxy-feature-copy">
            <h2 id="galaxy-discoveries-title">One discovery leads to another</h2>
            <p>Follow themed Wonder Journeys, from Earth and nearby worlds to humanity’s missions and deep space. Discover facts about planets, moons, and the universe, then return to the ideas that caught your attention.</p>
            <p>Complete optional focus missions to unlock more Wonders and grow your collection of discoveries.</p>
          </div>
          <figure className="galaxy-device-pair">
            <Screen device="ipad" name="journeys" alt="Wonder Journeys on iPad with themes about Earth, other worlds, space missions, and deep space" />
            <Screen device="iphone" name="space-facts" alt="A Galaxy Gallery Wonder about Earth’s oceans unlocked after a focus mission on iPhone" />
          </figure>
        </section>

        <section className="galaxy-feature galaxy-feature-reverse galaxy-container" aria-labelledby="galaxy-ar-title">
          <div className="galaxy-feature-copy">
            <h2 id="galaxy-ar-title">Bring a planet into your room</h2>
            <p>Place a world in your surroundings with AR Quick Look. Move around it and see a familiar room become a place to explore space.</p>
            <p className="galaxy-small">Requires a compatible device and camera access.</p>
          </div>
          <figure className="galaxy-single-phone">
            <Screen device="iphone" name="ar-planets" alt="Real iPhone AR capture showing Earth placed inside a room with Galaxy Gallery" />
          </figure>
        </section>

        <section className="galaxy-focus galaxy-container" aria-labelledby="galaxy-focus-title">
          <div className="galaxy-feature-copy">
            <h2 id="galaxy-focus-title">Make time for discovery</h2>
            <p>Settle beside a living planet for a 15-, 25-, or 50-minute focus mission. Set an intention, complete your session, and uncover a new space fact.</p>
            <p>Review your progress and follow your discoveries over time. Deep Focus can restrict chosen distractions during a mission, with Screen Time authorization on supported devices.</p>
          </div>
          <figure className="galaxy-single-phone">
            <Screen device="iphone" name="focus" alt="Galaxy Focus session counting down beside a rotating Earth on iPhone" />
          </figure>
        </section>

        <section className="galaxy-pricing galaxy-container" aria-labelledby="galaxy-pricing-title">
          <h2 id="galaxy-pricing-title">Start exploring</h2>
          <p>Galaxy Gallery is free to download, with ads and optional purchases. Galaxy Plus adds an ad-free experience and unlimited Deep Focus, with monthly and lifetime options.</p>
          <p className="galaxy-small">See the App Store and the app for current pricing and access details.</p>
          <StoreLink />
        </section>

        <section className="galaxy-faq galaxy-container" aria-labelledby="galaxy-faq-title">
          <h2 id="galaxy-faq-title">Before you lift off</h2>
          <div>{galaxyQuestions.map(({ question, answer }) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}</div>
        </section>

        <section className="galaxy-closing galaxy-container">
          <h2>Your next discovery awaits</h2>
          <p>Choose a planet. See where your curiosity takes you.</p>
          <StoreLink />
        </section>
      </main>

      <figure className="galaxy-download-qr">
        <a href={GALAXY_STORE} aria-label="Open Galaxy Gallery on the App Store">
          <div className="galaxy-qr-art">
            <img src="/galaxy-gallery/download-qr.svg" width="216" height="216" alt="QR code linking to Galaxy Gallery on the App Store" />
            <img className="galaxy-qr-logo" src="/galaxy-gallery/qr-logo.webp" width="192" height="192" alt="" />
          </div>
        </a>
        <figcaption>A universe to explore</figcaption>
      </figure>
      <footer className="galaxy-footer galaxy-container">
        <Link to="/">Made by James Thang</Link>
        <Link to="/policy/galaxy-gallery">Privacy policy</Link>
        <a href="mailto:jamesthang1996@gmail.com">Support</a>
      </footer>
    </div>
  );
}
