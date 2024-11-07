import React from 'react';
import {Link} from 'react-router-dom';


const PolicyList = () => {
    return (
        <div>
            <ul>
                <li><Link className='navItem' to='/policy/sudoku'>Sudoku</Link></li>
                <li><Link className='navItem' to='/policy/finance-advisor'>Finance Advisor</Link></li>
                <li><Link className='navItem' to='/policy/ucoffee'>UCoffee</Link></li>
                <li><Link className='navItem' to='/policy/coffee-report'>Coffee Report</Link></li>
                <li><Link className='navItem' to='/policy/ucoffee-eula'>Coffee Report Term and Conditions</Link></li>
                <li><Link className='navItem' to='/policy/pay-daily'>Pay Daily Term and Conditions</Link></li>
                <li><Link className='navItem' to='/policy/dark-horse'>Dark Horse Term and Conditions</Link></li>
                <li><Link className='navItem' to='/policy/neon-cloud'>Neon Cloud Term and Conditions</Link></li>
                <li><Link className='navItem' to='/policy/galaxy-gallery'>Galaxy Gallery AR Term and Conditions</Link></li>
                <li><Link className='navItem' to='/policy/random-rover'>Random Rover Term and Conditions</Link></li>
                <li><Link className='navItem' to='/policy/sudoku-zen'>Sudoku Zen Term and Conditions</Link></li>
            </ul>
        </div>
    )
}

export default PolicyList