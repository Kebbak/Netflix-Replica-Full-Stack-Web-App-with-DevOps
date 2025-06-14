import React from 'react';

export default function MovieList({ title }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {/* Add your movie list rendering here */}
    </div>
  );
}