import React, { useState,useEffect } from 'react';

import './availableRooms.css';
import {findRoomAvailable} from '../../utils/ApiRoute'
import axios from 'axios'
import Footer from '../_partials/footer/footer';
import Navbar from '../_partials/navbar/navbar_other_pages';
import Cards from '../cards/cards';
import {useSelector}  from 'react-redux'

function AvailableRooms() {
    const {roomAvailableData} = useSelector((state) => state.roomAvailables)
    const [rooms,setRooms] = useState(null)
    
    useEffect(() => {
        axios.get(`${findRoomAvailable}?checkInDate=${roomAvailableData.checkInDate}&checkOutDate=${roomAvailableData.checkOutDate}&guest=${roomAvailableData.guest}`)
            .then(res =>{
                
                //set into the state rooms res
                //setRooms(res.data)
            })
    })
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
