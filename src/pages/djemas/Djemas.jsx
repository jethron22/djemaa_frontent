import React, { useRef, useState, useEffect } from "react";
import './djemas.scss'
import DjemaCard from "../../components/djemaCard/DjemaCard";
import { AiFillCaretDown } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillAlert } from "react-icons/ai";
import { useParams } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";
import logi_djemaa from "../djema/logi_djemaa.gif"
import DjemaCardSkeleton from "../../skeleton/DjemaCardSkeleton";
import LoginUserDataDjemaCard from "../../skeleton/LoginUserDataDjemaCard";
import ReactPaginate from "react-paginate";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import DjemasSecondSection from "./DjemasSecondSection";

function Djemas() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState();
  const minRef = useRef();
  const maxRef = useRef();

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 8

  const { search } = useLocation()
  const { cat } = useParams();
  const { name } = useParams();
  const { id } = useParams();
  const { allcat } = useParams()

  const { error, data, isLoading, refetch } = useQuery({
    queryKey: ["djemas"],
    queryFn: () =>
      newRequest
        .get(`/djemas${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
        .then((res) => {

          setFilterData(
            data?.filter((item, index) => {
              return (index >= page * n) & (index < (page + 1) * n);
            })
          );

          return res.data;

        }),

  });

  const curentUser = getCurrentUser()

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch()
  }, [sort, page, data])

  const apply = () => {
    refetch()
  }

  const navigate = useNavigate()

  const handlerLoginNavigate = () => {
    navigate("/login")

  }



  // THIS FUNCTION  DISPLAY NUMBER OF SERVICES && CATEGORIES PUBLISHED, IN AN ARRAY
  const arrayLength = data?.length



  return (
    <div>
      <div className="djemas flex flex-wrap">
        {curentUser && <div>
          <span>{ }</span>
        </div>}

        {!curentUser && isLoading ?






          <div>
            <DjemaCardSkeleton />
          </div>


          : error ? <div className="mt-20 text-red-500 flex justify-center flex-col font-semibold">

            <p className="flex justify-center">
              <img className="w-32 h-30" src={logi_djemaa} />
            </p>
            <p className="text-green-700 font-light flex justify-center mt-5">
              <span onClick={handlerLoginNavigate} className="flex text-1xl underline cursor-pointer "> Désolé, vous devez etre connecté pour voir cette page </span>
            </p>
          </div> : <div className="container">
            <span className="breadcrumbs">{id}</span>

            <p className="text-3xl">{cat}</p>
            <p>{allcat}</p>
            <p>
              {name}
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
                <span>Budget</span>
                <input ref={minRef} type="number" placeholder="Min." />
                <input ref={maxRef} type="number" placeholder="Max." />
                <button onClick={apply}>Trouver</button>
              </div>
            </div>


            {/* THIS IS TOP PAGINATION COMPONENTS BUTTONS */}

            {isLoading ? "chargement en cours" : error ? "Erreur lors de chargement" : <div className="flex justify-between ">
              <span>Actuellement {arrayLength} services disponibles</span>
              <span className="mx-20">
                <ReactPaginate
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  activeClassName={"active_pagination"}
                  onPageChange={(event) => setPage(event.selected)}
                  pageCount={Math.ceil(data?.length / n)}
                  breakLabel="..."
                  previousLabel={

                    <BsArrowLeftCircle size={35} color="gray" />

                  }
                  nextLabel={

                    <BsArrowRightCircle size={35} color="gray" />
                  }
                />
              </span>
            </div>}

            {/* END OF TOP PAGINATION COMPONENTS BUTTONS */}

            <div className="cards flex justify-center w-[1200px]">
              {isLoading ?

                <LoginUserDataDjemaCard />

                : error ?

                  <div className="justify-center animate-pulse items-center m-auto mt-20"><div className="font-semibold gap-2 flex items-center text-red-700"><span className="  flex"> <AiFillAlert size={25} /></span><span className="mt-1">Erreur lors de chargement des djemas...</span></div></div> : filterData && filterData.map((djema) => (
                    <DjemaCard key={djema._id} item={djema} />
                  ))}
            </div>
            <div>

            </div>

            {/* THIS IS BOTTOM PAGINATION COMPONENTS */}

            {isLoading ? "chargement" : error ? "Erreur lors de chargement" : <div className="flex justify-end p-5 mx-16">
              <ReactPaginate
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                activeClassName={"active_pagination"}
                onPageChange={(event) => setPage(event.selected)}
                pageCount={Math.ceil(data?.length / n)}
                breakLabel="..."
                previousLabel={
                  <span className="">
                    <BsArrowLeftCircle size={35} color="gray" />
                  </span>


                }
                nextLabel={
                  <span className="">
                    <BsArrowRightCircle size={35} color="gray" />
                  </span>

                }
              />
            </div>}

            {/* END OF PAGINATION BOTTOM COMPONENTS */}

          </div>
        }


      </div>
      <div className=" m-auto w-[1200px]">
        <hr />
      </div>

      <div className="mt-20">
        <DjemasSecondSection />
      </div>
    </div>
  )
}

export default Djemas