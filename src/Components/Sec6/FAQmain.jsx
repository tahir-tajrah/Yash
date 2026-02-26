import React from 'react'
import FAQleft from './FAQleft.jsx'
import Rightmain from './Rightmain.jsx'


const FAQmain = () => {
  return (
    <div className='w-full lg:pt-28 pt-20 lg:flex lg:flex-row flex flex-col lg:px-lg px-4 justify-between bg-contain bg-[url("./public/Images/stars.png")]  '>
        <FAQleft/>
        <Rightmain />
    </div>
  )
}

export default FAQmain