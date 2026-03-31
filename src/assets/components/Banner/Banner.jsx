

import React from 'react'
import BannerImg from '../../../assets/banner.png'
import PlayIcon from '../../../assets/Play.png';

function Banner() {
  return (
    
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-50 py-10 md:py-15 gap-10 md:gap-15">
      
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start max-w-full md:max-w-175 text-center md:text-left">
        
        {/* Badge */}
        <div className="flex items-center gap-2 bg-purple-200 px-4 py-2 rounded-full mb-6">
          <span >
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.000000" height="16.000000" fill="none" customFrame="#000000">
	<defs>
		<linearGradient id="paint_linear_0" x1="-5.10067081" x2="16.0090027" y1="8.91954231" y2="8.60590935" gradientUnits="userSpaceOnUse">
			<stop stop-color="rgb(79,57,246)" offset="0" stop-opacity="1" />
			<stop stop-color="rgb(149,20,250)" offset="1" stop-opacity="1" />
		</linearGradient>
		<linearGradient id="paint_linear_1" x1="-1.82550311" x2="14.006753" y1="8.6896553" y2="8.45442963" gradientUnits="userSpaceOnUse">
			<stop stop-color="rgb(79,57,246)" offset="0" stop-opacity="1" />
			<stop stop-color="rgb(149,20,250)" offset="1" stop-opacity="1" />
		</linearGradient>
		<linearGradient id="paint_linear_2" x1="3.08724833" x2="11.003376" y1="8.34482765" y2="8.22721481" gradientUnits="userSpaceOnUse">
			<stop stop-color="rgb(79,57,246)" offset="0" stop-opacity="1" />
			<stop stop-color="rgb(149,20,250)" offset="1" stop-opacity="1" />
		</linearGradient>
	</defs>
	<g id="Group 5">
		<rect id="Rectangle 2" width="16.000000" height="16.000000" x="0.000000" y="0.000000" rx="8.000000" opacity="0.200000003" fill="url(#paint_linear_0)" />
		<rect id="Rectangle 3" width="12.000000" height="12.000000" x="2.000000" y="2.000000" rx="6.000000" opacity="0.400000006" fill="url(#paint_linear_1)" />
		<rect id="Rectangle 4" width="6.000000" height="6.000000" x="5.000000" y="5.000000" rx="3.000000" fill="url(#paint_linear_2)" />
	</g>
</svg>

          </span>
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
          <button className="bg-[#7C3AED] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#6D28D9] transition-all text-sm md:text-base">
            Explore Products
          </button>
          

          <button className="flex items-center gap-2 text-purple-600 px-4 py-3 rounded-full font-semibold border border-purple-200 hover:bg-purple-300 transition-all text-sm md:text-base whitespace-nowrap bg-white">
  
  
  <div className="  flex items-center justify-center ">
    <img 
      src={PlayIcon} 
      alt="Play" 
      className="w-full h-full object-contain"
    />
  </div>
  
  Watch Demo
</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center w-full">
        <img 
          src={BannerImg} 
          alt="Digital Workflow Illustration" 
          className="w-full max-w-86 md:max-w-150 object-contain"
        />
      </div>
      
    </section>
  )
}

export default Banner 
