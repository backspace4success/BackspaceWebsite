export const pricingPlans: PricingPlan[] = [
  {
    id: 'fast',
    name: '🏎️ 1000 L.E / Month',
    description: 'Includes full access to books, instructors, and team support',
    price: 1000,
    interval: 'month',
    buttonText: 'Subscribe Now',
    popular: true,
    features: [
      { name: '4 Days / Week', included: true },
      { name: 'Books', included: true },
      { name: 'Follow-Up', included: true },
      { name: 'Instructor', included: true },
      { name: 'Team', included: true },
      { name: 'Family Group', included: true }
    ],
    discount: [
      // { months: 3, percentage: 5, price: 2850 },
      { months: 6, percentage: 12, price: 5280 },
      { months: 'cash', percentage: 26, price: 4995 } // Changed to 'cash' for full course
    ]
  },
  {
    id: 'relaxed',
    name: '🦥 625 L.E / Month',
    description: 'A balanced plan with instructor and team access',
    price: 625,
    interval: 'month',
    buttonText: 'Subscribe Now',
    features: [
      { name: '2 Days / Week', included: true },
      { name: 'Books', included: true },
      { name: 'Follow-Up', included: true },
      { name: 'Instructor', included: true },
      { name: 'Team', included: true },
      { name: 'Family Group', included: true }
    ],
    discount: [
      // { months: 3, percentage: 5, price: 1781 },
      { months: 6, percentage: 12, price: 3300 },
      { months: 'cash', percentage: 26, price: 6243 } // Changed to 'cash' for full course
    ]
  },
  {
    id: 'self',
    name: '💁🏻 375 L.E / Month',
    description: 'Books-only plan without additional support',
    price: 375,
    interval: 'month',
    buttonText: 'Subscribe Now',
    features: [
      { name: 'Study as you want', included: true },
      { name: 'Books', included: true },
      { name: 'Follow-Up', included: false },
      { name: 'Instructor', included: false },
      { name: 'Team', included: false },
      { name: 'Family Group', included: false }
    ],
    discount: [
      // { months: 3, percentage: 5, price: 1068 },
      { months: 6, percentage: 12, price: 1980 },
      { months: 'cash', percentage: 26, price: 3746 } // Changed to 'cash' for full course
    ]
  }
];
