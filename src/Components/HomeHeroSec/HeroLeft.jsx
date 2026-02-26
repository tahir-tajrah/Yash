import React from 'react'

const HeroLeft = () => {
  return (
<div className='text-primary z-10 w-full pt-28 xl:pt-0 xl:w-151.75 flex flex-col items-center xl:items-start xl:justify-center'>
      <h1 className='hidden xl:block font-[SRFMEDIUM] text-center xl:text-left tracking-tight text-5xl lg:text-[64px] lg:leading-16.75'>Pay, Bank and Invest All in one app</h1>
      <h1 className='block xl:hidden font-[SRFMEDIUM] text-center xl:text-left text-5xl lg:text-[64px] leading-13.75'>Pay, Bank and Invest <br /> All in one app</h1>
      <p className='lg:text-[20px] w-[87%] xl:w-full text-[#cdccce] text-center pt-4'>Some space for subtitle here can go up to at least 1-2 lines</p>
      <div className='flex flex-col gap-5 pt-8'>
        <img src="/Images/App store.png" alt="" />
        <p className='flex gap-2.5 text-[14px] text-light/60'>Coming soon on <img src="/Images/googleplay.png" alt="" /></p>
      </div>
    </div>
  )
}
 
export default HeroLeft

   
