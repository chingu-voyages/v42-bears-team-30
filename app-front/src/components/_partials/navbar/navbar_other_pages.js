import React from 'react';

import './navbar_other_pages.css';

import Auth from '../../auth/auth';

import chinguLogo from '../../../assets/images/logo-chingu.png';
import menu from '../../../assets/icons/menu.png';

function Navbar() {

    // add extra class name
    function addExtraClassname() {
        var extraClassName = document.getElementById("add-responsive");
        if (extraClassName.className === "nav-right") {
            extraClassName.className += " responsive";
        } else {
            extraClassName.className = "nav-right";
        }
    }

    return (
        <nav className='navbar-other-pages'>
            <div className='nav-left'>
                <a className="logo-link" >
                    <img src={ chinguLogo } alt="chingu-logo" />
                </a>
            </div>
            <div id="add-responsive" className='nav-right'>
                <ul className='nav-links'>
                    <li>
                        <a>Find a Room</a>
                    </li>
                    <li>
                        <a>Download Mobile app</a>
                    </li>
                    <li>
                        <Auth />
                    </li>
                    <li className='menu-hamburger'>
                        <a onClick={ addExtraClassname }>
                            <img src={ menu }  alt="menu" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
  
export default Navbar;
