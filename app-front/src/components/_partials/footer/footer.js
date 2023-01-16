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
                        <a className='btn-playstore' >
                        <img src={ playstoreLogo } alt="playstore"/>
                            PlayStore
                        </a>
                        <a className='btn-applestore'>
                            <img src={ applestoreLogo } alt="applestore"/>
                            AppleStore
                        </a>
                    </div>
                </div>
                <div className='links-right'>
                    <div className='company-links'>
                        <h2>Company</h2>
                        <a >About us</a> <br />
                        <a >Legal Information</a> <br />
                        <a >Contact us</a> <br />
                        <a >Blogs</a>
                    </div>
                    <div className='help-links'>
                        <h2>Help center</h2>
                        <a>Find Room</a> <br />
                    </div>
                    <div className='contact-links'>
                        <h2>Contact info</h2>
                        <p>Phone: 123456789</p>
                        <p>Email: bt-30@gmail.com</p>
                        <p>Location: 101, chingu</p>
                        <div className='social-networks-icons'>
                            <img src={ fbLogo } alt="img-logo" />
                            <img src={ twitterLogo } alt="img-logo" />
                            <img src={ instagramLogo } alt="img-logo" />
                            <img src={ linkedinLogo } alt="img-logo" />
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
