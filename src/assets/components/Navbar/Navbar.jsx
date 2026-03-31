

import React, { useState } from 'react' 
import CartIcon from '/products/shopping-cart.png'

function Navbar({ cartCount }) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-50 py-4 w-full bg-white border-b border-[#f2f2f2] relative">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#7C3AED]">DigiTools</span>
      </div>

      
      <div className={`${
        isOpen ? "flex" : "hidden"
      } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white flex-col md:flex-row items-center gap-6 md:gap-8 text-[#111827] font-medium p-6 md:p-0 shadow-md md:shadow-none z-50`}>
        <a href="#products" className="hover:text-[#7C3AED] transition-colors w-full text-center md:w-auto">Products</a>
        <a href="#features" className="hover:text-[#7C3AED] transition-colors w-full text-center md:w-auto">Features</a>
        <a href="#pricing" className="hover:text-[#7C3AED] transition-colors w-full text-center md:w-auto">Pricing</a>
        <a href="#testimonials" className="hover:text-[#7C3AED] transition-colors w-full text-center md:w-auto">Testimonials</a>
        <a href="#faq" className="hover:text-[#7C3AED] transition-colors w-full text-center md:w-auto">FAQ</a>
      </div>

      {/* Action Buttons & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        
        
        <div className="relative cursor-pointer">
          <img src={CartIcon} alt="Cart" className="w-6 h-6 object-contain" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>

        
        <button className="hidden md:flex text-[#111827] font-semibold items-center gap-1">
          Login
        </button>

        
        <button className="bg-[#7C3AED] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:bg-[#6D28D9] transition-all text-sm md:text-base">
          Get Started
        </button>

        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav> 
  )
}

export default Navbar