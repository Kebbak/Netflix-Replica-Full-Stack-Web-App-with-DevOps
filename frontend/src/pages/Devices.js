// src/pages/Devices.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Devices() {
  return (
    <div className="bg-black text-white p-8 min-h-screen space-y-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold">Devices</h1>

      {/* Account Access Section */}
      <Link
        to="/manage-devices"
        className="block border-b border-gray-700 pb-6 hover:bg-[#1a1a1a] p-4 rounded transition"
      >
        <h2 className="text-xl font-semibold text-white">Account Access</h2>
        <p className="text-gray-400">Access and devices</p>
        <span className="text-red-500 hover:underline block mt-1">
          Manage signed-in devices →
        </span>
      </Link>

      {/* Mobile Downloads Section */}
      <Link
        to="/mobile-downloads"
        className="block hover:bg-[#1a1a1a] p-4 rounded transition"
      >
        <h2 className="text-xl font-semibold text-white">Mobile Downloads</h2>
        <p className="text-gray-400">Mobile download devices</p>
        <p className="text-sm text-gray-500 mt-1">Using 0 of 2 download devices</p>
      </Link>
    </div>
  );
}