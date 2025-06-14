// src/pages/ChangeEmail.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ChangeEmail() {
  const { user, setUser } = useAuth();
  const [email, setEmail] = useState(user?.email || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, email });
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-[#141414] text-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold">Change Email</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full bg-black text-white"
        placeholder="Enter new email"
      />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Update Email</button>
    </form>
  );
}
