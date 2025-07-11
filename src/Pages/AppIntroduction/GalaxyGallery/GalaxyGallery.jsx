import React from 'react';
import { Link } from 'react-router-dom';
import screenshot1 from '../../../Image/Galaxy1.png';
import screenshot2 from '../../../Image/Galaxy2.png';
import screenshot3 from '../../../Image/Galaxy3.png';
import screenshot4 from '../../../Image/Galaxy4.png';
import appstore from '../../../Image/appStore.png';
import logo from '../../../Image/Gallaxy.png';
import './GalaxyGallery.scss';

const GalaxyGallery = () => {
    return (
        <div className="galaxygallery">
        <h3 className="sudoku_title">Galaxy Galaxy</h3>
        {/* App Logo */}
        {/* Screen Shot using Flex box */}
        {/* Functionalitites */}
        <img className="applogo" alt="logo" src={logo} />
        <p>Exploring our Solar System</p>
        <div className="flex-container">
            <img className="screenshot" alt="screen shot" src={screenshot1} />
            <img className="screenshot" alt="screen shot" src={screenshot2} />
            <img className="screenshot" alt="screen shot" src={screenshot3} />
            <img className="screenshot" alt="screen shot" src={screenshot4} />
        </div>
        <p>Learn about the stars and universe</p>
        <p>Visualize them inside your room with AR technology</p>
        {/* App Store Logo */}
        <a href="https://apps.apple.com/app/id1529449644?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
            <img className="appstore" alt="AppStore" src={appstore}/>
        </a>

        {/* Policy Link */}
        <div className="policy-link-container">
            <Link to="/policy/galaxy-gallery" className="policy-link">
                Privacy Policy & Terms of Service
            </Link>
        </div>
    </div>
    )
}

export default GalaxyGallery