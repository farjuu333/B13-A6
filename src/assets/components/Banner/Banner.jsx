

import React from 'react'
import BannerImg from '../../../assets/banner.png'

function Banner() {
  return (
    
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-50 py-10 md:py-15 gap-10 md:gap-15">
      
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start max-w-full md:max-w-175 text-center md:text-left">
        
        {/* Badge */}
        <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
            Now AI-Powered Tools Available
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] text-gray-900 mb-6">
          Supercharge Your <br className="hidden md:block" /> 
          <span className="text-gray-900">Digital Workflow</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-500 mb-10 max-w-125">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <button className="bg-[#7C3AED] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#6D28D9] transition-all text-sm md:text-base">
            Explore Products
          </button>
          <button className="flex items-center gap-2 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-all text-sm md:text-base">
            <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 border border-purple-600 rounded-full">
              <span className="border-l-[6px] border-l-purple-600 border-y-1 border-y-transparent ml-1"></span>
            </span>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center w-full">
        <img 
          src={BannerImg} 
          alt="Digital Workflow Illustration" 
          className="w-full max-w-[350px] md:max-w-150 object-contain"
        />
      </div>
      
    </section>
  )
}

export default Banner