export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for getting started with coding',
    price: 29,
    interval: 'month',
    buttonText: 'Start Basic',
    features: [
      { name: 'Access to basic courses', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Course completion certificates', included: true },
      { name: 'Email support', included: true },
      { name: 'Project reviews', included: false },
      { name: 'Mentor sessions', included: false },
      { name: 'Career guidance', included: false },
      { name: 'Job placement assistance', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Best for serious learners',
    price: 79,
    interval: 'month',
    popular: true,
    buttonText: 'Start Pro',
    features: [
      { name: 'Access to all courses', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Course completion certificates', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Project reviews', included: true },
      { name: 'Monthly mentor sessions', included: true },
      { name: 'Career guidance', included: false },
      { name: 'Job placement assistance', included: false }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete career transformation',
    price: 149,
    interval: 'month',
    buttonText: 'Contact Sales',
    features: [
      { name: 'Access to all courses', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Course completion certificates', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Unlimited project reviews', included: true },
      { name: 'Weekly mentor sessions', included: true },
      { name: 'Career guidance', included: true },
      { name: 'Job placement assistance', included: true }
    ]
  }
];