import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ManageMembership() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 text-white">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">Membership</h1>

      {/* Plan Details */}
      <section className="space-y-2">
        <h2 className="text-lg text-gray-400">Plan Details</h2>
        <p className="text-lg font-semibold">{user?.plan || 'Standard plan'}</p>
        <p className="text-sm text-gray-400">1080p video resolution, ad-free watching and more.</p>

        <div className="space-y-2 mt-2 text-red-500">
          <Link to="/change-plan" className="hover:underline block">Change plan</Link>
          <Link to="/extra-member" className="hover:underline block">
            Buy an extra member slot
            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">New</span>
          </Link>
        </div>
      </section>

      {/* Payment Info */}
      <section className="space-y-2">
        <h2 className="text-lg text-gray-400">Payment Info</h2>
        <p>Next payment: <strong>{user?.nextPayment}</strong></p>
        <p className="text-sm text-gray-400">{user?.card}</p>

        <div className="space-y-2 text-red-500 mt-2">
          <Link to="/manage-payment" className="hover:underline block">Manage payment method</Link>
          <Link to="/redeem" className="hover:underline block">Redeem gift or promo code</Link>
          <Link to="/payment-history" className="hover:underline block">View payment history</Link>
        </div>
      </section>

      {/* Cancel Membership */}
      <div className="pt-4">
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">
          Cancel membership
        </button>
      </div>
    </div>
  );
}