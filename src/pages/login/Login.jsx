import React, { useState } from 'react'
import './login.scss'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

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

      navigate("/welcome")

    } catch (error) {
      setError(error.response.data);
    }
  }

  const RegisterhandleNavigate = () => {
    navigate("/register")
  }

  return (

    <div className='loginBody'>
      <div class="rounded md:w-[1200px] py-12 px-12 m-auto md:flex items-center md:justify-between">
        <div className='left hidden md:flex md:w-60%]'>
          <div>
            {/* <span className='font-extrabold bg-blend-multiply text-6xl text-gray-500'>Connectez-vous maintenant !</span> */}
          </div>
        </div>
        <div className='flex bg-gray-100 shadow-2xl md:w-[35%] md:mt-3 mt-14 flex-col rounded-t-3xl'>
          <div className='md:justify-center sm:mb-12 md:flex sm:flex-col p-4'>
            <div className='flex text-3xl mt-5 font-semibold justify-center text-gray-500'>
              <p>CONNEXION</p>
            </div>

            <form onSubmit={handleSubmit} className=" mt-11 md:mt-8 md:flex flex-col  mb-4">
              <div class="mb-4 flex sm:w-full">
                <label htmlFor='' class="sr-only"> votre nom </label>
                <input className='' onChange={(e) => setUsername(e.target.value)}

                  class="border-solid border-green-700 w-[100%] border outline-none rounded px-2 py-3" type="text" name="usern" placeholder="ex: Julienne" required />
              </div>

              <div>
                <label htmlFor='' class="sr-only">Password</label>

                <input onChange={(e) => setPassword(e.target.value)}

                  class="border-solid border-green-700 w-[100%] border outline-none rounded px-2 py-3" type="password" name="pass" placeholder="Votre mot de passe" required />
              </div>

              <div className='mt-4'>
                <span className='font-semibold  text-gray-500'> N'avez vous pas un compte ?</span><span className='text-green-700 underline cursor-pointer' onClick={RegisterhandleNavigate}> S'inscrire</span>
              </div>

              <div className='mt-5'>
                <button class="bg-green-700 rounded text-white font-bold w-full py-3" type="submit">Se connecter</button>

                <p className=' text-red-700 mt-3 mb-0 font-normal '>{Error && Error}</p>
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