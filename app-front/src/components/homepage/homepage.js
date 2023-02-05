import React, { useState } from 'react';
import Navbar from '../_partials/navbar/navbar';
import searchButton from '../../assets/icons/btn-search.png';
import './homepage.css';
import Cards from '../cards/cards';
import TopCards from '../cards/topRatedCards/topRatedCards';
import Footer from '../_partials/footer/footer';
import { Link } from 'react-router-dom';

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
                    <div className="wrapper one">
                        <div className="drop-main">
                            <h2 className='find-room-title'>
                                <div className="d">F</div>
                                <div className="r">i</div>
                                <div className="o">n</div>
                                <div className="p">d</div>
                            </h2>
                        </div>
                    </div>
                    <div className="wrapper two">
                        <div className="neon">
                            <p className='find-room-paragraph'>Rooms</p>
                        </div>
                    </div>
                    </div>
                    <div className='find-room-forms'>
                        <div className='check-in-container'>
                            <p>Check In</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add date</div>}
                            {showInput && <input type="date" value={inputCheckInValue} onChange={handleChangeCheckInValue} required />}
                        </div>
                        <div className='check-out-container'>
                            <p>Check Out</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add date</div>}
                            {showInput && <input type="date" value={inputCheckOutValue} onChange={handleChangeCheckOutValue} required />}
                        </div>
                        <div className='guests-container'>
                            <p>Guests</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add guests</div>}
                            {showInput && <input type="number" min="1" max="10" value={inputValue} onChange={handleChangeGuestValue} required />}
                        </div>
                        <div className='btn-search-container'>
                            <Link className="logo-link" to="/available/rooms">
                                <img src={ searchButton } alt='search button' />
                            </Link>
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
