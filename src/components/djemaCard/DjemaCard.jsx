import React from "react";
import "./DjemaCard.scss";
import { Link } from "react-router-dom";
import {AiOutlineSketch} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"

const DjemaCard = ({ item }) => {
  return (
    <Link to="/djema/123" className="link">
      <div className="djemaCard  hover:bg-slate-200 duration-200">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user flex items-center justify-between">
            <div className="flex items-center gap-3">
            <img src={item.pp} alt="" />
            <span className="font-semibold">{item.username}</span>
            </div>
            
            <div className="flex ">
            <span><AiOutlineSketch color="green" size={23} /></span>
            </div>
          </div>
          <p>{item.desc}</p>

          <div className="flex justify-between w-full items-center">
            <div className="flex items-center w-24">
            <span className="flex items-center"><AiFillStar size={17} /></span>
            <span className="font-bold">{item.star}</span>
            </div>
            <div className="price font-semibold">
            <span>à partir de</span>
            <p className="text-2xl"> $ {item.price}<sup>99</sup>
            </p>
          </div>


          </div>
        </div>
      </div>
    </Link>
  );
};

export default DjemaCard;