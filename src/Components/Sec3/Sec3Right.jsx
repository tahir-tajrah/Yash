import React from 'react'

const Sec3Right = () => {
  return (
    <div className='xl:w-1/2 xl:pt-0 pt-20 w-full flex flex-col justify-center lg:p lg:px-0 px-4'>
      <h1 className='gradient-text lg:text-5xl text-3xl tracking-tight'>Pay, explore, and stay in control without friction</h1>
      <div className='flex gap-3.5 pt-14'>
        <div className='w-20'>
          <img src="/Images/Group 2085661488.png" alt="" />
        </div>
        <div className=''>
          <h1 className='text-2xl text-secondary font-semibold'>Pay with Your Palm</h1>
          <p className='lg:text-[20px] text-[18px]  tracking-wider pt-2 text-light/80'>Link connects your card to your palm — making payments fast, secure, and uniquely yours.</p>
        </div>
      </div>
      <div className='flex gap-3.5 pt-8'>
        <div className='w-20'>
          <img src="/Images/passport-valid.png" alt="" />
        </div>
        <div className=''>
          <h1 className='text-2xl font-light text-light '>Manage All Your Cards</h1>
          <p className='lg:text-[20px] text-[18px] font-extralight tracking-wider pt-2 text-light/70 '>View, manage, or unlink cards instantly from one dashboard. Switch, secure, or update — on your terms.</p>
        </div>
      </div>
      <div className='flex gap-3.5 pt-8'>
        <div className='w-20'>
          <img src="/Images/passport-valid (1).png" alt="" />
        </div>
        <div className=''>
          <h1 className='text-2xl text-light/70 '>Track Every Expense</h1>
          <p className='lg:text-[20px] text-[18px]  font-extralight tracking-wider pt-2 text-light/70'>All your spends, automatically tracked and organized in one place. Clear insights, no manual effort.</p>
        </div>
      </div>
    </div>
  )
}

export default Sec3Right
