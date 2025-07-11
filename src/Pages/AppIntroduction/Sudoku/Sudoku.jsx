import React from 'react';
import { Link } from 'react-router-dom';
import './Sudoku.scss';
import appstore from '../../../Image/appStore.png';
import logo from '../../../Image/Sudoku.png';
import screenshot1 from '../../../Image/SudokuZen1.png';
import screenshot2 from '../../../Image/SudokuZen2.png';
import screenshot3 from '../../../Image/SudokuZen3.png';
import screenshot4 from '../../../Image/SudokuZen4.png';
import screenshot5 from '../../../Image/SudokuZen5.png';

const Sudoku = () => {
    return (
        <div className="sudokuzen">
            <h3 className="sudoku_title">Sudoku Magic Square</h3>
            {/* App Logo */}
            {/* Screen Shot using Flex box */}
            {/* Functionalitites */}
            <img className="applogo" alt="logo" src={logo} />
            <p>Simple to Play! With hundreds of puzzles</p>
            <div className="flex-container">
                <img className="screenshot" alt="screen shot" src={screenshot1} />
                <img className="screenshot" alt="screen shot" src={screenshot2} />
                <img className="screenshot" alt="screen shot" src={screenshot3} />
                <img className="screenshot" alt="screen shot" src={screenshot4} />
                <img className="screenshot" alt="screen shot" src={screenshot5} />
            </div>
            <p>Variety Levels and Modes</p>
            <p>Learn the rules and enjoy the Game</p>
            {/* App Store Logo */}
            <a href="https://apps.apple.com/app/id1529449644?fbclid=IwAR2I0YNm3eYD8i6E-y2pQWpGnGtfaMNTA5EjsqgM5REU3MRlyN-Lq29nKQY" target="_blank" rel="noopener noreferrer">
                <img className="appstore" alt="AppStore" src={appstore}/>
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