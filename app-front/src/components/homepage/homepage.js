import React, { useState } from 'react';
import Navbar from '../_partials/navbar/navbar';
import searchButton from '../../assets/icons/btn-search.png';
import './homepage.css';
import Cards from '../cards/cards';
import TopCards from '../cards/topRatedCards/topRatedCards';
import Footer from '../_partials/footer/footer';

function Homepage() {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [inputCheckInValue, setInputCheckInValue] = useState('');
    const [inputCheckOutValue, setInputCheckOutValue] = useState('');

    const handleClick = () => {
        setShowInput(true);
    }

    const handleChangeGuestValue = (event) => {
        setInputValue(event.target.value);
    }

    const handleChangeCheckInValue = (event) => {
        setInputCheckInValue(event.target.value);
    }

    const handleChangeCheckOutValue = (event) => {
        setInputCheckOutValue(event.target.value);
    }

    return (
        <div className='homepage'>
            <main className='main-content-homepage'>
                <Navbar />
                <div className='find-room-container'>
                    <div className='find-room-text'>
                    <div class="wrapper one">
                        <div class="drop-main">
                            <h2 className='find-room-title'>
                                <div class="d">F</div>
                                <div class="r">i</div>
                                <div class="o">n</div>
                                <div class="p">d</div>
                            </h2>
                        </div>
                    </div>
                    <div class="wrapper two">
                        <div class="neon">
                            <p className='find-room-paragraph'>Rooms</p>
                        </div>
                    </div>
                    </div>
                    <div className='find-room-forms'>
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
                        <div className='guests-container'>
                            <p>Guests</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add guests</div>}
                            {showInput && <input type="number" min="1" max="10" value={inputValue} onChange={handleChangeGuestValue} />}
                        </div>
                        <div className='btn-search-container'>
                            <button className='btn-search'>
                                <img src={ searchButton } alt='search button' />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Cards />
            <TopCards />
            <Footer />
        </div>
    )
}

export default Homepage;
