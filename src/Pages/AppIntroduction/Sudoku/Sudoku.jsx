import React from 'react';
import './Sudoku.scss';
import appstore from '../../../Image/appStore.png';
import logo from '../../../Image/logo.png';
import screenshot1 from '../../../Image/1.png';
import screenshot2 from '../../../Image/2.png';
import screenshot3 from '../../../Image/3.png';
import screenshot4 from '../../../Image/4.png';
import screenshot5 from '../../../Image/5.png';

const Sudoku = () => {
    return (
        <div className="sudoku">
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
            <img className="appstore" alt="AppStore" src={appstore}/>
        </div>
    )
}

export default Sudoku