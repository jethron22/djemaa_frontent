import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo_djemadari from '../img/logo_djemadari.png'
import { AiFillCaretDown } from "react-icons/ai"
import newRequest from "../../utils/newRequest";
import { AiOutlineLogin } from "react-icons/ai";
import { BsPersonFillCheck, BsAward, BsSliders, BsFillArrowUpRightSquareFill, BsPlusLg, BsSortDown, BsBoxSeamFill, BsChatLeftDots, BsBoxArrowRight, BsBoxArrowInRight, BsPersonCircle } from "react-icons/bs";


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate()

  const handleLogout = async () => {

    try {

      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser", null);


      navigate("/")

    } catch (error) {

    }
  }

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null


  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  return (

    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>

      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img className="" src={logo_djemadari} alt="" />
          </Link>
        </div>
        <div className="links gap-0">
          <div className="flex items-center gap-2">
            <span className="mb-[0.5px]"><BsSliders size={15} /></span>
            <span className="cursor-pointer">Djemaa boost</span>
          </div>

            {!currentUser?.isSeller &&
              <Link to="/register">
              <div className="flex items-center gap-1">
              
                <span className="mb-1"><BsAward size={15} /></span>
                <span className="flex cursor-pointer">Ouvrir un compte prestataire</span>
             
              </div>
              </Link>

            }

          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              
                {currentUser.img || <BsPersonCircle color="gray" size={35} />}
              
              <span className=""> Bonjour {currentUser?.username} </span>
              <span><AiFillCaretDown /></span>
              {open && <div className="options ">
                {currentUser.isSeller && (
                  <>
                    <Link className="link flex items-center gap-2 " to="/djemas?search">
                      <span>Tous les Djemaas</span>
                      <span><BsFillArrowUpRightSquareFill /></span>
                    </Link>
                    <Link className="link flex items-center gap-2 " to="/add-djemaa">
                      <span><BsPlusLg /></span>
                      <span> Ajouter un Djemaa </span>

                    </Link>
                    <Link className="link flex items-center gap-2 " to="/my-djema">
                      <span><BsSortDown /></span>
                      <span> Mes Djemas</span>
                    </Link>
                  </>
                )}
                <Link className="link flex items-center gap-2 " to="/commandes">
                  <span><BsBoxSeamFill /></span>
                  <span>Commandes</span>
                </Link>
                <Link className="link flex items-center gap-2 " to="/messages">
                  <span><BsChatLeftDots /></span>
                  <span> Messages</span>
                </Link>
                <Link className="link flex items-center gap-2 " onClick={handleLogout}>
                  <span><BsBoxArrowRight /></span>
                  <span>Déconnexion</span>

                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                <div className="flex items-center duration-150  gap-1">
                  <span className="">Se connecter</span>
                  <span><BsBoxArrowInRight size={20} /></span>
                </div>

              </Link>

              <Link className="link" to="/register">
                <div className="flex items-center px-3 bg-slate-700 hover:text-white duration-150 hover:bg-green-700 p-2 rounded gap-1">
                  <span> <button className="join font-semibold rounded">Rejoindre</button></span>
                  <span className="joinIcon"><BsPersonFillCheck size={20} /></span>
                </div>

              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Design graphique
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Services d'IA
            </Link>
            <Link className="link menuLink" to="/">
              Marketing digital
            </Link>
            <Link className="link menuLink" to="/">
              Musique & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programmation & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>

          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;