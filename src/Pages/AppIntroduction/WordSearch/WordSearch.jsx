import React from 'react';
import { Link } from 'react-router-dom';
import screenshot1 from '../../../Image/WordSearch1.png';
import screenshot2 from '../../../Image/WordSearch2.png';
import screenshot3 from '../../../Image/WordSearch3.png';
import screenshot4 from '../../../Image/WordSearch4.png';
import appstore from '../../../Image/appStore.png';
import logo from '../../../Image/WordSearch.png';
import '../GalaxyGallery/GalaxyGallery.scss';

const WordSearch = () => {
    return (
        <div className="galaxygallery">
        <h3 className="sudoku_title">Word Search</h3>
        {/* App Logo */}
        {/* Screen Shot using Flex box */}
        {/* Functionalitites */}
        <img className="applogo" alt="logo" src={logo} />
        <p>Race to Find Hidden Words</p>
        <div className="flex-container">
            <img className="screenshot" alt="screen shot" src={screenshot1} />
            <img className="screenshot" alt="screen shot" src={screenshot2} />
            <img className="screenshot" alt="screen shot" src={screenshot3} />
            <img className="screenshot" alt="screen shot" src={screenshot4} />
        </div>
        <p>Boost your English skills while chasing letters in faster, educational gameplay.</p>
        <p>Educational Gameplay: Learn and reinforce English words in a fun, interactive environment.</p>
        {/* App Store Logo */}
        <a href="https://apps.apple.com/app/id6446942450?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
            <img className="appstore" alt="AppStore" src={appstore}/>
        </a>

        {/* Policy Link */}
        <div className="policy-link-container">
            <Link to="/policy/wordsearch" className="policy-link">
                Privacy Policy & Terms of Service
            </Link>
        </div>
    </div>
    )
}

export default WordSearch