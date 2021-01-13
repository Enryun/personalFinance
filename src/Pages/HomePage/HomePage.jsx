import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link className='navItem' to='/sudoku'>Sudoku</Link>
            <Link className='navItem' to='/finance-advisor'>Finance Advisor</Link>
            <Link className='navItem' to='/u-coffee'>UCoffee</Link>
        </div>
    )
}

export default HomePage;
