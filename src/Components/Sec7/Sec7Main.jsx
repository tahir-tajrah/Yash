import React from 'react'
import Contactus from './Contactus'
import Form from './Form'

const Sec7Main = () => {
  return (
    <div className='xl:px-lg px-6 lg:pt-62 pt-5 pb-42.5 bg-[url("/Images/Sec7bg.")] xl:bg-position-[-100%_35%] bg-top bg-no-repeat'>
        <div className='xl:flex xl:flex-row flex-col pt-14 gap-13'>
            <Contactus />
            <Form />
        </div>
    </div>
    
  )
}

export default Sec7Main
