import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {

    const registerUser = (localStorage.getItem("registerUser"))

    return (
        <div class="bg-gray-100">

            <div class="bg-white">
                <div class="flex justify-center items-center py-28 px-5">
                    <div class="w-1/2 flex justify-center flex-row flex-wrap">
                        <p class="text-6xl font-semibold text-gray-600">Bienvenue <span className='text-green-700 italic'>{registerUser} </span>😍 </p>
                        <div className='flex justify-center flex-row flex-wrap p-5'>
                            <h3 class="text-xl font-semibold text-gray-600 m mt-10">Veuillez maintenant vous connecter pour Beneficier de plus de <span className='ml-28'>fonctionnalité, sur votre la plateforme !</span>
                            </h3>
                            <div class="text-gray-600 w-full mt-3">
                                <div className='mt-10 w-60 m-auto rounded bg-green-700 p-3 flex justify-center'>
                                    <span className=''>
                                        <Link to="/login">
                                            <button className='bg-green-700 font-semibold rounded w-full text-white'>Se connecter</button>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage