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

    const handleClick = () => {
        setShowInput(true);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className='homepage'>
            <main className='main-content-homepage'>
                <Navbar />
                <div className='find-room-container'>
                    <div className='find-room-text'>
                        <h2 className='find-room-title'>Find</h2>
                        <p className='find-room-paragraph'>Rooms</p>
                    </div>
                    <div className='find-room-forms'>
                        <div className='check-in-container'>
                            <p>Check In</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add date</div>}
                            {showInput && <input type="date" value={inputValue} onChange={handleChange} />}
                        </div>
                        <div className='check-out-container'>
                            <p>Check Out</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add date</div>}
                            {showInput && <input type="date" value={inputValue} onChange={handleChange} />}
                        </div>
                        <div className='guests-container'>
                            <p>Guests</p>
                            {!showInput && <div className="calendar-text-add" onClick={handleClick}>Add guests</div>}
                            {showInput && <input type="number" min="1" max="10" value={inputValue} onChange={handleChange} />}
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
