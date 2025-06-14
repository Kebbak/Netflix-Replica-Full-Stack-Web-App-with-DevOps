import React from 'react';

export default function ChangePlan() {
  const plans = [
    { name: 'Basic', price: '$8.99', quality: 'Good', resolution: '480p' },
    { name: 'Standard', price: '$13.99', quality: 'Better', resolution: '1080p' },
    { name: 'Premium', price: '$17.99', quality: 'Best', resolution: '4K+HDR' },
  ];

  const handleSelect = (plan) => {
    alert(`You selected the ${plan} plan.`);
    // Add logic to update the user's plan
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Change Plan</h1>
      <p className="mb-6 text-gray-700">Choose the plan that’s right for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-1">Price: {plan.price}</p>
            <p className="text-gray-600 mb-1">Video Quality: {plan.quality}</p>
            <p className="text-gray-600 mb-4">Resolution: {plan.resolution}</p>
            <button
              onClick={() => handleSelect(plan.name)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
