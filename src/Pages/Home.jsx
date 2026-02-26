import React from 'react'
import HeroMain from '../Components/HomeHeroSec/HeroMain'
import Backed from '../Components/Sec2/Backed'
import Sec3Main from '../Components/Sec3/Sec3Main'
import ATM from '../Components/Sec4/ATM'
import Familymain from '../Components/Sec5/familymain'
import FAQmain from '../Components/Sec6/FAQmain'
import Sec7Main from '../Components/Sec7/Sec7Main'
import Sec8main from '../Components/Sec8/Sec8main'


const Home = () => {
  return (
    <div className=''>
       <HeroMain />
       <Backed />
       <Sec3Main />
       <ATM />
       <Familymain/>
       <FAQmain/>
       <Sec7Main/>
       <Sec8main/>
    </div>
  )
}

export default Home
