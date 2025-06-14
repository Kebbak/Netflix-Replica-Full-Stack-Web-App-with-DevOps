
import React from 'react';

export default function ManageProfile() {
  const handleManageProfile = () => {
    alert('Redirecting to manage profile...');
    // Add logic to manage profile
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Profile</h1>
      <p className="mb-6 text-gray-700">Edit your profile settings.</p>

      <button
        onClick={handleManageProfile}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Manage Profile
      </button>
    </div>
  );
}
