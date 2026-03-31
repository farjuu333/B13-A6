import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '0',
      buttonText: 'Get Started Free',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'Best for professionals',
      price: '29',
      buttonText: 'Start Pro Trial',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: '99',
      buttonText: 'Contact Sales',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-20 text-center font-sans">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex-1 p-6 rounded-2xl border transition-all duration-300 ${
              plan.isPopular 
                ? 'bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white border-transparent shadow-xl scale-105 z-10' 
                : 'bg-white text-gray-900 border-gray-100 shadow-sm'
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFEB3B] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}

            <div className="text-left">
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.isPopular ? 'text-purple-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={`ml-1 text-sm ${plan.isPopular ? 'text-purple-100' : 'text-gray-500'}`}>/Month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 min-h-[220px]">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                  plan.isPopular
                    ? 'bg-white text-[#7B39F0] hover:bg-gray-100'
                    : 'bg-[#7B39F0] text-white hover:bg-[#632dd4]'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;