import React from 'react';
import { Link } from 'react-router-dom';
import './Sudoku.scss';
import appstore from '../../../Image/appStore.webp';
import logo from '../../../Image/Sudoku.webp';
import screenshot1 from '../../../Image/SudokuZen1.webp';
import screenshot2 from '../../../Image/SudokuZen2.webp';
import screenshot3 from '../../../Image/SudokuZen3.webp';
import screenshot4 from '../../../Image/SudokuZen4.webp';
import screenshot5 from '../../../Image/SudokuZen5.webp';

const Sudoku = () => {
    return (
        <div className="sudokuzen">
            <h3 className="sudoku_title">Sudoku Magic Square</h3>
            {/* App Logo */}
            {/* Screen Shot using Flex box */}
            {/* Functionalitites */}
            <img decoding="async" className="applogo" alt="logo" src={logo} />
            <p>Simple to Play! With hundreds of puzzles</p>
            <div className="flex-container">
                <img decoding="async" className="screenshot" alt="screen shot" src={screenshot1} />
                <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot2} />
                <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot3} />
                <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot4} />
                <img loading="lazy" decoding="async" className="screenshot" alt="screen shot" src={screenshot5} />
            </div>
            <p>Variety Levels and Modes</p>
            <p>Learn the rules and enjoy the Game</p>
            {/* App Store Logo */}
            <a href="https://apps.apple.com/app/id1529449644?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                <img decoding="async" className="appstore" alt="AppStore" src={appstore}/>
            </a>

            {/* Policy Link */}
            <div className="policy-link-container">
                <Link to="/policy/sudoku" className="policy-link">
                    Privacy Policy & Terms of Service
                </Link>
            </div>
        </div>
    )
}

export default Sudoku