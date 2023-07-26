import React from 'react'
import djemadari_pres from "../../videos/djemadari_pres.mp4"
import { AiOutlineArrowRight } from "react-icons/ai";

function HeroSections1() {
    return (
        
     <div className=" bg-gray-100">

        <div className="flex  m-[75px] justify-between gap-10">

            <div className='flex flex-col mt-20 mb-20 '>
            <p className='flex-col w-[100%] text-6xl font-extrabold'>Des <span className=' text-green-600'>freelances</span> pret à travailler avec vous !</p>
            <p className='mt-10 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo quaerat iusto doloribus saepe dolores! Nemo earum sequi provident odit, reiciendis dolor enim dolorem molestiae voluptate dolore pariatur nostrum veritatis!</p>

            <div className='mt-10'>
                <button className='bg-green-600 text-white flex gap-3 items-center rounded p-3'>
                    <span className='font-semibold'>Commencer maintenant</span> <span className=''><AiOutlineArrowRight size={20} /></span>
                </button>
            </div>

            </div>
            <div className='w-[100%] items-center mt-7 flex'>
            <video src={djemadari_pres} controls/>
            </div>
        </div>
     </div>
        
    )
}

export default HeroSections1