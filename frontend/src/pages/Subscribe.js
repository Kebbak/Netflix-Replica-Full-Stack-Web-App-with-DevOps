import React from 'react';
import PlanCard from '../components/PlanCard';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '8.99',
    features: ['Good video quality', 'Watch on 1 screen', 'Unlimited movies and shows'],
  },
  {
    name: 'Standard',
    price: '13.99',
    features: ['Better video quality', 'Watch on 2 screens', 'HD available'],
  },
  {
    name: 'Premium',
    price: '17.99',
    features: ['Best video quality', 'Watch on 4 screens', 'Ultra HD available'],
  },
];

export default function Subscribe() {
  const navigate = useNavigate();

  const handlePlanSelect = async (plan) => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      // Save subscription intent
      await fetch('/api/subscription-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan }),
      });

      // Create Stripe checkout session
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan }),
      });

      const { sessionUrl } = await res.json();

      if (sessionUrl) {
        window.location.href = sessionUrl;
      } else {
        console.error('No session URL returned from backend.');
      }
    } catch (error) {
      console.error('Error during subscription process:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      {/* <div className="flex items-center px-4 py-6">
        <img src="/netflix-logo.svg" alt="Netflix" className="h-10 sm:h-12" />
      </div> */}

      {/* Plan Section */}
      <div className="text-center mt-6 mb-10 px-4">
        <h1 className="text-3xl font-bold mb-2">Choose the plan that's right for you</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Enjoy all of Netflix’s content with one of our plans. Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 pb-16">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            onSelect={() => handlePlanSelect(plan.name)}
          />
        ))}
      </div>
    </div>
  );
}
