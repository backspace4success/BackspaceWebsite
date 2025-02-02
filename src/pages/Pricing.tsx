import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the perfect plan for your learning journey
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-2">
                Can I switch plans later?
              </h3>
              <p className="text-black/70">
                Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-black/70">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-2">
                Is there a refund policy?
              </h3>
              <p className="text-black/70">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-black mb-2">
                Do you offer team/enterprise pricing?
              </h3>
              <p className="text-black/70">
                Yes, we offer custom pricing for teams and enterprises. Contact our sales team for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;