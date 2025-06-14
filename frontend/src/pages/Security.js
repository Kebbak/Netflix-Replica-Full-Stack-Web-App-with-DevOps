import React from 'react';
import { Link } from 'react-router-dom';

export default function Security() {
  return (
    <main className="flex-1 p-8 pt-24 space-y-10 max-w-4xl mx-auto">
      {/* Page Header */}
      <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Security</h1>

      {/* Account Details Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Account Details</h2>
        
        {/* Password */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Password</p>
          </div>
          <Link to="/update-password" className="text-red-500 hover:underline">Change</Link>
        </div>

        {/* Email */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-400">kebba91@outlook.com - <span className="text-yellow-400">Needs verification</span></p>
          </div>
          <Link to="/change-email" className="text-red-500 hover:underline">Update</Link>
        </div>

        {/* Phone */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Mobile Phone</p>
            <p className="text-sm text-gray-400">No phone number added</p>
          </div>
          <Link to="/add-phone" className="text-red-500 hover:underline">Add</Link>
        </div>
      </section>

      {/* Access and Privacy Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Access and Privacy</h2>

        {/* Manage Devices */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Access and Devices</p>
            <p className="text-sm text-gray-400">Manage signed-in devices</p>
          </div>
          <Link to="/access-devices" className="text-red-500 hover:underline">Manage</Link>
        </div>

        {/* Profile Transfer */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Profile Transfer</p>
            <p className="text-sm text-gray-400">On <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">New</span></p>
          </div>
          <Link to="/transfer-profile" className="text-red-500 hover:underline">View</Link>
        </div>

        {/* Personal Info Access */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Personal Info Access</p>
            <p className="text-sm text-gray-400">Request a copy of your personal info</p>
          </div>
          <Link to="/request-info" className="text-red-500 hover:underline">Request</Link>
        </div>

        {/* Feature Testing */}
        <div className="flex justify-between items-center border-b border-gray-700 py-4 hover:bg-[#1c1c1c] px-4 rounded cursor-pointer">
          <div>
            <p className="font-semibold">Feature Testing</p>
            <p className="text-sm text-gray-400">On</p>
          </div>
          <Link to="/feature-testing" className="text-red-500 hover:underline">Learn more</Link>
        </div>
      </section>

      {/* Delete Account */}
      <section className="mt-8">
        <div className="flex justify-between items-center bg-[#1c1c1c] px-4 py-4 rounded hover:bg-[#2a2a2a]">
          <p className="font-semibold text-red-500">Delete Account</p>
          <Link to="/delete-account" className="text-red-500 hover:underline">Proceed</Link>
        </div>
      </section>
    </main>
  );
}
