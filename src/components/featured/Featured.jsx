import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom"
import djemaa_women_freelancer from "./djemaa_women_freelancer.png"


function Featured() {

  const [input, setInput] = useState("")

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/djemas?search=${input}`)
  }

  return (
    <div className="featured">
      <div className="container ">
        <div className="left">
          <h1 className="font font-extrabold">
            Rencontrez un <span className="text-green-400">talent </span> pour lancer votre business
          </h1>
          <div className="search">
            <div className="searchInput w-[470px]">
              <img src="./img/icon-search.png" alt="" />
              <input
                onChange={(e) => setInput(e.target.value)}
                required
                className="" type="text" placeholder='Tapez par ex. "Création logo "' />
            </div>
            <button onClick={handleSubmit}>Rechercher</button>
          </div>

          <div className="categories">
            <button>Toutes les Categories</button>
            <button value={"Design web"}>Design web</button>
            <button>WordPress</button>
            <button>Conception logo</button>
            <button>Photographie</button>
            <button>Saisie des données</button>
            <button>Redaction</button>
            <button>graphisme & design</button>
            <button>Marketing digital</button>
            <button>Traduction</button>
          </div>

          <div>
            <p>
              <span></span>
            </p>
          </div>
        </div>
        <div className="right flex h-full lg:flex md:flex xl:flex ">
          <img className="animation-ping" src={djemaa_women_freelancer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;