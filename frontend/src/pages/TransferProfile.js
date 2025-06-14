import React from 'react';
import { Link } from 'react-router-dom';

export default function TransferProfile() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Transfer Profile</h1>
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Transfer Your Profile</h2>
        <p className="mb-1">Move your profile to a new account.</p>
        <p className="mb-4">Keep your preferences and watch history.</p>
        <div className="space-y-2">
          <Link to="/start-transfer" className="text-blue-600 hover:underline block">Start transfer</Link>
          <Link to="/transfer-status" className="text-blue-600 hover:underline block">Transfer status</Link>
          <Link to="/transfer-help" className="text-blue-600 hover:underline block">Transfer help</Link>
        </div>
      </section>
    </div>
  );
}
