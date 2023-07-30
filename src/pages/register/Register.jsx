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

      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-around w-[70%] m-auto mt-5 p-3'>
          <div className='flex flex-col w-72 '>
            <p className='text-3xl text-gray-600 font-bold'>Créer un nouveau compte</p>
            <br />
            <p>
              <label htmlFor=''>Nom</label>
              <br />
              <input onChange={handleChange} placeholder='ex: william' className='w-full  border-none bg-slate-200' type='text' name='username'></input>
            </p>
            <p>
              <label htmlFor=''>Email</label>
              <br />
              <input onChange={handleChange} placeholder='ex: williamsmith@gmail.com' className='w-full border-none bg-slate-200'  type='email' name='email'></input>
            </p>
            <p>
              <label htmlFor=''>Mot de passe</label>
              <br />
              <input onChange={handleChange} placeholder='mettez un mot de passe' className='w-full border-none bg-slate-200' type='password' name='password'></input>
            </p>
            {/* <p className=''>
            <label htmlFor=''>Photo de profil</label>
            <br />
            <input onChange={(e)=> setFile(e.target.files[0])} className='w-full border-[1.5px] border-gray-300 flex flex-col p-2' type='file' name='picture'></input>
          </p> */}
            <p>
              <label htmlFor=''>Pays</label>
              <br />
              <input onChange={handleChange} placeholder='votre pays ici..' className='w-full border-none bg-slate-200' type='text' name='country'></input>
            </p>
            <p>

              <br />
              <p className='flex justify-center text-white font-semibold rounded cursor-pointer bg-green-700  w-full p-3'>
                <button className='' type='submit'> S'inscrire </button>
              </p>

            </p>
          </div>



          <div className='flex flex-col w-72'>
            <p className='text-3xl font-bold text-gray-600 '>Je souhaite devenir prestataire</p>
            <br />
            <p className='flex justify-between'>
              <span className=''>
                <label htmlFor=''>Actver un compte prestataire</label>
              </span>
              <span>

                <input onChange={handleSeller} type='checkbox' name='account'></input>
              </span>

            </p>

            <p>
              <label htmlFor=''>Téléphone</label>
              <br />
              <input onChange={handleChange} placeholder='ex: +243971154076' className='w-full border-none bg-slate-200' type='number' name='phone'></input>
            </p>
            <p>
              <label htmlFor=''>Description de vous</label>
              <br />
              <textarea onChange={handleChange} className='w-full h-[150px] border-none bg-slate-200 ' placeholder='derivez vous ici en tant que prestataire de service. Ceci apparaitra sur votre profil.' type='text' name='desc'></textarea>
            </p>
          </div>


        </div>
      </form>
    </div>
  )
}

export default Register