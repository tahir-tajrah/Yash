import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './Components/Navigation'
import Terms from './Pages/Terms.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div className='bg-[#000000] xl:px-3.5 max-w-360 w-full mx-auto relative'>
      <div className=''>
        <Navigation />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
