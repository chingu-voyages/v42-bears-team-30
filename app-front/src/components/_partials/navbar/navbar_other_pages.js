import React from 'react';
import './navbar_other_pages.css';
import chinguLogo from '../../../assets/images/logo-chingu.png';

function Navbar() {
    return (
        <nav className='navbar-other-pages'>
            <div className='nav-left'>
                <a className="logo-link" >
                    <img src={ chinguLogo } alt="chingu-logo" />
                </a>
            </div>
            <div className='nav-right'>
                <ul className='nav-links'>
                    <li>
                        <a>Find a Room</a>
                    </li>
                    <li>
                        <a>Download Mobile app</a>
                    </li>
                    <li>
                        <a className='nav-auth'>Login/Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
  
export default Navbar;
