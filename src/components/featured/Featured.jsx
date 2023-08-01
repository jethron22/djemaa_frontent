import React from "react";
import "./Featured.scss";


function Featured() {

 
  return (
    <div className="featured bg-orange-800 hover:bg-[#1c2d64] duration-1000">
      <div className="container ">
        <div className="left">
          <h1 className="tracking-tight font-extrabold">
            Trouvez un <span className="text-green-400">talent</span> Pour realiser votre business
          </h1>
          <div className="search">
            <div className="searchInput w-[470px]">
              <img src="./img/icon-search.png" alt="" />
              <input className="" type="text" placeholder='Tapez par ex. "Création logo "' /> 
            </div>
            <button>Rechercher</button>
          </div>
          <div className="categories">
            <button>toutes les Categories</button>
            <button>Design web</button>
            <button>WordPress</button>
            <button>Conception logo</button>
            <button>Photographie</button>
            <button>Saisie des données</button>
            <button>Redaction</button>
            <button>graphisme & design</button>
          </div>
          <div>
            <p>
              <span></span> 
            </p>
          </div>
        </div>
        <div className="right flex lg:flex md:flex xl:flex ">
          <img src="./img/business_man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;