import React, { useState, useEffect } from 'react';
import host, { getRoom } from '../../utils/ApiRoute';
import ModalBook from './ModalBook';
import Navbar from '../_partials/navbar/navbar_other_pages';

import bedIcon from '../../assets/icons/bed-icon.png';
import bathIcon from '../../assets/icons/bath-icon.png';
import carIcon from '../../assets/icons/car-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';
import kitchenIcon from '../../assets/icons/kitchen.png';
import airIcon from '../../assets/icons/air.png';
import washerIcon from '../../assets/icons/washer.png';
import tvIcon from '../../assets/icons/tv.png';
import wifiIcon from '../../assets/icons/wifi.png';
import balconyIcon from '../../assets/icons/balcony.png';
import batteryIcon from '../../assets/icons/battery.png';
import callIcon from '../../assets/icons/call.png';

import './detailspage.css';
import Footer from '../_partials/footer/footer';
import LoveButton from '../loveButton/loveButton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [roomDetail, setRoomDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`${getRoom}/${id}`)
      .then(({ data }) => {
        setRoomDetail(data.data);
      })
      .catch(err => console.error("Error fetching room details:", err));
  }, [id]);

  return (
    <div className='details-page'>
      <Navbar />
      <div className='details-other'>
        {roomDetail === null ? (
            <div>No information</div>
        ) : (
          <div className='details-room-images'>
            {roomDetail.img && roomDetail.img.length > 0 ? (
              roomDetail.img
                .filter(img => img && img.trim() !== '') // 🔥 garde seulement les images valides
                .map((img, index) => (
                  <div key={index} className={`room-img room-img-${index + 1}`}>
                    <img
                      src={`${host}${img}`}
                      alt={`Room image ${index + 1}`}
                      onError={(e) => (e.target.parentElement.style.display = 'none')} // 🔥 cache le bloc si l'image est cassée
                    />
                  </div>
                ))
            ) : (
              <div className="no-images">No images available</div>
            )}
            <div className='room-img room-img-extra'><img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=60" alt="Extra room"/>
            </div>
            <div className='room-img room-img-extra'><img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=871&q=80" alt="Extra room"/></div></div>)}
        <div className='details-description'>
          <div className='details-left'>
            <div className='details-title'>
              <div className='details-title-left'>
                {roomDetail === null ? (
                  <div>No information</div>
                ) : (
                  <h2>{roomDetail.roomNumber}</h2>
                )}
                <p>101 BT-30 Chingu</p>
              </div>
              <LoveButton />
            </div>
            <div className='details-pieces'>
              <div className='piece'>
                <img src={bedIcon} alt="bed" />
                <p><span className='piece-number'>3</span> Bedrooms</p>
              </div>
              <div className='piece'>
                <img src={bathIcon} alt="bath" />
                <p><span className='piece-number'>2</span> Bathrooms</p>
              </div>
              <div className='piece'>
                <img src={carIcon} alt="car" />
                <p><span className='piece-number'>3</span> Cars</p>
              </div>
              <div className='piece'>
                <img src={petIcon} alt="pet" />
                <p><span className='piece-number'>0</span> Pets Allowed</p>
              </div>
            </div>
            <div className='room-description'>
              <h3>Room description</h3>
              {roomDetail === null ? (
                <div>No description</div>
              ) : (
                <p>{roomDetail.description}</p>
              )}
            </div>
            <div className='offered-details'>
              <h3>Offered Amenities</h3>
              <div className='offered-icons'>
                {[
                  { icon: kitchenIcon, text: 'Kitchen' },
                  { icon: airIcon, text: 'Air Conditioner' },
                  { icon: washerIcon, text: 'Washer' },
                  { icon: tvIcon, text: 'Television with Netflix' },
                  { icon: wifiIcon, text: 'Free Wireless Internet' },
                  { icon: balconyIcon, text: 'Balcony or Patio' },
                ].map((item, i) => (
                  <div key={i} className='offered'>
                    <img src={item.icon} alt={item.text} />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='safety-hygiene'>
              <h3>Safety and Hygiene</h3>
              <div className='safety'>
                <img src={batteryIcon} alt="safety" />
                <p>Daily Cleaning</p>
              </div>
              <div className='safety'>
                <img src={batteryIcon} alt="safety" />
                <p>Disinfections and Sterilizations</p>
              </div>
            </div>
          </div>
          <div className='details-right'>
            <h2>$100 - $300</h2>
            <hr />
            <p>
              Short period:{' '}
              {roomDetail === null ? (
                <span>No description</span>
              ) : (
                <span>${roomDetail.rent}</span>
              )}{' '}
              <b>per day</b>
            </p>
            <div className='btn-reserve' onClick={() => setIsOpen(true)}>
              <a className='btn-reserve'>Reserve now</a>
            </div>
            <div className='modal-booking'>
              {isOpen && (
                <ModalBook
                  setIsOpen={setIsOpen}
                  host={host}
                  roomDetail={roomDetail}
                />
              )}
            </div>
            <div className='call'>
              <a>
                <img src={callIcon} alt="call" /> Call us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;