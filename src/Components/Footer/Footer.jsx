import React from 'react'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col xl:flex-row justify-between items-center xl:items-start xl:px-lg px-6 xl:pt-48 pb-20'>
        <div className='flex flex-col items-center xl:items-start pt-18 xl:pt-0 pb-12 xl:pb-0'>
          <img src="/Images/FooterLogo.png" alt="" />
          <div className='flex gap-3 mt-7'>
              <div className='w-11.5 h-11.5 border-primary/40 border-[0.09rem] rounded-full flex items-center justify-center'>
                  <img src="/Images/Linkedin.png" alt="" />
              </div>
              <div className='w-11.5 h-11.5 border-primary/40 border-[0.09rem] rounded-full flex items-center justify-center'>
                  <img src="/Images/insta.png" alt="" />
              </div>
          </div>
        </div>
        <div className='flex flex-col xl:flex-row lg:gap-3 gap-5 w-full xl:w-auto'>
          <div className='flex flex-col justify-between lg:py-3 py-5 bg-[#18191D] border-[#232428] border-[0.06rem] px-4 rounded-[19px] xl:w-56 w-full h-48.5'>
              <img className='w-12 h-12' src="/Images/tiktok.png" alt="" />
              <div>
                  <p className='text-[16px] text-light/50'>Follow us on TikTok</p>
                  <p className='text-light/30'>@link.wallet</p>
              </div>
              
          </div>
          <div className='flex flex-col justify-between lg:py-3 py-5 bg-[#18191D] border-[#232428] border-[0.06rem] px-4 rounded-[19px] xl:w-56 w-full h-48.5'>
              <img className='w-12 h-12' src="/Images/xtwiter.png" alt="" />
              <div>
                  <p className='text-[16px] text-light/50'>Follow us on Twitter</p>
                  <p className='text-light/30'>@link.wallet</p>
              </div>
          </div>
          <div className='flex flex-col justify-between lg:py-3 py-5 bg-[#18191D] border-[#232428] border-[0.06rem] px-4 rounded-[19px] xl:w-56 w-full h-48.5'>
              <img className='w-12 h-12' src="/Images/mail.png" alt="" />
              <div>
                  <p className='text-[16px] text-light/50'>Write us a Mail</p>
                  <p className='text-light/30'>im@linkwallet.com</p>
              </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  )
}

export default Footer
