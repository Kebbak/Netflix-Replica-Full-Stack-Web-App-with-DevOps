
import React from 'react';

export default function Subtitles() {
  const handleChangeSubtitleAppearance = () => {
    alert('Redirecting to change subtitle appearance...');
    // Add logic to change subtitle appearance
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Subtitle Appearance</h1>
      <p className="mb-6 text-gray-700">Customize the appearance of subtitles.</p>

      <button
        onClick={handleChangeSubtitleAppearance}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Change Subtitle Appearance
      </button>
    </div>
  );
}
