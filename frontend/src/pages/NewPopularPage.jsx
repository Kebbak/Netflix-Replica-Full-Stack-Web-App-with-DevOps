
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const categories = [
  { key: 'trending', title: 'Trending' },
  { key: 'now_playing', title: 'Now Playing' },
];

export default function NewPopularPage() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchCategory = async (category) => {
      const res = await fetch(`${BASE_URL}/${category === 'trending' ? 'trending/all/week' : 'movie/now_playing'}?api_key=${API_KEY}`);
      const data = await res.json();
      return data.results;
    };

    const fetchAll = async () => {
      const results = {};
      for (const cat of categories) {
        results[cat.key] = await fetchCategory(cat.key);
      }
      setItems(results);
    };

    fetchAll();
  }, []);

  const renderRow = (title, items) => (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {items?.map((item) => (
          <div key={item.id} className="min-w-[150px] group relative">
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title || item.name}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <p className="mt-2 text-sm">{item.title || item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-20 px-6 sm:px-12 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">New & Popular</h1>
      {categories.map((cat) => renderRow(cat.title, items[cat.key]))}
    </div>
  );
}
