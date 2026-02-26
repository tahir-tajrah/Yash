import React from 'react'

const Form = () => {
  return (
    <div className='xl:w-[65%] w-full'>
        <form className='font-[SRFMEDIUM]'>
            <div>
                <label className='text-[#4E4E4E] text-[14px] tracking-widest'>NAME</label><br />
                <input placeholder='e.g. John Doe' className='fieldStyle w-full' />
            </div>
            <div>
                <label className='text-[#4E4E4E] text-[14px] tracking-widest'>EMAIL ADDRESS</label><br />
                <input placeholder='e.g. example@gmail.com' className='fieldStyle w-full' />
            </div>
            <div>
                <label className='text-[#4E4E4E] text-[14px] tracking-widest'>MESSAGE</label><br />
                <textarea rows={4} placeholder='Let us know how we can help...' className='fieldStyle w-full resize-none'></textarea>
            </div>
            <button className='btn-Style1 tracking-widest'>Send message</button>
        </form>
    </div>
  )
}

export default Form
