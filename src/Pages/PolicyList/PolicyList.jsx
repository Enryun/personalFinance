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
            </ul>
        </div>
    )
}

export default PolicyList