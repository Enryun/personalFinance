import React from 'react';
import './Sudoku.scss';
import appstore from '../../../Image/appStore.png'

const Sudoku = () => {
    return (
        <div className="sudoku">
            <h3 className="sudoku_title">Sudoku Magic Square</h3>
            {/* App Logo */}
            {/* Screen Shot using Flex box */}
            {/* Functionalitites */}
            <p>Simple to Play</p>
            <p>Variety Levels and Modes</p>
            <p>More than hundred puzzles</p>
            <p>Learn the rules and enjoy the Game</p>
            {/* App Store Logo */}
            <img className="appstore" alt="AppStore" src={appstore}/>
        </div>
    )
}

export default Sudoku