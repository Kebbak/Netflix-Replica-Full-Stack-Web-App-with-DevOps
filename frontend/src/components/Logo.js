// src/components/Logo.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`absolute top-8 left-8 z-20 ${className}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="h-8 sm:h-10"
      />
    </Link>
  );
}
