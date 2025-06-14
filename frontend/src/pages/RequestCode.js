// src/pages/RequestCode.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo'; 

export default function RequestCode() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRequest = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulate sending code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('signInEmail', email);
    localStorage.setItem('signInCode', code);
    alert(`Code sent to ${email}: ${code}`); // Replace with real email logic

    navigate('/signin-code');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <form onSubmit={handleRequest} className="bg-gray-900 p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Email</h2>
        <Logo />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
        >
          Send Sign-In Code
        </button>
      </form>
    </div>
  );
}
