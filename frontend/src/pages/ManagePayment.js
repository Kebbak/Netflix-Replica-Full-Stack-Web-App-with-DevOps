
import React from 'react';

export default function ManagePayment() {
  const handleAddPaymentMethod = () => {
    alert('Redirecting to add payment method...');
    // Add logic to manage payment method
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Payment Method</h1>
      <p className="mb-6 text-gray-700">Add or update your payment method.</p>

      <button
        onClick={handleAddPaymentMethod}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Add Payment Method
      </button>
    </div>
  );
}
