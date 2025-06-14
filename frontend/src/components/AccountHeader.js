// src/components/AccountHeader.js
import React from 'react';

export default function AccountHeader({ name = "John Doe" }) {
  return (
    <h1 className="text-3xl font-bold text-white">{name}'s Account</h1>
  );
}
