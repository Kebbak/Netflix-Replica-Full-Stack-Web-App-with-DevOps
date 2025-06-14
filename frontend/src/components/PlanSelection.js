import React from 'react';

const plans = [
  { id: 'basic', name: 'Basic', price: 33 },
  { id: 'standard', name: 'Standard', price: 54 },
  { id: 'premium', name: 'Premium', price: 75 },
];

export default function PlanSelection({ selectedPlan, setSelectedPlan }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          onClick={() => setSelectedPlan(plan)}
          className={`cursor-pointer border rounded-lg p-6 text-center ${
            selectedPlan?.id === plan.id ? 'border-red-600 bg-[#1e1e1e]' : 'border-gray-700'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-300">${(plan.price / 100).toFixed(2)}/month</p>
        </div>
      ))}
    </div>
  );
}