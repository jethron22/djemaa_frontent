import React, { useState } from 'react'
// import upload from '../../utils/upload'
import newRequest from "../../utils/newRequest"
import { useNavigate } from 'react-router-dom'
import { TEInput } from "tw-elements-react";
import upload from '../../utils/upload';


function Register() {

  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: ""
  })

  const navigate = useNavigate();

  console.log(user)

  const handleChange = (e) => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }


  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked }
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    const url = await upload(file);

    try {

      await newRequest.post("/auth/register", {

        ...user,
        img: url
      });

      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='md:flex md:justify-around lg:70% md:w-[70%] md:m-auto md:mt-3 mt-5  p-5 sm:justify-around'>
          {<div className='flex flex-col sm:w-72 md:w-72 '>
            <p className='text-3xl text-gray-600 font-bold'>Créer un nouveau compte</p>
            <br />
            <p >

              <br />
              <TEInput
                size='lg'
                id="exampleFormControlInputText"
                label="Votre nom" onChange={handleChange} placeholder='ex: william' className='w-full rounded  border-none bg-slate-200' type='text' name='username'></TEInput>
            </p>
            <p>

              <br />
              <TEInput
                size='lg'
                id="exampleFormControlInputEmail"
                label="Entrez votre email"
                onChange={handleChange} placeholder='ex: williamsmith@gmail.com' className='rounded   w-full border-none bg-slate-200' type='email' name='email'>
              </TEInput>
            </p>
            <p>
              <br />
              <TEInput
                size='lg'
                id="exampleFormControlInputPassword"
                label="Créer un mot de passe"
                onChange={handleChange} placeholder='mettez un mot de passe' className='rounded   w-full border-none bg-slate-200' type='password' name='password'></TEInput>
            </p>
            <p className=''>
            <label htmlFor=''>Photo de profil</label>
            <br />
            <input onChange={(e)=> setFile(e.target.files[0])} className='w-full border-[1.5px] border-green-600 flex flex-col p-2' type='file' name='img'></input>
           </p>
            <p>

              <br />
              <TEInput
                size='lg'
                label='Votre pays'
                onChange={handleChange} className='rounded w-full border-none bg-slate-200' placeholder='ex: Kenya' type='text' name='country'>

              </TEInput>
            </p>
            <p className='hidden md:flex md:mt-6'>

              <br />
              <p className='flex justify-center text-white font-semibold rounded cursor-pointer bg-green-700  w-full p-3'>
                <button className='' type='submit'> S'inscrire </button>
              </p>

            </p>
          </div>}



          <div className='md:flex mt-14 md:mt-0 flex-col xl:w-72 md:w-72 sm:w-72'>
            <p className='text-3xl font-bold text-gray-600 '>Je souhaite devenir prestataire</p>
            <br />
            <p className='flex justify-between mb-3'>
              <span className=''>
                <label className='font-semibold text-green-600 ' htmlFor=''>Activer un compte prestataire</label>
              </span>

              <input onChange={handleSeller} type="checkbox" class="peer sr-only opacity-0" id="toggle" />
              <label for="toggle" class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                <span class="sr-only">Enable</span>
              </label>
            </p>

            <p className='mb-3'>

              <br />
              <TEInput
                size='lg'
                label='Entrez votre numéro de téléphone'
                onChange={handleChange} placeholder='ex: +243971154076' className='rounded w-full border-none bg-slate-200' type='tel' name='phone'></TEInput>
            </p>
            <p className=''>

              <br />
              <div className='mb-3'>
                <label className='text-gray-600'>Décrivez votre profil ici</label>
              </div>

              <textarea onChange={handleChange}
                className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-primary"
                id="exampleFormControlTextarea13"
                rows={3}
              >
              </textarea>
            </p>

            <p className='md:hidden sm:flex'>
              <br />
              <p className='flex justify-center text-white font-semibold rounded cursor-pointer bg-green-700  w-full p-3'>
                <button className='' type='submit'> S'inscrire </button>
              </p>

            </p>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Register