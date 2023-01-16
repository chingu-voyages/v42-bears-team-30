import React from 'react';
import chinguLogo from '../../../assets/images/logo-chingu.png';
import playstoreLogo from '../../../assets/icons/playstore.png';
import applestoreLogo from '../../../assets/icons/applestore.png';
import fbLogo from '../../../assets/icons/fb.png';
import twitterLogo from '../../../assets/icons/twitter.png';
import instagramLogo from '../../../assets/icons/instagram.png';
import linkedinLogo from '../../../assets/icons/linkedin.png';
import './footer.css';

function Footer() {

    return (
        <footer>
            <div className='footer-links'>
                <div className='links-left'>
                    <img src={ chinguLogo } />
                    <p>Download Chingu-Hotel BT-39 mobile version</p>
                    <div className='button-links'>
                        <a className='btn-playstore' href='javascript:void()'>
                        <img src={ playstoreLogo } alt="playstore"/>
                            PlayStore
                        </a>
                        <a className='btn-applestore' href='javascript:void()'>
                            <img src={ applestoreLogo } alt="applestore"/>
                            AppleStore
                        </a>
                    </div>
                </div>
                <div className='links-right'>
                    <div className='company-links'>
                        <h2>Company</h2>
                        <a href='javascript:void()'>About us</a> <br />
                        <a href='javascript:void()'>Legal Information</a> <br />
                        <a href='javascript:void()'>Contact us</a> <br />
                        <a href='javascript:void()'>Blogs</a>
                    </div>
                    <div className='help-links'>
                        <h2>Help center</h2>
                        <a href='javascript:void()'>Find Room</a> <br />
                    </div>
                    <div className='contact-links'>
                        <h2>Contact info</h2>
                        <p>Phone: 123456789</p>
                        <p>Email: bt-30@gmail.com</p>
                        <p>Location: 101, chingu</p>
                        <div className='social-networks-icons'>
                            <img src={ fbLogo } />
                            <img src={ twitterLogo } />
                            <img src={ instagramLogo } />
                            <img src={ linkedinLogo } />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='copyright'>
                <div className='copyright-left'>
                    <p>2023 Chingu-BT-30</p>
                </div>
                <div className='created-by'>
                    <p>Created by Chingu-BT-30</p>
                </div>
            </div>
        </footer>
    );
    

}

export default Footer;
