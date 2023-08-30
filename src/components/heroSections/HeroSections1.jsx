import React from 'react'
import djemadari_pres from "../../videos/djemadari_pres.mp4"
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

function HeroSections1() {
    return (

        <div className=" mt-20 bg-gray-100">

            <div className="flex  w-[1300px] justify-between gap-5">

                <div className='flex flex-wrap mx-[55px] w-full mt-20 mb-20 '>
                    <p className='flex flex-wrap  text-6xl font-extrabold'>Des<span className=' text-green-600 ml-3'>freelances </span> pret à travailler avec vous !</p>
                    <p className='mt-10 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo quaerat iusto doloribus saepe dolores! Nemo earum sequi provident odit, reiciendis dolor enim dolorem molestiae voluptate dolore pariatur nostrum veritatis!</p>

                    <div className='mt-10'>
                        <Link to="/djemas?cat">
                        <button className='bg-green-600 text-white flex gap-3 items-center rounded p-3'>
                            <span className='font-semibold'>Commencer maintenant</span> <span className='animate-bounce'><AiOutlineArrowRight size={23} /></span>
                        </button>
                        </Link>
                    </div>

                </div>
                <div className='w-[100%] items-center mx-2 ml-12 flex'>
                    <video src={djemadari_pres} controls />
                </div>
            </div>
        </div>

    )
}

export default HeroSections1