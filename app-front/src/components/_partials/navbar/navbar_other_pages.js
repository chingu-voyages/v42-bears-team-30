import React from 'react';

import './navbar_other_pages.css';

import Auth from '../../auth/auth';

import chinguLogo from '../../../assets/images/logo-chingu.png';
import menu from '../../../assets/icons/menu.png';
import { Link } from 'react-router-dom';

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
                <Link className="logo-link" to="/">
                    <img src={ chinguLogo } alt="chingu-logo" />
                </Link>
            </div>
            <div id="add-responsive" className='nav-right'>
                <ul className='nav-links'>
                    <li>
                        <Link className="logo-link" to="/">
                            Find a Room
                        </Link>
                    </li>
                    <li>
                        <a onClick={() => {
                                alert('Next Chingus could work on it :)')
                            }}
                        >
                            Download Mobile app
                        </a>
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
