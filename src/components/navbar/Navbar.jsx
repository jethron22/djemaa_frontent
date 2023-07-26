import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo_djemadari from '../img/logo_djemadari.png'

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

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

  const currentUser = {
    id: 1,
    username: "Julienne",
    isSeller: true,
  };

  return (
    
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img className="" src={logo_djemadari} alt="" />
          </Link>
        </div>
        <div className="links">
          <span>Djemaa Business</span>
          <span>Parcourir</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Devenir vendeur</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/djemas">
                      Tous les Djemaas
                    </Link>
                    <Link className="link" to="/add-djemaa">
                      Ajouter un Djemaa
                    </Link>
                  </>
                )}
                <Link className="link" to="/commandes">
                  Commandes
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Déconnexion
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>S'identifier</span>
              <Link className="link" to="/register">
                <button>Rejoindre</button>
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