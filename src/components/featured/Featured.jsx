import React from "react";
import "./Featured.scss";


function Featured() {

 
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="tracking-tight font-extrabold">
            Trouvez un <span className="text-green-400">talent</span> Pour realiser votre business
          </h1>
          <div className="search">
            <div className="searchInput w-[470px] border-none">
              <img src="./img/icon-search.png" alt="" />
              <input className="" type="text" placeholder='Tapez par ex. "Création logo "' /> 
            </div>
            <button>Recherche</button>
          </div>
          <div className="popular">
            <span>populaires:</span>
            <button>Design web</button>
            <button>WordPress</button>
            <button>Conception logo</button>
            <button>Services d'IA</button>
          </div>
          <div>
            <p>
              <span></span> 
            </p>
          </div>
        </div>
        <div className="right">
          <img src="./img/business_man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;