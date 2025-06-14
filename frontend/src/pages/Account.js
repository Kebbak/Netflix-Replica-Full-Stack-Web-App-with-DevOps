import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuickLinkCard from '../components/QuickLinkCard';

export default function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'User Surname',
        plan: 'Standard plan',
        memberSince: 'January 2024',
        nextPayment: 'July 3, 2025',
        card: 'VISA •••• 0000',
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p className="text-white">No user data available.</p>;

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="border-b border-gray-700 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Account</h1>
        <p className="text-sm text-gray-400">Membership Details</p>
        <div className="mt-4 space-y-2">
          <span className="inline-block bg-purple-700 text-xs text-white px-2 py-1 rounded">
            Member since {user.memberSince}
          </span>
          <p className="text-white font-semibold">{user.plan}</p>
          <p className="text-sm text-gray-400">Next payment: {user.nextPayment}</p>
          <p className="text-sm text-gray-400">{user.card}</p>
          <Link to="/manage-membership">
            <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Manage membership
            </button>
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section>
        <h2 className="text-lg text-white font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <QuickLinkCard to="/change-plan" label="Change plan" />
          <QuickLinkCard to="/manage-payment" label="Manage payment method" />
          <QuickLinkCard to="/extra-member" label="Buy an extra member slot" tag="New" />
          <QuickLinkCard to="/access-devices" label="Manage access and devices" />
          <QuickLinkCard to="/profile" label="Update password" />
          <QuickLinkCard to="/transfer-profile" label="Transfer a profile" />
          <QuickLinkCard to="/parental-controls" label="Adjust parental controls" />
          <QuickLinkCard to="/profile" label="Edit settings" />
        </div>
      </section>
    </div>
  );
}
