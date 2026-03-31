

import React from 'react';
import UserIcon from '../../user.png';
import PackageIcon from '../../package.png';
import RocketIcon from '../../rocket.png';

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      img: UserIcon,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      img: PackageIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      img: RocketIcon,
    },
  ];

  return (
    
    <section className="w-full bg-[#F9FAFC] px-6 md:px-50 py-15 md:py-30 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mb-10">
        
        <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-2">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
      </div>

      {/* Steps Cards */}
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-7.5 md:gap-10">
        {steps.map((step) => (
          <div 
            key={step.id} 
            
            className="relative bg-white p-10 rounded-3xl flex flex-col items-center text-center w-full md:flex-1 shadow-sm border border-gray-50 transition-transform hover:scale-105"
          >
            
            {/* Step Number Badge */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center text-xs font-bold">
              {step.id}
            </div>

            {/* Icon Container */}
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <img src={step.img} alt={step.title} className="w-10 h-10 object-contain" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;