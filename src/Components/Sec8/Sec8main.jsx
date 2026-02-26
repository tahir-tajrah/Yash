import React from 'react'
import Sec8Left from './Sec8Left'
import Sec8Right from './Sec8Right'

const Sec8main = () => {
  return (
    <div className='relative lg:bg-[url("/Images/sec8Bg.png")] bg-cover rounded-4xl overflow-hidden'>
        <img className='absolute top-0 left-0 hidden xl:block' src="/Images/sec8top.png" alt="" />
        <img className='absolute bottom-0 right-0 hidden xl:block' src="/Images/sec8ottom.png" alt="" />
        <img className='absolute w-full left-0 top-0 block xl:hidden' src="/Images/smsec8bg.png" alt="" />
        <img className='absolute bottom-0 left-0 block w-full rounded-4xl xl:hidden' src="/Images/sms8bottombg.png" alt="" />
        <div className='flex xl:flex-row flex-col-reverse pt-28.75 xl:px-lg px-sm justify-around'>
            <Sec8Left />
            <Sec8Right />
        </div>
    </div>
  )
}

export default Sec8main
