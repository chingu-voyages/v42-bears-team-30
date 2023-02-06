import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import './SuccessPay.css';
import {saveBooking} from '../../utils/ApiRoute'
import axios from 'axios'
const SuccessPay =  () => {
    const bookingInfo = localStorage.getItem('booking');


    
    useEffect(() => {
        //saveBook()
        if(bookingInfo === null){
            //console.log(JSON.parse(bookinInfo))
            console.log('no item',bookingInfo)

        }else{
            axios.post(saveBooking,JSON.parse(bookingInfo))
                .then(res => { 
                    console.log("res :",res)
                    if(res.data.status === "200"){
                        localStorage.removeItem('booking')
                        console.log(res.data.message)
                    }
                })
                .catch(err => {
                    console.log('error', err.message)
                })

        }
    },[bookingInfo])
        
        
       


    

    return (
        <div className="success-container">
            <h2 className='title-success'>
                Booking room successfully &#128512; <br />
            </h2>
            <Link className="back-link" to="/">
                Back to homepage
            </Link>
        </div>
    )
}


export default SuccessPay