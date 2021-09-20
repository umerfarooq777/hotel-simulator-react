import React from "react";


const Card = ({ hotel }) => {
  return (
    <>
      <div className="card">
        <div className="container-img">
          <img src={hotel.photo} alt={hotel.name} />
        </div>
        <div className="container-info">
          <h3>{hotel.name}</h3>
          <p>{hotel.description}</p>
        </div>
        <div className="location-card">
          <img src="./images/pin.svg" alt="logo de ubicación" />
          {hotel.city}, {hotel.country}
        </div>
        <div className="info-room-price">
          <div className="info-room">
            {hotel.rooms} Habitaciones
          </div>
          <div className="info-price">
            <span>$</span>
            <span className={hotel.price >= 2 ? "" : "price-disabled"}>$</span>
            <span className={hotel.price >= 3 ? "" : "price-disabled"}>$</span>
            <span className={hotel.price >= 4 ? "" : "price-disabled"}>$</span>
          </div>
        </div>
        <button className="button">RESERVAR</button>
      </div>
    </>
  );
};

export default Card;
