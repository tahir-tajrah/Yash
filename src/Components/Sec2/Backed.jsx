import React from 'react'

const Backed = () => {
  return (
    <div className='flex flex-col items-center py-20 '>
      <h1 className='gradient-text2 text-2xl'>Backed by the best</h1>
      <div className='lg:flex lg:flex-row lg:gap-15 flex flex-col items-center  pt-7 '> 
        <img className='w-35 h-22.5' src="/Images/Maskgroup(4).png" alt="" />
        <img className='lg:h-25 lg:rotate-0 rotate-90 h-15' src="/Images/Maskgroup(5).png" alt="" />
        <img className='w-27 h-11.75' src="/Images/Maskgroup(3).png" alt="" />
        <img className='lg:h-25 lg:rotate-0 rotate-90 h-15' src="/Images/Maskgroup(5).png" alt="" />
        <img className='w-33 h-35.5' src="./public/Images/laila.png" alt="" />
      </div>
    </div>
  )
}

export default Backed
