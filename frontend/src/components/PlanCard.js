import React from 'react';

export default function PlanCard({ name, price, features, onSelect }) {
  return (
    <div className="bg-[#141414] text-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-lg text-red-500 font-semibold mb-4">${price}/mo</p>
      <ul className="text-sm space-y-2 mb-4">
        {features.map((feat, idx) => (
          <li key={idx} className="text-gray-300">✔ {feat}</li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
      >
        Choose Plan
      </button>
    </div>
  );
}