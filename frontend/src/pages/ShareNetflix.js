// src/pages/ShareNetflix.js
import React from 'react';

export default function ShareNetflix() {
  return (
    <div className="text-white max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Share Netflix</h1>
      <p className="text-gray-300">
        Netflix allows you to share your account with someone who doesn't live with you through a paid sharing option.
      </p>
      <p className="text-sm text-gray-400">You can manage shared members and revoke access at any time.</p>
      <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold">
        Learn How to Share
      </button>
    </div>
  );
}