import React, { useState } from 'react'
// import upload from '../../utils/upload'
import newRequest from "../../utils/newRequest"
import { useNavigate } from 'react-router-dom'


function Register() {

  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    // img: "",
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
    setUser(prev => {
      return { ...prev, isSeller: e.target.checked }
    })
  }

  const handleSubmit = async () => {

    // const url = await  upload(file);

    try {

      newRequest.post("/auth/register", {

        ...user,
        // img: url
      });

      JSON.stringify(localStorage.setItem("registerUser", user.username));

      navigate("/welcome")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-around w-[70%] m-auto mt-5 p-3'>
          {<div className='flex flex-col w-72 '>
            <p className='text-3xl text-gray-600 font-bold'>Créer un nouveau compte</p>
            <br />
            <p >
              <label htmlFor=''>Nom</label>
              <br />
              <input onChange={handleChange} placeholder='ex: william' className='w-full rounded  border-none bg-slate-200' type='text' name='username'></input>
            </p>
            <p>
              <label htmlFor=''>Email</label>
              <br />
              <input onChange={handleChange} placeholder='ex: williamsmith@gmail.com' className='rounded   w-full border-none bg-slate-200' type='email' name='email'></input>
            </p>
            <p>
              <label htmlFor=''>Mot de passe</label>
              <br />
              <input onChange={handleChange} placeholder='mettez un mot de passe' className='rounded   w-full border-none bg-slate-200' type='password' name='password'></input>
            </p>
            {/* <p className=''>
            <label htmlFor=''>Photo de profil</label>
            <br />
            <input onChange={(e)=> setFile(e.target.files[0])} className='w-full border-[1.5px] border-gray-300 flex flex-col p-2' type='file' name='picture'></input>
           </p> */}
            <p>
              <label htmlFor=''>Pays</label>
              <br />
              <input onChange={handleChange} placeholder='votre pays ici..' className='rounded w-full border-none bg-slate-200' type='text' name='country'></input>
            </p>
            <p>

              <br />
              <p className='flex justify-center text-white font-semibold rounded cursor-pointer bg-green-700  w-full p-3'>
                <button className='' type='submit'> S'inscrire </button>
              </p>

            </p>
          </div>}



          <div className='flex flex-col w-72'>
            <p className='text-3xl font-bold text-gray-600 '>Je souhaite devenir prestataire</p>
            <br />
            <p className='flex justify-between mb-3'>
              <span className=''>
                <label className='font-semibold text-green-500 ' htmlFor=''>Activer un compte prestataire</label>
              </span>

              <input onChange={handleSeller} type="checkbox" class="peer sr-only opacity-0" id="toggle" />
              <label for="toggle" class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                <span class="sr-only">Enable</span>
              </label>
            </p>

            <p className='mb-3'>
              <label htmlFor=''>Téléphone</label>
              <br />
              <input onChange={handleChange} placeholder='ex: +243971154076' className='rounded w-full border-none bg-slate-200' type='number' name='phone'></input>
            </p>
            <p>
              <label htmlFor=''>Description de vous</label>
              <br />
              <textarea onChange={handleChange} className='w-full rounded h-[150px] border-none bg-slate-200 ' placeholder='...Decrivez-vous ici en tant que prestataire de service. Ceci apparaitra sur votre profil.' type='text' name='desc'></textarea>
            </p>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Register