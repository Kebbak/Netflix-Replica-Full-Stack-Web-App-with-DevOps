// src/pages/LanguagePreferences.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LanguagePreferences() {
  const { user, setUser } = useAuth();
  const [language, setLanguage] = useState(user?.language || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, language });
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-[#141414] text-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold">Language Preferences</h2>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 w-full bg-black text-white"
      >
        <option value="">Select a language</option>
        <option value="English">English</option>
        <option value="Polish">Polish</option>
        <option value="Spanish">Spanish</option>
        <option value="German">German</option>
      </select>
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Save Language</button>
    </form>
  );
}
