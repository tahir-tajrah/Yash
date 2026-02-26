import React from 'react'

const HeroRight = () => {
  return (
    <div className='flex justify-end items-end lg:w-165.25 xl:h-184 z-10'>
      <img className='object-cover hidden xl:block' src="/Images/Phone1.png" alt="" />
      <img className='object-cover block xl:hidden' src="/Images/responsivephone.png" alt="" />
    </div>
  )
}

export default HeroRight
