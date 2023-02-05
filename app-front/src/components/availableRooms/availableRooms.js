import React, { useState,useEffect } from 'react';

import './availableRooms.css';

import Footer from '../_partials/footer/footer';
import Navbar from '../_partials/navbar/navbar_other_pages';
import Cards from '../cards/cards';

function AvailableRooms() {

    return (
        <div className='available-rooms'>
            <Navbar />
            <br /><br /><br /><br /><br />
            <h2 className='title-available'>
                Results of search:
            </h2>
            <Cards />
            <Footer />
        </div>
    );
}

export default AvailableRooms;
