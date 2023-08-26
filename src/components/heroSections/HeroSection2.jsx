import React from 'react'
import hero_up from "../img/hero_up.svg"
import { AiOutlineRise } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

function HeroSection2() {
    return (
        <div className='bg-[#1c2d64] text-gray-200' >
            <div className="flex  m-[75px] gap-5 ">
                   <div className='mt-20 mb-20 flex'>
                <div className='flex flex-col '>

                    <p className='text-4xl font-extrabold mb-7'><span className='text-green-500 '>Djemaa</span> met votre service en avant !</p>
                    <p className='text-2xl font-extrabold '>Faites découvrir votre travail <span className='italic text-green-500'>aux milliers</span> des clients chez nous !</p>
                    <span className='mt-10 w-[430px] gap-3 items-center flex'><AiFillCheckCircle className=' text-green-600' size={28} /> <h4 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4></span>
                    <span className='mt-10 w-[430px] gap-3 items-center flex'><AiFillCheckCircle className=' text-yellow-600' size={28} /> <h4 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4></span>
                    <span className='mt-10 w-[430px] gap-3 items-center flex'><AiFillCheckCircle className=' text-green-600' size={28} /> <h4 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4></span>

                    <div className='flex '>
                        <p className=''>
                            <button className='flex w-[300px] items-center gap-3 justify-center rounded mt-10 bg-green-600 p-3'><span className='font-semibold'>En savoir plus </span><span ><AiOutlineRise size={20} /></span></button>
                        </p>
                    </div>
 
                </div>
                <div className=' w-[700px]'>
                    <img src={hero_up} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection2