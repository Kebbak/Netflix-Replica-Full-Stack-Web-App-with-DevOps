
import React, { useEffect, useState } from 'react';

const mockGames = [
  {
    id: 1,
    title: 'The Witcher 3: Wild Hunt',
    image: 'https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    description: 'An open-world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.',
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    image: 'https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    description: 'An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.',
  },
  {
    id: 3,
    title: 'Red Dead Redemption 2',
    image: 'https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    description: 'An epic tale of life in America at the dawn of the modern age.',
  },
];

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setGames(mockGames);
  }, []);

  return (
    <div className="pt-20 px-6 sm:px-12 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Games</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {games.map((game) => (
          <div key={game.id} className="group relative cursor-pointer">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
              <h2 className="text-sm font-semibold">{game.title}</h2>
              <p className="text-xs text-gray-400">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
