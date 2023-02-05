import React from 'react';
import chinguLogo from '../../../assets/images/logo-chingu.png';
import playstoreLogo from '../../../assets/icons/playstore.png';
import applestoreLogo from '../../../assets/icons/applestore.png';
import fbLogo from '../../../assets/icons/fb.png';
import twitterLogo from '../../../assets/icons/twitter.png';
import instagramLogo from '../../../assets/icons/instagram.png';
import linkedinLogo from '../../../assets/icons/linkedin.png';
import ybLogo from '../../../assets/icons/youtube.png';
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
                    </div>
                    <div className='help-links'>
                        <h2>Help center</h2>
                        <a>Find Room</a> <br />
                    </div>
                    <div className='contact-links'>
                        <h2>Teams</h2>
                        <a href='https://github.com/pramitsingh0' target="_blank">Prami</a> <br />
                        <a href='https://github.com/sobebarali' target="_blank">Sobebarali</a> <br />
                        <a href='https://github.com/Mendrika160' target="_blank">Mendes</a> <br />
                        <a href='https://github.com/Fullfifax' target="_blank">Fullfifax</a> <br /> <br />
                        <div className='social-networks-icons'>
                            <a href='https://www.linkedin.com/company/chingu-os' target="_blank">
                                <img src={ linkedinLogo } alt="img-logo" />
                            </a>
                            <a href='https://twitter.com/ChinguCollabs' target="_blank">
                                <img src={ twitterLogo } alt="img-logo" />
                            </a>
                            <a className="yb-logo" href='https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw/feed' target="_blank">
                                <img src={ ybLogo } alt="img-logo" width="30" height="30"/>
                            </a>
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
