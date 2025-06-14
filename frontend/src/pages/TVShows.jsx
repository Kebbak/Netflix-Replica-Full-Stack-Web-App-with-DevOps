
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const categories = [
  { key: 'popular', title: 'Popular' },
  { key: 'top_rated', title: 'Top Rated' },
  { key: 'airing_today', title: 'Airing Today' },
  { key: 'on_the_air', title: 'On The Air' },
];

export default function TVShows() {
  const [shows, setShows] = useState({});

  useEffect(() => {
    const fetchCategory = async (category) => {
      const res = await fetch(`${BASE_URL}/tv/${category}?api_key=${API_KEY}`);
      const data = await res.json();
      return data.results;
    };

    const fetchAll = async () => {
      const results = {};
      for (const cat of categories) {
        results[cat.key] = await fetchCategory(cat.key);
      }
      setShows(results);
    };

    fetchAll();
  }, []);

  const renderRow = (title, items) => (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {items?.map((show) => (
          <div key={show.id} className="min-w-[150px] group relative">
            <img
              src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
              alt={show.name}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <p className="mt-2 text-sm">{show.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-20 px-6 sm:px-12 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">TV Shows</h1>
      {categories.map((cat) => renderRow(cat.title, shows[cat.key]))}
    </div>
  );
}
