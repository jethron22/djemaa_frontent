import React from "react"
import "./add.scss";
import { BsPersonFillCheck } from "react-icons/bs"

export default function Addjema() {
  return (
    <div className=" flex w-full">
      <div className="flex fixed">
        <aside class="flex px-16  pb-4 flex-col items-center  bg-gray-900">
          <div class="flex items-center p-4">
            <h1 class="text-white font-bold mr-2 cursor-pointer">Djemaa</h1>
          </div>
          
          <ul className="flex flex-col">
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg
              ><a href="">Dashboard</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg
              ><a href="">Attendance</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
              ><a href="">Sessions</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
              ><a href="">Coaches</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg
              ><a href="">Exercise Plan</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg
              ><a href="">Registrations</a>
            </li>
            <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg
              ><a href="">Settings</a>
            </li>
          </ul>
        </aside>
      </div>


      <div class="flex  rounded-xl justify-end m-3">
        <main class="flex-col w-[73%] ml-4 pr-6">
          <div class="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-lg">
            <h1 class="text-xl font-bold text-gray-700">Tableau de bord</h1>
            <div class="flex justify-between w-2/5">
              <div class="flex items-center border-2 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search" class="ml-2 outline-none w-full" />
              </div>
              <div class="flex items-center space-x-6 pr-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <img src="https://i.imgur.com/iH7hkQb.png" alt="" class="cursor-pointer" />
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4 space-x-4 s">
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <span className="bg-green-600 p-2 rounded-3xl">
             <BsPersonFillCheck color="white" size={60} />
             </span>

              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-800">534</h1>
                <span class="text-gray-500">Coaches</span>
              </div>
            </div>
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-800">9.7k</h1>
                <span class="text-gray-500">Kids</span>
              </div>
            </div>
            <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
              <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
              <div class="text-center">
                <h1 class="text-4xl font-bold text-gray-800">50 M</h1>
                <span class="text-gray-500">Revenue</span>
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
          </div>
          <div className="add">
            <div className="container">
              <span className='text-4xl text-gray-500'>Ajouter un nouveau Djema</span>
              <div className="sections">
                <div className="info">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    placeholder="e.g. I will do something I'm really good at"
                  />
                  <label htmlFor="">Categorie</label>
                  <select name="cats" id="cats">
                    <option value="design">Design</option>
                    <option value="web">Web Development</option>
                    <option value="animation">Animation</option>
                    <option value="music">Music</option>
                  </select>
                  <label htmlFor="">Image de couverture</label>
                  <input type="file" />
                  <label htmlFor="">Téléverser une image</label>
                  <input type="file" multiple />
                  <label htmlFor="">Description</label>
                  <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
                  <button>Créer</button>
                </div>
                <div className="details">
                  <label htmlFor="">Titre du service</label>
                  <input type="text" placeholder="e.g. One-page web design" />
                  <label htmlFor="">Courte Description</label>
                  <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
                  <label htmlFor="">Temps de livraison (e.g. 3 jours)</label>
                  <input type="number" />
                  <label htmlFor="">Nombre des Révisions</label>
                  <input type="number" />
                  <label htmlFor="">Fonctionnalités</label>
                  <input type="text" placeholder="e.g. page design" />
                  <input type="text" placeholder="e.g. file uploading" />
                  <input type="text" placeholder="e.g. setting up a domain" />
                  <input type="text" placeholder="e.g. hosting" />
                  <label htmlFor="">Prix</label>
                  <input type="number" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}
