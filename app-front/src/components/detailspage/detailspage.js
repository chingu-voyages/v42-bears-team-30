import React from 'react';

import Navbar from '../_partials/navbar/navbar_other_pages';

import loveIcon from '../../assets/icons/love-icon.png';
import bedIcon from '../../assets/icons/bed-icon.png';
import bathIcon from '../../assets/icons/bath-icon.png';
import carIcon from '../../assets/icons/car-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';
import kitchenIcon from '../../assets/icons/kitchen.png';
import airIcon from '../../assets/icons/air.png';
import washerIcon from '../../assets/icons/washer.png';
import tvIcon from '../../assets/icons/tv.png';
import wifiIcon from '../../assets/icons/wifi.png';
import balconyIcon from '../../assets/icons/balcony.png';
import batteryIcon from '../../assets/icons/battery.png';
import callIcon from '../../assets/icons/call.png';

import './detailspage.css';

function DetailsPage() {
    return (
        <div className='details-page'>
            <Navbar />
            <div className='details'>
                <div className='details-room-images'>
                    <div className='room-img-1'>
                        
                    </div>
                    <div className='room-img-2'>
                        
                    </div>
                    <div className='room-img-3'>
                        
                    </div>
                    <div className='room-img-4'>
                        
                    </div>
                    <div className='room-img-5'>
                        
                    </div>
                </div>
                <div className='details-description'>
                    <div className='details-left'>
                        <div className='details-title'>
                            <div className='details-title-left'>
                                <h2>Well Furnished Apartement</h2>
                                <p>101 BT-30 Chingu</p>
                            </div>
                            <div className='details-love'>
                                <img src={ loveIcon } />
                            </div>
                        </div>
                        <div className='details-pieces'>
                            <div className='piece'>
                                <img src={ bedIcon } />
                                <p>
                                    <span className='piece-number'>3</span>
                                    Bedrooms
                                </p>
                            </div>
                            <div className='piece'>
                                <img src={ bathIcon } />
                                <p><p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Commodi corrupti cupiditate provident distinctio, aspernatur impedit minima, 
                                ipsam ullam quod amet minus tempore autem quaerat libero blanditiis dolor nihil. Sed, dolor.
                            </p>
                                    <span className='piece-number'>2</span>
                                    Batkitchenhrooms
                                </p>
                            </div>
                            <div className='piece'>
                                <img src={ carIcon } /> 
                                <p>
                                    <span className='piece-number'>3</span> 
                                    Cars
                                </p> 
                            </div>
                            <div className='piece'>
                                <img src={ petIcon } />
                                <p>
                                    <span className='piece-number'>0</span>
                                    Pets Allowed
                                </p>
                            </div>
                        </div>
                        <div className='room-description'>
                            <h3>Room description</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Commodi corrupti cupiditate provident distinctio, aspernatur impedit minima, 
                                ipsam ullam quod amet minus tempore autem quaerat libero blanditiis dolor nihil. Sed, dolor.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Commodi corrupti cupiditate provident distinctio, aspernatur impedit minima, 
                                ipsam ullam quod amet minus tempore autem quaerat libero blanditiis dolor nihil. Sed, dolor.
                            </p>
                        </div>
                        <div className='offered-details'>
                            <h3>Offered Amenities</h3>
                            <div className='offered-icons'>
                                <div className='offered'>
                                    <img src={ kitchenIcon } />
                                    <p>Kitchen</p>
                                </div>
                                <div className='offered'>
                                    <img src={ airIcon } />
                                    <p>Air Conditioner</p>
                                </div>
                                <div className='offered'>
                                    <img src={ washerIcon } />
                                    <p>Washer</p>
                                </div>
                                <div className='offered'>
                                    <img src={ tvIcon } />
                                    <p>Television with Netflix</p>
                                </div>
                                <div className='offered'>
                                    <img src={ wifiIcon } />
                                    <p>Free Wireless Internet</p>
                                </div>
                                <div className='offered'>
                                    <img src={ balconyIcon } />
                                    <p>Balcony or Patio</p>
                                </div>
                            </div>
                        </div>
                        <div className='safety-hygiene'>
                            <div className='safety'>
                                <img src={ batteryIcon } />
                                <p>Daily Cleaning</p>
                            </div>
                            <div className='safety'>
                                <img src={ batteryIcon } />
                                <p>Disinfections and Sterilizations</p>
                            </div>
                        </div>
                    </div>
                    <div className='details-right'>
                        <h2>$ 1000 - $ 2000</h2>
                        <hr />
                        <p>Short period: <span>$ 1000</span></p>
                        <p>Medium period: <span>$ 2000</span></p>
                        <p>Long period: <span>$ 2000</span></p>
                        <a className="btn-reserve" href='javascript:void()'>
                            Reserve now
                        </a>
                        <div className='call'>
                            <img src={ callIcon } />
                            Call us
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;
