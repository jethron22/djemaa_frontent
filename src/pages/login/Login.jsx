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

  const RegisterhandleNavigate =()=> {
    navigate("/register")
  }

  return (  

    <div>
      <div class="rounded md:w-[1200px] py-12 px-12 m-auto md:flex items-center md:justify-between">
        <div className='left hidden md:flex md:w-60%]'>
          <div>
            <span className='font-extrabold bg-blend-multiply text-6xl text-gray-500'>Connectez-vous maintenant !</span>
          </div>
        </div>
        <div className='flex bg-gray-200 md:w-[35%] md:mt-0 mt-14 flex-col rounded-t-3xl'>
          <div className='md:justify-center sm:mb-12 md:flex sm:flex-col p-4'>
            <div className='flex text-3xl mt-7 font-semibold justify-center text-gray-500'>
              <p>CONNEXION</p>  
            </div>
            
            <form onSubmit={handleSubmit} className=" mt-11 md:mt-8 md:flex flex-col  mb-4">
              <div class="mb-4 flex sm:w-full">
                <label htmlFor='' class="sr-only"> Votre nom </label>
                <input className='' onChange={(e) => setUsername(e.target.value)}

                  class="border-solid border-green-600 w-[100%] border rounded px-2 py-3" type="text" name="usern" placeholder="ex: john" required />
              </div>
              
              <div>
                <label htmlFor='' class="sr-only">Password</label>

                <input onChange={(e) => setPassword(e.target.value)}

                  class="border-solid border-green-600 w-[100%] border outline-none rounded px-2 py-3" type="password" name="pass" placeholder="votre mot de passe" required />
              </div>

              <div className='mt-4'>
                <span className='font-semibold  text-gray-500'> N'avez vous pas un compte ?</span><span className='text-green-600 underline cursor-pointer' onClick={RegisterhandleNavigate}> S'inscrire</span>
              </div>
              
              <div className='mt-5'>
                <button class="bg-green-700 rounded text-white font-bold w-full py-3" type="submit">Se connecter</button>

                <p className=' md:mb-0 mt-1 text-red-700 font-semibold '>{Error && Error}</p>
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