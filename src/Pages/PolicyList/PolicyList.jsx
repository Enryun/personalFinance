import React from 'react';
import {Link} from 'react-router-dom';


const PolicyList = () => {
    return (
        <div>
            <Link className='navItem' to='/policy/sudoku'>Sudoku</Link>
            <Link className='navItem' to='/policy/finance-advisor'>Finance Advisor</Link>
        </div>
    )
}

export default PolicyList