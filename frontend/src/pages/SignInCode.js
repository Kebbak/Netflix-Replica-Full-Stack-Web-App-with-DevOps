import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

export default function SignInCode() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedCode = localStorage.getItem('signInCode');
    const email = localStorage.getItem('signInEmail');

    if (code === storedCode && email) {
      localStorage.setItem('user', JSON.stringify({ email }));
      localStorage.removeItem('activeProfile');
      window.dispatchEvent(new Event('authChanged'));
      navigate('/profiles');
    } else {
      alert('Invalid code');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/images/netflix-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0 pointer-events-none"></div>
      <form
        onSubmit={handleSubmit}
        className="relative bg-black bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-sm z-10"
      >
        <Logo />
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Enter Sign-In Code</h2>
        <input
          type="text"
          placeholder="Enter your code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
