import React from 'react'
import ATMLeft from './ATMLeft'
import ATMright from './ATMright'

const ATM = () => {
  return (
    <div className='w-full lg:flex lg:flex-row flex flex-col-reverse lg:pt-70 pt:0 lg:pb-40 pb-20 lg:px-lg lg:-mt-0 -mt-70 bg-[url("/Images/atmbg.png")] bg-center '>
        <ATMLeft />
        <ATMright />
    </div>
  )
}

export default ATM