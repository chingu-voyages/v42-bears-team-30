import React from 'react';

import starIcon from '../../../assets/icons/star-icon.png';
import loveIcon from '../../../assets/icons/love-icon.png';

import room1 from '../../../assets/images/rooms/room-1.png';
import room2 from '../../../assets/images/rooms/room-2.png';
import room3 from '../../../assets/images/rooms/room-3.png';

import './topRatedCards.css';
import LoveButton from '../../loveButton/loveButton';

function Cards() {

    return (
        <div className='top-rated'>
            
            <div className='top-rated-title'>
                <h2>Top Rated Rooms</h2>
            </div>

            <div className='top-rated-cards'>

                <div className='top-rated-rooms'>
                    <div className='card-room-top'>
                        <img className='room-picture' src={ room1 } alt="img-room"/>
                        <div className='top-icons'>
                            <div className='star-icon'>
                                <div className="stars">
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                </div>
                            </div>
                            <div className='love-icon'>
                                <LoveButton />
                            </div>
                        </div>
                        <div className='room-details'>
                            <div className='details'>
                                <h4>Well Furnished Apartement</h4>
                            </div>
                            <div className='room-information'>
                                <p>BT-30 Chingu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='top-rated-rooms'>
                    <div className='card-room-top'>
                        <img className='room-picture' src={ room2 } alt="img-room"/>
                        <div className='top-icons'>
                            <div className='star-icon'>
                                <div className="stars">
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                </div>
                            </div>
                            <div className='love-icon'>
                                <LoveButton />
                            </div>
                        </div>
                        <div className='room-details'>
                            <div className='details'>
                                <h4>Well Furnished Apartement</h4>
                            </div>
                            <div className='room-information'>
                                <p>BT-30 Chingu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='top-rated-rooms'>
                    <div className='card-room-top'>
                        <img className='room-picture' src={ room3 } alt="img-room"/>
                        <div className='top-icons'>
                            <div className='star-icon'>
                                <div className="stars">
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                    <img src={ starIcon } alt='star' />
                                </div>
                            </div>
                            <div className='love-icon'>
                                <LoveButton />
                            </div>
                        </div>
                        <div className='room-details'>
                            <div className='details'>
                                <h4>Well Furnished Apartement</h4>
                            </div>
                            <div className='room-information'>
                                <p>BT-30 Chingu</p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Cards;
