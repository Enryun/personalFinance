import React from 'react';
import screenshot1 from '../../../Image/RandomRover1.png';
import screenshot2 from '../../../Image/RandomRover2.png';
import screenshot3 from '../../../Image/RandomRover3.png';
import screenshot4 from '../../../Image/RandomRover4.png';
import appstore from '../../../Image/appStore.png';
import logo from '../../../Image/RandomRover.png';
import '../GalaxyGallery/GalaxyGallery.scss';

const RandomRover = () => {
    return (
        <div className="galaxygallery">
        <h3 className="sudoku_title">Random Rover</h3>
        {/* App Logo */}
        {/* Screen Shot using Flex box */}
        {/* Functionalitites */}
        <img className="applogo" alt="logo" src={logo} />
        <p>Surprise to every decision</p>
        <div className="flex-container">
            <img className="screenshot" alt="screen shot" src={screenshot1} />
            <img className="screenshot" alt="screen shot" src={screenshot2} />
            <img className="screenshot" alt="screen shot" src={screenshot3} />
            <img className="screenshot" alt="screen shot" src={screenshot4} />
        </div>
        <p>Navigate life's choices with a tap</p>
        <p>Adding surprises to every decision</p>
        {/* App Store Logo */}
        <a href="https://apps.apple.com/app/id6446942450?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
            <img className="appstore" alt="AppStore" src={appstore}/>
        </a>
    </div>
    )
}

export default RandomRover