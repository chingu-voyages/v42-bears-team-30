import React, { useState } from 'react';

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
import checkButton from '../../assets/icons/check.png'

import room1 from '../../assets/images/rooms/room-1.png';

import './detailspage.css';
import Footer from '../_partials/footer/footer';

function DetailsPage() {


    const [isOpen, setIsOpen] = useState(false);
    const [showInput, setShowInput] = useState(false);
    
    const [inputCheckInValue, setInputCheckInValue] = useState('');
    const [inputCheckOutValue, setInputCheckOutValue] = useState('');

    const handleClick = () => {
        setShowInput(true);
    }

    const handleChangeCheckInValue = (event) => {
        setInputCheckInValue(event.target.value);
    }

    const handleChangeCheckOutValue = (event) => {
        setInputCheckOutValue(event.target.value);
    }

    return (
        <div className='details-page'>
            <Navbar />
            <div className='details-other'>
                <div className='details-room-images'>
                    <div className='room-img room-img-1'>
                        <img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="Room" />
                    </div>
                    <div className='room-img room-img-2'>
                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Room" />
                    </div>
                    <div className='room-img room-img-3'>
                        <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Room" />
                    </div>
                    <div className='room-img room-img-4'>
                        <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="Room" /> 
                    </div>
                    <div className='room-img room-img-5'>
                        <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Room" />
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
                                <img src={ loveIcon } alt="img-icon" />
                            </div>
                        </div>
                        <div className='details-pieces'>
                            <div className='piece'>
                                <img src={ bedIcon } alt="img-icon" />
                                <p>
                                    <span className='piece-number'>3</span>
                                    Bedrooms
                                </p>
                            </div>
                            <div className='piece'>
                                <img src={ bathIcon } alt="img-icon" />
                                <p>
                                    <span className='piece-number'>2</span>
                                    Bathrooms
                                </p>
                            </div>
                            <div className='piece'>
                                <img src={ carIcon } alt="img-icon" /> 
                                <p>
                                    <span className='piece-number'>3</span> 
                                    Cars
                                </p> 
                            </div>
                            <div className='piece'>
                                <img src={ petIcon } alt="img-icon" />
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
                                    <img src={ kitchenIcon } alt="img-icon" />
                                    <p>Kitchen</p>
                                </div>
                                <div className='offered'>
                                    <img src={ airIcon } alt="img-icon" />
                                    <p>Air Conditioner</p>
                                </div>
                                <div className='offered'>
                                    <img src={ washerIcon } alt="img-icon" />
                                    <p>Washer</p>
                                </div>
                                <div className='offered'>
                                    <img src={ tvIcon } alt="img-icon" />
                                    <p>Television with Netflix</p>
                                </div>
                                <div className='offered'>
                                    <img src={ wifiIcon } alt="img-icon" />
                                    <p>Free Wireless Internet</p>
                                </div>
                                <div className='offered'>
                                    <img src={ balconyIcon } alt="img-icon" />
                                    <p>Balcony or Patio</p>
                                </div>
                            </div>
                        </div>
                        <div className='safety-hygiene'>
                            <h3>Safety and Hygiene</h3>
                            <div className='safety'>
                                <img src={ batteryIcon } alt="img-icon" />
                                <p>Daily Cleaning</p>
                            </div>
                            <div className='safety'>
                                <img src={ batteryIcon } alt="img-icon" />
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
                        <div className='btn-reserve' onClick={() => setIsOpen(true)}>
                            <a className='btn-reserve'>Reserve now</a>
                        </div>
                        <div className='modal-booking'>
                            {isOpen && (
                                <div className='reserve-modal'>
                                    <div className='reserve-content'>
                                        <h5>
                                            Booking Well Furnished Apartement
                                        </h5>
                                        <button className='btn-close' onClick={() => setIsOpen(false)}></button>
                                    </div>
                                    <hr />  
                                    <div className='modal-room-content'>
                                        <div className='modal-content-left'>
                                            <img src={ room1 } alt="room picture" />
                                        </div>
                                        <div className='modal-content-right'>
                                            <div className='check-room-forms'>
                                                <div className='check-in-container'>
                                                    <p>Check In</p>
                                                    {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add date</div>}
                                                    {showInput && <input type="date" value={inputCheckInValue} onChange={handleChangeCheckInValue} />}
                                                </div>
                                                <div className='check-out-container'>
                                                    <p>Check Out</p>
                                                    {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add date</div>}
                                                    {showInput && <input type="date" value={inputCheckOutValue} onChange={handleChangeCheckOutValue} />}
                                                </div>
                                                <div className='btn-search-container'>
                                                    <button className='btn-search'>
                                                        <img src={ checkButton } alt='check button' />
                                                    </button>
                                                </div>
                                            </div>
                                            <br />
                                            <p className='total-person'>Max number person: <span className='number'>10</span></p>
                                            <p className='total-cost'>Total cost: <span className='price'>$ 2000</span></p>
                                            <div className='btn-reserve'>
                                                <a className='btn-reserve'>Booking now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='call'>
                            <a>
                                <img src={ callIcon } alt="img-icon" />
                                Call us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailsPage;
