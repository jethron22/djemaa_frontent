import React from 'react'
import "./TrustedBy.scss"

function TrustedBy() {
  return (
    <div className='bg-gray-100'>
      <div className="flex w-[1200px] justify-center m-auto py-8 text-white font-bold text-2xl">
        
            <div className="flex justify-between w-full">
            <span className='hover:text-green-600 text-gray-400 cursor-pointer duration-200'>+1507 freelances</span>
            <span className='hover:text-green-600  text-gray-400  cursor-pointer duration-200'>+25 catégories</span>
            <span className='hover:text-green-600  text-gray-400  cursor-pointer duration-200'> +800 commandes/mois</span>
            </div>
        </div>
      </div>
    
  )
}

export default TrustedBy