 

import React from 'react'

function StatsSection() {
  return (
    <section 
      
         
      className="w-full px-6 md:px-50 py-10 md:py-15 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0"
      style={{
        background: 'linear-gradient(87.4deg, rgba(79, 57, 246, 1) 0%, rgba(149, 20, 250, 1) 100%)'
      }}
    >
      {/* Active Users */}
      
      <div className="flex flex-col items-center text-white flex-1 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 w-full last:border-none">
        <h2 className="text-[36px] md:text-[48px] font-bold">50K+</h2>
        <p className="text-[14px] md:text-[16px] opacity-80">Active Users</p>
      </div>

      {/* Premium Tools */}
      <div className="flex flex-col items-center text-white flex-1 border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 w-full last:border-none">
        <h2 className="text-[36px] md:text-[48px] font-bold">200+</h2>
        <p className="text-[14px] md:text-[16px] opacity-80">Premium Tools</p>
      </div>

      {/* Rating */}
      <div className="flex flex-col items-center text-white flex-1 w-full">
        <h2 className="text-[36px] md:text-[48px] font-bold">4.9</h2>
        <p className="text-[14px] md:text-[16px] opacity-80">Rating</p>
      </div>
    </section>
  )
}

export default StatsSection