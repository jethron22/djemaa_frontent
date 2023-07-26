import React from "react";
import './ServiceCard.scss'


function ServiceCard({ item }) {
  return (
    <div className="serviceCard">
    <div className="img">
      <img src={item.img} alt="image" />
      <div className="info">
        <img src={item.pp} alt="" />
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ServiceCard;