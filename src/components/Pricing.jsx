import React from 'react';

const Pricing = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 bg-blue-50 text-gray-800">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-800">
        Pricing Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[
          {
            name: 'Basic',
            price: 'PKR 2,000',
            features: ['2 Classes/Week', 'Homework Help', 'Email Support'],
          },
          {
            name: 'Standard',
            price: 'PKR 4,000',
            features: ['4 Classes/Week', 'Live Q&A Sessions', 'WhatsApp Support'],
          },
          {
            name: 'Premium',
            price: 'PKR 6,000',
            features: ['Unlimited Classes', '1-on-1 Tutoring', 'Priority Support'],
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="bg-white border border-transparent rounded-2xl shadow-md p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-blue-600"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">{plan.name}</h3>
            <p className="text-3xl sm:text-4xl font-bold mb-3">
              {plan.price}
              <span className="text-sm sm:text-base font-medium">/month</span>
            </p>
            <ul className="mb-6 text-gray-600 space-y-2 text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
