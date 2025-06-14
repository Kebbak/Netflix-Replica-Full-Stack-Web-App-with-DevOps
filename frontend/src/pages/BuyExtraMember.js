// src/pages/BuyExtraMember.js
import React from 'react';

export default function BuyExtraMember() {
  return (
    <div className="text-white max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Buy an Extra Member Slot</h1>
      <p className="text-gray-300">
        Share your Netflix with someone outside your household by adding an extra member for an additional monthly fee.
      </p>
      <p className="text-sm text-gray-400">Price: $7.99/month per extra member</p>
      <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold">
        Add Extra Member
      </button>
    </div>
  );
}