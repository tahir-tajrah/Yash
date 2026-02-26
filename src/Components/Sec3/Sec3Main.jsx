import React from 'react'
import Sec3Left from './Sec3Left'
import Sec3Right from './Sec3Right'

const Sec3Main = () => {
  return (
    <div className='rounded-4xl relative overflow-hidden xl:pt-64 pt-10 z-20 lg:pb-21.5 pb-0 bg-[url("/Images/Sec3-bg.png")] bg-contain bg-top'>
        <img className='absolute h-[20%] xl:h-auto top-0' src="/Images/Sec3top.png" alt="" />
        <div className='xl:px-lg px-s'>
        <div className='xl:flex xl:flex-row flex-col gap-18'>
            <Sec3Left />
            <Sec3Right />
        </div>
        </div>
    </div>
  )
}

export default Sec3Main
