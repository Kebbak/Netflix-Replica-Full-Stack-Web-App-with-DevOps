// src/pages/Membership.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#141414] p-6 space-y-4 border-r border-gray-800">
        <Link to="/" className="text-red-600 text-xl font-bold block mb-6 hover:underline">
          &lt; Back to Netflix
        </Link>
        <nav className="space-y-3 text-sm">
          <Link to="/overview" className="block hover:text-red-500">Overview</Link>
          <Link to="/membership" className="block text-red-500 font-semibold">Membership</Link>
          <Link to="/security" className="block hover:text-red-500">Security</Link>
          <Link to="/devices" className="block hover:text-red-500">Devices</Link>
          <Link to="/profiles" className="block hover:text-red-500">Profiles</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 pt-24 space-y-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Membership</h1>

        {/* Membership Details */}
        <section className="bg-[#1e1e1e] p-6 rounded-md space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Membership Details</h2>
            <p className="text-sm text-gray-400">Member since January 2024</p>
            <p className="text-lg">Standard plan</p>
            <p className="text-sm text-gray-400">Next payment: July 3, 2025</p>
            <p className="text-sm text-gray-400">VISA •••• •••• •••• 0000</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Manage membership
          </button>
        </section>

        {/* Quick Links */}
        <section className="bg-[#1e1e1e] p-6 rounded-md space-y-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <div className="space-y-1 text-red-500">
            <Link to="/change-plan" className="hover:underline block">Change plan</Link>
            <Link to="/buy-extra-members" className="hover:underline block">
              Buy an extra member slot <span className="text-green-500">New</span>
            </Link>
            <Link to="/update-password" className="hover:underline block">Update password</Link>
            <Link to="/parental-controls" className="hover:underline block">Adjust parental controls</Link>
            <Link to="/manage-payment-method" className="hover:underline block">Manage payment method</Link>
            <Link to="/access-devices" className="hover:underline block">Manage access and devices</Link>
            <Link to="/transfer-profile" className="hover:underline block">Transfer a profile</Link>
            <Link to="/edit-settings" className="hover:underline block">Edit settings</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
