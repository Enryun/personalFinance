import React from 'react';
import { Link } from 'react-router-dom';
import screenshot1 from '../../../Image/RandomRover1.webp';
import screenshot2 from '../../../Image/RandomRover2.webp';
import screenshot3 from '../../../Image/RandomRover3.webp';
import screenshot4 from '../../../Image/RandomRover4.webp';
import appstore from '../../../Image/appStore.webp';
import logo from '../../../Image/RandomRover.webp';
import '../GalaxyGallery/GalaxyGallery.scss';

const RandomRover = () => {
    return (
        <div className="galaxygallery">
        <h3 className="sudoku_title">Random Rover</h3>
        {/* App Logo */}
        {/* Screen Shot using Flex box */}
        {/* Functionalitites */}
        <img decoding="async" className="applogo" alt="logo" src={logo} />
        <p>Surprise to every decision</p>
        <div className="flex-container">
            <img decoding="async" className="screenshot" alt="screen shot" src={screenshot1} />
            <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot2} />
            <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot3} />
            <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot4} />
        </div>
        <p>Navigate life's choices with a tap</p>
        <p>Adding surprises to every decision</p>
        {/* App Store Logo */}
        <a href="https://apps.apple.com/app/id6446942450?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
            <img decoding="async" className="appstore" alt="AppStore" src={appstore}/>
        </a>

        {/* Policy Link */}
        <div className="policy-link-container">
            <Link to="/policy/random-rover" className="policy-link">
                Privacy Policy & Terms of Service
            </Link>
        </div>
    </div>
    )
}

export default RandomRover