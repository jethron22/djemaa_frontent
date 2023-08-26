import React, { useState } from 'react'
import './login.scss'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'
import logo_djemadari from "../../components/img/logo_djemadari.png"

function Login() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [Error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await newRequest.post("/auth/login", { username, password });

      localStorage.setItem("currentUser", JSON.stringify(res.data));

      navigate("/")

    } catch (error) {
      setError(error.response.data);
    }
  }

  return (

    <div>
      <div class="rounded w-[1200px] py-12 px-12 m-auto flex items-center justify-between">

        <div className='left w-[50%] mt-[80px]'>

          <div>
            <span className='font-extrabold bg-blend-multiply text-6xl text-gray-500'>Connectez-vous maintenant !</span>
          </div>
        </div>
        <div className='flex justify-center w-[50%] flex-col'>
          <div className=''>
            <img className=" flex mx-24 h-28 w-24" src={logo_djemadari} alt="djemaa logo" />
            <form onSubmit={handleSubmit} class="mt-8 mb-4">
              <div class="mb-4">
                <label htmlFor='' class="sr-only">Votre nom</label>

                <input onChange={(e) => setUsername(e.target.value)}

                  class="border-solid border-green-600 w-[300px] border rounded px-2 py-3" type="text" neme="usern" placeholder="ex: john" required />
              </div>

              <div>
                <label htmlFor='' class="sr-only">Password</label>

                <input onChange={(e) => setPassword(e.target.value)}

                  class="border-solid border-green-600 w-[300px] border outline-none rounded px-2 py-3" type="password" name="pass" placeholder="votre mot de passe" required />
              </div>
              <div className='mt-7'>
                <button class="bg-green-700 rounded text-white font-bold w-[300px] py-3" type="submit">Se connecter</button>
                <p className='mt-3 text-red-700 font-semibold'>{Error && Error}</p>
              </div>

            </form>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login