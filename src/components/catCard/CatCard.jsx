import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ item }) {
  
  return (

    <div>
      <div className="catCard">
        <Link to="/djemas?cat" target="blank">
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </Link>
      </div>

    </div>

  );
}
export default CatCard;