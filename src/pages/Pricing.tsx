import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('month');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Find the perfect subscription for your learning journey.
          </p>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center items-center space-x-4 mb-12 mt-8">
        {['month', 6, 'cash'].map((cycle) => (
          <button
            key={cycle}
            onClick={() => setBillingCycle(cycle)}
            className={`px-4 py-2 rounded-full transition text-lg ${
              billingCycle === cycle ? 'bg-primary text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {cycle === 'month'
              ? 'Monthly'
              : cycle === 'cash'
              ? 'Full Course (Cash)'
              : `${cycle} Months`}
            {cycle !== 'month' && cycle !== 'cash' && (
              <span className="text-sm text-primary ml-1">
                (Save {pricingPlans[0].discount.find((d) => d.months === cycle)?.percentage}%)
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => {
            // Find a discount matching the current billing cycle.
            const discount = plan.discount.find((d) => d.months === billingCycle);
            // If a discount exists (for 3, 6, or cash), use it; otherwise, use the base price.
            const finalPrice = discount ? discount.price : plan.price;
            const pricePer =
              billingCycle === 'month'
                ? 'month'
                : billingCycle === 'cash'
                ? 'Full Course'
                : `${billingCycle} months`;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-xl shadow-sm overflow-hidden border-2 ${
                  plan.popular ? 'border-primary' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm">
                    Best Value
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-black/70 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">{finalPrice} L.E</span>
                    <span className="text-black/60"> / {pricePer}</span>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
