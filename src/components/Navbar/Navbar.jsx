import React from 'react';
import './Navbar.styles.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <Link className='navItem' to='/'>Home</Link>
            <Link className='navItem' to='/cost-tracking'>Cost</Link>
            <Link className='navItem' to='/interest-cal'>Interest</Link>
            <Link className='navItem' to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar;
