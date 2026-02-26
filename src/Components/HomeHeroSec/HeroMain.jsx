import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const HeroMain = () => {
  return (
<div className='bg-[url("/Images/Herobg.png")] rounded-bl-3xl overflow-hidden bg-cover bg-no-repeat pt-7 bg-center relative xl:px-lg px-sm'>
      <div className='flex flex-col xl:flex-row '>
        <HeroLeft />
        <HeroRight />
      </div>
      <img className='absolute right-0 top-0 hidden xl:block' src="/Images/Gradient-top.png" alt="" />
      <img className='absolute bottom-0 left-0 hidden xl:block' src="/Images/gradient-bottom.png" alt="" />
      <img className='absolute w-full left-0 top-0 block xl:hidden' src="/Images/smHerobg.png" alt="" />
      <img className='absolute bottom-0 left-0 block w-full rounded-4xl xl:hidden' src="/Images/mobileherobottombg.png" alt="" />
    </div>
  )
}

export default HeroMain
