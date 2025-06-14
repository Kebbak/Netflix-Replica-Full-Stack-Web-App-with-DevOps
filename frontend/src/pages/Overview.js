// src/pages/Overview.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Footer from '../components/Footer';

export default function Overview() {
  return (
    <>
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-[#141414] p-6 space-y-4 border-r border-gray-800">
          <Link to="/" className="text-red-600 text-xl font-bold block mb-6 hover:underline">
            &lt; Back to Netflix
          </Link>
          <nav className="space-y-3 text-sm">
            <Link to="/overview" className="block text-red-500 font-semibold">Overview</Link>
            <Link to="/membership" className="block hover:text-red-500">Membership</Link>
            <Link to="/security" className="block hover:text-red-500">Security</Link>
            <Link to="/devices" className="block hover:text-red-500">Devices</Link>
            <Link to="/profiles" className="block hover:text-red-500">Profiles</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 pt-24 space-y-10 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Account</h1>

          {/* Membership Details */}
          <section className="bg-[#1e1e1e] p-6 rounded-md space-y-4">
            <h2 className="text-xl font-semibold">Membership Details</h2>
            <p>Member since <strong>January 2023</strong></p>
            <p>Plan: <strong>Standard</strong> — 1080p, ad-free watching</p>
            <p>Next payment: <strong>July 3, 2025</strong></p>
            <p>Payment method: <strong>VISA **** 0000</strong></p>

            <div className="space-y-1 text-red-500">
              <Link to="/change-plan" className="block hover:underline">Change plan</Link>
              <Link to="/manage-payment" className="block hover:underline">Manage payment method</Link>
              <Link to="/redeem" className="block hover:underline">Redeem gift or promo code</Link>
              <Link to="/backup-payment" className="block hover:underline">
                Buy an extra member slot <span className="text-green-500">New</span>
              </Link>
              <Link to="/devices" className="block hover:underline">Manage access and devices</Link>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
