
import React from 'react';

export default function Language() {
  const handleChangeLanguage = () => {
    alert('Redirecting to change language preferences...');
    // Add logic to change language preferences
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Language Preferences</h1>
      <p className="mb-6 text-gray-700">Select your preferred language.</p>

      <button
        onClick={handleChangeLanguage}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Change Language
      </button>
    </div>
  );
}
