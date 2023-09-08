import React from 'react'
import { Link } from 'react-router-dom'
import SuccessModal from '../addDjema/Modal'
import getCurrentUser from '../../utils/getCurrentUser'
import { BsPersonCircle } from 'react-icons/bs'

function WelcomePage() {

    const currentUser = getCurrentUser()

    const ModalView = SuccessModal()

    return (
        <div className='flex justify-center m-auto'>
            <Link to="/">
                <div class="flex justify-center m-auto p-10 bg-gray-200 rounded flex-col mt-12 ">
                    <div className='flex justify-center mx-20 w-full'>
                        <p className='text-3xl w-2/3'> <BsPersonCircle size={60} color='green' /></p>
                    </div>
                    {ModalView}
                    <div className='mt-10 justify-center m-auto'>
                        <button className='p-3 text-white w-80 bg-green-600 rounded'>continuer en tant que {currentUser.username}</button>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default WelcomePage