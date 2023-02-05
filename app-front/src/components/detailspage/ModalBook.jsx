import React,{useState} from 'react'
import checkButton from '../../assets/icons/check.png'
import axios from 'axios'
import {checkoutStripe} from '../../utils/ApiRoute.js'


import { useEffect } from 'react';
import jwt_decode from "jwt-decode";

const ModalBook = ({roomDetail,setIsOpen,host}) => {

  
  

    const [inputCheckInValue, setInputCheckInValue] = useState('');
    const [inputCheckOutValue, setInputCheckOutValue] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [isDisable,setIsDisable] = useState(false)

    
    useEffect(() => {
      if(inputCheckInValue === '' || inputCheckOutValue === ''){
        setIsDisable(true)
      }else{
        setIsDisable(false)
      }

    },[inputCheckInValue,inputCheckOutValue])

    const handleClick = () => {
        setShowInput(true);
    }

    const handleChangeCheckInValue = (event) => {
        setInputCheckInValue(event.target.value);
    }

    const handleChangeCheckOutValue = (event) => {
        setInputCheckOutValue(event.target.value);
    }

    const bookRoom =  () => {
       
        console.log('rents',roomDetail)
        axios.post(checkoutStripe,roomDetail)
          .then(res => {
            if(res.data.url){
              let user = JSON.parse(localStorage.getItem('user'))
              
              const decode = jwt_decode(user.token)
              const bookingInfo = {
                  "userId": decode.id,
                  "roomId" : roomDetail._id,
                  "checkInDate": inputCheckInValue,
                  "checkOutDate": inputCheckOutValue

                }
              localStorage.setItem('booking',JSON.stringify(bookingInfo))
              window.location.href = res.data.url
              
              
            }

          })
          .catch(err => {
            console.log('error :',err.message)
          }) 

    }
    return (
      <>
        <div className="reserve-modal">
          <div className="reserve-content">
            <h5>{roomDetail.roomNumber}</h5>
            <button
              className="btn-close"
              onClick={() => setIsOpen(false)}
            ></button>
          </div>
          <hr />
          <div className="modal-room-content">
            <div className="modal-content-left">
              <img
                src={`${host}${roomDetail.img[0]}`}
                alt="Sorry, this image is unavailable !"
              />
            </div>
            <div className="modal-content-right">
              <div className="check-room-forms">
                <div className="check-in-container">
                  <p>Check In</p>
                  {!showInput && (
                    <div className="calendar-text-add" onClick={handleClick}>
                      Add date
                    </div>
                  )}
                  {showInput && (
                    <input
                      type="date"
                      value={inputCheckInValue}
                      onChange={handleChangeCheckInValue}
                    />
                  )}
                </div>
                <div className="check-out-container">
                  <p>Check Out</p>
                  {!showInput && (
                    <div className="calendar-text-add" onClick={handleClick}>
                      Add date
                    </div>
                  )}
                  {showInput && (
                    <input
                      type="date"
                      value={inputCheckOutValue}
                      onChange={handleChangeCheckOutValue}
                    />
                  )}
                </div>
                <div className="btn-search-container">
                  <button className="btn-search">
                    <img src={checkButton} alt="check button" />
                  </button>
                </div>
              </div>
              <br />
              <p className="total-person">
                Max number person:
                {roomDetail === null ? (
                  <div>No description</div>
                ) : (
                  <span className="number">{roomDetail.guest}</span>
                )}
              </p>
              <p className="total-cost">
                Total cost:
                {roomDetail === null ? (
                  <div>No description</div>
                ) : (
                  <span className="price">${roomDetail.rent} </span>
                )}
                <b>per day</b>
              </p>
              <div className="">
                <button 
                    className="btn-reserve" 
                    onClick={bookRoom}
                    disabled={isDisable}
                >Booking now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default ModalBook