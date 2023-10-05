import React from 'react'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import HeroSections1 from '../../components/heroSections/HeroSections1'
import HeroSection2 from '../../components/heroSections/HeroSection2'
import HeroSection3 from '../../components/heroSections/HeroSection3'
import ServiceSlider from '../../components/slide/ServiceSlider'


function Home() {
  return (
    <div>
      <Featured />
      <TrustedBy />

      <div className='mt-28'>
       <div className=' text-4xl font-semibold text-gray-600 mx-14  mb-10'>

       <p>Développez votre Business Maintenant,</p>

       </div>
        <Slide />
      </div>
      <div className="features">
        <div className='w-full'>
          <HeroSections1 />
        </div>
        <div className='w-full'>
        <HeroSection2 />
        </div>
       
      </div>
     <div className='w-[98%]  '>
      <ServiceSlider />
     </div>
    </div>


  )
}

export default Home

