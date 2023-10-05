import React, { useState, useReducer } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import djemaa_women_freelancer from "./djemaa_women_freelancer.png";
import Typewriter from 'typewriter-effect';



function Featured() {

  const [text, setText] = useState("Hello word here !!")

  const handleChange = (e) => {

    const cat = e.target.value;
    const name = e.target.name;
    const id = e.target.id;
    navigate(`/djemas/${cat}/${name}/${id}?cat=${cat}`)
  }

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
            Trouvez un meilleur <span className="text-green-400">talent </span> pour realiser votre projet
          </h1>

          <Typewriter
            options={{
              strings: [text],
              autoStart: true,
              loop: true,
            }}

            className="font-bold text-green-500 text-6xl"

          />

          <div className="search">
            <div className="searchInput w-[470px]">
              <img src="./img/icon-search.png" alt="" />
              <input
                onChange={(e) => setInput(e.target.value)}
                required
                className="" type="text" placeholder='Tapez par ex. "Création logo "   ' />
            </div>
            <button onClick={handleSubmit}>Rechercher</button>
          </div>

          <div className="categories">

            <button onClick={handleChange} target="blank" value="Animation 3D" name="Animez tout ce que vous voulez, comme de la magie, avec des pros.." id="Art > Animation 3D">Animation 3D</button>

            <button onClick={handleChange} target="blank" value="Wordpress" name="Mettez rapidemment votre site en ligne avec Wordpress" id="developpement web > wordpress">WordPress</button>

            <button onClick={handleChange} target="blank" value="Conception logo" name="Démarquez-vous avec un Logo Flippant" id="Art > Graphisme > Logo">Conception logo</button>

            <button onClick={handleChange} target="blank" value="Photographie" name="Immortaliser vos souvenir par des images" id="Art > Photographie">Photographie</button>

            <button onClick={handleChange} target="blank" value="Saisie des données" name="Saisissez vos données en un seul clic" id="Saisie > Saisie des données">Saisie des données</button>

            <button onClick={handleChange} target="blank" value="Programmation" name="Developper votre application from scratch.." id="Developpemment web > Programmation">Programmation</button>

            <button onClick={handleChange} target="blank" value="Rédaction" name="Rédiger vos documents en moins de temps" id="Redaction > Redaction">Redaction</button>

            <button onClick={handleChange} target="blank" value="Graphisme & design" name="Trouvez une meilleure image graphique de votre marque" id="Art > Graphisme > Design">Graphisme & design</button>

            <button onClick={handleChange} target="blank" value="Marketing digital" name="Faites connaitre ce que vous faites maintenant !" id="Marketing > Marketing Digital">Marketing digital</button>

            <button onClick={handleChange} target="blank" value="Montage video" name="Présenter votre marque au public, concretement !" id="Art > Montage video">Montage video</button>

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