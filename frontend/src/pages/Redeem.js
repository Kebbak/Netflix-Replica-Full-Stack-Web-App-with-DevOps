
import React from 'react';

export default function Redeem() {
  const handleRedeemCode = () => {
    alert('Redirecting to redeem code...');
    // Add logic to redeem gift card or promo code
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Redeem Gift Card or Promo Code</h1>
      <p className="mb-6 text-gray-700">Enter your gift card or promo code to redeem.</p>

      <button
        onClick={handleRedeemCode}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Redeem Code
      </button>
    </div>
  );
}
