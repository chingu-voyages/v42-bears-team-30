import React,{useState} from 'react'
import checkButton from '../../assets/icons/check.png'
import axios from 'axios'
import {checkoutStripe} from '../../utils/ApiRoute.js'
const ModalBook = ({roomDetail,setIsOpen,host}) => {

    const [inputCheckInValue, setInputCheckInValue] = useState('');
    const [inputCheckOutValue, setInputCheckOutValue] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleClick = () => {
        setShowInput(true);
    }

    const handleChangeCheckInValue = (event) => {
        setInputCheckInValue(event.target.value);
    }

    const handleChangeCheckOutValue = (event) => {
        setInputCheckOutValue(event.target.value);
    }

    const bookRoom = () => {
        axios.post(checkoutStripe,{roomDetail})
          .then(res => {
            if(res.data.url){
              window.location.href = res.data.url
            }

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
              <div className="btn-reserve">
                <a className="btn-reserve"
                    onClick={bookRoom}
                >Booking now
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default ModalBook