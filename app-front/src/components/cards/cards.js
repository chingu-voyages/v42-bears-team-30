import React from 'react';
import { useNavigate } from 'react-router-dom';
import loveIcon from '../../assets/icons/love-icon.png';
import bedIcon from '../../assets/icons/bed-icon.png';
import bathIcon from '../../assets/icons/bath-icon.png';
import carIcon from '../../assets/icons/car-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';

import room1 from '../../assets/images/rooms/room-1.png';
import room2 from '../../assets/images/rooms/room-2.png';
import room3 from '../../assets/images/rooms/room-3.png';

import './cards.css';

function Cards() {
    const cards = [1,2,3,4,5,6]
    const navigate = useNavigate();
    return (
        <div className='rooms-available container'>
            <div className='rooms-available-title'>
                <h2>Our room available</h2>
            </div>
            <div className='cards-rooms-available row'>
                {
                    cards.map(card =>(
                        <div className='card-room col-lg-4 col-md-4 col-sm-12' key={card}>
                            <div className='card-room-container'>
                                <div className='card-room-top' onClick={navigate(`/room-details/${card}`)}>
                                    <img className='room-picture' src={ room3 } alt="img-room"/>
                                    <div className='love-icon'>
                                        <img src={ loveIcon } alt='love' />
                                    </div>
                                    <div className='room-price'>
                                        <div className='price'>
                                            <h4>$1000 - 5000 USD</h4>
                                        </div>
                                        <div className='price-style'>
                                            <p>....</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-room-bottom'>
                                    <div className='room-title'>
                                        <h4 className='room-name'>
                                            Beach House Apartment
                                        </h4>
                                        <p>Comfort room</p>
                                    </div>
                                    <div className='room-pieces'>
                                        <div className='pieces'>
                                            <div className='bed-piece'>
                                                <img src={ bedIcon } alt="bed" /> <span className='number'>2</span>
                                            </div>
                                            <div className='bath-piece'>
                                                <img src={ bathIcon } alt="bath" /> <span className='number'>3</span>
                                            </div>
                                            <div className='car-piece'>
                                                <img src={ carIcon } alt="car" /> <span className='number'>1</span>
                                            </div>
                                            <div className='pet-piece'>
                                                <img src={ petIcon }  alt="pet" /> <span className='number'>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
                
                

            </div>
        </div>
    )
}

export default Cards;