
import React from 'react';

export default function BackupPayment() {
  const handleAddBackupPayment = () => {
    alert('Redirecting to add backup payment method...');
    // Add logic to add backup payment method
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Add Backup Payment Method</h1>
      <p className="mb-6 text-gray-700">Add a backup payment method for uninterrupted service.</p>

      <button
        onClick={handleAddBackupPayment}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Add Backup Payment Method
      </button>
    </div>
  );
}
