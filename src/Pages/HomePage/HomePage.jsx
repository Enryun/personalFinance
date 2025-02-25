import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <ul>
                <li><Link className='navItem' to='/pay-daily'>Pay Daily</Link></li>
                <li><Link className='navItem' to='/sudoku'>Sudoku</Link></li>
                <li><Link className='navItem' to='/finance-advisor'>Finance Advisor</Link></li>
                <li><Link className='navItem' to='/u-coffee'>UCoffee</Link></li>
                <li><Link className='navItem' to='/ucoffee-remote'>Coffee Record</Link></li>
                <li><Link className='navItem' to='/dark-horse'>Dark Horse</Link></li>
                <li><Link className='navItem' to='/neon-cloud'>Neon Cloud</Link></li>
                <li><Link className='navItem' to='/galaxy-gallery'>Galaxy Gallery</Link></li>
                <li><Link className='navItem' to='/random-rover'>Random Rover</Link></li>
                <li><Link className='navItem' to='/wordsearch'>Word Search</Link></li>
            </ul>
        </div>
    )
}

export default HomePage;
