import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link className='navItem' to='/sudoku'>Sudoku</Link>
        </div>
    )
}

export default HomePage;
