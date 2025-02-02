import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-black/70">Choose the perfect plan for your learning journey</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-lg ${!isAnnual ? 'text-black' : 'text-black/60'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-lg ${isAnnual ? 'text-black' : 'text-black/60'}`}>
            Annually <span className="text-primary text-sm">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-xl shadow-sm overflow-hidden border-2 ${
                plan.popular ? 'border-primary' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-black/70 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">
                    ${isAnnual ? Math.floor(plan.price * 0.8 * 12) : plan.price}
                  </span>
                  <span className="text-black/60">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                <button
                  className={`w-full py-3 rounded-md transition ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
              <div className="border-t border-gray-100 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-accent mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={feature.included ? 'text-black' : 'text-black/60'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;