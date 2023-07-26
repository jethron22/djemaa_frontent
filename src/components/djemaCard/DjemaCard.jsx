import React from "react";
import "./DjemaCard.scss";
import { Link } from "react-router-dom";
import {AiOutlineSketch} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"

const DjemaCard = ({ item }) => {
  return (
    <Link to="/djema/123" className="link">
      <div className="djemaCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <AiFillStar />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <AiOutlineSketch />
          <div className="price">
            <span>STARTING AT</span>
            <h2> $ {item.price}<sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DjemaCard;