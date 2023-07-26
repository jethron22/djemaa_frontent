import React, { useRef, useState } from "react";
import { djemas } from '../../components/data';
import './djemas.scss'
import DjemaCard from "../../components/djemaCard/DjemaCard";
import {AiFillCaretDown} from "react-icons/ai"

function Djemas() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();


  // we take type from user
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }
  return (
    <div className="djemas">
      <div className="container">
        <span className="breadcrumbs">Djemaa  Graphics & Design </span>
        <p className="text-3xl">Photographie</p>
        <p>
          Explorer le monde de la photographie avec des pros.
        </p>
        <div className="menu">
         
          <div className="right">
            <span className="sortBy">Trier par :</span>
            <span className="sortType">
              {sort === "sales" ? "Meilleures ventes" : "Nouveautés"}
            </span>
            <span className="cursor-pointer" onClick={() => setOpen(!open)}><AiFillCaretDown /></span> 
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Nouveauté</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Meilleure vente</span>
                  )}

              </div>
              
            )}
          </div>
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Filtrer</button>
          </div>
        </div>
        <div className="cards">
          {djemas.map((djema) => (
            <DjemaCard key={djema.id} item={djema} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Djemas