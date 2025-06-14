import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Help Center</h1>
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Get Help</h2>
        <p className="mb-1">Find answers to common questions and issues.</p>
        <p className="mb-4">Contact support for further assistance.</p>
        <div className="space-y-2">
          <Link to="/faq" className="text-blue-600 hover:underline block">FAQ</Link>
          <Link to="/contact-support" className="text-blue-600 hover:underline block">Contact support</Link>
          <Link to="/troubleshooting" className="text-blue-600 hover:underline block">Troubleshooting</Link>
        </div>
      </section>
    </div>
  );
}
