import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import host, { getRoom } from '../../utils/ApiRoute';
import './cards.css';

import bedIcon from '../../assets/icons/bed-icon.png';
import bathIcon from '../../assets/icons/bath-icon.png';
import carIcon from '../../assets/icons/car-icon.png';
import petIcon from '../../assets/icons/pet-icon.png';

import LoveButton from '../loveButton/loveButton';

function Cards() {
  const [rooms, setRooms] = useState([]);
  const [validRooms, setValidRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(getRoom)
      .then(({ data }) => {
        const fetchedRooms = data.data || [];
        setRooms(fetchedRooms);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (rooms.length > 0) {
      const filtered = rooms.filter(
        (room) =>
          Array.isArray(room.img) &&
          room.img.length > 0 &&
          room.img[0] &&
          typeof room.img[0] === 'string' &&
          room.img[0].trim() !== ''
      );
      setValidRooms(filtered);
    }
  }, [rooms]);

  const getOneRoom = (id) => {
    navigate(`/room/${id}`);
  };

  return (
    <div className="rooms-available container">
      <div className="rooms-available-title">
        <h2>Our available rooms</h2>
      </div>

      {rooms.length === 0 ? (
        <div className="text-verify">Please wait ...</div>
      ) : validRooms.length === 0 ? (
        <div className="text-verify">No rooms with images available</div>
      ) : (
        <div className="cards-rooms-available">
          {validRooms.map((room) => (
            <div key={room._id} className="card-room">
              <div className="love-icon">
                <LoveButton />
              </div>

              <div className="card-room-container">
                <div
                  className="card-room-top"
                  onClick={() => getOneRoom(room._id)}
                >
                  <img
                    className="room-picture"
                    src={`${host}${room.img[0]}`}
                    alt={`Room ${room.roomNumber}`}
                    onError={(e) => {
                      e.target.closest('.card-room').style.display = 'none';
                    }}
                  />

                  <div className="room-price">
                    <div className="price">
                      <h4>${room.rent} - ${room.rent + 200}</h4>
                    </div>
                    <div className="price-style">
                      <p>....</p>
                    </div>
                  </div>
                </div>

                <div className="card-room-bottom">
                  <div className="room-title">
                    <h4 className="room-name">{room.roomNumber}</h4>
                    <p>Comfort room</p>
                  </div>

                  <div className="room-pieces">
                    <div className="pieces">
                      <div className="bed-piece">
                        <img src={bedIcon} alt="bed" /> <span className="number">2</span>
                      </div>
                      <div className="bath-piece">
                        <img src={bathIcon} alt="bath" /> <span className="number">3</span>
                      </div>
                      <div className="car-piece">
                        <img src={carIcon} alt="car" /> <span className="number">1</span>
                      </div>
                      <div className="pet-piece">
                        <img src={petIcon} alt="pet" /> <span className="number">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;