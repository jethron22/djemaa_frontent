import React, { useState } from "react"
import { useReducer } from "react";
import "./add.scss";
import { BsCurrencyDollar, BsSortDown, BsBoxSeamFill, BsPersonCircle } from "react-icons/bs";
import djemaa_logo from "./djemaa_logo.png"
import { useNavigate } from "react-router-dom"
import { INITIAL_STATE, djemaReducer } from "../../reducers/djemaReducer";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import upload from "../../utils/upload";


export default function Addjema() {


  const [singleFile, setSingleFile] = useState("")
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)

  const [state, dispatch] = useReducer(djemaReducer, INITIAL_STATE)
  const navigate = useNavigate()
  const handlerNavigate = () => {
    navigate("/")
  }

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value },
    })
  }


  const currentUser = getCurrentUser()

  const handleFeature = (e) => {

    e.preventDefault()

    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    payload: e.target[0].value = ""
  }


  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (djema) => {
      return newRequest.post('/djemas', djema)
    },

    onSuccess: () => {

      queryClient.invalidateQueries(["djemas"])

    }

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate(state)
    confirm("Félicitation, Vous venez de publier votre service avec succès !")
    navigate("/my-djema")

  }

  const handleUpload = async () => {
    setUploading(true);

    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(

        [...files].map(async file => {
          const url = await upload(file)

          return url;
        })

      )
      setUploading(false)
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } })
    } catch (error) {

    }
  }

  console.log([...files])

  return (

    <div className="add ">
      <div className="container">
        <span className='text-4xl text-gray-500'>Ajouter un nouveau Djema</span>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Titre</label>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="ex: Je vais traduire votre CV en anglais"
            />
            <label htmlFor="">Categorie</label>


            <select className=""

              onChange={handleChange} name="cat" id="cat">

              <option value="Aucun" defaultValue>Selectionner aucune categorie</option>
              <option value="Programmation">Programmation</option>
              <option value="Animation 3D">Animation 3D</option>
              <option value="Musique">Musique</option>
              <option value="Saisie des données">Saisie des données</option>
              <option value="Wordpress">Wordpress</option>
              <option value="Photographie">Photograhie</option>
              <option value="Conception logo">Conception logo</option>
              <option value="Marketing digital">Marketing digital</option>
              <option value="Montage video">Montage video</option>
              <option value="Dessin">Dessin</option>
              <option value="Business">Business</option>
              <option value="Rédaction">Rédaction</option>

            </select>
            <div className="images">
              <div className="imagesInput">
                <label htmlFor="">Image de couverture</label>
                <input type="file" onChange={e => setSingleFile(e.target.files[0])} />
                <label htmlFor="">Téléverser une image</label>

                <input type="file" multiple onChange={e => setFiles(e.target.files)} />
              </div>
              <button onClick={handleUpload}>
                {uploading ? <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div> : "Téléverser"}
              </button>
            </div>

            <label htmlFor="">Description</label>
            <textarea onChange={handleChange} name="desc" id="" placeholder="Brief descriptions to introduce your service to customers" maxlength="60" pattern="^.{0, 60}$" required cols="0" rows="10">

            </textarea>


            <button onClick={handleSubmit} className="bg-red-700">Créer</button>

          </div>
          <div className="details">

            <label htmlFor="">Titre du service</label>
            <input onChange={handleChange} name="shortTitle" type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Courte Description</label>

            <textarea
              onChange={handleChange}
              name="shortDesc" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Temps de livraison (e.g. 3 jours)</label>
            <input onChange={handleChange} name="deliveryTime" type="number" />
            <label htmlFor="">Nombre des Révisions</label>
            <input name="revisionNumber" onChange={handleChange} type="number" />
            <label htmlFor="">Fonctionnalités</label>
            <form className="add" action="" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. page design" />
              <button type="submit">Ajouter</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map(f => (
                <div className="item" key={f}>
                  <button onClick={() => dispatch({ type: "REMOVE_FEATURE", payload: f })} className="btnfeatures ">{f}
                    <span> X </span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Prix</label>
            <input onChange={handleChange} name="price" type="number" />
          </div>
        </div>
      </div>
    </div>



  )
}
