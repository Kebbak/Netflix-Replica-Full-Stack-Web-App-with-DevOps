// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-10 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto space-y-6">
        <p className="text-base text-white">Questions? <a href="/help" className="underline hover:text-white">Contact Us</a></p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Statement</a>
          <a href="#" className="hover:underline">Audio and Subtitles</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Ad Choices</a>
        </div>

        <p className="text-xs mt-6">Service Code</p>
      </div>
    </footer>
  );
}