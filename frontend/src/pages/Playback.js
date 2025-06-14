
import React from 'react';

export default function Playback() {
  const handleChangePlaybackSettings = () => {
    alert('Redirecting to change playback settings...');
    // Add logic to change playback settings
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Playback Settings</h1>
      <p className="mb-6 text-gray-700">Adjust your playback settings.</p>

      <button
        onClick={handleChangePlaybackSettings}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Change Playback Settings
      </button>
    </div>
  );
}
