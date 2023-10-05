import React from "react"
import { useReducer } from "react";
import "./add.scss";
import { BsCurrencyDollar, BsSortDown, BsBoxSeamFill, BsPersonCircle } from "react-icons/bs";
import djemaa_logo from "./djemaa_logo.png"
import { useNavigate } from "react-router-dom"
import { INITIAL_STATE, djemaReducer } from "../../reducers/djemaReducer";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';


export default function Addjema() {

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

  return (
    <div className=" flex w-full">
      <div className="flex fixed h-full">
        <aside className="flex w-[290px] overflow-y-scroll pb-4 flex-col bg-gray-900">
          <div className="flex items-center w-full">
            <div className="w-42 h-42">
              <span className="text-white font-bold mr-2 cursor-pointer">
                <img onClick={handlerNavigate} className="ml-2" height={140} width={140} src={djemaa_logo} />
              </span>
            </div>

          </div>
          <ul className="flex flex-col">
            <li className="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-green-600 hover:text-white font-bold cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg
              ><a href="">Tableau de bord</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-green-600 hover:text-white font-bold transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg
              ><a href="">Mes djemas</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-green-600 hover:text-white font-bold cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
              ><a href="">Commandes</a>
            </li>
  
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-green-600 hover:text-white font-bold cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg
              ><a href="">Djemaa boost</a>
            </li>
          </ul>
        </aside>
      </div>

      <div class="flex rounded-xl justify-end m-3">
        <main class="flex-col w-[73%] ml-4 pr-6">
          <div class="flex justify-between items-center p-4 bg-white mt-3 rounded-xl shadow-lg">
            <h1 class="text-xl font-bold text-gray-700">Votre tableau de bord</h1>
            <div class="flex justify-end w-2/5">
              <div class="flex items-center space-x-3 pr-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {currentUser.img || <BsPersonCircle color="gray" size={35} />}
                <span className="font-semibold">{currentUser.username}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-10 w-2/3 mb-12">

            <span className="text-3xl font-semibold text-gray-600"><span className="text-green-600 text-4xl"> {currentUser.username},</span> nous vous offrons un espace Impécable pour gérer tous vos services !</span>
          </div>
          <div class="flex justify-between mt-4 space-x-4 s">
            <div class="bg-white w-1/3 p-4 rounded-xl shadow-lg flex items-center justify-around">
              <span className="bg-green-600 p-4 rounded-3xl">
                <BsBoxSeamFill color="white" size={40} />
              </span>

              <div className="flex flex-col flex-end w-50%">
                <h1 className="text-4xl font-bold text-gray-800">24</h1>
                <span className="text-gray-500">Cmd(s)</span>
              </div>
            </div>

            <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <span className="bg-green-600 p-4 rounded-3xl">
                <BsSortDown color="white" size={40} />
              </span>

              <div className="">
                <h1 className="text-4xl font-bold text-gray-800">12</h1>
                <span className="text-gray-500">Djemaa</span>
              </div>
            </div>
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <span className="bg-green-600 p-4 rounded-3xl">
                <BsCurrencyDollar color="white" size={40} />
              </span>

              <div className="">
                <h1 className="text-4xl font-bold text-gray-800">50 $</h1>
                <span className="text-gray-500">Revenue</span>
              </div>
            </div>
          </div>
          <div class="flex space-x-5">
          </div>
          <div className="add">
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

                  <label htmlFor="">Image de couverture</label>
                  <input type="file" />
                  <label htmlFor="">Téléverser une image</label>

                  <input type="file" multiple />
                  <label htmlFor="">Description</label>
                  <textarea onChange={handleChange} name="desc" id="" placeholder="Brief descriptions to introduce your service to customers" maxlength="60" pattern="^.{0, 60}$" required cols="0" rows="10"></textarea>


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
        </main>
      </div>
    </div>

  )
}
