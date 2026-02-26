import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative flex justify-between items-center xl:absolute top-0 w-[94%] z-40 font-[SRFREGULAR] py-4 xl:px-lg px-4'>
      <Link to="/">
        <img src="/Images/Logo.png" alt="logo" />
      </Link>     
      <ul className='hidden lg:flex gap-sm text-[16px] text-light tracking-wider'>
        <li className='hover:text-secondary cursor-pointer transition-all hover:border-b hover:border-secondary'>
          About us
        </li>
        <li className='hover:text-secondary cursor-pointer transition-all hover:border-b hover:border-secondary'>
          Contact us
        </li>
        <li className='hover:text-secondary cursor-pointer transition-all hover:border-b hover:border-secondary'>
          <Link to="/terms">Terms</Link>
        </li>
      </ul>

  
      <div className='flex items-center gap-4'>

        <button className='btn-Style1'>
          Download now
        </button>
        <div 
          className='lg:hidden cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='w-6 h-0.5 bg-light mb-1 transition-all'></div>
          <div className='w-6 h-0.5 bg-light mb-1 transition-all'></div>
          <div className='w-6 h-0.5 bg-light transition-all'></div>
        </div>

      </div>
      <div className={`absolute top-full w-full bg-[#000000] text-light flex flex-col items-center py-6 gap-4 lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
      }`}>

        <Link to="/" onClick={() => setIsOpen(false)}>About us</Link>
        <Link to="/" onClick={() => setIsOpen(false)}>Contact us</Link>
        <Link to="/terms" onClick={() => setIsOpen(false)}>Terms</Link>

      </div>

    </div>
  )
}

export default Navigation