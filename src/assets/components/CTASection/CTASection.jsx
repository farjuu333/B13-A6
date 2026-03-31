import React from 'react';

const CTASection = () => {
  return (
    <section 
      className="w-full py-[120px] px-4 md:px-[200px] text-center text-white"
      style={{
        background: 'linear-gradient(87.4deg, rgba(79, 57, 246, 1) 0%, rgba(149, 20, 250, 1) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle - Gap Figma onujayi thik kora hoyeche */}
        <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-10 opacity-90">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>

        {/* Buttons Container - Gap 40px (gap-10) deya hoyeche */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-8">
          <button className="bg-white text-[#7B39F0] px-10 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
            Explore Products
          </button>
          
          <button className="border-2 border-white/40 bg-transparent text-white px-10 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-purple-200/80 font-medium">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;