// src/pages/Profile.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#update-password') {
      document.getElementById('password-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#settings') {
      document.getElementById('settings-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="space-y-10 text-white">
      {/* Page Header */}
      <h1 className="text-3xl font-bold">{user?.name || "User"}'s Account</h1>

      {/* Settings Section */}
      <section id="settings-section" className="space-y-4">
        <h2 className="text-xl text-gray-400 font-semibold">Profile Settings</h2>
        <p>Name: <strong>{user?.name || 'John Doe'}</strong></p>
        <p>Email: <strong>{user?.email || 'john@example.com'}</strong></p>
        <p>Language: <strong>{user?.language || 'English'}</strong></p>

        <div className="mt-4 space-y-2 text-red-500">
          <Link to="/edit-profile" className="hover:underline block">Edit profile</Link>
          <Link to="/change-email" className="hover:underline block">Change email</Link>
          <Link to="/language-preferences" className="hover:underline block">Language preferences</Link>
        </div>
      </section>

      {/* Password Section */}
      <section id="password-section" className="space-y-4">
        <h2 className="text-xl text-gray-400 font-semibold">Password & Security</h2>
        <p>Last changed: <strong>January 10, 2025</strong></p>
        <Link to="/change-password" className="text-red-500 hover:underline">Update password</Link>
      </section>
    </div>
  );
}