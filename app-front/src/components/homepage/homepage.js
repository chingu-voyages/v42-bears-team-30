import React from 'react';
import Navbar from '../_partials/navbar/navbar';
import './homepage.css';

function Homepage() {
    return (
        <main className='main-content-homepage'>
            <Navbar />
            <div className='find-room-container'>
                <div className='find-room-text'>
                    <h2 className='find-room-title'>Find</h2>
                    <p className='find-room-paragraph'>Rooms</p>
                </div>
                <div className='find-room-forms'>
                    
                </div>
            </div>
        </main>
    )
}

export default Homepage;
