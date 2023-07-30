import React, { useState } from 'react'
import './login.scss'
import axios from "axios"
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

      <div class="rounded w-[1200px] py-16 px-12 m-auto flex flex-col items-center justify-center">

        {/* <!-- User profile image --> */}

        <img class="rounded-full h-28 w-22"  src={logo_djemadari} alt="djemaa logo" />
        <form onSubmit={handleSubmit} class="mt-8 mb-4">
          <div class="mb-4">
            <label htmlFor='' class="sr-only">Votre nom</label>

            <input onChange={(e) => setUsername(e.target.value)}

              class="border-solid w-[300px] border border-gray-400 rounded px-2 py-3" type="text" neme="usern" placeholder="ex: john" required />

          </div>

          <div>
            <label htmlFor='' class="sr-only">Password</label>

            <input onChange={(e) => setPassword(e.target.value)}

              class="border-solid w-[300px] border border-gray-400 rounded px-2 py-3" type="password" name="pass" placeholder="votre mot de passe" required />
          </div>
          <div className='mt-7'>
            <button class="bg-green-700 rounded text-white font-bold w-full py-3" type="submit">Se connecter</button>
            <p className='mt-3 text-red-700 font-semibold'>{Error && Error}</p>
          </div>

        </form>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Login