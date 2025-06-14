// src/pages/EditProfile.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState(user || {});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-[#141414] text-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold">Edit Profile</h2>
      <input name="name" value={formData.name || ''} onChange={handleChange} placeholder="Name" className="border p-2 w-full bg-black text-white" />
      <input name="email" value={formData.email || ''} onChange={handleChange} placeholder="Email" className="border p-2 w-full bg-black text-white" />
      <input name="language" value={formData.language || ''} onChange={handleChange} placeholder="Language" className="border p-2 w-full bg-black text-white" />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
