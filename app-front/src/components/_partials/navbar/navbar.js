import React from 'react';
import './navbar.css';
import chinguLogo from '../../../assets/images/logo-chingu.png';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-left'>
                <a class="logo-link" href='javascript:void()'>
                    <img src={ chinguLogo } alt="chingu-logo" />
                </a>
            </div>
            <div className='nav-right'>
                <ul className='nav-links'>
                    <li>
                        <a href='javascript:void()'>Find a Room</a>
                    </li>
                    <li>
                        <a href='javascript:void()'>Download Mobile app</a>
                    </li>
                    <li>
                        <a className='nav-auth' href='javascript:void()'>Login/Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
  
  export default Navbar;
