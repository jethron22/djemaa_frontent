import React from 'react'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import HeroSections1 from '../../components/heroSections/HeroSections1'
import HeroSection2 from '../../components/heroSections/HeroSection2'

function Home() {
  return (
    <div>
      <Featured />
      <TrustedBy />

      <div className='mt-28'>
        <Slide />
      </div>


      <div className="features">
        <div className='w-full'>
          <HeroSections1 />
        </div>
        <div className='w-full'></div>
        <HeroSection2 />
      </div>
    </div>


  )
}

export default Home

