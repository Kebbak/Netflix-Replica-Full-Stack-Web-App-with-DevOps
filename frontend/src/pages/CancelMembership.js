// src/pages/CancelMembership.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CancelMembership() {
  const navigate = useNavigate();

  const handleCancel = () => {
    // Placeholder logic
    alert('Your membership has been cancelled.');
    navigate('/');
  };

  return (
    <div className="text-white max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Cancel Membership</h1>
      <p className="text-gray-300">We're sorry to see you go. Canceling your membership will remove access to your Netflix account at the end of your billing period.</p>
      <button
        onClick={handleCancel}
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold"
      >
        Confirm Cancellation
      </button>
    </div>
  );
}