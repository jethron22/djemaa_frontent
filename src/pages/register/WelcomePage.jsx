import React from 'react'
import { Link } from 'react-router-dom'
import { SuccessModal } from '../addDjema/Modal'

function WelcomePage() {

    const ModalView = SuccessModal()

    return (
        <div class="bg-gray-100">

            {ModalView}

        </div>
    )
}

export default WelcomePage