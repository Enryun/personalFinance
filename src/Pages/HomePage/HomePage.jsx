import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link className='navItem' to='/sudoku'>Sudoku</Link>
            <Link className='navItem' to='/finance-advisor'>Finance Advisor</Link>
        </div>
    )
}

export default HomePage;
