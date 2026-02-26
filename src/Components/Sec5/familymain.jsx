import React from 'react'
import Familypic from './familypic'
import Familytext from './familytext'

const familymain = () => {
  return (
    <div className='lg:px-lg lg:pt-36 pt-0 lg:pb-28 pb-0 px-6 bg-[url("./public/Images/stars.png")] bg-contain'>
        <h3 className='text-[#7448ED] lg:text-2xl text-[20px]'>About us</h3>
        <Familytext />
        <Familypic />    
    </div>
  )
}

export default familymain