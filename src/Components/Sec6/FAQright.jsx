import React, { useState } from 'react'

const FAQright = ({ title, desc }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:px-8 px-3 w-full flex justify-between items-center py-7 text-left group cursor-pointer hover:bg-[#1c1c1c] hover:rounded-xl"
      >
        <span className="text-[19px] text-gray-200 font-medium tracking-tight group-hover:text-white transition-colors">
          {title}
        </span>

        <div className="w-6 h-6 rounded-full border border-purple-600/50 flex items-center justify-center text-purple-500 group-hover:border-purple-400 transition-all">
          <span className="text-2xl leading-none select-none">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>
      <div
        className={`px-4 pr-12 text-gray-500 text-[16px] leading-relaxed max-w-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-8" : "max-h-0"
        }`}
      >
        <p>{desc}</p>
      </div>

    </div>
  )
}

export default FAQright