import React, { useRef, useState, useEffect } from "react";
import './djemas.scss'
import DjemaCard from "../../components/djemaCard/DjemaCard";
import { AiFillCaretDown } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation } from "react-router-dom";

function Djemas() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState();
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation()

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: ["djemas"],
    queryFn: () =>
      newRequest
        .get(`/djemas${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
        .then((res) => {

          return res.data;

        }),

  });

  console.log(data)

  // we take type from user

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch()

  }, [sort])
  

  const apply = () => {
    refetch()
  }
  return (
    <div className="djemas">
      <div className="container">
        <span className="breadcrumbs">Djemaa  Graphics & Design </span>
        <p className="text-3xl">Photographie</p>
        <p>
          Explorer le monde de la photographie avec ces prestataires
        </p>
        <div className="menu">

          <div className="right">
            <span className="sortBy">Trier selon: </span>
            <span className="sortType">
              {sort === "sales" ? "Meilleures ventes" : "Nouveautés"}
            </span>
            <span className="cursor-pointer" onClick={() => setOpen(!open)}><AiFillCaretDown color="green" /></span>
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Nouveautés</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Meilleures ventes</span>
                )}

              </div>

            )}
          </div>
          <div className="left">
            <span>Votre budget</span>
            <input ref={minRef} type="number" placeholder="minimum" />
            <input ref={maxRef} type="number" placeholder="maximum" />
            <button onClick={apply}>Trouver</button>
          </div>
        </div>
        <div className="cards flex justify-center w-[1200px]">

          {isLoading ?
            <div className="flex justify-center items-center m-auto mt-12 ">
               <span className="mr-3 font-semibold text-green-600"> Djemas en cours</span>
              <div
                class=" flex text-green-600 h-8 w-8 animate-spin  rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">

                <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                ></span
                >
              </div>
            </div> : error ? <div className="justify-center items-center m-auto mt-20"><div className="font-semibold text-red-600">Erreur lors de chargement des djemas !</div></div> : data.map((djema) => (
              <DjemaCard key={djema._id} item={djema} />

            ))}
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default Djemas